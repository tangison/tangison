"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { ArrowUpRight, Zap, AlertTriangle, Clock, FileCheck } from "lucide-react";

const capabilities = [
  {
    title: "Event-Driven Automation",
    description:
      "Trigger workflows from real events — a form submission, a database change, a message in a queue. No polling. No wasted compute. Actions fire when they need to, not on a schedule hoping something changed.",
    icon: Zap,
  },
  {
    title: "Exception Handling",
    description:
      "Every automation will encounter cases it doesn't expect. We design for that. Graceful degradation, clear error messages, and automatic retry where it makes sense. The system tells you what went wrong, not just that something did.",
    icon: AlertTriangle,
  },
  {
    title: "Scheduled Operations",
    description:
      "Some tasks need to run on a cadence — daily reports, weekly cleanups, monthly reconciliations. We build schedulers that handle missed runs, time zone differences, and overlapping executions without data corruption.",
    icon: Clock,
  },
  {
    title: "Audit & Compliance Trails",
    description:
      "Every automated action logged. Who triggered it, what it did, what data it touched, whether it succeeded. Built-in audit trails for industries where compliance isn't optional.",
    icon: FileCheck,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Map",
    description:
      "Document every manual process you want to automate. Identify the triggers, the decision points, the exceptions, and the handoffs to humans.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "Implement the automation logic. Connect triggers to actions. Add validation at every step. Build the error handling from day one, not as an afterthought.",
  },
  {
    step: "03",
    title: "Harden",
    description:
      "Run the automation against edge cases and failure scenarios. Add monitoring, alerting, and recovery mechanisms. Make it resilient before it goes live.",
  },
  {
    step: "04",
    title: "Run",
    description:
      "Deploy to production with full observability. Watch for new failure patterns. Iterate on exception handling as real usage reveals what you didn't anticipate.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function AutomationSystemsPage() {
  return (
    <SiteShell>
      <PageHeader
        label="AUTOMATION SYSTEMS"
        title="Automation That Handles Real Complexity"
        subtitle="Most automation breaks when it hits an edge case. We build systems that expect things to go wrong — and keep working anyway. Event-driven, exception-aware, and fully auditable."
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
                  Automation sounds simple. Write a script, schedule it, and let it run. That approach works for the happy path — when the data is clean, the APIs respond, and nothing unexpected happens. But the happy path is a small fraction of real operations.
                </p>
                <p>
                  In production, APIs timeout. Data arrives in unexpected formats. Third-party services go down. Permissions change without notice. A human knows how to handle these situations. A brittle script does not. It either crashes silently or, worse, processes bad data without flagging the problem.
                </p>
                <p>
                  Robust automation handles exceptions the way a competent operator would. It retries when a transient failure occurs. It pauses and alerts when something truly unexpected happens. It logs every action so you can trace problems back to their source. It doesn't pretend edge cases don't exist.
                </p>
                <p>
                  We build automation systems for organisations that can't afford silent failures. Financial services that need audit trails. Healthcare operations where a missed step has consequences. Logistics companies where a delayed trigger means delayed shipments. In these contexts, automation must be reliable — not most of the time, but all of the time.
                </p>
                <p>
                  Our approach starts with mapping the full process, including every known exception. Then we build the automation with error handling baked in, not bolted on. We test against failure scenarios before deployment. And we add observability so your team always knows what the system is doing and whether it's doing it correctly.
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
            Tired of automation that breaks in production?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            Talk to us about building automation that handles the real world. Not just the happy path.
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
