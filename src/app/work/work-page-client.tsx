"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function WorkPage() {
  return (
    <div className="min-h-screen bg-atlantic-black">
      {/* Hero */}
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-atlantic-black/[0.85] z-[1]" />
        <div className="relative z-[2] px-6 sm:px-8 md:px-12 pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/25">Work</span>
            </div>
            <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] text-skeleton-bone leading-[1.1] mb-5">
              Work
            </h1>
            <div className="w-10 h-[1px] bg-rust-signal/60 animate-line-expand" />
          </div>
        </div>
      </section>

      {/* Coming section */}
      <section className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <p className="font-satoshi text-base sm:text-lg text-white/45 leading-relaxed mb-6">
              We publish client work, prototypes, demonstrations and research with honest evidence.
              This section is being built. When we have verified results to share, we will share them
              with the specificity and honesty our principles require.
            </p>
            <p className="font-satoshi text-base sm:text-lg text-white/45 leading-relaxed mb-8">
              No fabricated metrics. No unproven claims. No testimonials written by marketers. Every
              case study will reference a specific system, a real constraint and an actual result.
            </p>
            <div className="flex items-center gap-3 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-signal-teal opacity-40" />
                <span className="relative inline-flex h-2 w-2 bg-signal-teal" />
              </span>
              <span className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-white/35">
                Building this section
              </span>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 bg-rust-signal hover:bg-rust-light text-warm-white font-cabinet text-sm uppercase tracking-[0.2em] px-6 py-3.5 transition-colors duration-300"
            >
              See our solutions
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
