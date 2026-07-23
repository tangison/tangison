"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  Mail,
} from "lucide-react";

/* ─── Subdomain Data ─────────────────────────────────────────── */

interface Subdomain {
  name: string;
  url: string;
  label: string;
  description: string;
  status: string;
}

const subdomains: Subdomain[] = [
  {
    name: "Studio",
    url: "https://studio.tangison.com",
    label: "Studio",
    description: "Creative & Design Division",
    status: "Active",
  },
  {
    name: "Agent",
    url: "https://agent.tangison.com",
    label: "Agent",
    description: "AI Operations Platform",
    status: "In Development",
  },
  {
    name: "Labs",
    url: "https://labs.tangison.com",
    label: "Labs",
    description: "Research & Development",
    status: "In Development",
  },
];

/* ─── Login Form Component ───────────────────────────────────── */

function LoginForm({
  onLogin,
  isSubmitting,
  error,
}: {
  onLogin: (username: string, password: string) => void;
  isSubmitting: boolean;
  error: string;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-sm"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Username */}
        <div>
          <label
            htmlFor="preview-username"
            className="block font-jetbrains text-[9px] uppercase tracking-[0.25em] text-skeleton-bone/40 mb-2"
          >
            Username
          </label>
          <input
            id="preview-username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
            className="w-full bg-white/[0.04] border border-white/[0.08] px-4 py-3 font-satoshi text-sm text-skeleton-bone placeholder:text-white/20 focus:border-rust-signal/50 focus:outline-none transition-colors duration-300"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="preview-password"
            className="block font-jetbrains text-[9px] uppercase tracking-[0.25em] text-skeleton-bone/40 mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="preview-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="w-full bg-white/[0.04] border border-white/[0.08] px-4 py-3 pr-12 font-satoshi text-sm text-skeleton-bone placeholder:text-white/20 focus:border-rust-signal/50 focus:outline-none transition-colors duration-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors p-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Error message */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="font-jetbrains text-[10px] tracking-[0.1em] text-rust-signal"
              role="alert"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-rust-signal hover:bg-rust-light text-warm-white font-cabinet text-sm uppercase tracking-[0.2em] py-3.5 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Verifying</span>
            </>
          ) : (
            <>
              <Lock className="w-3.5 h-3.5" />
              <span>Enter Preview</span>
            </>
          )}
        </button>

        {/* Note */}
        <p className="font-jetbrains text-[8px] tracking-[0.15em] text-white/15 text-center uppercase">
          Preview access only — credentials not stored client-side
        </p>
      </form>
    </motion.div>
  );
}

/* ─── Subdomain Card ─────────────────────────────────────────── */

function SubdomainCard({
  subdomain,
  index,
}: {
  subdomain: Subdomain;
  index: number;
}) {
  const isActive = subdomain.status === "Active";

  return (
    <motion.a
      href={subdomain.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8 + index * 0.15,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] p-6 sm:p-8 transition-all duration-500 block"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rust-signal/0 to-transparent group-hover:via-rust-signal/40 transition-all duration-700" />

      {/* Status dot */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`w-1.5 h-1.5 ${
            isActive ? "bg-signal-teal" : "bg-white/20"
          }`}
        />
        <span className="font-jetbrains text-[8px] uppercase tracking-[0.3em] text-white/25">
          {subdomain.status}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-cabinet text-2xl sm:text-3xl tracking-[0.1em] uppercase text-skeleton-bone group-hover:text-white transition-colors duration-300 mb-2">
        {subdomain.label}
      </h3>

      {/* Description */}
      <p className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/45 transition-colors duration-300 mb-6">
        {subdomain.description}
      </p>

      {/* Link indicator */}
      <div className="flex items-center gap-1.5 text-white/15 group-hover:text-rust-signal/70 transition-all duration-500">
        <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em]">
          Visit
        </span>
        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </div>
    </motion.a>
  );
}

/* ─── Main Gateway Component ─────────────────────────────────── */

