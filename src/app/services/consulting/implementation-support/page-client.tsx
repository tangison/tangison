"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { ArrowUpRight, TestTube2, UsersRound, ShieldCheck, Rocket } from "lucide-react";

const capabilities = [
  {
    title: "Pilot Design",
    description:
      "We design pilot projects that test the right questions. Not vanity projects that look good in reports. Focused experiments that tell you whether the approach works for your data, your team, and your operations.",
    icon: TestTube2,
  },
  {
    title: "Change Management",
    description:
      "AI changes how people work. We help you prepare your team for that change. Communication plans, training schedules, feedback loops. The human side of implementation that determines whether AI gets adopted or abandoned.",
    icon: UsersRound,
  },
  {
    title: "Quality Assurance",
    description:
      "We define quality gates, monitoring criteria, and fallback plans before deployment. AI systems degrade. Data drifts. Edge cases surface. You need to know when the system is working and when it is not.",
    icon: ShieldCheck,
  },
  {
    title: "Production Readiness",
    description:
      "We assess whether your AI system is ready for live deployment. Infrastructure, security, compliance, observability, support processes. The checklist that prevents Monday morning emergencies.",
    icon: Rocket,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Plan",
    description:
      "We define the implementation scope, success criteria, and risk factors before writing a single line of code. Clear objectives. Known constraints. A shared understanding of what &ldquo;done&rdquo; looks like.",
  },
  {
    step: "02",
    title: "Pilot",
    description:
      "We run a controlled pilot with real data and real users. This is where assumptions meet reality. We learn fast, adjust, and confirm the approach works before scaling investment.",
  },
  {
    step: "03",
    title: "Scale",
    description:
      "We expand from pilot to full deployment. Addressing the integration challenges, edge cases, and operational requirements that only surface at scale. Methodical, not rushed.",
  },
  {
    step: "04",
    title: "Sustain",
    description:
      "We establish monitoring, maintenance, and improvement processes for the long term. AI systems need ongoing attention. We make sure you have the structure to provide it without depending on us.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function ImplementationSupportPage() {
  return (
    <SiteShell>
      <PageHeader
        label="IMPLEMENTATION SUPPORT"
        title="From Pilot to Production, With Guidance"
        subtitle="Hands-on guidance through AI implementation. Avoid common pitfalls, manage change, and build confidence in your AI processes."
        backHref="/services/consulting"
        backLabel="AI Consulting"
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
                  Getting an AI pilot to work is one thing. Getting it into production is another entirely. The gap between a successful demo and a reliable, production-grade system is where most AI projects stall. The model works in a notebook. It fails when it meets real data at scale. The workflow looks clean in a flowchart. It breaks when edge cases arrive and users behave unpredictably.
                </p>
                <p>
                  Implementation is where technical debt accumulates fastest. Teams rush to meet deadlines and skip the monitoring setup. They defer the data pipeline work because the pilot runs on static files. They postpone the security review because the system is &ldquo;just internal.&rdquo; Each shortcut is understandable in the moment. Together, they create a system that no one trusts and no one wants to maintain.
                </p>
                <p>
                  Then there is the human side. AI changes how people work. It alters decision-making processes. It shifts responsibilities. When teams are not prepared for these changes, they resist. Not because they oppose AI, but because no one helped them understand what their role becomes when AI handles part of it. Change management is not a soft concern. It is the difference between adoption and abandonment.
                </p>
                <p>
                  We have seen these patterns repeat across organizations and industries. The technical pitfalls are predictable. The human challenges are consistent. And the solutions are known, if you have been through it before.
                </p>
                <p>
                  That is what implementation support provides. Not hands-off advice from the sidelines. Active guidance through the decisions, trade-offs, and course corrections that define the difference between a system that launches and one that lasts. We stay involved until your team can run it without us.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-gray">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2 {...fadeInUp} className="font-cabinet text-3xl md:text-4xl font-bold tracking-tight text-ink mb-12">
            What We Deliver
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                className="border border-black/[0.06] bg-warm-white p-8 md:p-10 hover:border-black/[0.1] transition-colors duration-500"
              >
                <cap.icon className="w-5 h-5 text-rust-signal mb-5" />
                <h3 className="font-cabinet text-xl md:text-2xl font-bold tracking-tight text-ink mb-3">{cap.title}</h3>
                <p className="font-satoshi text-ink-muted text-sm md:text-base leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2 {...fadeInUp} className="font-cabinet text-3xl md:text-4xl font-bold tracking-tight text-ink mb-12">
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <span className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.2em] block mb-3">
                  Step {step.step}
                </span>
                <h3 className="font-cabinet text-xl font-bold tracking-tight text-ink mb-3">{step.title}</h3>
                <p className="font-satoshi text-ink-muted text-sm leading-relaxed">{step.description}</p>
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
            Do not implement alone
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            The right guidance at the right time saves months of rework. Let us help you get from pilot to production without the painful detours.
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
