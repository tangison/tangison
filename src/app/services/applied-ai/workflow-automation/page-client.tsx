"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import {
  ArrowUpRight,
  FileCheck,
  CheckCircle,
  Database,
  Headphones,
} from "lucide-react";

const capabilities = [
  {
    title: "Document Processing",
    description:
      "Ingest, classify, and extract data from invoices, contracts, applications, and correspondence. Handle multiple languages and formats. Route exceptions to the right person automatically.",
    icon: FileCheck,
  },
  {
    title: "Approval Automation",
    description:
      "Automate approval chains that follow your organisational rules. Escalate edge cases to human decision-makers. Maintain full audit trails for every decision. Speed without sacrificing accountability.",
    icon: CheckCircle,
  },
  {
    title: "Data Pipeline Automation",
    description:
      "Move, transform, and validate data between systems without manual intervention. Detect quality issues before they propagate. Reconciliation workflows that catch discrepancies early.",
    icon: Database,
  },
  {
    title: "Customer Service Automation",
    description:
      "Handle routine enquiries, route complex issues to the right team, and follow up automatically. Not chatbots that frustrate customers. Systems that resolve requests and know when to hand off.",
    icon: Headphones,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Map",
    description:
      "We document your existing workflows end-to-end. Every step, every decision point, every exception path. We identify bottlenecks, manual handoffs, and processes where automation creates the most value.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Design automated workflows that handle the standard path and the exceptions. Define escalation rules, approval thresholds, and fallback procedures. Build for the real world, not the ideal one.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Implement workflows with context-aware decision logic. Integrate with your existing systems. Test against real scenarios, including edge cases your team has been handling manually for years.",
  },
  {
    step: "04",
    title: "Monitor",
    description:
      "Track workflow performance, exception rates, and processing times. Identify new automation opportunities as they emerge. Continuous improvement based on actual operating data.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function WorkflowAutomationPage() {
  return (
    <SiteShell>
      <PageHeader
        label="WORKFLOW AUTOMATION"
        title="Automate the Work That Slows You Down"
        subtitle="Context-aware automation that handles exceptions, escalates when needed, and adapts to the way your organisation actually works."
        backHref="/services/applied-ai"
        backLabel="Applied AI"
      />

      {/* Why This Matters */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <motion.div {...fadeInUp}>
              <div
                className="w-8 h-[2px] bg-rust-signal mb-8"
                aria-hidden="true"
              />
              <h2 className="font-cabinet text-3xl md:text-4xl font-bold tracking-tight text-ink mb-8">
                Why This Matters
              </h2>
            </motion.div>
            <motion.div {...fadeInUp}>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-6">
                Most workflow automation fails for the same reason: it assumes
                processes are predictable. They are not. A loan application in
                Accra might require different documentation than one in Kumasi.
                An insurance claim after a flood follows a different path than
                one after a burglary. A procurement request above a certain
                threshold needs different approvals than one below it. These
                variations are not edge cases — they are the reality of
                operational work.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-6">
                Traditional automation handles the happy path. It processes
                standard forms, routes routine requests, and moves data between
                systems when everything aligns. But the moment something does
                not fit the template — a missing field, an unusual combination,
                a rule that does not apply — the workflow breaks. It either
                stops entirely, requiring manual intervention, or processes
                incorrectly, creating problems downstream that someone has to
                fix later. The automation that was supposed to save time ends up
                creating a different kind of work: exception handling.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-6">
                AI-driven workflow automation takes a different approach. Instead
                of rigid rule engines, it uses context-aware decision logic that
                can interpret variations, classify exceptions, and determine the
                appropriate response. When a document arrives with unexpected
                formatting, the system adapts. When a request falls outside
                standard parameters, the system routes it intelligently rather
                than rejecting it. When a decision requires human judgement, the
                system presents the right information to the right person with
                a recommended action — not a blank form.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-8">
                This is not about replacing people. It is about removing the
                work that consumes their time without requiring their judgement.
                Your team handles the decisions that matter. The system handles
                everything else — and knows the difference.
              </p>
              <ul className="space-y-3">
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Context-aware routing that adapts to variation instead of
                    breaking on exceptions
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Human-in-the-loop escalation for decisions that require
                    judgement, not just processing
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Complete audit trails that satisfy compliance requirements
                    and support process improvement
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Measurable reduction in processing time and error rates from
                    day one of deployment
                  </span>
                </li>
              </ul>
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
          <div
            className="w-12 h-[2px] bg-rust-signal mx-auto mb-8"
            aria-hidden="true"
          />
          <h2 className="font-cabinet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-skeleton-bone mb-6">
            Tired of manual processes that should run themselves?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            Show us the workflows that consume your team's time. We will tell
            you which ones can be automated — and how much capacity you will
            gain.
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
