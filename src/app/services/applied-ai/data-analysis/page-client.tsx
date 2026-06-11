"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import {
  ArrowUpRight,
  TrendingUp,
  BarChart3,
  AlertTriangle,
  LayoutDashboard,
} from "lucide-react";

const capabilities = [
  {
    title: "Predictive Analytics",
    description:
      "Forecast customer behaviour, market shifts, and operational outcomes from your historical data. Models that account for local seasonality, currency fluctuations, and market-specific patterns that global benchmarks miss.",
    icon: TrendingUp,
  },
  {
    title: "Business Intelligence",
    description:
      "Consolidate data from multiple sources into coherent views. Dashboards that answer the questions your leadership team actually asks. Not generic reports. Decision-ready intelligence.",
    icon: BarChart3,
  },
  {
    title: "Anomaly Detection",
    description:
      "Identify unusual patterns in transactions, operations, and performance metrics before they become problems. Fraud detection, equipment failure prediction, and quality control — tailored to your baselines.",
    icon: AlertTriangle,
  },
  {
    title: "Decision Dashboards",
    description:
      "Interactive dashboards that present analysis alongside recommended actions. Not data for its own sake. Information structured to support specific decisions at specific moments.",
    icon: LayoutDashboard,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit",
    description:
      "We assess your data landscape: what you collect, where it lives, how clean it is, and what gaps exist. Honest evaluation of data quality and readiness before committing to analysis paths.",
  },
  {
    step: "02",
    title: "Model",
    description:
      "Build analytical models calibrated to your business context. Validate against historical outcomes. Ensure predictions are accurate enough to act on — not just directionally correct.",
  },
  {
    step: "03",
    title: "Visualize",
    description:
      "Present findings through dashboards and reports designed for decision-makers. Clear hierarchy of information. Actionable insights at the top. Supporting detail available on demand.",
  },
  {
    step: "04",
    title: "Act",
    description:
      "Connect insights to decisions. Define triggers, thresholds, and escalation rules that turn analytical output into operational action. Data that drives behaviour, not just reports.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function DataAnalysisPage() {
  return (
    <SiteShell>
      <PageHeader
        label="DATA ANALYSIS & DECISION SUPPORT"
        title="Turn Data Into Decisions"
        subtitle="Your organisation generates more data than your team can process manually. We build systems that surface what matters, predict what is coming, and present insights you can act on."
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
                Every organisation sits on data it never fully uses. Transaction
                records, customer interactions, operational logs, market feeds —
                the information is there, but the capacity to extract meaning
                from it at speed is not. Reports arrive too late to inform
                decisions. Trends become visible only in retrospect. Patterns
                that could have predicted problems go unnoticed until the
                problems arrive.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-6">
                This is especially true in markets where data is fragmented
                across systems that do not communicate. A telco in Dar es
                Salaam might have subscriber data in one system, network
                performance data in another, and billing data in a third. A
                manufacturer in Abidjan might track production in one tool,
                quality metrics in a spreadsheet, and supply chain information
                via email. The data exists. The picture it could paint does not.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-6">
                Data analysis and decision support systems close this gap. They
                consolidate information from multiple sources, apply statistical
                and machine learning methods to identify patterns, and present
                findings in a format that supports decisions rather than just
                informing curiosity. The difference between a report that tells
                you revenue declined last quarter and one that tells you why it
                declined, whether the pattern is likely to continue, and what
                actions have historically reversed similar trends — that
                difference changes how organisations operate.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-8">
                The goal is not more data. It is better decisions. Every
                dashboard, every model, every alert should answer a specific
                question that someone in your organisation needs to answer
                regularly. If it does not, it is noise. We build signal.
              </p>
              <ul className="space-y-3">
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Predictive models that account for local market conditions,
                    seasonality, and currency dynamics
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Consolidated views across disconnected data sources that
                    reveal relationships invisible in individual systems
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Anomaly detection that catches deviations early, before they
                    become costly failures
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Decision dashboards that present analysis alongside
                    recommended actions, not just raw numbers
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
            Sitting on data you cannot act on?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            Tell us what decisions your team needs to make. We will show you
            what your data can support — and what it would take to fill the
            gaps.
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
