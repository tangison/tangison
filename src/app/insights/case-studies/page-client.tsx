"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, FlaskConical } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

/* ──────────────────────────────────────────────
   ANIMATION VARIANTS
   ────────────────────────────────────────────── */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

/* ──────────────────────────────────────────────
   CASE STUDIES PAGE
   ────────────────────────────────────────────── */

export function CaseStudiesPage() {
  return (
    <SiteShell>
      {/* Section 1: Page Header */}
      <section
        className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 lg:px-20"
        aria-label="Case studies header"
      >
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.2em] text-ink-muted hover:text-rust-signal transition-colors duration-300 mb-8 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Insights
            </Link>
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-rust-signal block mb-6">
              CASE STUDIES
            </span>
            <h1 className="font-cabinet text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-6">
              Real-World Applications
            </h1>
            <p className="font-satoshi text-lg md:text-xl text-ink-muted max-w-2xl leading-relaxed">
              Detailed accounts of the challenges, approaches, and outcomes from
              Tangison projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Coming Soon State */}
      <section
        className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-gray"
        aria-label="Case studies coming soon"
      >
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Icon */}
            <div className="w-16 h-16 border border-black/[0.06] flex items-center justify-center mx-auto mb-8">
              <FlaskConical className="w-6 h-6 text-ink-muted" />
            </div>

            {/* Statement */}
            <p className="font-satoshi text-ink text-lg md:text-xl leading-relaxed mb-4">
              Case studies from Tangison projects will appear here.
            </p>
            <p className="font-satoshi text-ink-muted text-base leading-relaxed">
              Each will detail the challenge, approach, and outcome.
            </p>

            {/* Decorative divider */}
            <div
              className="w-12 h-[1px] bg-rust-signal/30 mx-auto my-10"
              aria-hidden="true"
            />

            {/* CTA */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-ink text-warm-white px-8 py-4 font-jetbrains text-[11px] uppercase tracking-[0.15em] hover:bg-ink-light transition-colors duration-300"
            >
              Discuss a project
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
