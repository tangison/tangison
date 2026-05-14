"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowUp, Mic, MicOff, Square } from "lucide-react";

/* ─── Types ─── */
interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: number;
  audioUrl?: string;
}

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

/* ─── Helper: generate unique IDs ─── */
function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/* ─── Voice State Visualizer ─── */
function VoiceVisualizer({ state }: { state: "idle" | "listening" | "processing" | "speaking" }) {
  if (state === "idle") return null;

  const bars = 5;
  return (
    <div className="flex items-center justify-center gap-[3px] h-5">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[3px] bg-rust-signal"
          animate={{
            height:
              state === "listening"
                ? [4, 16, 8, 20, 4]
                : state === "processing"
                ? [8, 12, 8, 12, 8]
                : [6, 18, 10, 14, 6],
          }}
          transition={{
            duration: state === "listening" ? 0.8 : state === "processing" ? 1.2 : 0.6,
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

/* ─── Main Widget Component ─── */
export function TangisonAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showPrompts, setShowPrompts] = useState(true);

  // Voice state
  const [voiceState, setVoiceState] = useState<"idle" | "listening" | "processing" | "speaking">("idle");
  const [isMicSupported] = useState(() => typeof navigator !== "undefined" && !!navigator.mediaDevices?.getUserMedia);

  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  // Stop audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
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
      setIsLoading(true);
      setIsTyping(true);
      setShowPrompts(false);

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
      } catch {
        const errMsg: Message = {
          id: uid(),
          role: "bot",
          content: "Signal interrupted. Please retry.",
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, errMsg]);
      } finally {
        setIsLoading(false);
        setIsTyping(false);
      }
    },
    [isLoading]
  );

  /* ─── Text-to-Speech ─── */
  const speakText = useCallback(async (text: string) => {
    // Stop any current audio
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

  /* ─── Speech-to-Text (Voice Input) ─── */
  const startListening = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        setVoiceState("processing");

        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64 = (reader.result as string).split(",")[1];
          try {
            const res = await fetch("/api/asr", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ audio: base64 }),
            });
            const data = await res.json();
            if (data.success && data.transcription?.trim()) {
              await sendMessage(data.transcription.trim());
            }
          } catch {
            // Silently fail
          } finally {
            setVoiceState("idle");
          }
        };
        reader.readAsDataURL(blob);
      };

      mediaRecorder.start();
      setVoiceState("listening");

      // Auto-stop after 10 seconds
      setTimeout(() => {
        if (mediaRecorderRef.current?.state === "recording") {
          mediaRecorderRef.current.stop();
        }
      }, 10000);
    } catch {
      setVoiceState("idle");
    }
  }, [sendMessage]);

  const stopListening = useCallback(() => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    }
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

  /* ─── Stop Speaking ─── */
  const stopSpeaking = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setVoiceState("idle");
  }, []);

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
          border: isOpen ? "1px solid rgba(246,244,239,0.2)" : "1px solid rgba(246,244,239,0.12)",
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

        {/* Tooltip (hidden when open) */}
        {!isOpen && (
          <span className="absolute right-full mr-3 whitespace-nowrap font-jetbrains text-[10px] text-fog-gray/40 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Tangison AI
          </span>
        )}
      </motion.button>

      {/* ─── Chat Panel ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-[84px] right-6 z-[9998] flex flex-col shadow-2xl shadow-black/50 max-sm:fixed max-sm:inset-0 max-sm:bottom-0 max-sm:right-0 max-sm:bottom-0"
            style={{
              width: "380px",
              height: "520px",
              background: "#111315",
              border: "1px solid rgba(246,244,239,0.08)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Tangison AI Chat"
          >
            {/* ─── Header ─── */}
            <div
              className="flex items-center justify-between px-4 py-3 shrink-0"
              style={{
                background: "#0A0B0C",
                borderBottom: "1px solid rgba(246,244,239,0.06)",
              }}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo-mark.png"
                  alt=""
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px] object-contain mix-blend-screen opacity-80"
                  aria-hidden="true"
                />
                <div>
                  <div
                    className="font-jetbrains text-[11px] tracking-[0.15em] text-skeleton-bone uppercase"
                  >
                    TANGISON AI
                  </div>
                  <div className="font-jetbrains text-[9px] text-fog-gray tracking-wider">
                    Sovereign Intelligence
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* Status Indicator */}
                <div className="flex items-center gap-1.5">
                  <div className="relative w-2 h-2">
                    <div className="w-2 h-2 bg-rust-signal" />
                    <div className="absolute inset-0 w-2 h-2 bg-rust-signal/40 animate-[signal-ring-expand_2s_cubic-bezier(0.16,1,0.3,1)_infinite]" />
                  </div>
                  <span className="font-jetbrains text-[8px] text-rust-signal/60 uppercase tracking-wider">
                    Operational
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-fog-gray/40 hover:text-fog-gray transition-colors p-1"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ─── Messages ─── */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
              {messages.map((msg) => (
                <div key={msg.id} className="flex flex-col">
                  {msg.role === "user" ? (
                    /* User Bubble */
                    <div className="self-end max-w-[85%]">
                      <div
                        className="px-4 py-2.5 text-[14px] leading-relaxed font-satoshi text-skeleton-bone"
                        style={{
                          background: "#1C1E22",
                          borderRadius: "4px",
                        }}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ) : (
                    /* Bot Bubble */
                    <div className="self-start max-w-[90%] group/bot">
                      <div
                        className="px-4 py-2.5 text-[14px] leading-relaxed font-satoshi text-fog-gray"
                        style={{
                          background: "transparent",
                          borderLeft: "2px solid rgba(197,106,74,0.4)",
                          paddingLeft: "12px",
                        }}
                      >
                        {msg.content}
                      </div>
                      {/* TTS button for bot messages */}
                      <button
                        onClick={() => speakText(msg.content)}
                        className="mt-1 opacity-0 group-hover/bot:opacity-60 hover:!opacity-100 transition-opacity flex items-center gap-1.5 font-jetbrains text-[9px] text-fog-gray/40 uppercase tracking-wider"
                        aria-label="Read aloud"
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                        </svg>
                        Read aloud
                      </button>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="self-start flex items-center gap-2 px-4">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 bg-rust-signal/60"
                        animate={{ opacity: [0.3, 1, 0.3] }}
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

              {/* Voice State Visualizer */}
              {voiceState !== "idle" && (
                <div className="flex items-center justify-center gap-2 py-2">
                  <VoiceVisualizer state={voiceState} />
                  <span className="font-jetbrains text-[9px] text-fog-gray/40 uppercase tracking-wider">
                    {voiceState === "listening"
                      ? "Listening..."
                      : voiceState === "processing"
                      ? "Processing..."
                      : "Transmitting..."}
                  </span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ─── Suggested Prompts ─── */}
            <AnimatePresence>
              {showPrompts && messages.length <= 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-2 shrink-0"
                >
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => handlePromptClick(prompt)}
                        className="font-jetbrains text-[11px] text-fog-gray px-3 py-1.5 transition-all duration-300 hover:text-skeleton-bone hover:border-fog-gray/20"
                        style={{
                          background: "transparent",
                          border: "1px solid rgba(246,244,239,0.1)",
                          borderRadius: "0px",
                        }}
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ─── Input Area ─── */}
            <div
              className="shrink-0 px-4 py-3"
              style={{
                background: "#0A0B0C",
                borderTop: "1px solid rgba(246,244,239,0.06)",
              }}
            >
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <div className="flex-1 flex items-center" style={{ background: "#1C1E22", border: "1px solid rgba(246,244,239,0.08)", borderRadius: "0px" }}>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Transmit query..."
                    className="flex-1 bg-transparent px-3 py-2.5 text-[14px] font-satoshi text-skeleton-bone placeholder:text-[#888] focus:outline-none"
                    disabled={isLoading || voiceState !== "idle"}
                    aria-label="Chat message input"
                  />

                  {/* Microphone Button */}
                  {isMicSupported && (
                    <div className="pr-1">
                      {voiceState === "listening" ? (
                        <button
                          type="button"
                          onClick={stopListening}
                          className="p-2 text-rust-signal hover:text-rust-signal/80 transition-colors"
                          aria-label="Stop listening"
                        >
                          <Square className="w-4 h-4" fill="currentColor" />
                        </button>
                      ) : voiceState === "speaking" ? (
                        <button
                          type="button"
                          onClick={stopSpeaking}
                          className="p-2 text-rust-signal hover:text-rust-signal/80 transition-colors"
                          aria-label="Stop speaking"
                        >
                          <MicOff className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={startListening}
                          className="p-2 text-fog-gray/40 hover:text-fog-gray/70 transition-colors"
                          disabled={isLoading}
                          aria-label="Voice input"
                        >
                          <Mic className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 disabled:opacity-30"
                  style={{
                    background: input.trim() ? "#C56A4A" : "#1C1E22",
                    borderRadius: "0px",
                  }}
                  aria-label="Send message"
                >
                  <ArrowUp className="w-4 h-4 text-skeleton-bone" />
                </button>
              </form>
            </div>

            {/* ─── Footer ─── */}
            <div
              className="px-4 py-2 text-center shrink-0"
              style={{
                background: "#0A0B0C",
                borderTop: "1px solid rgba(246,244,239,0.04)",
              }}
            >
              <span className="font-jetbrains text-[10px] text-fog-gray/30 uppercase tracking-wider">
                Tangison AI · tangison.com
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
