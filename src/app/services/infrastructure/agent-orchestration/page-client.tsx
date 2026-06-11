"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { ArrowUpRight, Bot, GitMerge, RefreshCw, Eye } from "lucide-react";

const capabilities = [
  {
    title: "Multi-Agent Coordination",
    description:
      "Run several AI agents in parallel or sequence, each handling a specific part of the task. Define how agents hand off work, share context, and resolve conflicts. No single point of failure.",
    icon: Bot,
  },
  {
    title: "Task Decomposition",
    description:
      "Break complex objectives into smaller, executable units. Assign each unit to the right agent. Manage dependencies between subtasks so nothing blocks silently.",
    icon: GitMerge,
  },
  {
    title: "Error Recovery & Retry",
    description:
      "When an agent fails, the system doesn't. Automatic retry with backoff, fallback to alternative agents, and clear escalation paths. Your workflow keeps moving even when individual components stumble.",
    icon: RefreshCw,
  },
  {
    title: "Agent Monitoring",
    description:
      "Track what every agent is doing in real time. See task progress, resource usage, and failure rates. Know when an agent is struggling before it causes a bottleneck.",
    icon: Eye,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Design",
    description:
      "Map the task to agent responsibilities. Define handoff points, data flows, and failure modes before writing a single line of code.",
  },
  {
    step: "02",
    title: "Configure",
    description:
      "Set up each agent with its role, tools, and constraints. Wire the communication between agents. Define retry logic and escalation rules.",
  },
  {
    step: "03",
    title: "Test",
    description:
      "Run the full orchestration under simulated conditions. Inject failures. Verify recovery. Measure throughput and latency.",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "Deploy the orchestrated system to production. Add agents as demand grows. Monitor performance and adjust coordination logic as patterns emerge.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function AgentOrchestrationPage() {
  return (
    <SiteShell>
      <PageHeader
        label="AGENT ORCHESTRATION"
        title="Coordinate AI Agents on Complex Tasks"
        subtitle="When a single AI agent isn't enough, you need orchestration. We design systems where multiple agents work together — each handling what it does best, recovering from failures, and delivering results without constant human oversight."
        backHref="/services/infrastructure"
        backLabel="AI Infrastructure"
      />

      {/* Why This Matters */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <motion.div {...fadeInUp}>
              <div className="w-8 h-[2px] bg-rust-signal mb-8" aria-hidden="true" />
              <h2 className="font-cabinet text-3xl md:text-4xl font-bold tracking-tight text-ink mb-8">
                Why This Matters
              </h2>
              <div className="space-y-6 font-satoshi text-ink-muted text-base md:text-lg leading-relaxed">
                <p>
                  Most AI projects start with a single model doing a single thing. That works for demos. It falls apart in production. Real business tasks involve multiple steps, different types of reasoning, and decisions that depend on earlier outcomes. One model cannot handle all of that well.
                </p>
                <p>
                  Multi-agent orchestration solves this by assigning each part of a task to a specialised agent. One agent handles data retrieval. Another processes it. A third makes decisions based on the results. A fourth formats the output for the end user. Each agent does one thing well, and the orchestration layer makes sure they work together.
                </p>
                <p>
                  The hard part isn't building individual agents — it's coordinating them. What happens when an agent takes too long? What if it returns bad data? How do you retry without duplicating work? How do you track what went wrong when the output doesn't match expectations? These are the questions that determine whether a multi-agent system survives contact with real users.
                </p>
                <p>
                  We design orchestration systems that answer these questions upfront. Dependency graphs so agents run in the right order. Retry logic with exponential backoff. Fallback agents that take over when the primary fails. Observability so you can see every handoff, every failure, and every recovery in real time.
                </p>
                <p>
                  If you're building AI systems that need to handle complex, multi-step tasks — document processing pipelines, research workflows, customer service chains, data enrichment flows — you need more than a single model call. You need agents that work together, recover from problems, and deliver consistent results even when conditions change.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-gray">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            {...fadeInUp}
            className="font-cabinet text-3xl md:text-4xl font-bold tracking-tight text-ink mb-12"
          >
            What We Build
          </motion.h2>
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
                className="border border-black/[0.06] bg-warm-white p-8 md:p-10 hover:border-black/[0.1] transition-colors duration-500"
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

      {/* How It Works */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            {...fadeInUp}
            className="font-cabinet text-3xl md:text-4xl font-bold tracking-tight text-ink mb-12"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
              >
                <span className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.2em] block mb-3">
                  Step {step.step}
                </span>
                <h3 className="font-cabinet text-xl font-bold tracking-tight text-ink mb-3">
                  {step.title}
                </h3>
                <p className="font-satoshi text-ink-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-atlantic-black">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="w-12 h-[2px] bg-rust-signal mx-auto mb-8" aria-hidden="true" />
          <h2 className="font-cabinet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-skeleton-bone mb-6">
            Need multiple agents working together?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            Tell us about the task. We'll design the orchestration — agents, handoffs, recovery, and monitoring.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-rust-signal text-warm-white px-8 py-4 font-jetbrains text-[11px] uppercase tracking-[0.15em] hover:bg-rust-light transition-colors duration-300 group"
          >
            Discuss your project
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
