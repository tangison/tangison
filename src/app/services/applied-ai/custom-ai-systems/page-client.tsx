"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import {
  ArrowUpRight,
  TrendingUp,
  FileText,
  Eye,
  Shuffle,
} from "lucide-react";

const capabilities = [
  {
    title: "Predictive Models",
    description:
      "Forecast demand across supply chains, detect anomalies before they become failures, and score risk with models trained on your historical data. Not borrowed benchmarks.",
    icon: TrendingUp,
  },
  {
    title: "Natural Language Systems",
    description:
      "Analyze contracts, classify correspondence, and extract critical data points from unstructured documents. Built for the languages and formats your team actually works with.",
    icon: FileText,
  },
  {
    title: "Computer Vision",
    description:
      "Quality inspection on production lines, satellite imagery analysis for agriculture and mining, medical imaging support. Vision systems calibrated to your operating conditions.",
    icon: Eye,
  },
  {
    title: "Recommendation Engines",
    description:
      "Product matching for retail, content curation for media platforms, resource allocation for logistics. Recommendations shaped by your customer behaviour, not global averages.",
    icon: Shuffle,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Define",
    description:
      "We start with your problem, not a technology. Together we define the business question, identify available data, and set measurable success criteria before writing a single line of code.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We select the right architecture for your constraints. Model type, data pipeline, integration points, and infrastructure requirements. Every decision documented and justified.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Iterative development with regular checkpoints. You see working prototypes early, not months of black-box development. We validate against real data at every stage.",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "Production deployment with monitoring, fallback mechanisms, and performance tracking. We stay until the system proves itself in your operating environment.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function CustomAiSystemsPage() {
  return (
    <SiteShell>
      <PageHeader
        label="CUSTOM AI SYSTEMS"
        title="AI That Fits Your Problem"
        subtitle="Off-the-shelf AI was built for someone else's data, someone else's workflows, someone else's market. We build systems around yours."
        backHref="/services/applied-ai"
        backLabel="Applied AI"
      />

      {/* Why Custom AI? */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <motion.div {...fadeInUp}>
              <div
                className="w-8 h-[2px] bg-rust-signal mb-8"
                aria-hidden="true"
              />
              <h2 className="font-cabinet text-3xl md:text-4xl font-bold tracking-tight text-ink mb-8">
                Why Custom AI?
              </h2>
            </motion.div>
            <motion.div {...fadeInUp}>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-6">
                Most AI products on the market solve general problems. They work
                well if your business looks like every other business — same data
                structures, same regulatory requirements, same customer
                expectations. But that is rarely the case. A bank in Lagos does
                not face the same fraud patterns as a bank in London. A mining
                operation in the Copperbelt has different anomaly signatures than
                one in Western Australia. A retail chain in Nairobi serves
                customers whose purchasing behaviour follows different seasonal
                patterns than any global dataset assumes.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-6">
                Generic AI systems trained on global data miss these
                distinctions. They produce recommendations that feel close but
                not quite right. Predictions that are directionally correct but
                not precise enough to act on with confidence. Classifications
                that miss the edge cases that matter most in your specific
                context. Over time, these small inaccuracies compound. Decisions
                drift. Trust erodes.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-6">
                Custom AI systems solve this by starting from your reality. Your
                data. Your constraints. Your definition of success. When a
                predictive model is trained on your transaction history, it
                learns the patterns that actually matter to your business. When a
                natural language system is tuned to your document formats and
                terminology, it extracts information with the precision your team
                needs. When a computer vision system is calibrated for your
                lighting conditions and product variations, it catches defects
                that generic models would miss.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-8">
                The difference is not subtle. It is the gap between a system
                your team tolerates and one they rely on. Between a dashboard
                they glance at and one that drives daily decisions. Between AI
                as an experiment and AI as infrastructure.
              </p>
              <ul className="space-y-3">
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Models trained on your data produce predictions calibrated
                    to your operating conditions, not statistical averages
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Systems designed for your regulatory environment meet
                    compliance requirements that generic tools cannot address
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Workflows built around your team's actual processes reduce
                    friction instead of adding new steps
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Integration with your existing infrastructure means no
                    disruptive rip-and-replace migrations
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
            Ready for AI that works for you?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            Tell us about the problem you need solved. We will tell you whether
            custom AI is the right answer — and what it would take to build it.
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
