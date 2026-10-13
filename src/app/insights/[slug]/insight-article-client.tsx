"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { RevealSection } from "@/components/reveal-section";
import { getInsight } from "@/lib/insights";

/**
 * Article renderer for a single insight. Long Document structure in the
 * site's design language: one reading column (max ~68ch equivalent),
 * Cabinet headings, Satoshi body, quiet meta row.
 */
export function InsightArticleClient({ slug }: { slug: string }) {
  const insight = getInsight(slug);
  if (!insight) return null;

  return (
    <div className="min-h-screen bg-atlantic-black">
      {/* Article hero */}
      <section className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto w-full">
          <Link
            href="/insights"
            className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-rust-signal transition-colors duration-300 inline-flex items-center gap-1.5 mb-8"
          >
            <ArrowLeft className="w-3 h-3" />
            All insights
          </Link>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
            <span className="font-jetbrains text-[9px] uppercase tracking-[0.25em] text-rust-signal/[0.85]">
              {insight.category}
            </span>
            <span className="font-jetbrains text-[9px] uppercase tracking-[0.25em] text-white/50">
              {insight.dateDisplay}
            </span>
            <span className="font-jetbrains text-[9px] uppercase tracking-[0.25em] text-white/50">
              {insight.readMinutes} min read
            </span>
          </div>

          <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl tracking-[-0.01em] text-skeleton-bone leading-[1.12] mb-5">
            {insight.title}
          </h1>
          <div className="w-10 h-[1px] bg-rust-signal/60" />
        </div>
      </section>

      {/* Body */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto w-full">
          <div className="flex flex-col gap-6">
            {insight.blocks.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="font-cabinet text-xl sm:text-2xl tracking-[0.02em] uppercase text-skeleton-bone mt-8 sm:mt-10"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="flex flex-col gap-3 sm:pl-1">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="w-1.5 h-1.5 mt-[9px] shrink-0 bg-signal-teal/70"
                        />
                        <span className="font-satoshi text-[15px] sm:text-base text-white/50 leading-[1.7]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p
                  key={i}
                  className={
                    "font-satoshi text-[15px] sm:text-base leading-[1.8] " +
                    (i === 0
                      ? "text-white/70 text-base sm:text-lg"
                      : "text-white/50")
                  }
                >
                  {block.text}
                </p>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* Article CTA */}
      <RevealSection className="relative z-10 border-t border-white/[0.06] px-6 sm:px-8 md:px-12 lg:px-16 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="font-cabinet text-xl sm:text-2xl tracking-[0.02em] uppercase text-skeleton-bone mb-3">
              Discuss a system
            </h2>
            <p className="font-satoshi text-sm text-white/55 leading-relaxed max-w-md">
              Network security, a platform on top of it, or a tender that needs
              both. Tell us the conditions and we propose what fits.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-rust-signal hover:bg-rust-light text-warm-white font-cabinet text-sm uppercase tracking-[0.2em] px-6 py-3.5 transition-colors duration-300 self-start sm:self-center shrink-0"
          >
            Contact us
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </RevealSection>
    </div>
  );
}
