"use client";

import React, { useState } from "react";
import { SiteShell } from "@/components/tangison/site-shell";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";

function CopyableField({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 group"
      aria-label={`Copy ${value} to clipboard`}
    >
      <span className="font-cabinet text-lg md:text-xl tracking-tight text-skeleton-bone group-hover:text-fog-gray transition-colors">
        {value}
      </span>
      {copied ? (
        <Check className="w-4 h-4 text-rust-signal" />
      ) : (
        <Copy className="w-4 h-4 text-fog-gray/20 group-hover:text-fog-gray/50 transition-colors" />
      )}
    </button>
  );
}

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="min-h-screen pt-48 pb-32 px-6 md:px-12 lg:px-20 bg-atlantic-black flex items-center justify-center">
        <div className="max-w-2xl w-full border border-white/10 bg-terminal-black p-12 md:p-16 relative">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-rust-signal to-transparent opacity-50" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-cabinet text-4xl md:text-5xl text-white mb-4 tracking-tight">
              Request Access
            </h1>
            <p className="font-satoshi text-fog-gray/70 font-light mb-12 text-sm leading-relaxed">
              Engage Tangison for strategic infrastructure planning, digital sovereignty audits, or custom system architecture.
            </p>

            <form
              className="space-y-6 font-jetbrains text-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block text-[10px] text-fog-gray/50 uppercase tracking-widest mb-2" htmlFor="org">
                  Identifier / Organization
                </label>
                <input
                  id="org"
                  type="text"
                  className="w-full bg-atlantic-black border border-white/10 p-4 text-skeleton-bone focus:outline-none focus:border-rust-signal transition-colors"
                  autoComplete="organization"
                />
              </div>
              <div>
                <label className="block text-[10px] text-fog-gray/50 uppercase tracking-widest mb-2" htmlFor="email">
                  Secure Comms (Email)
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-atlantic-black border border-white/10 p-4 text-skeleton-bone focus:outline-none focus:border-rust-signal transition-colors"
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="block text-[10px] text-fog-gray/50 uppercase tracking-widest mb-2" htmlFor="directive">
                  Operational Directive
                </label>
                <textarea
                  id="directive"
                  rows={4}
                  className="w-full bg-atlantic-black border border-white/10 p-4 text-skeleton-bone focus:outline-none focus:border-rust-signal transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-skeleton-bone text-atlantic-black p-5 font-jetbrains text-xs uppercase tracking-widest hover:bg-white transition-colors mt-4 flex items-center justify-center gap-3 group"
              >
                Transmit Signal
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-white/5 space-y-4">
              <div>
                <div className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-widest mb-2">
                  Direct Contact
                </div>
                <CopyableField value="contact@tangison.com" />
              </div>
              <div>
                <div className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-widest mb-2">
                  Location
                </div>
                <span className="font-cabinet text-lg tracking-tight text-skeleton-bone">
                  Windhoek, Namibia
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
