"use client";

import React, { useState } from "react";
import { SiteShell } from "@/components/tangison/site-shell";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const colors = [
  { name: "Atlantic Black", hex: "#111315", usage: "Primary background", group: "dark" },
  { name: "Terminal Black", hex: "#0A0B0C", usage: "Deepest background", group: "dark" },
  { name: "Steel Shadow", hex: "#1C1E22", usage: "Card surfaces", group: "dark" },
  { name: "Deep Ocean", hex: "#16353D", usage: "Accent surfaces", group: "dark" },
  { name: "Rust Signal", hex: "#C56A4A", usage: "Restrained accent", group: "accent" },
  { name: "Skeleton Bone", hex: "#F6F4EF", usage: "Primary text", group: "light" },
  { name: "Fog Gray", hex: "#D9D7D2", usage: "Secondary text", group: "light" },
  { name: "Signal White", hex: "#FFFFFF", usage: "Maximum contrast", group: "light" },
];

const spacingScale = [
  { name: "xs", value: "4px", tw: "p-1", usage: "Tight inner padding" },
  { name: "sm", value: "8px", tw: "p-2", usage: "Small gaps" },
  { name: "md", value: "16px", tw: "p-4", usage: "Standard content padding" },
  { name: "lg", value: "24px", tw: "p-6", usage: "Section inner padding" },
  { name: "xl", value: "32px", tw: "p-8", usage: "Card padding" },
  { name: "2xl", value: "48px", tw: "p-12", usage: "Large sections" },
  { name: "3xl", value: "64px", tw: "p-16", usage: "Page sections" },
  { name: "4xl", value: "96px", tw: "p-24", usage: "Major separators" },
  { name: "5xl", value: "128px", tw: "p-32", usage: "Cinematic spacing" },
  { name: "6xl", value: "192px", tw: "p-48", usage: "Maximum breathing room" },
];

function ColorSwatch({ color }: { color: typeof colors[0] }) {
  const [copied, setCopied] = useState(false);
  const isLight = ["#F6F4EF", "#D9D7D2", "#FFFFFF"].includes(color.hex);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color.hex);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = color.hex;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="border border-white/[0.06] group cursor-pointer"
      onClick={handleCopy}
    >
      <div
        className="h-24 w-full transition-transform duration-500 origin-bottom group-hover:scale-y-105 relative"
        style={{ backgroundColor: color.hex }}
      >
        {copied && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Check className={`w-4 h-4 ${isLight ? "text-atlantic-black" : "text-skeleton-bone"}`} />
          </div>
        )}
      </div>
      <div className="p-4 bg-terminal-black border-t border-white/5">
        <div className="flex items-center justify-between mb-1">
          <span className="font-satoshi text-xs text-white">{color.name}</span>
          <Copy className="w-3 h-3 text-fog-gray/20 group-hover:text-fog-gray/50 transition-colors" />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-jetbrains text-[9px] text-fog-gray/50 uppercase tracking-widest">{color.hex}</span>
          <span className="font-jetbrains text-[8px] text-fog-gray/25 uppercase tracking-wider">{color.usage}</span>
        </div>
      </div>
    </div>
  );
}

