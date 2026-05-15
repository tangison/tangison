"use client";

import React, { useState, useRef, useEffect, useCallback, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowUp, Mic, MicOff, Volume2 } from "lucide-react";

/* ─── Types ─── */
interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: number;
}

type VoiceState = "idle" | "listening" | "processing" | "speaking";

/* ─── Constants ─── */
const SESSION_ID = `tng-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const SUGGESTED_PROMPTS = [
  "What does Tangison build?",
  "How does data sovereignty work?",
  "What industries do you serve?",
  "How do I engage Tangison?",
];

const GREETING_MESSAGE: Message = {
  id: "greeting",
  role: "bot",
  content: "Tangison AI operational. What are you building?",
  timestamp: Date.now(),
};

/* ─── Helpers ─── */
function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/* ─── Waveform Visualizer ─── */
function WaveformVisualizer({ state, bars = 5 }: { state: VoiceState; bars?: number }) {
  if (state === "idle") return null;

  const heights =
    state === "listening"
      ? [4, 16, 8, 20, 4]
      : state === "processing"
        ? [8, 12, 8, 12, 8]
        : [6, 18, 10, 14, 6];

  const duration =
    state === "listening" ? 0.8 : state === "processing" ? 1.2 : 0.6;

  return (
    <div className="flex items-center justify-center gap-[3px] h-5">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[2px] bg-rust-signal"
          animate={{
            height: heights[i % heights.length],
          }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Custom Tangison Mark Icon ─── */
function TangisonMark({ size = 20, color = "#F6F4EF" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size * 0.6}
      height={size}
      viewBox="0 0 24 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="12" y1="0" x2="12" y2="40" stroke={color} strokeWidth="3" strokeLinecap="square" />
      <line x1="4" y1="14" x2="20" y2="14" stroke={color} strokeWidth="3" strokeLinecap="square" />
      <line x1="7" y1="6" x2="12" y2="0" stroke={color} strokeWidth="3" strokeLinecap="square" />
      <line x1="17" y1="6" x2="12" y2="0" stroke={color} strokeWidth="3" strokeLinecap="square" />
      <rect x="8.5" y="24" width="7" height="7" fill={color} />
    </svg>
  );
}

/* ─── Main Widget Component ─── */
export function TangisonAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showPrompts, setShowPrompts] = useState(true);
  const [notification, setNotification] = useState(false);
  const notificationDismissedRef = useRef(false);

  // Voice state
  const [voiceState, setVoiceState] = useState<VoiceState>("idle");
  const [voiceMode, setVoiceMode] = useState(false);
  const [transcript, setTranscript] = useState("");

  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Mounted state via useSyncExternalStore (avoids setState in effect)
  const mounted = useSyncExternalStore(
    useCallback((onStoreChange) => {
      onStoreChange();
      return () => {};
    }, []),
    () => true,
    () => false
  );

  // Voice support detection (stable, computed once on mount)
  const voiceSupported = useSyncExternalStore(
    useCallback((onStoreChange) => {
      onStoreChange();
      return () => {};
    }, []),
    () => typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window),
    () => false
  );

  // Init speech synth ref on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  // Show notification after 3s (only if not dismissed and panel not open)
  useEffect(() => {
    if (isOpen || notificationDismissedRef.current) return;
    const timer = setTimeout(() => setNotification(true), 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Focus input when panel opens; dismiss notification
  useEffect(() => {
    if (isOpen) {
      notificationDismissedRef.current = true;
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [isOpen]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      synthRef.current?.cancel();
    };
  }, []);

  /* ─── Browser-native TTS ─── */
  const speakNative = useCallback((text: string) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.88;
    utterance.pitch = 0.9;
    utterance.volume = 1;

    const voices = synthRef.current.getVoices();
    const preferred = voices.find(
      (v) =>
        v.name.includes("Google UK") ||
        v.name.includes("Daniel") ||
        v.name.includes("Alex")
    );
    if (preferred) utterance.voice = preferred;

    utterance.onstart = () => setVoiceState("speaking");
    utterance.onend = () => setVoiceState("idle");
    utterance.onerror = () => setVoiceState("idle");

    synthRef.current.speak(utterance);
  }, []);

  /* ─── Backend TTS (high-quality fallback) ─── */
  const speakBackend = useCallback(async (text: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    setVoiceState("speaking");

    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, speed: 0.92 }),
      });

      if (!res.ok) throw new Error("TTS failed");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;

      audio.onended = () => {
        setVoiceState("idle");
        URL.revokeObjectURL(url);
      };
      audio.onerror = () => {
        setVoiceState("idle");
        URL.revokeObjectURL(url);
      };

      await audio.play();
    } catch {
      setVoiceState("idle");
    }
  }, []);

  /* ─── Speak (chooses native or backend) ─── */
  const speak = useCallback(
    (text: string) => {
      // Strip markdown for voice
      const clean = text
        .replace(/#{1,6}\s/g, "")
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .replace(/\*(.*?)\*/g, "$1")
        .replace(/`(.*?)`/g, "$1")
        .replace(/\[(.*?)\]\(.*?\)/g, "$1")
        .trim();

      // Truncate for voice (max ~120 words)
      const words = clean.split(/\s+/);
      const truncated = words.length > 120 ? words.slice(0, 120).join(" ") + "..." : clean;

      // Prefer native TTS for instant playback; fallback to backend
      if (synthRef.current && synthRef.current.getVoices().length > 0) {
        speakNative(truncated);
      } else {
        speakBackend(truncated);
      }
    },
    [speakNative, speakBackend]
  );

  const stopSpeaking = useCallback(() => {
    synthRef.current?.cancel();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setVoiceState("idle");
  }, []);

  /* ─── Send Message ─── */
  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;

      const userMsg: Message = {
        id: uid(),
        role: "user",
        content: text.trim(),
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setTranscript("");
      setIsLoading(true);
      setIsTyping(true);
      setShowPrompts(false);
      stopSpeaking();

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId: SESSION_ID, message: text.trim() }),
        });

        if (!res.ok) throw new Error("Failed to get response");

        const data = await res.json();
        const botMsg: Message = {
          id: uid(),
          role: "bot",
          content: data.response,
          timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, botMsg]);

        // Auto-speak in voice mode
        if (voiceMode) speak(data.response);
      } catch {
        const errMsg: Message = {
          id: uid(),
          role: "bot",
          content: "Signal disrupted. Check connection and retry.",
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, errMsg]);
      } finally {
        setIsLoading(false);
        setIsTyping(false);
      }
    },
    [isLoading, voiceMode, speak, stopSpeaking]
  );

  /* ─── Browser-native STT (real-time with interim results) ─── */
  const startListening = useCallback(() => {
    if (!voiceSupported) return;

    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SR();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => setVoiceState("listening");
    recognition.onresult = (e: any) => {
      const t = Array.from(e.results)
        .map((r: any) => r[0].transcript)
        .join("");
      setTranscript(t);
      if (e.results[e.results.length - 1].isFinal) {
        setVoiceState("idle");
        sendMessage(t);
      }
    };
    recognition.onerror = () => setVoiceState("idle");
    recognition.onend = () => setVoiceState("idle");

    recognitionRef.current = recognition;
    recognition.start();
    stopSpeaking();
  }, [voiceSupported, sendMessage, stopSpeaking]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setVoiceState("idle");
  }, []);

  /* ─── Handle Submit ─── */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  /* ─── Handle Prompt Click ─── */
  const handlePromptClick = (prompt: string) => {
    sendMessage(prompt);
  };

  /* ─── Handle Key Down ─── */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  /* ─── Toggle Voice Mode ─── */
  const toggleVoiceMode = () => {
    if (voiceMode) {
      stopSpeaking();
      stopListening();
    }
    setVoiceMode((v) => !v);
  };

  /* ─── Close Panel ─── */
  const closePanel = () => {
    setIsOpen(false);
    stopSpeaking();
    stopListening();
  };

  // Derive notification visibility (clear when panel opens)
  const showNotification = notification && !isOpen;

  if (!mounted) return null;

  return (
    <>
      {/* ─── Trigger Button ─── */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-[52px] h-[52px] flex items-center justify-center transition-all duration-300 group"
        style={{
          background: isOpen ? "#0A0B0C" : "#111315",
          border: isOpen
            ? "1px solid rgba(246,244,239,0.2)"
            : "1px solid rgba(246,244,239,0.12)",
        }}
        aria-label={isOpen ? "Close Tangison AI" : "Open Tangison AI"}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5 text-fog-gray" />
            </motion.div>
          ) : (
            <motion.div
              key="logo"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Image
                src="/images/logo-mark.png"
                alt="Tangison AI"
                width={24}
                height={24}
                className="w-6 h-6 object-contain mix-blend-screen opacity-80 group-hover:opacity-100 transition-opacity"
              />
              {/* Pulse ring */}
              <span className="absolute inset-0 border border-rust-signal/30 animate-[signal-ring-expand_2s_cubic-bezier(0.16,1,0.3,1)_infinite]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute right-full mr-3 whitespace-nowrap font-jetbrains text-[10px] text-fog-gray/40 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Tangison AI
          </span>
        )}

        {/* Notification dot */}
        {showNotification && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-[10px] h-[10px] bg-rust-signal border-2 border-terminal-black"
          />
        )}
      </motion.button>

      {/* ─── Notification Bubble ─── */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-[88px] right-6 z-[9998] cursor-pointer max-w-[220px] flex items-center gap-2 px-3.5 py-2.5"
            style={{
              background: "#111315",
              border: "1px solid rgba(246,244,239,0.1)",
            }}
          >
            <div className="w-1.5 h-1.5 bg-rust-signal shrink-0" />
            <span className="font-jetbrains text-[11px] text-fog-gray leading-snug">
              Tangison AI is operational
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Chat Panel ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-[84px] right-6 z-[9998] flex flex-col shadow-2xl shadow-black/50 max-sm:fixed max-sm:inset-0 max-sm:bottom-0 max-sm:right-0"
            style={{
              width: "380px",
              height: "560px",
              background: "#111315",
              border: "1px solid rgba(246,244,239,0.08)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Tangison AI Chat"
          >
            {/* ─── Header ─── */}
            <div
              className="flex items-center gap-3 px-4 py-3.5 shrink-0"
              style={{
                background: "#0A0B0C",
                borderBottom: "1px solid rgba(246,244,239,0.06)",
              }}
            >
              <TangisonMark size={28} color="#F6F4EF" />

              <div className="flex-1">
                <div className="font-jetbrains text-[11px] tracking-[0.14em] text-skeleton-bone font-medium">
                  TANGISON AI
                </div>
                <div className="font-jetbrains text-[9px] text-fog-gray/50 tracking-[0.1em] mt-0.5">
                  Sovereign Intelligence
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                {/* Status */}
                <div className="flex items-center gap-1.5">
                  <div className="relative w-[7px] h-[7px]">
                    <div className="w-[7px] h-[7px] bg-rust-signal absolute" />
                    <div className="absolute inset-0 w-[7px] h-[7px] bg-rust-signal animate-[pulse-ring_2s_ease-out_infinite]" />
                  </div>
                  <span className="font-jetbrains text-[9px] text-rust-signal tracking-[0.1em]">
                    LIVE
                  </span>
                </div>

                {/* Voice mode toggle */}
                {voiceSupported && (
                  <button
                    onClick={toggleVoiceMode}
                    className="p-1 transition-colors"
                    style={{
                      background: voiceMode ? "rgba(197,106,74,0.1)" : "transparent",
                      color: voiceMode ? "#C56A4A" : "#555",
                    }}
                    title={voiceMode ? "Disable voice mode" : "Enable voice mode"}
                    aria-label={voiceMode ? "Disable voice mode" : "Enable voice mode"}
                  >
                    <Mic className="w-3.5 h-3.5" />
                  </button>
                )}

                <button
                  onClick={closePanel}
                  className="text-fog-gray/30 hover:text-fog-gray transition-colors p-1"
                  aria-label="Close chat"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* ─── Voice Mode Banner ─── */}
            <AnimatePresence>
              {voiceMode && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 overflow-hidden"
                >
                  <div
                    className="flex items-center gap-2 px-4 py-1.5"
                    style={{
                      background: "rgba(197,106,74,0.08)",
                      borderBottom: "1px solid rgba(197,106,74,0.15)",
                    }}
                  >
                    <WaveformVisualizer
                      state={voiceState === "speaking" || voiceState === "listening" ? voiceState : "idle"}
                      bars={7}
                    />
                    <span className="font-jetbrains text-[10px] text-rust-signal tracking-[0.1em]">
                      {voiceState === "listening"
                        ? "LISTENING..."
                        : voiceState === "speaking"
                          ? "TRANSMITTING..."
                          : voiceState === "processing"
                            ? "PROCESSING..."
                            : "VOICE MODE ACTIVE"}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ─── Messages ─── */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 t-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col"
                >
                  {msg.role === "user" ? (
                    /* User Bubble */
                    <div className="self-end max-w-[85%]">
                      <div
                        className="px-3.5 py-2.5 text-[13.5px] leading-relaxed font-satoshi text-skeleton-bone"
                        style={{ background: "#1C1E22" }}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ) : (
                    /* Bot Bubble */
                    <div className="self-start max-w-[90%] group/bot">
                      <div className="font-jetbrains text-[9px] text-rust-signal/70 tracking-[0.12em] pl-3 mb-1">
                        SYS
                      </div>
                      <div
                        className="px-3.5 py-2.5 text-[13.5px] leading-[1.65] font-satoshi text-fog-gray font-normal"
                        style={{
                          background: "transparent",
                          borderLeft: "2px solid rgba(197,106,74,0.45)",
                          paddingLeft: "12px",
                        }}
                      >
                        {msg.content}
                      </div>
                      {/* Replay button */}
                      {voiceMode && msg.id !== "greeting" && (
                        <button
                          onClick={() => speak(msg.content)}
                          className="mt-1 flex items-center gap-1.5 pl-3 opacity-0 group-hover/bot:opacity-60 hover:!opacity-100 transition-opacity"
                          aria-label="Read aloud"
                        >
                          <Volume2 className="w-3 h-3 text-fog-gray/40" />
                          <span className="font-jetbrains text-[9px] text-fog-gray/40 tracking-[0.08em]">
                            REPLAY
                          </span>
                        </button>
                      )}
                      {/* Always-visible read-aloud for non-voice mode */}
                      {!voiceMode && (
                        <button
                          onClick={() => speak(msg.content)}
                          className="mt-1 flex items-center gap-1.5 pl-3 opacity-0 group-hover/bot:opacity-60 hover:!opacity-100 transition-opacity"
                          aria-label="Read aloud"
                        >
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="square"
                            className="text-fog-gray/40"
                          >
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                          </svg>
                          <span className="font-jetbrains text-[9px] text-fog-gray/40 tracking-[0.08em]">
                            READ ALOUD
                          </span>
                        </button>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Suggested Prompts */}
              <AnimatePresence>
                {showPrompts && messages.length <= 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-1.5 pl-3"
                  >
                    {SUGGESTED_PROMPTS.map((prompt, i) => (
                      <motion.button
                        key={prompt}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.06 }}
                        onClick={() => handlePromptClick(prompt)}
                        className="text-left font-jetbrains text-[12px] text-fog-gray/50 px-3 py-1.5 transition-all duration-300 hover:text-skeleton-bone hover:bg-white/[0.03] hover:border-rust-signal/30"
                        style={{
                          background: "transparent",
                          border: "1px solid rgba(246,244,239,0.08)",
                        }}
                      >
                        › {prompt}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <div
                  className="self-start pl-3.5"
                  style={{ borderLeft: "2px solid rgba(197,106,74,0.45)" }}
                >
                  <div className="flex gap-1.5 items-center py-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-1 bg-rust-signal"
                        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Voice state visualizer (when not in voice mode banner) */}
              {!voiceMode && voiceState !== "idle" && (
                <div className="flex items-center justify-center gap-2 py-2">
                  <WaveformVisualizer state={voiceState} />
                  <span className="font-jetbrains text-[9px] text-fog-gray/40 uppercase tracking-wider">
                    {voiceState === "listening"
                      ? "Listening..."
                      : voiceState === "processing"
                        ? "Processing..."
                        : "Transmitting..."}
                  </span>
                </div>
              )}

              {/* Live transcript */}
              {transcript && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="self-end max-w-[85%] px-3.5 py-2 text-[13px] text-fog-gray/60 italic font-satoshi"
                  style={{
                    background: "#1C1E22",
                    borderLeft: "2px solid rgba(197,106,74,0.2)",
                  }}
                >
                  {transcript}
                  <span className="animate-[blink_1s_infinite] ml-0.5">|</span>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ─── Input Area ─── */}
            <div
              className="shrink-0 px-3 py-3"
              style={{
                background: "#0A0B0C",
                borderTop: "1px solid rgba(246,244,239,0.06)",
              }}
            >
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <div
                  className="flex-1 flex items-center transition-colors focus-within:border-rust-signal/40"
                  style={{
                    background: "#1C1E22",
                    border: "1px solid rgba(246,244,239,0.07)",
                  }}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Transmit query..."
                    className="flex-1 bg-transparent px-3 py-2.5 text-[13px] font-satoshi text-skeleton-bone placeholder:text-[#888] focus:outline-none"
                    disabled={isLoading || voiceState === "listening"}
                    aria-label="Chat message input"
                  />

                  {/* Microphone Button */}
                  {voiceSupported && (
                    <div className="pr-1">
                      {voiceState === "listening" ? (
                        <button
                          type="button"
                          onClick={stopListening}
                          className="p-2 transition-all"
                          style={{
                            color: "#C56A4A",
                            background: "rgba(197,106,74,0.15)",
                            border: "1px solid rgba(197,106,74,0.5)",
                          }}
                          aria-label="Stop listening"
                        >
                          <MicOff className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={startListening}
                          className="p-2 text-fog-gray/40 hover:text-fog-gray/70 transition-colors"
                          disabled={isLoading}
                          style={{
                            border: "1px solid rgba(246,244,239,0.08)",
                          }}
                          aria-label="Voice input"
                        >
                          <Mic className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-[38px] h-[38px] flex items-center justify-center transition-all duration-300 disabled:opacity-30 hover:bg-rust-signal/80 active:scale-95 shrink-0"
                  style={{
                    background: input.trim() && !isLoading ? "#C56A4A" : "#1C1E22",
                  }}
                  aria-label="Send message"
                >
                  <ArrowUp className="w-4 h-4 text-skeleton-bone" />
                </button>
              </form>
            </div>

            {/* ─── Footer ─── */}
            <div
              className="flex items-center justify-between px-4 py-1.5 shrink-0"
              style={{
                background: "#0A0B0C",
                borderTop: "1px solid rgba(246,244,239,0.04)",
              }}
            >
              <span className="font-jetbrains text-[9px] text-fog-gray/25 tracking-[0.1em]">
                TANGISON AI · tangison.com
              </span>
              <span className="font-jetbrains text-[9px] text-fog-gray/20 tracking-[0.06em]">
                TNG-AI-01
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
