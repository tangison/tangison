"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { ArrowUpRight, Network, Database, Lock, BarChart3 } from "lucide-react";

const capabilities = [
  {
    title: "API Gateway",
    description:
      "A single entry point for all AI services. Rate limiting, request routing, versioning, and caching. Consumers call one API; the gateway handles the complexity behind it. Add or replace models without breaking downstream clients.",
    icon: Network,
  },
  {
    title: "Data Pipeline Management",
    description:
      "Move data from where it lives to where AI needs it. ETL pipelines, streaming ingestion, and batch processing. Handle schema changes, data quality issues, and late-arriving data without pipeline failures.",
    icon: Database,
  },
  {
    title: "Authentication & Authorization",
    description:
      "Control who can call what. API keys, OAuth flows, role-based access. Audit every request. Ensure that sensitive AI endpoints aren't exposed to unauthorised consumers — internal or external.",
    icon: Lock,
  },
  {
    title: "Observability Stack",
    description:
      "Logs, metrics, and traces across every integration. See how data flows from source to AI to output. Identify bottlenecks, failures, and latency spikes across the entire chain, not just within a single service.",
    icon: BarChart3,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit",
    description:
      "Map every system that needs to connect to your AI infrastructure. APIs, databases, message queues, file stores. Document data formats, authentication methods, and current pain points.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architect the integration layer. Choose the right patterns for each connection — sync vs. async, push vs. pull, real-time vs. batch. Define contracts between systems before building.",
  },
  {
    step: "03",
    title: "Connect",
    description:
      "Implement the integrations. Build the API gateway. Set up data pipelines. Wire authentication and authorization. Add monitoring at every connection point.",
  },
  {
    step: "04",
    title: "Validate",
    description:
      "Test every integration under real conditions. Verify data integrity end to end. Measure latency at each step. Confirm that failure in one system doesn't cascade to others.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function IntegrationLayerPage() {
  return (
    <SiteShell>
      <PageHeader
        label="INTEGRATION LAYER"
        title="Make Everything Work Together"
        subtitle="AI infrastructure doesn't exist in a vacuum. It needs data from your existing systems, it needs to serve results to your applications, and it needs to fit into your security and compliance framework. We build the layer that connects it all."
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
                  AI systems produce impressive results in isolation. But the moment you need to connect them to your CRM, your data warehouse, your authentication system, or your customer-facing applications, complexity multiplies. Each integration is a potential point of failure. Each data format mismatch is a bug waiting to surface. Each authentication gap is a security risk.
                </p>
                <p>
                  Most organisations handle integrations ad hoc. One team connects the AI to the database with a custom script. Another team builds a different script to serve predictions to the web app. A third team manually moves data because the automated pipeline broke months ago and nobody had time to fix it. This approach works — until it doesn't. And when it fails, debugging is a nightmare because nobody has a complete picture of how data flows through the system.
                </p>
                <p>
                  An integration layer solves this by providing a consistent, observable, and secure foundation for all AI connections. Instead of point-to-point integrations, every system connects through a central layer that handles routing, transformation, authentication, and monitoring. When something breaks, you know exactly where to look. When you add a new system, you follow the same pattern. When you need to replace a model, you swap it behind the gateway without touching the consumers.
                </p>
                <p>
                  This is especially important for African businesses that often work with a mix of modern cloud services and legacy on-premise systems. The integration layer bridges these worlds without requiring a complete technology overhaul. It meets your infrastructure where it is today and provides a path to where you want it to be.
                </p>
                <p>
                  We build integration layers that are practical, not over-engineered. The right patterns for each connection. Clear documentation for every endpoint. Observability that tells you what's happening across the entire chain. And security controls that protect your AI endpoints without creating friction for legitimate users. Because the best AI in the world is useless if it can't connect to the systems that need its output.
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
            Need AI to work with your existing systems?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            We'll build the integration layer that connects AI to your data, applications, and security framework. No silos.
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
