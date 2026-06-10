"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

export function StudioPage() {
  return (
    <SiteShell>
      {/* Hero section */}
      <section
        className="py-32 md:py-44 px-6 md:px-12 lg:px-20 bg-warm-white"
        aria-label="Tangison Technologies"
      >
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-jetbrains text-[10px] text-ink-muted/50 uppercase tracking-[0.3em] block mb-6">
              TANGISON TECHNOLOGIES
            </span>
            <h1 className="font-cabinet text-[clamp(2.5rem,6vw,6rem)] font-black tracking-[-0.04em] leading-[0.9] text-ink mb-8">
              One company.
              <br />
              Two arms.
            </h1>
            <p className="font-satoshi text-ink-muted text-lg md:text-xl leading-relaxed max-w-2xl">
              Tangison is an applied AI laboratory and a creative studio
              operating out of Windhoek, Namibia. The laboratory researches and
              builds AI systems. The studio designs and builds the interfaces
              through which those systems become useful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two cards section */}
      <section
        className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-warm-white"
        aria-label="Our two arms"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Card 1 — Laboratory */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="https://tangison.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-fog-gray p-8 md:p-10 transition-colors duration-300 hover:border-[#2CB5B4]"
              >
                <span className="font-jetbrains text-[10px] text-ink-muted/50 uppercase tracking-[0.3em] block mb-4">
                  TANGISON LABS
                </span>
                <h2 className="font-cabinet text-2xl md:text-3xl font-bold tracking-tight text-ink mb-4">
                  Applied AI Laboratory
                </h2>
                <p className="font-satoshi text-ink-muted text-base leading-relaxed mb-6">
                  Custom AI agents, self-hosted infrastructure, applied
                  research, and products built for African business conditions.
                </p>
                <span className="font-jetbrains text-[11px] uppercase tracking-[0.2em] text-ink-muted/60 group-hover:text-ink transition-colors duration-300 inline-flex items-center gap-2">
                  Explore the Lab
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </motion.div>

            {/* Card 2 — Studio */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <a
                href="https://studio.tangison.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-fog-gray p-8 md:p-10 transition-colors duration-300 hover:border-[#2CB5B4]"
              >
                <span className="font-jetbrains text-[10px] text-ink-muted/50 uppercase tracking-[0.3em] block mb-4">
                  TANGISON STUDIO
                </span>
                <h2 className="font-cabinet text-2xl md:text-3xl font-bold tracking-tight text-ink mb-4">
                  Creative Digital Agency
                </h2>
                <p className="font-satoshi text-ink-muted text-base leading-relaxed mb-6">
                  Web design, brand systems, application design, and creative
                  direction from Windhoek.
                </p>
                <span className="font-jetbrains text-[11px] uppercase tracking-[0.2em] text-ink-muted/60 group-hover:text-ink transition-colors duration-300 inline-flex items-center gap-2">
                  Explore the Studio
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom line */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-warm-white" aria-hidden="true">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.p
            {...fadeUp}
            className="font-jetbrains text-[10px] text-ink-muted/30 uppercase tracking-[0.3em]"
          >
            Tangison Technologies · Windhoek, Namibia · Est. 2024
          </motion.p>
        </div>
      </section>
    </SiteShell>
  );
}
