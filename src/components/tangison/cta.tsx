"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-20 overflow-hidden bg-deep-ocean"
      aria-label="Contact and call to action"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-atlantic-black via-atlantic-black/95 to-deep-ocean" />

      {/* Ocean fog background image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/cta-ocean-fog.png"
          alt=""
          role="presentation"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.4)" }}
          loading="lazy"
        />
      </div>

      {/* Abstract geometric elements — angular, no circles */}
      <div
        className="absolute -right-32 -top-32 w-[500px] h-[500px] border-[1px] border-white/[0.03] pointer-events-none rotate-45"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 -bottom-24 w-[350px] h-[350px] border-[1px] border-white/[0.02] pointer-events-none rotate-12"
        aria-hidden="true"
      />
      {/* Signal line accents */}
      <div
        className="absolute right-20 top-1/4 w-[1px] h-48 bg-white/[0.03] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute left-16 bottom-1/4 w-[1px] h-32 bg-white/[0.03] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-cabinet text-[clamp(2.5rem,6vw,6rem)] font-black tracking-[-0.04em] text-white mb-8 leading-[0.9]"
        >
          Build systems
          <br />
          that endure.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-satoshi text-fog-gray text-lg md:text-xl mb-14 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Engage Tangison for strategic infrastructure planning, digital
          sovereignty audits, or custom system architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-skeleton-bone text-atlantic-black px-10 py-5 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-white hover:scale-[1.02] transition-all duration-300 group shadow-2xl shadow-black/30"
          >
            Request Strategic Access
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 flex items-center justify-center gap-3 font-jetbrains text-[10px] text-white/30 uppercase tracking-[0.3em]"
        >
          <div className="w-1.5 h-1.5 bg-rust-signal/50" aria-hidden="true" />
          <span>Based in Windhoek, Namibia</span>
        </motion.div>
      </div>
    </section>
  );
}
