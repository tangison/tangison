"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { ArrowUpRight, Presentation, Code, BookOpen, Headphones } from "lucide-react";

const capabilities = [
  {
    title: "Executive Workshops",
    description:
      "Focused sessions for leadership teams. What AI can and cannot do. Where it creates value in your industry. What a realistic investment looks like. No hype. No jargon. Clear answers to the questions decision-makers actually ask.",
    icon: Presentation,
  },
  {
    title: "Technical Training",
    description:
      "Hands-on training for the teams building and maintaining AI systems. Data preparation, model evaluation, deployment practices, monitoring. The practical skills your technical staff need to own AI operations.",
    icon: Code,
  },
  {
    title: "AI Literacy Programs",
    description:
      "Organization-wide programs that build baseline understanding of AI across all roles. What AI is. How it affects daily work. When to trust it and when to question it. Everyone in your organization should speak enough AI to make good decisions.",
    icon: BookOpen,
  },
  {
    title: "Ongoing Coaching",
    description:
      "Regular check-ins and support after formal training ends. Your team will have questions as they apply what they learned. We are there to answer them. Coaching that adapts to the challenges your team actually faces, not hypothetical ones.",
    icon: Headphones,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Assess",
    description:
      "We evaluate your team&apos;s current AI knowledge, technical skills, and the specific challenges they face. Not a generic skills audit. A focused assessment that identifies the gaps that matter most for your AI objectives.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We create a training program built around your tools, your data, and your use cases. No off-the-shelf curricula. Your team learns with the systems they will actually use, on problems they actually face.",
  },
  {
    step: "03",
    title: "Train",
    description:
      "We deliver the training through workshops, hands-on sessions, and guided exercises. Active learning, not passive lectures. Your team practices what they learn in the context of their real work.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "We provide ongoing coaching as your team applies their new skills. Questions surface in practice that never come up in a classroom. We are there to help your team work through them and build lasting confidence.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function TeamTrainingPage() {
  return (
    <SiteShell>
      <PageHeader
        label="TEAM TRAINING"
        title="Build AI Capability Within Your Team"
        subtitle="Practical, context-specific training that builds lasting organizational capability. Not one-off workshops. Skills your team will use every day."
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
                  AI capability does not live in tools. It lives in people. The organization that buys the most advanced platform but has no one who understands how to use it effectively is further behind than the organization with modest tools and a confident, capable team. Technology changes. People who understand the principles adapt. People who only learned a specific interface start over.
                </p>
                <p>
                  Most AI training misses the mark. It is too generic, teaching abstract concepts that do not connect to the work your team does every day. Or it is too vendor-specific, training people on a single platform without building the understanding that transfers when the platform changes. Neither approach builds lasting capability. One creates confusion. The other creates dependence.
                </p>
                <p>
                  The training that works is training tied to context. Your industry. Your data. Your workflows. Your constraints. When a data analyst learns prompt engineering using your actual reports and your actual data sources, the skill sticks. When an executive understands AI limitations through examples from your sector, not Silicon Valley case studies, the judgment transfers.
                </p>
                <p>
                  There is also the question of scale. A single workshop creates awareness. It does not create capability. Building lasting AI skill across an organization requires a program. One that reaches different roles at the right depth. One that includes practice, not just theory. One that provides support when the real questions emerge, weeks after the training ended.
                </p>
                <p>
                  This is what we build. Not a one-day event. A capability development program that meets your team where they are and takes them where they need to go. The executive who needs to make informed decisions. The developer who needs to build and maintain AI systems. The entire organization that needs enough AI literacy to work alongside these systems with confidence, not confusion.
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
            Your team can do this
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            With the right training and support, your people can build, manage, and trust AI systems. Let us design the program that gets them there.
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
