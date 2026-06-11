"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import {
  ArrowUpRight,
  Server,
  Cloud,
  ShieldCheck,
  Activity,
} from "lucide-react";

const capabilities = [
  {
    title: "On-Premise Deployment",
    description:
      "Run AI systems within your own data centres. Data never leaves your perimeter. Full control over hardware, networking, and physical security. Designed for organisations where data residency is non-negotiable.",
    icon: Server,
  },
  {
    title: "Cloud-Hybrid Architecture",
    description:
      "Split workloads between on-premise infrastructure and cloud providers on your terms. Sensitive data stays local. Compute-intensive training scales to the cloud. Architecture that respects your boundaries.",
    icon: Cloud,
  },
  {
    title: "Compliance & Governance",
    description:
      "Audit trails for every prediction. Model versioning and rollback. Access controls that map to your organisational hierarchy. Compliance frameworks built into the deployment, not bolted on after the fact.",
    icon: ShieldCheck,
  },
  {
    title: "Monitoring & Observability",
    description:
      "Real-time dashboards tracking model performance, data drift, and system health. Alerts when accuracy drops below thresholds. Root cause analysis tools that help your ops team respond before issues escalate.",
    icon: Activity,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Assess",
    description:
      "We map your existing infrastructure, security requirements, data residency obligations, and operational constraints. No assumptions. We document what exists before recommending what changes.",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "Design the deployment topology that fits your environment. On-premise, cloud, hybrid. Network architecture, data flow, security boundaries, and scaling strategy. Every component specified and justified.",
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "Staged rollout with validation at each step. Shadow mode alongside existing systems. Performance benchmarks against production traffic. Promotion to full service only after proving reliability.",
  },
  {
    step: "04",
    title: "Operate",
    description:
      "Ongoing monitoring, incident response playbooks, and scheduled health checks. We train your operations team and remain available for escalation. You run it day-to-day; we ensure it keeps running.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function EnterpriseDeploymentsPage() {
  return (
    <SiteShell>
      <PageHeader
        label="ENTERPRISE DEPLOYMENTS"
        title="AI at Scale, Under Your Control"
        subtitle="Deploy AI systems within your infrastructure. Maintain compliance, governance, and observability. Scale without surrendering control over your data or operations."
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
                AI systems in enterprise environments face demands that consumer
                applications never encounter. A chatbot that serves millions of
                casual users operates under very different constraints than a
                fraud detection system processing real-time transactions across
                a banking network. The stakes are higher. The failure modes are
                more consequential. The regulatory scrutiny is real and
                enforceable.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-6">
                Across African markets, data residency requirements are becoming
                more specific. Nigeria's NDPR, Kenya's Data Protection Act,
                South Africa's POPIA — each imposes obligations on where data
                can be stored, how it can be processed, and who can access it.
                Deploying AI through a third-party cloud service that routes
                data through jurisdictions you cannot control creates compliance
                exposure that many organisations cannot afford.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-6">
                Enterprise deployment is about more than where the servers sit.
                It is about who can see your data, who can audit your models,
                who can explain a decision when a regulator asks. It is about
                having governance structures that make AI accountable within
                your organisation — version control for models, access logs for
                predictions, rollback procedures for when things go wrong. These
                are not optional features. They are the difference between an AI
                system your compliance team approves and one they block.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-8">
                Then there is observability. When a model's accuracy degrades
                over time — and it will, as the data it encounters drifts from
                its training distribution — you need to know before your
                customers do. Monitoring systems that track prediction
                confidence, input distribution shifts, and downstream outcome
                metrics give your operations team the visibility to act early.
                Not after a cascade of bad decisions. Before.
              </p>
              <ul className="space-y-3">
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Data residency compliance by default, not by configuration
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Full audit trails for every model prediction and data access
                    event
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Model versioning and rollback capabilities that support
                    regulatory review
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Real-time monitoring that catches degradation before it
                    affects business outcomes
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
            Need AI deployed on your terms?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            Tell us about your infrastructure, compliance requirements, and
            operational constraints. We will design a deployment architecture
            that respects all three.
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
