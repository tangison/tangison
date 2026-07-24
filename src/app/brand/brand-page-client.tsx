"use client";

import React from "react";
import Image from "next/image";
import { RevealSection } from "@/components/reveal-section";

export function BrandPage() {
  return (
    <div className="min-h-screen bg-atlantic-black">
      {/* Hero with brand logo background */}
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/brand-hero-logo.webp"
            alt=""
            fill
            className="object-cover opacity-[0.04]"
            priority
            sizes="100vw"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-atlantic-black/[0.94] z-[1]" />

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">Brand</span>
            </div>
            <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] text-skeleton-bone leading-[1.1] mb-5">
              Brand
            </h1>
            <div className="w-10 h-[1px] bg-rust-signal/60 animate-line-expand" />
            <p className="font-satoshi text-sm sm:text-base text-white/30 leading-relaxed max-w-lg mt-5">
              The Tangison brand system. Designed for restraint, precision, and
              authority. Every element serves a measurable purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">01</span>
            <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">Typography</h2>
          </div>

          <div className="space-y-8">
            {/* Cabinet Grotesk */}
            <div className="border border-white/[0.06] p-6 sm:p-8">
              <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-rust-signal/40 mb-2 block">Headings</span>
              <p className="font-cabinet text-4xl sm:text-5xl md:text-6xl tracking-[0.05em] text-skeleton-bone mb-3">
                Cabinet Grotesk
              </p>
              <p className="font-satoshi text-sm text-white/20">
                Used for all headings and display text. Uppercase with generous
                tracking (0.05em to 0.3em). Weights: 800, 700, 500.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <span className="font-cabinet text-lg font-extrabold tracking-[0.1em] uppercase text-skeleton-bone/70">800</span>
                <span className="font-cabinet text-lg font-bold tracking-[0.1em] uppercase text-skeleton-bone/70">700</span>
                <span className="font-cabinet text-lg font-medium tracking-[0.1em] uppercase text-skeleton-bone/70">500</span>
              </div>
            </div>

            {/* Satoshi */}
            <div className="border border-white/[0.06] p-6 sm:p-8">
              <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-rust-signal/40 mb-2 block">Body</span>
              <p className="font-satoshi text-2xl sm:text-3xl text-skeleton-bone mb-3">
                Satoshi
              </p>
              <p className="font-satoshi text-sm text-white/20">
                Used for all body text and paragraphs. Normal case. Weights:
                400, 500, 700. Size range: 14px to 17px.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <span className="font-satoshi text-base font-normal text-skeleton-bone/70">Regular 400</span>
                <span className="font-satoshi text-base font-medium text-skeleton-bone/70">Medium 500</span>
                <span className="font-satoshi text-base font-bold text-skeleton-bone/70">Bold 700</span>
              </div>
            </div>

            {/* JetBrains Mono */}
            <div className="border border-white/[0.06] p-6 sm:p-8">
              <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-rust-signal/40 mb-2 block">Labels & metadata</span>
              <p className="font-jetbrains text-xl sm:text-2xl tracking-[0.2em] uppercase text-skeleton-bone mb-3">
                JetBrains Mono
              </p>
              <p className="font-satoshi text-sm text-white/20">
                Used for labels, metadata, status indicators, and technical
                text. Always uppercase with extreme tracking (0.15em to 0.3em).
                Size range: 8px to 12px.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <span className="font-jetbrains text-[8px] uppercase tracking-[0.3em] text-skeleton-bone/70">8px 0.3em</span>
                <span className="font-jetbrains text-[9px] uppercase tracking-[0.25em] text-skeleton-bone/70">9px 0.25em</span>
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-skeleton-bone/70">10px 0.2em</span>
                <span className="font-jetbrains text-[12px] uppercase tracking-[0.15em] text-skeleton-bone/70">12px 0.15em</span>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Colour Palette */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">02</span>
            <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">Colour</h2>
          </div>

          {/* Dark surfaces */}
          <div className="mb-8">
            <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-white/15 mb-4 block">Dark surfaces</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                { name: "atlantic-black", hex: "#111315", role: "Primary background" },
                { name: "terminal-black", hex: "#0A0B0C", role: "Deepest background" },
                { name: "steel-shadow", hex: "#1C1E22", role: "Elevated surface" },
              ].map((c) => (
                <div key={c.name} className="border border-white/[0.06] p-4">
                  <div className="h-16 sm:h-24 mb-3" style={{ backgroundColor: c.hex }} />
                  <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-white/30 block">{c.name}</span>
                  <span className="font-jetbrains text-[9px] text-white/20 block">{c.hex}</span>
                  <span className="font-satoshi text-xs text-white/15 block mt-1">{c.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Light on dark */}
          <div className="mb-8">
            <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-white/15 mb-4 block">Light on dark</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                { name: "skeleton-bone", hex: "#F6F4EF", role: "Primary text on dark" },
                { name: "fog-gray", hex: "#D9D7D2", role: "Secondary text on dark" },
              ].map((c) => (
                <div key={c.name} className="border border-white/[0.06] p-4">
                  <div className="h-16 sm:h-24 mb-3" style={{ backgroundColor: c.hex }} />
                  <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-white/30 block">{c.name}</span>
                  <span className="font-jetbrains text-[9px] text-white/20 block">{c.hex}</span>
                  <span className="font-satoshi text-xs text-white/15 block mt-1">{c.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Accent */}
          <div className="mb-8">
            <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-white/15 mb-4 block">Accent</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                { name: "rust-signal", hex: "#C56A4A", role: "Primary accent" },
                { name: "rust-light", hex: "#D4896F", role: "Hover state" },
                { name: "signal-teal", hex: "#2CB5B4", role: "Secondary accent" },
                { name: "signal-teal-light", hex: "#3DCCC8", role: "Teal hover state" },
              ].map((c) => (
                <div key={c.name} className="border border-white/[0.06] p-4">
                  <div className="h-16 sm:h-24 mb-3" style={{ backgroundColor: c.hex }} />
                  <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-white/30 block">{c.name}</span>
                  <span className="font-jetbrains text-[9px] text-white/20 block">{c.hex}</span>
                  <span className="font-satoshi text-xs text-white/15 block mt-1">{c.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Functional */}
          <div>
            <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-white/15 mb-4 block">Functional</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                { name: "success", hex: "#3D7A5F", role: "Positive states" },
                { name: "error", hex: "#C54444", role: "Error states" },
              ].map((c) => (
                <div key={c.name} className="border border-white/[0.06] p-4">
                  <div className="h-16 sm:h-24 mb-3" style={{ backgroundColor: c.hex }} />
                  <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-white/30 block">{c.name}</span>
                  <span className="font-jetbrains text-[9px] text-white/20 block">{c.hex}</span>
                  <span className="font-satoshi text-xs text-white/15 block mt-1">{c.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Zero Radius */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">03</span>
              <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">Zero radius</h2>
            </div>
            <div className="w-10 h-[1px] bg-rust-signal/60" />
          </div>

          <div className="md:w-2/3">
            <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed mb-6">
              Every element, component, card, button, input, dialog, and
              container uses border-radius: 0. This is a core Tangison
              design-language decision, not an accident. Sharp edges
              communicate precision and restraint. Rounded corners soften
              interfaces into friendliness, which is the opposite of
              Tangison&apos;s visual intent.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["Button", "Card", "Input", "Dialog"].map((el) => (
                <div key={el} className="border border-white/[0.06] bg-white/[0.03] p-4 flex items-center justify-center">
                  <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-white/30">{el}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Motion */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">04</span>
              <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">Motion</h2>
            </div>
            <div className="w-10 h-[1px] bg-signal-teal/60" />
          </div>

          <div className="md:w-2/3">
            <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed mb-4">
              Motion serves hierarchy, continuity, feedback, and spatial
              change. Never spectacle. Duration range: 200ms to 800ms. Easing:
              cubic-bezier(0.16, 1, 0.3, 1) for reveals, ease-out for
              interactions. Stagger delays: 50ms to 150ms.
            </p>
            <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed mb-6">
              Primary motion engine: Anime.js v4 for timeline choreography and
              stagger animations. IntersectionObserver for scroll-triggered
              reveals. All animations respect prefers-reduced-motion.
            </p>

            {/* Motion examples */}
            <div className="space-y-4">
              <div className="border border-white/[0.06] p-4">
                <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-white/20 block mb-2">Page entry</span>
                <div className="animate-fade-in-up font-satoshi text-sm text-white/30">Opacity 0 to 1, translateY 8px to 0, 800ms</div>
              </div>
              <div className="border border-white/[0.06] p-4">
                <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-white/20 block mb-2">Section reveals</span>
                <div className="font-satoshi text-sm text-white/30">Opacity 0 to 1, translateY 20px to 0, 600ms, IntersectionObserver</div>
              </div>
              <div className="border border-white/[0.06] p-4">
                <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-white/20 block mb-2">Accent line expand</span>
                <div className="w-20 h-[1px] bg-rust-signal/60 animate-line-expand mt-2" />
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Voice */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">05</span>
              <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">Voice</h2>
            </div>
            <div className="w-10 h-[1px] bg-rust-signal/60" />
          </div>

          <div className="md:w-2/3">
            <div className="space-y-4">
              <div className="border border-white/[0.06] p-4">
                <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-rust-signal/40 mb-2 block">Language</span>
                <p className="font-satoshi text-sm text-white/30">Namibian business English. Concrete nouns and active verbs.</p>
              </div>
              <div className="border border-white/[0.06] p-4">
                <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-rust-signal/40 mb-2 block">Forbidden</span>
                <p className="font-satoshi text-sm text-white/30">No em dashes. No &ldquo;revolutionise&rdquo;, &ldquo;unlock&rdquo;, &ldquo;next generation&rdquo;, &ldquo;cutting edge&rdquo;, &ldquo;seamless&rdquo;, &ldquo;game changing&rdquo;. No fabricated metrics or testimonials.</p>
              </div>
              <div className="border border-white/[0.06] p-4">
                <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-rust-signal/40 mb-2 block">Tone</span>
                <p className="font-satoshi text-sm text-white/30">Restrained authority. Competence through precision, not decoration. Direct statements over vague promises.</p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Footer credit */}
      <section className="relative z-10 px-6 sm:px-8 md:px-12 py-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto w-full">
          <span className="font-jetbrains text-[7px] uppercase tracking-[0.3em] text-white/8">
            &ldquo;Made by Tangison Studio&rdquo; appears on every public page, linked to studio.tangison.com
          </span>
        </div>
      </section>
    </div>
  );
}
