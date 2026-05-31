"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Check, Zap, Cpu, GitBranch } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

const features = [
  "Hermes Agent — autonomous multi-task orchestration",
  "59 built-in production-ready skills",
  "OpenClaw-powered open integration layer",
  "Graphify — visual workflow and pipeline builder",
  "PAUL — prompt architecture and utility layer",
  "BaseAI — foundational AI primitives and interfaces",
  "Multi-agent orchestration for complex workflows",
  "Sovereign deployment — zero external dependencies",
];

const integrations = [
  {
    name: "OpenClaw",
    description: "Open integration layer for connecting external tools, APIs, and data sources into the agent workflow.",
    icon: GitBranch,
  },
  {
    name: "Graphify",
    description: "Visual workflow builder that transforms complex agent pipelines into composable, auditable graphs.",
    icon: Zap,
  },
  {
    name: "PAUL",
    description: "Prompt architecture and utility layer — structured prompt engineering for consistent, reliable outputs.",
    icon: Cpu,
  },
  {
    name: "BaseAI",
    description: "Foundational AI primitives and interfaces that every Tangison Agent builds upon. The bedrock layer.",
    icon: Cpu,
  },
];

export function TangisonAgentPage() {
  return (
    <SiteShell>
      {/* Page Header */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 bg-warm-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-jetbrains text-[10px] text-ink-muted/60 uppercase tracking-[0.25em] hover:text-ink-muted transition-colors duration-300 group"
            >
              <ArrowLeft className="w-3 h-3 transition-transform duration-300 group-hover:-translate-x-1" />
              Products
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-rust-signal" aria-hidden="true" />
            <span className="font-jetbrains text-[10px] text-ink-muted uppercase tracking-[0.3em]">
              PRODUCT
            </span>
            <span className="font-jetbrains text-[9px] bg-rust-signal/10 text-rust-signal px-2 py-1 uppercase tracking-[0.2em]">
              LIVE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-cabinet text-[clamp(2.2rem,5vw,4.5rem)] font-black tracking-[-0.03em] leading-[0.95] text-ink max-w-5xl"
          >
            Tangison Agent
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-ink-muted font-satoshi text-lg md:text-xl max-w-2xl font-light leading-relaxed"
          >
            Sovereign AI Agent Platform. OpenClaw-powered + Graphify + PAUL + BaseAI + 59 Skills. Powered by the Hermes Agent.
          </motion.p>
        </div>
      </section>

      {/* Decorative Image */}
      <section className="px-6 md:px-12 lg:px-20 bg-warm-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-64 md:h-96 overflow-hidden border border-black/[0.06]"
          >
            <Image
              src="/images/bento-signal-tower.png"
              alt="Tangison Agent — signal tower, multi-agent orchestration"
              className="object-cover cinematic-image"
              fill
              sizes="(max-width: 768px) 100vw, 1400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-white/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <div className="font-jetbrains text-[9px] text-ink-muted/50 uppercase tracking-widest mb-1">
                  Agent Architecture
                </div>
                <div className="font-jetbrains text-xs text-ink-muted/70 tracking-wider">
                  Hermes · Multi-Agent · Sovereign
                </div>
              </div>
              <div className="font-jetbrains text-[9px] text-rust-signal/50 uppercase tracking-widest">
                59 Built-in Skills
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white" aria-label="About Tangison Agent">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-[1px] bg-rust-signal/50" aria-hidden="true" />
                  <span className="font-jetbrains text-[10px] text-ink-muted/50 uppercase tracking-[0.3em]">
                    Overview
                  </span>
                </div>

                <div className="space-y-6">
                  <p className="font-satoshi text-ink/80 text-base md:text-lg leading-relaxed">
                    The Tangison Agent is a sovereign AI agent platform designed for autonomous operation in any environment. At its core is the Hermes Agent — an orchestration engine that coordinates multiple AI agents, each with specialized skills, to accomplish complex tasks without human intervention.
                  </p>
                  <p className="font-satoshi text-ink/80 text-base md:text-lg leading-relaxed">
                    With 59 built-in production-ready skills and integration layers including OpenClaw, Graphify, PAUL, and BaseAI, the Tangison Agent handles everything from data retrieval and analysis to content generation and workflow automation. Each component is modular — deploy what you need, extend when you&apos;re ready.
                  </p>
                  <p className="font-satoshi text-ink/80 text-base md:text-lg leading-relaxed">
                    Sovereign deployment means the agent runs entirely within your infrastructure. No data leaves your jurisdiction. No API calls to foreign services. Built for environments where data sovereignty isn&apos;t optional — it&apos;s a hard requirement.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border border-black/[0.06] bg-warm-gray/50 p-6 md:p-8"
              >
                <h3 className="font-cabinet text-lg tracking-tight text-ink mb-6">
                  Key Capabilities
                </h3>
                <ul className="space-y-4">
                  {features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-4 h-4 text-rust-signal mt-0.5 shrink-0" />
                      <span className="font-satoshi text-ink-muted text-sm leading-relaxed">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Modules */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Integration modules">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-rust-signal/50" aria-hidden="true" />
              <span className="font-jetbrains text-[10px] text-ink-muted/50 uppercase tracking-[0.3em]">
                Integration Modules
              </span>
            </div>
            <h2 className="font-cabinet text-3xl md:text-4xl tracking-tight text-ink">
              The stack behind the agent.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {integrations.map((integration, i) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border border-black/[0.06] p-6 md:p-8 bg-warm-white hover:bg-warm-gray transition-all duration-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rust-signal/10 flex items-center justify-center shrink-0">
                    <integration.icon className="w-5 h-5 text-rust-signal" />
                  </div>
                  <div>
                    <h3 className="font-cabinet text-xl tracking-tight text-ink mb-2 group-hover:text-ink-light transition-colors">
                      {integration.name}
                    </h3>
                    <p className="font-satoshi text-ink-muted text-sm leading-relaxed">
                      {integration.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Links">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://tangison-agent.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-skeleton-bone px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-ink-light transition-all duration-300 group"
            >
              Launch Tangison Agent
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://github.com/tangison/tangison-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-black/[0.12] bg-warm-white text-ink px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-warm-gray transition-all duration-300 group"
            >
              View on GitHub
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-atlantic-black" aria-label="Next step">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
              Deploy Sovereign AI
            </span>
            <h2 className="font-cabinet text-3xl md:text-5xl tracking-tight text-skeleton-bone mb-6">
              Ready for autonomous operations?
            </h2>
            <p className="font-satoshi text-fog-gray/60 text-lg mb-10 font-light">
              Deploy the Tangison Agent in your infrastructure. Zero external dependencies.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-skeleton-bone text-atlantic-black px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-fog-gray transition-all duration-300 group"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