export default function BrandPage() {
  return (
    <SiteShell>
      {/* Header */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 bg-atlantic-black overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-12 h-[2px] bg-rust-signal mb-8" aria-hidden="true" />
            <h1 className="font-cabinet text-5xl md:text-8xl mb-6 text-skeleton-bone tracking-tight">
              Brand System
            </h1>
            <p className="font-satoshi text-lg text-fog-gray/80 font-light leading-relaxed max-w-2xl mb-8">
              The visual language of Tangison must feel inevitable, weathered, strategic, and engineered for hostile environments. Everything is built to survive collapse, instability, and operational pressure.
            </p>
            <div className="font-jetbrains text-[10px] text-fog-gray/60 uppercase tracking-[0.2em] inline-flex items-center gap-4 border border-white/5 px-4 py-2 bg-terminal-black">
              <span>Document Ref: TNG-SYS-ID-02</span>
              <div className="w-1 h-1 bg-rust-signal" aria-hidden="true" />
              <span>Status: Immutable</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 01. Identity Core & Favicon */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-atlantic-black border-t border-white/[0.06]" aria-label="Identity core">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <h2 className="font-cabinet text-3xl text-white mb-6">01. Identity Core</h2>
            <p className="font-satoshi text-fog-gray/80 font-light leading-relaxed text-sm mb-8">
              The &ldquo;Shipwreck Mast&rdquo; is an abstract maritime signal monolith. A navigational beacon surviving extreme conditions. It represents signal, resilience, sovereignty, and operational authority.
            </p>
            <div className="space-y-6">
              <div className="border border-white/5 bg-terminal-black p-6">
                <div className="font-jetbrains text-[10px] text-rust-signal mb-4 uppercase tracking-widest">Structural Rules</div>
                <ul className="space-y-2 font-jetbrains text-xs text-fog-gray/50 tracking-wide">
                  <li>[+] Preserve strict vertical proportions</li>
                  <li>[+] Never compress horizontally</li>
                  <li>[+] Maintain breathing room</li>
                  <li>[+] Minimum clear space: 1x mark width</li>
                  <li>[-] Do not round corners</li>
                  <li>[-] No gradients (Solid monochrome only)</li>
                  <li>[-] No rotation or skewing</li>
                  <li>[-] Never apply effects or shadows</li>
                </ul>
              </div>
              <div className="border border-white/5 bg-terminal-black p-6">
                <div className="font-jetbrains text-[10px] text-rust-signal mb-4 uppercase tracking-widest">Favicon / Metadata Scale</div>
                <div className="flex items-end gap-6">
                  {[64, 32, 16].map((size) => (
                    <div key={size} className="flex flex-col items-center gap-2">
                      <div
                        className="bg-atlantic-black border border-white/10 flex items-center justify-center"
                        style={{ width: `${size}px`, height: `${size}px` }}
                      >
                        <img
                          src="/favicon.png"
                          alt=""
                          className="mix-blend-screen"
                          style={{ width: `${size * 0.6}px`, height: "auto" }}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="font-jetbrains text-[10px] text-fog-gray/40">{size}x{size}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-terminal-black p-12 md:p-32 border border-white/5 relative flex justify-center items-center group overflow-hidden">
            {/* Grid lines background */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <img
                src="/images/logo.png"
                alt="Tangison primary identity mark"
                className="h-48 md:h-80 w-auto object-contain mix-blend-screen"
              />
              {/* Technical Annotations */}
              <div className="absolute top-1/4 -right-16 md:-right-24 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-12 h-[1px] bg-rust-signal" />
                <span className="font-jetbrains text-[10px] text-rust-signal tracking-widest uppercase whitespace-nowrap">Cross-beam Offset</span>
              </div>
              <div className="absolute bottom-1/4 -left-16 md:-left-24 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="font-jetbrains text-[10px] text-rust-signal tracking-widest uppercase whitespace-nowrap">Signal Foundation</span>
                <div className="w-12 h-[1px] bg-rust-signal" />
              </div>
              {/* Measurement guides */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-60 transition-opacity duration-700">
                <div className="w-20 h-[1px] bg-fog-gray/30" />
                <span className="font-jetbrains text-[9px] text-fog-gray/40 tracking-wider">1:2.8 RATIO</span>
                <div className="w-20 h-[1px] bg-fog-gray/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Wordmark System */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-terminal-black border-t border-white/[0.06]" aria-label="Wordmark system">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <h2 className="font-cabinet text-3xl text-white mb-6">02. Wordmark System</h2>
            <p className="font-satoshi text-fog-gray/80 font-light leading-relaxed text-sm mb-6">
              Custom geometric minimal wordmark. The letters must feel engineered instead of decorative, presenting a monolithic, stable, and infrastructural tone.
            </p>
            <div className="border border-white/5 bg-atlantic-black p-6">
              <div className="font-jetbrains text-[10px] text-rust-signal mb-4 uppercase tracking-widest">Clear Space Rules</div>
              <div className="space-y-2 font-jetbrains text-xs text-fog-gray/50 tracking-wide">
                <p>Minimum padding: 2x letter height on all sides</p>
                <p>Preferred placement: Left-aligned or centered</p>
                <p>Never stack mark above wordmark in confined spaces</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* Primary wordmark */}
            <div className="bg-steel-shadow/30 border border-white/5 p-12 md:p-24 flex items-center justify-center overflow-hidden relative">
              <div className="font-cabinet font-bold tracking-[0.4em] uppercase text-3xl md:text-6xl text-skeleton-bone relative z-10">
                TANGISON
              </div>
              {/* Vertical guide lines */}
              <div className="absolute inset-0 flex justify-between px-12 md:px-24 pointer-events-none opacity-20" aria-hidden="true">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-[1px] h-full bg-rust-signal" />
                ))}
              </div>
            </div>
            {/* Inverse wordmark */}
            <div className="bg-skeleton-bone border border-white/5 p-12 md:p-16 flex items-center justify-center overflow-hidden relative">
              <div className="font-cabinet font-bold tracking-[0.4em] uppercase text-2xl md:text-5xl text-atlantic-black relative z-10">
                TANGISON
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-jetbrains text-[10px] text-fog-gray/50 tracking-widest uppercase">
              <div className="border border-white/5 p-6 bg-terminal-black">Spacing: Architectural / Wide</div>
              <div className="border border-white/5 p-6 bg-terminal-black">Case: Uppercase Only</div>
              <div className="border border-white/5 p-6 bg-terminal-black">Variant: No Condensation</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Typography */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-atlantic-black border-t border-white/[0.06]" aria-label="Typography">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <h2 className="font-cabinet text-3xl text-white mb-6">03. Typography</h2>
            <p className="font-satoshi text-fog-gray/80 font-light leading-relaxed text-sm mb-6">
              Massive editorial hierarchy. Wide breathing room. Tight letter spacing in headings. Elegant restraint.
            </p>
            <div className="space-y-4">
              <div className="border border-white/5 bg-terminal-black p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-jetbrains text-[9px] text-rust-signal uppercase tracking-widest">Display</span>
                  <span className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-wider">Cabinet Grotesk</span>
                </div>
                <div className="font-jetbrains text-[10px] text-fog-gray/40 tracking-wide">
                  800–900 weight / tracking: -0.04em / clamp(2.8rem, 7vw, 7rem)
                </div>
              </div>
              <div className="border border-white/5 bg-terminal-black p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-jetbrains text-[9px] text-rust-signal uppercase tracking-widest">Body</span>
                  <span className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-wider">Satoshi</span>
                </div>
                <div className="font-jetbrains text-[10px] text-fog-gray/40 tracking-wide">
                  300–400 weight / line-height: 1.6 / 16–20px
                </div>
              </div>
              <div className="border border-white/5 bg-terminal-black p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-jetbrains text-[9px] text-rust-signal uppercase tracking-widest">Technical</span>
                  <span className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-wider">JetBrains Mono</span>
                </div>
                <div className="font-jetbrains text-[10px] text-fog-gray/40 tracking-wide">
                  400 weight / tracking: 0.1–0.3em / 9–12px / uppercase preferred
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-8">
            {/* Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/5 p-10 bg-steel-shadow/30"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-widest">Display</div>
                <div className="font-jetbrains text-[10px] text-fog-gray/40 uppercase tracking-widest">Cabinet Grotesk</div>
              </div>
              <div className="font-cabinet text-4xl md:text-6xl text-skeleton-bone tracking-tighter mb-4 font-extrabold">
                Resilience is infrastructure.
              </div>
              <div className="font-jetbrains text-[10px] text-fog-gray/50 uppercase tracking-widest mt-8">
                Usage: Headings and dominant statements. Tight tracking.
              </div>
            </motion.div>

            {/* Body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/5 p-10 bg-steel-shadow/30"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-widest">Body</div>
                <div className="font-jetbrains text-[10px] text-fog-gray/40 uppercase tracking-widest">Satoshi</div>
              </div>
              <div className="font-satoshi text-xl md:text-2xl text-skeleton-bone font-light leading-relaxed max-w-2xl">
                Tangison draws inspiration from the Skeleton Coast, Atlantic maritime systems, sovereign infrastructure, and signal architecture.
              </div>
              <div className="font-jetbrains text-[10px] text-fog-gray/50 uppercase tracking-widest mt-8">
                Usage: Body copy and interface text. Loose, readable line-height.
              </div>
            </motion.div>

            {/* Technical */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/5 p-10 bg-steel-shadow/30"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-widest">Technical</div>
                <div className="font-jetbrains text-[10px] text-fog-gray/40 uppercase tracking-widest">JetBrains Mono</div>
              </div>
              <div className="font-jetbrains text-sm text-fog-gray space-y-2">
                <div>{">"} SYSTEM_STATUS: OPERATIONAL</div>
                <div>{">"} COORDINATES: 22°34&apos;12&quot;S 14°31&apos;48&quot;E</div>
                <div>{">"} ENCRYPTION: SOVEREIGN_KEY_EXCHANGE</div>
              </div>
              <div className="font-jetbrains text-[10px] text-fog-gray/50 uppercase tracking-widest mt-8">
                Usage: System labels, metadata, terminal UI, coordinates.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 04. Color Palette */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-terminal-black border-t border-white/[0.06]" aria-label="Color palette">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <h2 className="font-cabinet text-3xl text-white mb-6">04. Spectrum</h2>
            <p className="font-satoshi text-fog-gray/80 font-light leading-relaxed text-sm mb-6">
              Dark strategic infrastructure. Matte surfaces with deep contrast. Avoid gradients. No generic SaaS palettes or oversaturated neon.
            </p>
            <div className="space-y-4">
              {(["dark", "accent", "light"] as const).map((group) => (
                <div key={group} className="border border-white/5 bg-atlantic-black p-5">
                  <div className="font-jetbrains text-[9px] text-rust-signal mb-3 uppercase tracking-widest">
                    {group === "dark" ? "Base Layers" : group === "accent" ? "Signal Accent" : "Foreground"}
                  </div>
                  <div className="flex gap-2">
                    {colors.filter(c => c.group === group).map(c => (
                      <div
                        key={c.hex}
                        className="w-8 h-8 border border-white/10"
                        style={{ backgroundColor: c.hex }}
                        title={`${c.name}: ${c.hex}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {colors.map((color) => (
              <ColorSwatch key={color.hex} color={color} />
            ))}
          </div>
        </div>
      </section>

      {/* 05. Spacing Scale */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-atlantic-black border-t border-white/[0.06]" aria-label="Spacing scale">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <h2 className="font-cabinet text-3xl text-white mb-6">05. Spacing</h2>
            <p className="font-satoshi text-fog-gray/80 font-light leading-relaxed text-sm mb-6">
              Cinematic spacing that breathes. Generous whitespace between sections. Dense information within cards. The contrast between empty and full creates visual rhythm.
            </p>
            <div className="border border-rust-signal/20 bg-rust-signal/5 p-6">
              <div className="font-jetbrains text-[10px] text-rust-signal mb-4 uppercase tracking-widest">Principles</div>
              <ul className="space-y-2 font-jetbrains text-xs text-fog-gray/70 tracking-wide">
                <li>[+] Sections: 80–192px vertical padding</li>
                <li>[+] Cards: 24–40px inner padding</li>
                <li>[+] Grid gaps: 12–24px</li>
                <li>[+] Max-width: 1400px container</li>
                <li>[-] Never crowd text blocks</li>
                <li>[-] Never use &lt;8px spacing</li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-3">
            {spacingScale.map((step, i) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="border border-white/[0.06] bg-terminal-black flex items-center gap-6 overflow-hidden group hover:border-white/[0.1] transition-colors duration-500"
              >
                {/* Visual bar */}
                <div className="bg-rust-signal/20 h-full flex items-center justify-center min-w-[80px] relative">
                  <div
                    className="bg-rust-signal/40 h-full transition-all duration-500"
                    style={{ width: `${Math.min(parseInt(step.value) / 2, 96)}px` }}
                  />
                  <span className="absolute font-jetbrains text-[10px] text-skeleton-bone tracking-wider">
                    {step.name}
                  </span>
                </div>
                <div className="flex-1 p-4 flex items-center justify-between gap-4">
                  <div>
                    <span className="font-cabinet text-lg text-skeleton-bone tracking-tight">{step.value}</span>
                    <span className="font-jetbrains text-[10px] text-fog-gray/30 ml-3 tracking-wider">{step.tw}</span>
                  </div>
                  <span className="font-satoshi text-fog-gray/40 text-xs">{step.usage}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. Implementation & UI */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-terminal-black border-t border-white/[0.06]" aria-label="Implementation">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <h2 className="font-cabinet text-3xl text-white mb-6">06. Implementation</h2>
            <p className="font-satoshi text-fog-gray/80 font-light leading-relaxed text-sm mb-6">
              Dense bento grids, massive cinematic spacing, and terminal UI fragments. Photography must utilize cold atmospheric grading, film grain, and fog overlays.
            </p>
            <div className="border border-rust-signal/20 bg-rust-signal/5 p-6">
              <div className="font-jetbrains text-[10px] text-rust-signal mb-4 uppercase tracking-widest">Anti-Patterns</div>
              <ul className="space-y-2 font-jetbrains text-xs text-fog-gray/70 tracking-wide">
                <li>[x] No dashboard spam</li>
                <li>[x] No floating random shapes</li>
                <li>[x] No startup cliché illustrations</li>
                <li>[x] No rounded bubbly design</li>
                <li>[x] No oversaturated neon</li>
                <li>[x] No SaaS gradient backgrounds</li>
                <li>[x] No emojis in production UI</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Terminal UI Pattern */}
            <div className="bg-atlantic-black border border-white/10 p-8 flex flex-col font-jetbrains relative overflow-hidden group">
              <div className="text-rust-signal text-[10px] mb-8 flex justify-between tracking-widest uppercase">
                <span>Interface_Component</span>
                <span>Terminal_UI_Pattern</span>
              </div>
              <div className="space-y-4 text-xs text-fog-gray/80 mb-8 tracking-wide bg-terminal-black p-6 border border-white/5">
                <p className="text-skeleton-bone/50">{">"} INITIATING SECURE HANDSHAKE...</p>
                <p className="text-skeleton-bone/50">{">"} VERIFYING INFRASTRUCTURE INTEGRITY</p>
                <p className="text-green-500/80">{">"} CONNECTION ESTABLISHED</p>
                <div className="h-[1px] w-full bg-white/10 my-4" />
                <p className="animate-pulse text-rust-signal">{">"} AWAITING COMMAND_</p>
              </div>
              <button className="bg-skeleton-bone text-atlantic-black px-6 py-4 font-jetbrains text-xs uppercase tracking-widest hover:bg-white transition-colors self-start">
                Execute Protocol
              </button>
            </div>

            {/* Image Treatment Demo */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 md:h-64 overflow-hidden border border-white/10 group">
                <img
                  src="/images/hero-skeleton-coast.png"
                  alt="Industrial image direction"
                  className="absolute inset-0 w-full h-full object-cover cinematic-image group-hover:scale-110 transition-transform duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-atlantic-black to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 font-jetbrains text-[10px] text-white uppercase tracking-widest">Industrial Geometry</div>
              </div>
              <div className="relative h-48 md:h-64 overflow-hidden border border-white/10 group">
                <img
                  src="/images/bento-infrastructure.png"
                  alt="Atlantic fog overlay"
                  className="absolute inset-0 w-full h-full object-cover cinematic-image group-hover:scale-110 transition-transform duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-atlantic-black to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 font-jetbrains text-[10px] text-white uppercase tracking-widest">Atlantic Fog Overlay</div>
              </div>
            </div>

            {/* Motion System Reference */}
            <div className="border border-white/5 bg-steel-shadow/30 p-8">
              <div className="font-jetbrains text-[10px] text-rust-signal mb-6 uppercase tracking-widest">Motion System</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-wider mb-3">Frameworks</div>
                  <div className="font-jetbrains text-xs text-fog-gray/60 space-y-2">
                    <p>GSAP + ScrollTrigger</p>
                    <p>Framer Motion</p>
                    <p>CSS Transitions</p>
                  </div>
                </div>
                <div>
                  <div className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-wider mb-3">Easing</div>
                  <div className="font-jetbrains text-xs text-fog-gray/60 space-y-2">
                    <p>cubic-bezier(0.16, 1, 0.3, 1)</p>
                    <p>power3.out / power4.out</p>
                    <p>Duration: 0.6s–1.5s</p>
                  </div>
                </div>
                <div>
                  <div className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-wider mb-3">Philosophy</div>
                  <div className="font-jetbrains text-xs text-fog-gray/60">
                    Slow, heavy, calm, confident. Never bouncy or playful. Respects prefers-reduced-motion.
                  </div>
                </div>
              </div>

              {/* Motion demo */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-wider mb-4">Entrance Timing</div>
                <div className="flex items-end gap-2 h-16">
                  {[0.6, 0.8, 1.0, 1.2, 1.5].map((dur, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 flex-1">
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: dur, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full bg-rust-signal/30 origin-bottom"
                        style={{ height: `${dur * 40}px` }}
                      />
                      <span className="font-jetbrains text-[8px] text-fog-gray/30">{dur}s</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
