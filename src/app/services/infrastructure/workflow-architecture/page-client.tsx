"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { ArrowUpRight, Workflow, UserCheck, Radio, Shield } from "lucide-react";

const capabilities = [
  {
    title: "State Machine Design",
    description:
      "Model every workflow as a state machine with explicit transitions. Know exactly what state a process is in at any time. No ambiguous statuses, no stuck processes, no mystery about what happens next.",
    icon: Workflow,
  },
  {
    title: "Human-in-the-Loop Patterns",
    description:
      "AI handles the routine. Humans decide on the ambiguous cases. Design clear escalation points where a person reviews, approves, or corrects AI output before it moves forward. No silent AI decisions on high-stakes tasks.",
    icon: UserCheck,
  },
  {
    title: "Event-Driven Architecture",
    description:
      "Workflows that react to events instead of waiting on schedules. A document arrives, a threshold is crossed, an approval comes through — the next step starts immediately. No gaps, no delays.",
    icon: Radio,
  },
  {
    title: "Resilient Pipelines",
    description:
      "Pipelines that recover from failures without losing data. Checkpointing, idempotent operations, and dead-letter queues. If a step fails, you retry from that step — not from the beginning.",
    icon: Shield,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Map",
    description:
      "Document the current process end to end. Identify every step, every decision point, every handoff between humans and systems. Find the bottlenecks and the failure modes.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Model the workflow as a state machine. Define states, transitions, and guards. Decide where AI acts, where humans decide, and how failures get handled.",
  },
  {
    step: "03",
    title: "Implement",
    description:
      "Build the workflow engine. Connect it to your existing systems. Add monitoring at every transition so you can see where work is and whether it's progressing.",
  },
  {
    step: "04",
    title: "Iterate",
    description:
      "Real usage reveals what the design missed. Add new states for unexpected conditions. Adjust escalation rules. Tighten or loosen human review thresholds based on AI accuracy.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function WorkflowArchitecturePage() {
  return (
    <SiteShell>
      <PageHeader
        label="WORKFLOW ARCHITECTURE"
        title="Design Workflows That Adapt"
        subtitle="AI doesn't operate in isolation. It fits into processes that involve people, other systems, and changing requirements. We design workflow architectures that keep everything connected — and keep working when conditions change."
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
                  A workflow is the connective tissue between AI and the rest of your organisation. It determines how work enters the system, how it moves through processing stages, where humans need to intervene, and how the final output reaches its destination. Get the workflow wrong, and even the best AI model becomes a bottleneck instead of an accelerator.
                </p>
                <p>
                  Most organisations don't design their workflows — they inherit them. Processes built for human execution get automated piece by piece, with no overall architecture holding them together. The result is a patchwork of scripts, manual steps, and brittle integrations that nobody fully understands and nobody wants to touch.
                </p>
                <p>
                  Workflow architecture fixes this by treating the entire process as a first-class design problem. Every state is explicit. Every transition is defined. Every failure mode has a handler. When a new requirement arrives — and it will — you add a new state and a new transition instead of rewriting the whole pipeline.
                </p>
                <p>
                  Human-in-the-loop patterns are critical here. Not every decision should be automated. Loan approvals above a certain threshold need human review. Medical diagnoses need clinician confirmation. Legal document analysis needs a lawyer's sign-off. The question isn't whether to involve humans — it's where, and how to make that involvement efficient rather than burdensome.
                </p>
                <p>
                  We design workflow architectures that answer these questions for your specific context. State machines that track exactly where every piece of work stands. Escalation rules that bring humans in at the right moments. Event-driven triggers that keep work moving instead of waiting on polls. And resilient pipelines that recover from failures without losing progress or data.
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
            Need workflows that don't break under pressure?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            Tell us about your processes. We'll design architecture that connects AI, people, and systems — and adapts when requirements change.
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
