"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { ArrowUpRight, Bot, Settings, Server, GitBranch, Activity, Layers } from "lucide-react";

const capabilities = [
  {
    title: "Agent Orchestration",
    description:
      "Coordinate multiple AI agents to work together on complex tasks. Design orchestration patterns that handle dependencies, parallelization, and error recovery without manual intervention.",
    icon: Bot,
  },
  {
    title: "Automation Systems",
    description:
      "Build robust automation pipelines that handle real-world complexity: exceptions, failures, and edge cases. Systems that run reliably without constant human oversight.",
    icon: Settings,
  },
  {
    title: "Deployment Infrastructure",
    description:
      "Production infrastructure that gets AI from prototype to production. Model serving, scaling, monitoring, and rollback, engineered for the realities of operating in Africa.",
    icon: Server,
  },
  {
    title: "Workflow Architecture",
    description:
      "Design and implement intelligent workflows that connect AI capabilities with human operations. Architecture that adapts to changing requirements without rebuilding from scratch.",
    icon: GitBranch,
  },
  {
    title: "Operational AI",
    description:
      "Keep AI systems running at peak performance in production. Monitoring, alerting, drift detection, and automated retraining pipelines that maintain system quality over time.",
    icon: Activity,
  },
  {
    title: "Integration Layer",
    description:
      "Connect your AI infrastructure to the broader ecosystem: APIs, data pipelines, authentication, and observability. The layer that makes everything work together.",
    icon: Layers,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function InfrastructurePage() {
  return (
    <SiteShell>
      {/* Page Header */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeInUp}>
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-rust-signal block mb-6">
              AI INFRASTRUCTURE
            </span>
            <h1 className="font-cabinet text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-6">
              Systems That Scale
            </h1>
            <p className="font-satoshi text-lg md:text-xl text-ink-muted max-w-2xl leading-relaxed">
              AI only delivers value when it runs reliably in production. We
              build the orchestration, automation, deployment, and operations
              infrastructure that keeps intelligent systems running at scale,
              even in challenging environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="border border-black/[0.06] bg-warm-gray p-8 md:p-10 hover:border-black/[0.1] transition-colors duration-500"
              >
                <cap.icon className="w-5 h-5 text-rust-signal mb-5" />
                <h3 className="font-cabinet text-xl md:text-2xl font-bold tracking-tight text-ink mb-3">
                  {cap.title}
                </h3>
                <p className="font-satoshi text-ink-muted text-sm md:text-base leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="w-12 h-[2px] bg-rust-signal mx-auto mb-8" aria-hidden="true" />
            <h2 className="font-cabinet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-6">
              Need AI infrastructure that holds up in production?
            </h2>
            <p className="font-satoshi text-ink-muted text-lg mb-10 max-w-lg mx-auto">
              Let&apos;s discuss how to get your AI systems running reliably, from deployment to day-to-day operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-ink text-warm-white px-8 py-4 font-jetbrains text-[11px] uppercase tracking-[0.15em] hover:bg-ink-light transition-colors duration-300 group"
            >
              Discuss your project
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
