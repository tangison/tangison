"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { ArrowUpRight, Compass, Route, Calculator, Target } from "lucide-react";

const capabilities = [
  {
    title: "Opportunity Assessment",
    description:
      "We map your operations, data assets, and market position to identify where AI creates genuine value. Not every problem needs AI. We tell you which ones do, and which ones do not.",
    icon: Compass,
  },
  {
    title: "Roadmap Development",
    description:
      "A phased plan that connects AI initiatives to business outcomes. Each phase builds on the last. Clear milestones. Honest timelines. No aspirational guessing.",
    icon: Route,
  },
  {
    title: "Resource Planning",
    description:
      "What it takes in people, budget, and infrastructure to execute your AI strategy. Realistic estimates based on your actual constraints, not industry averages.",
    icon: Calculator,
  },
  {
    title: "Success Metrics",
    description:
      "Concrete, measurable criteria for each initiative. You will know what success looks like before you start, and you will be able to track progress against it.",
    icon: Target,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn your business. Your goals, constraints, data landscape, and team capabilities. This is not a questionnaire. It is a structured conversation with the people who know your operations best.",
  },
  {
    step: "02",
    title: "Define",
    description:
      "We identify the AI opportunities with the strongest connection to your business goals. Each opportunity is assessed for feasibility, impact, and resource requirements. You see the trade-offs clearly.",
  },
  {
    step: "03",
    title: "Plan",
    description:
      "We build a phased roadmap with milestones, dependencies, and decision points. Each phase has clear deliverables and success criteria. You know what happens next and why.",
  },
  {
    step: "04",
    title: "Execute",
    description:
      "We support execution through the first phases. Adjusting the plan when reality diverges from assumptions. Because it always does. The roadmap stays alive, not laminated.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function StrategyRoadmapsPage() {
  return (
    <SiteShell>
      <PageHeader
        label="STRATEGY & ROADMAPS"
        title="An AI Strategy Tied to Reality"
        subtitle="Build AI strategies connected to your business goals. Honest timelines. Realistic resource estimates. A plan you can actually execute."
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
                  Most AI strategies fail before they reach execution. Not because the technology falls short, but because the strategy was never connected to the business in the first place. It looked impressive in a slide deck. It fell apart the moment someone asked, &ldquo;Who is doing this? With what budget? By when?&rdquo;
                </p>
                <p>
                  The gap between AI ambition and operational reality is where good intentions go to die. Organizations invest in pilot projects that never scale. They buy platforms before defining requirements. They set timelines based on optimism instead of constraints. Six months later, they have a proof of concept and no path to production.
                </p>
                <p>
                  A strategy tied to reality starts from a different place. It starts with what your business actually needs, not what the technology can do. It accounts for the people you have, the data you can access, and the budget you can commit. It builds in decision points, not just milestones. It says &ldquo;stop&rdquo; when the evidence says stop, and &ldquo;go&rdquo; when the evidence says go.
                </p>
                <p>
                  This is what we deliver. Not a vision document. A working strategy that connects AI investments to business outcomes, with clear phases, honest estimates, and the flexibility to adapt when conditions change. Because they always change.
                </p>
                <p>
                  The organizations that succeed with AI are not the ones with the biggest budgets or the most advanced tools. They are the ones with the clearest understanding of where AI fits their operations, and the discipline to pursue only what matters.
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
            Ready for a strategy you can execute?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            Start with a conversation. No pitch. No pressure. Just an honest look at where AI fits your business.
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
