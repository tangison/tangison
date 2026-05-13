"use client";

import React, { useState } from "react";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const colors = [
  { name: "Atlantic Black", hex: "#111315", variable: "--color-atlantic-black", usage: "Primary background" },
  { name: "Skeleton Bone", hex: "#F6F4EF", variable: "--color-skeleton-bone", usage: "Primary text" },
  { name: "Fog Gray", hex: "#D9D7D2", variable: "--color-fog-gray", usage: "Secondary text" },
  { name: "Deep Ocean", hex: "#16353D", variable: "--color-deep-ocean", usage: "Accent surfaces" },
  { name: "Rust Signal", hex: "#C56A4A", variable: "--color-rust-signal", usage: "Restrained accent" },
  { name: "Signal White", hex: "#FFFFFF", variable: "--color-signal-white", usage: "Maximum contrast" },
  { name: "Steel Shadow", hex: "#1C1E22", variable: "--color-steel-shadow", usage: "Card surfaces" },
  { name: "Terminal Black", hex: "#0A0B0C", variable: "--color-terminal-black", usage: "Deepest background" },
];

const typography = [
  {
    font: "Cabinet Grotesk",
    category: "Display",
    usage: "Headings and dominant statements",
    sample: "Sovereign Infrastructure",
    weight: "800 / Black",
    tracking: "-0.04em",
  },
  {
    font: "Satoshi",
    category: "Body",
    usage: "Body copy and interface text",
    sample: "Strategic systems for African enterprise",
    weight: "300–500",
    tracking: "Normal",
  },
  {
    font: "JetBrains Mono",
    category: "Technical",
    usage: "System labels, metadata, terminal UI",
    sample: "SYS.STATUS: OPERATIONAL",
    weight: "400",
    tracking: "0.15em",
  },
];

const spacingScale = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128];

function ColorSwatch({ color }: { color: typeof colors[0] }) {
  const [copied, setCopied] = useState(false);

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

  const isLight = ["#F6F4EF", "#D9D7D2", "#FFFFFF"].includes(color.hex);

  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      className="bg-[#0A0B0C] border border-white/[0.06] overflow-hidden group cursor-pointer"
      onClick={handleCopy}
    >
      <div
        className="h-24 md:h-28 relative"
        style={{ backgroundColor: color.hex }}
      >
        {copied && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Check className={`w-5 h-5 ${isLight ? "text-atlantic-black" : "text-skeleton-bone"}`} />
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="font-cabinet text-sm tracking-tight">{color.name}</span>
          <Copy className="w-3 h-3 text-fog-gray/20 group-hover:text-fog-gray/50 transition-colors" />
        </div>
        <div className="font-jetbrains text-[10px] text-fog-gray/40 tracking-wider">{color.hex}</div>
        <div className="font-jetbrains text-[9px] text-fog-gray/25 tracking-wider mt-1">{color.usage}</div>
      </div>
    </motion.div>
  );
}

