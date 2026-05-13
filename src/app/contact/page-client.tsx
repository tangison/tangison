"use client";

import React, { useState } from "react";
import { SiteShell } from "@/components/tangison/site-shell";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Shield, Radio, Building2, Brain, Handshake } from "lucide-react";

const engagementTypes = [
  {
    id: "infrastructure",
    icon: Building2,
    label: "Strategic Infrastructure Planning",
    code: "STRAT-INFRA",
  },
  {
    id: "sovereignty",
    icon: Shield,
    label: "Digital Sovereignty Audit",
    code: "SOV-AUDIT",
  },
  {
    id: "architecture",
    icon: Radio,
    label: "Custom System Architecture",
    code: "SYS-ARCH",
  },
  {
    id: "intelligence",
    icon: Brain,
    label: "Intelligence Operations",
    code: "INT-OPS",
  },
  {
    id: "partnership",
    icon: Handshake,
    label: "Partnership Inquiry",
    code: "PARTNER",
  },
];

function CopyableField({ value, label }: { value: string; label: string }) {
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
    <div>
      <div className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-widest mb-2">
        {label}
      </div>
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
    </div>
  );
}

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [formState, setFormState] = useState({ org: "", email: "", directive: "" });

  return (
    <SiteShell>
      {/* Header */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-12 lg:px-20 bg-atlantic-black overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-12 h-[2px] bg-rust-signal mb-8" aria-hidden="true" />
            <h1 className="font-cabinet text-5xl md:text-8xl mb-6 text-skeleton-bone tracking-tight">
              Request Access
            </h1>
            <p className="font-satoshi text-lg text-fog-gray/80 font-light leading-relaxed max-w-2xl">
              Engage Tangison for strategic infrastructure planning, digital sovereignty audits, or custom system architecture. All communications are encrypted.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engagement Type Selector */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-terminal-black border-t border-white/[0.04]" aria-label="Engagement type">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-rust-signal/50" aria-hidden="true" />
            <span className="font-jetbrains text-[10px] text-fog-gray/40 uppercase tracking-[0.3em]">
              Engagement Type
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {engagementTypes.map((type, i) => (
              <motion.button
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedType(type.id)}
                className={`group border p-5 text-left transition-all duration-500 ${
                  selectedType === type.id
                    ? "border-rust-signal/40 bg-rust-signal/5"
                    : "border-white/[0.06] bg-atlantic-black hover:border-white/[0.1]"
                }`}
              >
                <type.icon className={`w-5 h-5 mb-3 transition-colors ${
                  selectedType === type.id ? "text-rust-signal" : "text-fog-gray/30 group-hover:text-fog-gray/50"
                }`} />
                <div className="font-cabinet text-sm tracking-tight mb-1 text-skeleton-bone">
                  {type.label}
                </div>
                <div className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-wider">
                  {type.code}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-atlantic-black border-t border-white/[0.04]" aria-label="Contact form">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-7">
            <form
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] text-fog-gray/50 uppercase tracking-widest mb-2 font-jetbrains" htmlFor="org">
                    Identifier / Organization
                  </label>
                  <input
                    id="org"
                    type="text"
                    value={formState.org}
                    onChange={(e) => setFormState(s => ({ ...s, org: e.target.value }))}
                    className="w-full bg-terminal-black border border-white/10 p-4 text-skeleton-bone font-satoshi text-sm focus:outline-none focus:border-rust-signal transition-colors"
                    autoComplete="organization"
                    placeholder="Organization name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-fog-gray/50 uppercase tracking-widest mb-2 font-jetbrains" htmlFor="email">
                    Secure Comms (Email)
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                    className="w-full bg-terminal-black border border-white/10 p-4 text-skeleton-bone font-satoshi text-sm focus:outline-none focus:border-rust-signal transition-colors"
                    autoComplete="email"
                    placeholder="secure@domain.com"
                  />
                </div>
              </div>

              {selectedType && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-terminal-black border border-rust-signal/20 p-4 flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-rust-signal" aria-hidden="true" />
                  <span className="font-jetbrains text-[10px] text-rust-signal/80 uppercase tracking-wider">
                    {engagementTypes.find(t => t.id === selectedType)?.code}
                  </span>
                  <span className="font-satoshi text-fog-gray/50 text-sm">
                    — {engagementTypes.find(t => t.id === selectedType)?.label}
                  </span>
                </motion.div>
              )}

              <div>
                <label className="block text-[10px] text-fog-gray/50 uppercase tracking-widest mb-2 font-jetbrains" htmlFor="directive">
                  Operational Directive
                </label>
                <textarea
                  id="directive"
                  rows={5}
                  value={formState.directive}
                  onChange={(e) => setFormState(s => ({ ...s, directive: e.target.value }))}
                  className="w-full bg-terminal-black border border-white/10 p-4 text-skeleton-bone font-satoshi text-sm focus:outline-none focus:border-rust-signal transition-colors resize-none"
                  placeholder="Describe your operational requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-skeleton-bone text-atlantic-black px-10 py-5 font-jetbrains text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-3 group"
              >
                Transmit Signal
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            {/* Encryption notice */}
            <div className="bg-terminal-black border border-white/[0.06] p-8">
              <div className="font-jetbrains text-[10px] text-rust-signal mb-4 uppercase tracking-widest">
                Security Protocol
              </div>
              <div className="space-y-3 font-jetbrains text-[11px] text-fog-gray/50 tracking-wide">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500/60" />
                  <span>End-to-end encrypted communications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500/60" />
                  <span>No third-party data processors</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500/60" />
                  <span>African data residency guaranteed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500/60" />
                  <span>Sovereign key management</span>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="bg-terminal-black border border-white/[0.06] p-8 space-y-6">
              <CopyableField value="contact@tangison.com" label="Direct Contact" />
              <CopyableField value="tangison.com" label="Domain" />

              <div>
                <div className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-widest mb-2">
                  Physical Operations
                </div>
                <span className="font-cabinet text-lg tracking-tight text-skeleton-bone">
                  Windhoek, Namibia
                </span>
                <div className="font-jetbrains text-[10px] text-fog-gray/30 mt-1 tracking-wider">
                  22°34&apos;12&quot;S 14°31&apos;48&quot;E
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="bg-deep-ocean/30 border border-white/[0.06] p-6">
              <div className="flex items-center justify-between">
                <span className="font-jetbrains text-[10px] text-fog-gray/40 uppercase tracking-wider">
                  Avg. Response Time
                </span>
                <span className="font-cabinet text-2xl text-skeleton-bone">
                  48<span className="text-rust-signal text-sm ml-1">hrs</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-20 bg-terminal-black border-t border-white/[0.04] flex items-center justify-center min-h-[40vh]" aria-label="Closing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-center"
        >
          <h2 className="font-cabinet text-3xl md:text-5xl tracking-tight mb-4 text-skeleton-bone">
            Systems that endure<br />start with a signal.
          </h2>
          <p className="font-satoshi text-fog-gray/50 text-lg font-light">
            Every engagement begins with a single transmission.
          </p>
        </motion.div>
      </section>
    </SiteShell>
  );
}
