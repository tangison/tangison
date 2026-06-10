"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

const projects = [
  {
    title: "Agent Architecture",
    status: "Active",
    description:
      "Multi-agent orchestration patterns for enterprise AI. Hierarchical agent systems, skill composition, and autonomous decision-making.",
    tags: ["Multi-Agent", "Orchestration", "Enterprise AI", "Autonomy"],
  },
  {
    title: "Offline-First AI",
    status: "Active",
    description:
      "AI systems that work without constant internet. Built for African network realities. Limited bandwidth. Intermittent connectivity.",
    tags: ["Edge Computing", "Offline", "Low-Bandwidth", "Resilience"],
  },
  {
    title: "African Language Models",
    status: "Active",
    description:
      "Context-aware AI models for Namibian and Southern African languages. Multilingual interaction. Local language processing.",
    tags: ["NLP", "Multilingual", "Namibia", "Local Languages"],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function ResearchProjectsPage() {
  return (
    <SiteShell>
      {/* Section 1: Page Header */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 bg-warm-white">
        <div className="max-w-[1400px] mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Link
              href="/research"
              className="inline-flex items-center gap-2 font-jetbrains text-[10px] text-ink-muted/50 uppercase tracking-[0.25em] hover:text-ink-muted transition-colors duration-300 group"
            >
              <ArrowLeft className="w-3 h-3 transition-transform duration-300 group-hover:-translate-x-1" />
              Research
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-rust-signal" aria-hidden="true" />
            <span className="font-jetbrains text-[10px] text-ink-muted uppercase tracking-[0.3em]">
              PROJECTS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-cabinet text-[clamp(2.2rem,5vw,4.5rem)] font-black tracking-[-0.03em] leading-[0.95] text-ink max-w-5xl"
          >
            Lab Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-6 text-ink-muted font-satoshi text-lg md:text-xl max-w-2xl font-light leading-relaxed"
          >
            Research initiatives and experimental systems from the TANGISON lab.
          </motion.p>
        </div>
      </section>

      {/* Section 2: Project Cards */}
      <section
        className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white"
        aria-label="Research projects"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="border border-black/[0.06] p-6 md:p-8 bg-warm-white hover:bg-warm-gray transition-all duration-500 h-full flex flex-col">
                  {/* Status Badge */}
                  <div className="mb-6">
                    <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 bg-rust-signal/10 text-rust-signal">
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-cabinet text-2xl md:text-3xl tracking-tight text-ink mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-satoshi text-ink-muted text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.1em] px-2 py-0.5 bg-warm-gray"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: CTA */}
      <section
        className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-atlantic-black"
        aria-label="Research collaboration"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
              Partner
            </span>
            <h2 className="font-cabinet text-3xl md:text-5xl tracking-tight text-skeleton-bone mb-6">
              Collaborate on research
            </h2>
            <p className="font-satoshi text-fog-gray/60 text-lg mb-10 font-light leading-relaxed">
              We partner with organizations advancing AI for African contexts
              and beyond.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-skeleton-bone text-atlantic-black px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-fog-gray transition-all duration-300 group"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
