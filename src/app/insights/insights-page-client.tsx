"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealSection } from "@/components/reveal-section";
import { insights } from "@/lib/insights";

export function InsightsPageClient() {
  return (
    <div className="min-h-screen bg-atlantic-black">
      {/* Hero */}
      <section className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/50">
              Insights
            </span>
          </div>
          <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] text-skeleton-bone leading-[1.1] mb-5">
            Notes from the
            <br />
            build
          </h1>
          <div className="w-10 h-[1px] bg-rust-signal/60 animate-line-expand" />
          <p className="font-satoshi text-sm sm:text-base text-white/55 leading-relaxed max-w-lg mt-5">
            Announcements, partnership notes and field reports. Written by the
            team doing the work, from Windhoek.
          </p>
        </div>
      </section>

      {/* Article list */}
      <section className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto w-full">
          <ul className="flex flex-col">
            {insights.map((insight) => (
              <RevealSection
                key={insight.slug}
                as="li"
                className="border-t border-white/[0.06] last:border-b"
              >
                <Link
                  href={`/insights/${insight.slug}`}
                  className="group block py-8 sm:py-10"
                >
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
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
                  <h2 className="font-cabinet text-xl sm:text-2xl md:text-3xl tracking-[-0.01em] text-skeleton-bone group-hover:text-white transition-colors duration-300 mb-3">
                    {insight.title}
                  </h2>
                  <p className="font-satoshi text-sm sm:text-[15px] text-white/55 leading-[1.6] max-w-2xl mb-4">
                    {insight.description}
                  </p>
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-rust-signal/80 transition-colors duration-500 inline-flex items-center gap-1.5">
                    Read the article
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                </Link>
              </RevealSection>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
