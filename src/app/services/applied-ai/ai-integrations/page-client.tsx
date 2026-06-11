"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import {
  ArrowUpRight,
  Cable,
  Database,
  HardDrive,
  Zap,
} from "lucide-react";

const capabilities = [
  {
    title: "API Integration",
    description:
      "Connect AI capabilities to your existing software through well-documented APIs. REST, GraphQL, webhook-driven — we work with whatever your systems expose. No vendor lock-in to proprietary integration layers.",
    icon: Cable,
  },
  {
    title: "Data Source Connectivity",
    description:
      "Pull data from databases, file systems, messaging queues, and SaaS platforms. Normalise formats, handle schema differences, and maintain data lineage. Your AI systems receive clean, consistent input.",
    icon: Database,
  },
  {
    title: "Legacy System Bridging",
    description:
      "Connect AI to systems that predate modern APIs. Mainframes, bespoke ERPs, file-based data exchanges. We build adapters that translate between old protocols and new capabilities without replacing what works.",
    icon: HardDrive,
  },
  {
    title: "Real-Time Processing",
    description:
      "Stream data processing for applications that cannot wait for batch jobs. Fraud detection, market monitoring, operational alerts. AI that responds in the moment, not the morning after.",
    icon: Zap,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit",
    description:
      "Map your current technology landscape. Every system, every data flow, every integration point. Identify what talks to what, what does not, and where the gaps are that AI could fill.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Design integration architecture that fits your existing infrastructure. Define data contracts, error handling, retry logic, and monitoring. Architecture that accounts for the real behaviour of your systems under load.",
  },
  {
    step: "03",
    title: "Connect",
    description:
      "Build and deploy integrations incrementally. Each connection validated against production data before the next one begins. No big-bang cutover. Progressive enhancement of your existing capabilities.",
  },
  {
    step: "04",
    title: "Validate",
    description:
      "End-to-end testing of integrated workflows. Verify data accuracy, response times, and error recovery. Performance benchmarks against your actual operating conditions. Sign-off only when it works in your environment.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function AiIntegrationsPage() {
  return (
    <SiteShell>
      <PageHeader
        label="AI INTEGRATIONS"
        title="Connect AI to What You Already Use"
        subtitle="AI delivers value when it works within your existing ecosystem. Not in isolation. Connected to your tools, your data, your workflows."
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
                AI systems that exist in isolation create a new problem while
                solving an old one. A prediction model that lives in a notebook
                but never connects to your CRM. A document classifier that
                outputs to a folder no one checks. A recommendation engine that
                cannot push results to the application where customers actually
                see them. The technology works. The integration does not. And
                without integration, the value stays theoretical.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-6">
                This is one of the most common failure points in AI adoption.
                Organisations invest in models, validate their accuracy, and
                then discover that deploying them into production requires
                connecting to systems that were never designed to receive AI
                output. Legacy ERPs with no API layer. Databases behind
                firewall rules that external services cannot reach. SaaS
                platforms with rate limits that batch processing violates. The
                gap between "the model works" and "the model is useful" is
                often an integration gap.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-6">
                Across African enterprises, this gap is often wider. Technology
                landscapes tend to be more heterogeneous — a mix of modern
                cloud services, on-premise systems acquired at different times,
                and custom-built tools that predate current standards. A bank
                might run core banking on a system from 2005, use a modern CRM
                acquired last year, and exchange data with regulators via email
                attachments. An agricultural cooperative might collect field
                data on paper, enter it into a desktop application, and
                generate reports in a spreadsheet. AI can help in all of these
                scenarios — but only if it can connect to all of these systems.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-8">
                Integration work is not glamorous. It does not produce
                screenshots for presentations. But it is the difference between
                an AI proof-of-concept and an AI capability that your
                organisation depends on every day. We take it seriously because
                we have seen what happens when organisations do not.
              </p>
              <ul className="space-y-3">
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    AI capabilities embedded in your existing tools, not
                    requiring teams to learn new interfaces
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Adapters for legacy systems that translate between old
                    protocols and new AI capabilities
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Real-time data pipelines for decisions that cannot wait for
                    batch processing schedules
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Progressive integration that enhances existing operations
                    without requiring system replacements
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
            Have AI that needs to connect?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            Describe your technology landscape and the systems you need AI to
            reach. We will map the integration paths and tell you what is
            involved.
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