export function GatewayPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  // Check existing session on mount
  useEffect(() => {
    async function checkSession() {
      try {
        const res = await fetch("/api/auth/verify");
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            setIsAuthenticated(true);
          }
        }
      } catch {
        // Not authenticated — show gateway
      } finally {
        setIsChecking(false);
      }
    }
    checkSession();
  }, []);

  const handleLogin = useCallback(
    async (username: string, password: string) => {
      setIsSubmitting(true);
      setLoginError("");

      try {
        const res = await fetch("/api/auth/preview", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });

        const data = await res.json();

        if (data.success) {
          setIsAuthenticated(true);
        } else {
          setLoginError(data.error || "Authentication failed");
        }
      } catch {
        setLoginError("Connection error — please try again");
      } finally {
        setIsSubmitting(false);
      }
    },
    []
  );

  // If authenticated, show the full site preview
  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-atlantic-black flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <div className="w-12 h-12 border border-signal-teal/30 flex items-center justify-center mx-auto mb-6">
            <Eye className="w-5 h-5 text-signal-teal" />
          </div>
          <h2 className="font-cabinet text-xl tracking-[0.1em] uppercase text-skeleton-bone mb-3">
            Preview Access Granted
          </h2>
          <p className="font-satoshi text-sm text-white/40 leading-relaxed mb-6">
            The full Tangison website is currently being migrated to its new
            home. The preview you are looking for will be available at
            labs.tangison.com once the transition is complete.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://labs.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-rust-signal hover:text-rust-light transition-colors inline-flex items-center gap-1.5"
            >
              Go to Labs
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  // Checking session
  if (isChecking) {
    return (
      <div className="min-h-screen bg-atlantic-black flex items-center justify-center">
        <Loader2 className="w-5 h-5 text-white/20 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-atlantic-black flex flex-col">
      {/* ─── Decorative Background ─── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Gradient orb — top right */}
        <div
          className="absolute -top-[40%] -right-[20%] w-[70vw] h-[70vw] opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, rgba(197,106,74,1) 0%, transparent 70%)",
          }}
        />
        {/* Gradient orb — bottom left */}
        <div
          className="absolute -bottom-[30%] -left-[15%] w-[50vw] h-[50vw] opacity-[0.02]"
          style={{
            background:
              "radial-gradient(circle, rgba(44,181,180,1) 0%, transparent 70%)",
          }}
        />
        {/* Fine grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ─── Header / Logo ─── */}
      <header className="relative z-10 px-6 sm:px-8 md:px-12 pt-8 sm:pt-10 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/logo-white.webp"
            alt="TANGISON"
            width={874}
            height={286}
            className="h-14 sm:h-16 md:h-20 w-auto object-contain"
            priority
          />
        </motion.div>
      </header>

      {/* ─── Main Content ─── */}
      <main className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto w-full">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-4"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              {/* Status indicator */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-rust-signal opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rust-signal" />
              </span>
              <span className="font-jetbrains text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/25">
                Under Construction
              </span>
            </div>

            <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] text-skeleton-bone leading-[1.1] mb-5 sm:mb-6">
              Something new
              <br />
              is being built
            </h1>

            {/* Accent line */}
            <div className="w-10 h-[1px] bg-rust-signal/60 animate-line-expand" />

            <p className="font-satoshi text-sm sm:text-base text-white/30 leading-relaxed max-w-lg mt-5 sm:mt-6">
              Tangison Technologies is building the next generation of applied AI
              infrastructure for Africa. Our new digital home is under
              construction.
            </p>
          </motion.div>

          {/* Subdomain Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10">
            {subdomains.map((subdomain, i) => (
              <SubdomainCard key={subdomain.name} subdomain={subdomain} index={i} />
            ))}
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-10 sm:mt-12 flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5 text-white/15" />
            <a
              href="mailto:contact@tangison.com"
              className="font-jetbrains text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/25 hover:text-white/50 transition-colors duration-300"
            >
              contact@tangison.com
            </a>
          </motion.div>
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer className="relative z-10 px-6 sm:px-8 md:px-12 pb-8 sm:pb-10">
        <div className="max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Preview login toggle */}
          <button
            onClick={() => setShowLogin(!showLogin)}
            className="font-jetbrains text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-white/10 hover:text-white/25 transition-colors duration-500 flex items-center gap-1.5"
            aria-label="Toggle preview login"
          >
            <Lock className="w-2.5 h-2.5" />
            Preview Access
          </button>

          {/* Footer credit */}
          <a
            href="https://studio.tangison.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-jetbrains text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-white/10 hover:text-white/25 transition-colors duration-500"
          >
            Made by Tangison Studio
          </a>
        </div>
      </footer>

      {/* ─── Login Overlay ─── */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-atlantic-black/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setShowLogin(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Preview login"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm"
            >
              {/* Close hint */}
              <div className="text-center mb-8">
                <div className="w-10 h-10 border border-white/[0.08] flex items-center justify-center mx-auto mb-5">
                  <Lock className="w-4 h-4 text-white/30" />
                </div>
                <h2 className="font-cabinet text-lg tracking-[0.1em] uppercase text-skeleton-bone mb-2">
                  Preview Access
                </h2>
                <p className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-white/20">
                  Credentials verified server-side
                </p>
              </div>

              <LoginForm
                onLogin={handleLogin}
                isSubmitting={isSubmitting}
                error={loginError}
              />

              {/* Close button */}
              <button
                onClick={() => {
                  setShowLogin(false);
                  setLoginError("");
                }}
                className="block mx-auto mt-6 font-jetbrains text-[9px] uppercase tracking-[0.25em] text-white/15 hover:text-white/30 transition-colors"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
