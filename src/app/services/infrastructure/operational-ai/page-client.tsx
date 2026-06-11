"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { ArrowUpRight, Activity, TrendingUp, RotateCcw, Bell } from "lucide-react";

const capabilities = [
  {
    title: "Model Monitoring",
    description:
      "Track prediction accuracy, latency, and throughput in real time. Know when a model's performance drops below acceptable thresholds — not when a customer complains, but within minutes of it happening.",
    icon: Activity,
  },
  {
    title: "Drift Detection",
    description:
      "Data changes. User behaviour shifts. Market conditions evolve. Drift detection identifies when the inputs to your model no longer match the data it was trained on — the first sign that predictions are becoming unreliable.",
    icon: TrendingUp,
  },
  {
    title: "Automated Retraining",
    description:
      "When drift is detected, retraining shouldn't require a human to notice and act. We set up pipelines that trigger retraining automatically, validate the new model, and deploy it if it outperforms the current one.",
    icon: RotateCcw,
  },
  {
    title: "Incident Response",
    description:
      "When a model fails in production, you need a response plan. Alerts routed to the right people. Runbooks for common failures. Escalation paths for the ones that aren't common. Confidence that someone is always watching.",
    icon: Bell,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Baseline",
    description:
      "Measure the model's performance right after deployment. Latency, accuracy, throughput, error distribution. These numbers become the reference point for everything that follows.",
  },
  {
    step: "02",
    title: "Monitor",
    description:
      "Set up continuous monitoring across all critical metrics. Dashboards for the team. Alerts for when metrics cross thresholds. Logs for every prediction so you can debug retroactively.",
  },
  {
    step: "03",
    title: "Detect",
    description:
      "Statistical tests and heuristics that identify drift, degradation, and anomalies. Not just \"is accuracy below X%\" — but nuanced detection that accounts for natural variance and seasonal patterns.",
  },
  {
    step: "04",
    title: "Respond",
    description:
      "Automated retraining when drift is confirmed. Manual review when the signal is ambiguous. Rollback when the new model doesn't pass validation. Every response measured and logged.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function OperationalAiPage() {
  return (
    <SiteShell>
      <PageHeader
        label="OPERATIONAL AI"
        title="Keep AI Running in Production"
        subtitle="Deploying a model is day one. Keeping it accurate, fast, and reliable for months and years after — that's the real challenge. We build the monitoring, detection, and response systems that maintain AI quality over time."
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
                  AI models don't age well on their own. The data they encounter in production slowly shifts away from the data they were trained on. Customer preferences change. Market conditions evolve. Regulatory requirements get updated. A model that was 95% accurate at launch might be 80% accurate six months later — and nobody notices until the damage is done.
                </p>
                <p>
                  This is drift, and it's the single biggest threat to AI systems in production. It doesn't announce itself with errors or crashes. The model keeps returning predictions. They just become less reliable, one subtle shift at a time. By the time someone catches the problem, the model has been making suboptimal decisions for weeks or months.
                </p>
                <p>
                  Operational AI is the practice of watching for these shifts and responding before they affect business outcomes. It means monitoring prediction accuracy and latency in real time. It means statistical tests that detect when input distributions have changed. It means retraining pipelines that kick in automatically when drift is confirmed. And it means incident response protocols for when the situation requires human judgment.
                </p>
                <p>
                  Without operational AI, every model you deploy is a ticking clock. It will degrade. The question is whether you'll catch it early or discover it the hard way. The cost of the hard way is not just technical — it's lost revenue, damaged trust, and decisions made on unreliable predictions.
                </p>
                <p>
                  We build operational AI systems that give you continuous visibility into model health, automatic detection of performance degradation, and clear response paths when intervention is needed. From monitoring dashboards to automated retraining pipelines, we ensure your AI stays accurate and reliable long after deployment day.
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
            Is your AI still accurate after deployment?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            Let us set up the monitoring, detection, and response systems that keep your models performing. Because accuracy isn't a one-time measurement.
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