export default function BrandPage() {
  return (
    <SiteShell>
      <PageHeader
        label="Brand System"
        title="The identity ecosystem."
        subtitle="Complete visual language, construction principles, and implementation references for the Tangison brand."
      />

      {/* Logo Construction */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-atlantic-black" aria-label="Logo construction">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
              01. Logo System
            </span>
            <h2 className="font-cabinet text-3xl md:text-4xl tracking-tight mb-4">
              Primary Icon
            </h2>
            <p className="font-satoshi text-fog-gray/50 max-w-xl leading-relaxed">
              Abstract Maritime Signal Monolith. A navigational beacon surviving extreme conditions.
              Tall vertical structural spine, offset asymmetrical cross-beam, fragmented lower geometry.
            </p>
          </div>

          {/* Logo Display Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {/* Large logo on dark */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 bg-atlantic-black border border-white/[0.06] flex items-center justify-center py-20 md:py-32"
            >
              <img
                src="/favicon.png"
                alt="Tangison primary icon"
                className="h-40 md:h-56 w-auto"
              />
            </motion.div>

            {/* Logo on deep ocean */}
            <div className="bg-deep-ocean border border-white/[0.06] flex items-center justify-center py-16">
              <img
                src="/favicon.png"
                alt="Tangison icon on deep ocean"
                className="h-20 w-auto brightness-0 invert"
              />
            </div>

            {/* Logo small */}
            <div className="bg-[#0A0B0C] border border-white/[0.06] flex items-center justify-center py-16">
              <img
                src="/favicon.png"
                alt="Tangison icon small size"
                className="h-8 w-auto"
              />
            </div>
          </div>

          {/* Usage Rules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0A0B0C] border border-white/[0.06] p-6 md:p-8">
              <h4 className="font-jetbrains text-[9px] text-green-500/50 uppercase tracking-[0.25em] mb-4">
                Correct Usage
              </h4>
              <ul className="space-y-2 font-satoshi text-fog-gray/50 text-sm">
                <li>— Preserve vertical proportions at all sizes</li>
                <li>— Use solid monochrome rendering only</li>
                <li>— Maintain breathing room around icon</li>
                <li>— Use as favicon, app icon, embossed mark</li>
              </ul>
            </div>
            <div className="bg-[#0A0B0C] border border-rust-signal/20 p-6 md:p-8">
              <h4 className="font-jetbrains text-[9px] text-rust-signal/60 uppercase tracking-[0.25em] mb-4">
                Prohibited Usage
              </h4>
              <ul className="space-y-2 font-satoshi text-fog-gray/50 text-sm">
                <li>— Never compress horizontally</li>
                <li>— Do not round corners</li>
                <li>— Do not apply gradients to icon</li>
                <li>— Never apply glow effects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wordmark */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#0A0B0C] border-t border-white/[0.04]" aria-label="Wordmark">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
            01b. Wordmark
          </span>
          <h2 className="font-cabinet text-3xl md:text-4xl tracking-tight mb-10">
            Wordmark System
          </h2>

          <div className="bg-atlantic-black border border-white/[0.06] p-10 md:p-16 mb-6">
            <p className="font-cabinet font-black text-[clamp(2rem,5vw,4.5rem)] tracking-[0.2em] uppercase text-skeleton-bone leading-none">
              TANGISON
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-atlantic-black border border-white/[0.06] p-8">
              <p className="font-cabinet font-bold text-2xl tracking-[0.25em] uppercase text-fog-gray">
                Tangison
              </p>
              <div className="font-jetbrains text-[9px] text-fog-gray/25 tracking-wider mt-3 uppercase">
                Standard Weight · Bold
              </div>
            </div>
            <div className="bg-deep-ocean border border-white/[0.06] p-8">
              <p className="font-cabinet font-black text-2xl tracking-[0.2em] uppercase text-skeleton-bone">
                TANGISON
              </p>
              <div className="font-jetbrains text-[9px] text-fog-gray/25 tracking-wider mt-3 uppercase">
                Black Weight · Deep Ocean BG
              </div>
            </div>
            <div className="bg-[#0A0B0C] border border-white/[0.06] p-8">
              <p className="font-cabinet font-medium text-lg tracking-[0.3em] uppercase text-rust-signal">
                tangison
              </p>
              <div className="font-jetbrains text-[9px] text-fog-gray/25 tracking-wider mt-3 uppercase">
                Accent Usage · Rust Signal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-atlantic-black border-t border-white/[0.04]" aria-label="Color palette">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
            02. Color System
          </span>
          <h2 className="font-cabinet text-3xl md:text-4xl tracking-tight mb-4">
            Color Palette
          </h2>
          <p className="font-satoshi text-fog-gray/50 max-w-xl mb-12 leading-relaxed">
            Dark strategic infrastructure palette. Accent usage is restrained.
            No rainbow gradients. No glowing neon. Fog overlays. Grain. Matte surfaces.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {colors.map((color) => (
              <ColorSwatch key={color.hex} color={color} />
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-[#0A0B0C] border-t border-white/[0.04]" aria-label="Typography">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
            03. Typography
          </span>
          <h2 className="font-cabinet text-3xl md:text-4xl tracking-tight mb-12">
            Type System
          </h2>

          <div className="space-y-4">
            {typography.map((type) => (
              <motion.div
                key={type.font}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-atlantic-black border border-white/[0.06] p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                  <div className="md:w-1/2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-jetbrains text-[9px] text-rust-signal/50 uppercase tracking-[0.25em]">
                        {type.category}
                      </span>
                    </div>
                    <p
                      className={`text-2xl md:text-3xl mb-3 tracking-tight ${
                        type.font === "Cabinet Grotesk"
                          ? "font-cabinet font-extrabold"
                          : type.font === "Satoshi"
                          ? "font-satoshi font-light"
                          : "font-jetbrains"
                      }`}
                    >
                      {type.sample}
                    </p>
                  </div>
                  <div className="md:w-1/2 space-y-3">
                    <div>
                      <span className="font-jetbrains text-[9px] text-fog-gray/25 uppercase tracking-wider">Font</span>
                      <p className="font-jetbrains text-xs text-fog-gray/60">{type.font}</p>
                    </div>
                    <div>
                      <span className="font-jetbrains text-[9px] text-fog-gray/25 uppercase tracking-wider">Weight</span>
                      <p className="font-jetbrains text-xs text-fog-gray/60">{type.weight}</p>
                    </div>
                    <div>
                      <span className="font-jetbrains text-[9px] text-fog-gray/25 uppercase tracking-wider">Tracking</span>
                      <p className="font-jetbrains text-xs text-fog-gray/60">{type.tracking}</p>
                    </div>
                    <div>
                      <span className="font-jetbrains text-[9px] text-fog-gray/25 uppercase tracking-wider">Usage</span>
                      <p className="font-satoshi text-xs text-fog-gray/60">{type.usage}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing System */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-atlantic-black border-t border-white/[0.04]" aria-label="Spacing system">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
            04. Spacing
          </span>
          <h2 className="font-cabinet text-3xl md:text-4xl tracking-tight mb-4">
            Spacing Scale
          </h2>
          <p className="font-satoshi text-fog-gray/50 max-w-xl mb-12 leading-relaxed">
            Oversized cinematic spacing. Every major section must feel like a chapter.
            Asymmetrical whitespace used intentionally.
          </p>

          <div className="flex flex-wrap gap-3 items-end">
            {spacingScale.map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <div
                  className="bg-rust-signal/20 border border-rust-signal/30"
                  style={{ width: `${Math.max(s, 2)}px`, height: `${Math.max(s * 2, 4)}px` }}
                />
                <span className="font-jetbrains text-[9px] text-fog-gray/30">{s}px</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motion Principles */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-[#0A0B0C] border-t border-white/[0.04]" aria-label="Motion principles">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
            05. Motion
          </span>
          <h2 className="font-cabinet text-3xl md:text-4xl tracking-tight mb-12">
            Motion System
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-atlantic-black border border-white/[0.06] p-8">
              <h4 className="font-cabinet text-lg mb-4 tracking-tight">Frameworks</h4>
              <div className="space-y-2 font-jetbrains text-[11px] text-fog-gray/50">
                <p>GSAP + ScrollTrigger</p>
                <p>Framer Motion</p>
                <p>CSS Transitions</p>
              </div>
            </div>
            <div className="bg-atlantic-black border border-white/[0.06] p-8">
              <h4 className="font-cabinet text-lg mb-4 tracking-tight">Easing</h4>
              <div className="space-y-2 font-jetbrains text-[11px] text-fog-gray/50">
                <p>cubic-bezier(0.16, 1, 0.3, 1)</p>
                <p>power3.out / power4.out</p>
                <p>Duration: 0.6s–1.5s</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Scroll Pinning", desc: "Content pinned while complementary elements scroll past" },
              { name: "Text Reveal", desc: "Word-by-word opacity scrubbed to scroll position" },
              { name: "Parallax", desc: "Layered depth movement at different scroll velocities" },
            ].map((motion) => (
              <div key={motion.name} className="bg-atlantic-black border border-white/[0.06] p-6">
                <h4 className="font-cabinet text-base mb-2 tracking-tight">{motion.name}</h4>
                <p className="font-satoshi text-fog-gray/40 text-sm">{motion.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-atlantic-black border border-rust-signal/15 p-6">
            <h4 className="font-jetbrains text-[9px] text-rust-signal/50 uppercase tracking-[0.25em] mb-3">
              Motion Philosophy
            </h4>
            <p className="font-satoshi text-fog-gray/50 text-sm leading-relaxed">
              Motion must be slow, heavy, calm, confident. Never bouncy, playful, or cartoonish.
              All animations must respect <code className="font-jetbrains text-rust-signal/60 text-xs">prefers-reduced-motion</code>.
            </p>
          </div>
        </div>
      </section>

      {/* Interface Components */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-atlantic-black border-t border-white/[0.04]" aria-label="Interface components">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
            06. Components
          </span>
          <h2 className="font-cabinet text-3xl md:text-4xl tracking-tight mb-12">
            Interface System
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Button */}
            <div className="space-y-4">
              <span className="font-jetbrains text-[9px] text-fog-gray/25 uppercase tracking-wider">Primary Button</span>
              <button className="bg-skeleton-bone text-atlantic-black px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-fog-gray transition-colors">
                Request Access
              </button>
            </div>

            {/* Secondary Button */}
            <div className="space-y-4">
              <span className="font-jetbrains text-[9px] text-fog-gray/25 uppercase tracking-wider">Secondary Button</span>
              <button className="border border-white/20 text-skeleton-bone px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-colors">
                Read Manifesto
              </button>
            </div>

            {/* Terminal Fragment */}
            <div className="space-y-4">
              <span className="font-jetbrains text-[9px] text-fog-gray/25 uppercase tracking-wider">Terminal UI</span>
              <div className="bg-[#0A0B0C] border border-white/[0.06] p-4 font-jetbrains text-[11px]">
                <div className="text-rust-signal/50 mb-2 text-[10px]">SYS.STATUS</div>
                <p className="text-green-500/60">{">"} SYSTEM OPERATIONAL</p>
                <p className="text-fog-gray/30">{">"} NODES: 428 ACTIVE</p>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="space-y-4">
              <span className="font-jetbrains text-[9px] text-fog-gray/25 uppercase tracking-wider">Status Indicators</span>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500/60" />
                  <span className="font-jetbrains text-xs text-fog-gray/50">OPERATIONAL</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rust-signal/60" />
                  <span className="font-jetbrains text-xs text-fog-gray/50">ALERT</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-fog-gray/30" />
                  <span className="font-jetbrains text-xs text-fog-gray/50">STANDBY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Direction */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-[#0A0B0C] border-t border-white/[0.04]" aria-label="Image direction">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
            07. Image Direction
          </span>
          <h2 className="font-cabinet text-3xl md:text-4xl tracking-tight mb-12">
            Photography Treatment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative overflow-hidden aspect-video">
              <img
                src="/images/hero-skeleton-coast.png"
                alt="Skeleton Coast atmospheric reference"
                className="w-full h-full object-cover cinematic-image"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C] to-transparent opacity-40" />
            </div>
            <div className="relative overflow-hidden aspect-video">
              <img
                src="/images/bento-infrastructure.png"
                alt="Infrastructure photography reference"
                className="w-full h-full object-cover cinematic-image"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C] to-transparent opacity-40" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-atlantic-black border border-white/[0.06] p-6">
              <h4 className="font-jetbrains text-[9px] text-green-500/40 uppercase tracking-[0.25em] mb-3">
                Treatment
              </h4>
              <ul className="space-y-1.5 font-satoshi text-fog-gray/50 text-sm">
                <li>— Grayscale conversion</li>
                <li>— Muted contrast grading</li>
                <li>— Cinematic darkness</li>
                <li>— Film grain overlay</li>
                <li>— Fog overlays</li>
                <li>— Cold atmospheric grading</li>
              </ul>
            </div>
            <div className="bg-atlantic-black border border-white/[0.06] p-6">
              <h4 className="font-jetbrains text-[9px] text-rust-signal/40 uppercase tracking-[0.25em] mb-3">
                Subject Matter
              </h4>
              <ul className="space-y-1.5 font-satoshi text-fog-gray/50 text-sm">
                <li>— Skeleton Coast atmosphere</li>
                <li>— Atlantic fog and coastline</li>
                <li>— Industrial structures</li>
                <li>— Signal towers and masts</li>
                <li>— Desert geometry</li>
                <li>— Server infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Favicon & Assets */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-atlantic-black border-t border-white/[0.04]" aria-label="Favicon and assets">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
            08. Favicon & Assets
          </span>
          <h2 className="font-cabinet text-3xl md:text-4xl tracking-tight mb-12">
            Application References
          </h2>

          <div className="flex flex-wrap items-end gap-8 mb-12">
            {/* Favicon sizes */}
            {[16, 32, 48, 64, 128].map((size) => (
              <div key={size} className="flex flex-col items-center gap-3">
                <div className="bg-[#0A0B0C] border border-white/[0.06] flex items-center justify-center" style={{ width: `${Math.max(size, 32)}px`, height: `${Math.max(size, 32)}px` }}>
                  <img
                    src="/favicon.png"
                    alt={`Favicon at ${size}px`}
                    style={{ width: `${size}px`, height: "auto" }}
                    className="max-w-full max-h-full"
                  />
                </div>
                <span className="font-jetbrains text-[9px] text-fog-gray/30">{size}px</span>
              </div>
            ))}
          </div>

          <div className="bg-[#0A0B0C] border border-white/[0.06] p-6 md:p-8 font-jetbrains text-[11px] text-fog-gray/40 space-y-1">
            <p className="text-rust-signal/50">{"/* Implementation References */"}</p>
            <p>{"favicon:        /favicon.png"}</p>
            <p>{"apple-touch:    /favicon.png"}</p>
            <p>{"logo-primary:   /favicon.png"}</p>
            <p>{"logo-wordmark:  TANGISON (Cabinet Grotesk Black, tracking 0.2em)"}</p>
            <p>{"brand-page:     /brand"}</p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
