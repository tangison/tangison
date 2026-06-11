"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import {
  ArrowUpRight,
  Languages,
  Scale,
  Target,
  Globe,
} from "lucide-react";

const capabilities = [
  {
    title: "Multi-Language Models",
    description:
      "AI systems that work in Swahili, Amharic, Yoruba, French, Portuguese, Arabic, and the many languages your customers and teams actually speak. Not English-only tools with translation bolted on.",
    icon: Languages,
  },
  {
    title: "Regulatory Compliance",
    description:
      "Models that incorporate local regulatory requirements into their decision logic. Data protection laws, financial regulations, industry-specific mandates. Compliance built into the system, not checked after the fact.",
    icon: Scale,
  },
  {
    title: "Market-Specific Logic",
    description:
      "Decision models calibrated for local market dynamics. Pricing that accounts for currency volatility, supply chains that reflect local infrastructure, and forecasts that factor in market-specific seasonality and events.",
    icon: Target,
  },
  {
    title: "Cultural Adaptation",
    description:
      "Systems that understand cultural context in communication, decision-making, and service delivery. Tone, formality, hierarchy, and negotiation patterns encoded into interaction design, not assumed away.",
    icon: Globe,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Research",
    description:
      "Deep research into the operational context. Language requirements, regulatory landscape, market structures, cultural norms. We learn the environment before designing the system.",
  },
  {
    step: "02",
    title: "Adapt",
    description:
      "Adapt models, interfaces, and decision logic to the local context. Train on local data. Tune for local conditions. Build the context into the architecture, not the documentation.",
  },
  {
    step: "03",
    title: "Test",
    description:
      "Validate against local scenarios with local stakeholders. Does the system understand the language as it is actually spoken? Does it comply with regulations as they are actually enforced? Real-world testing, not lab conditions.",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "Deploy with ongoing context monitoring. Languages evolve. Regulations change. Markets shift. The system adapts because context awareness is not a one-time configuration — it is a continuous capability.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function ContextAwareAiPage() {
  return (
    <SiteShell>
      <PageHeader
        label="CONTEXT-AWARE AI"
        title="AI That Understands Where It Operates"
        subtitle="Most AI systems are built for everywhere and end up working well nowhere. We build systems that understand the local context — language, regulation, market, culture."
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
                AI systems are shaped by the data they are trained on and the
                assumptions baked into their design. When those assumptions
                reflect one market, one language, one regulatory environment,
                the systems produce results that feel slightly off everywhere
                else. A sentiment analysis model trained on American English
                misreads the polite indirectness common in many African
                business communications. A pricing model calibrated for stable
                currencies produces nonsensical recommendations where exchange
                rates shift weekly. A compliance system built around GDPR
                misses obligations under Kenya's Data Protection Act or
                Nigeria's NDPR.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-6">
                These are not minor calibration issues. They are fundamental
                misalignments between the system's understanding of the world
                and the world it actually operates in. And they have real
                consequences. A customer service chatbot that cannot parse
                queries in Kiswahili does not just fail to help — it signals
                that the organisation does not value those customers. A fraud
                detection system that flags transactions as unusual because they
                follow local patterns it was never trained on creates false
                positives that erode trust and waste investigative resources.
                A compliance tool that misses jurisdiction-specific obligations
                creates legal exposure that no one intended.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-6">
                Context-aware AI addresses this by building local understanding
                into the system from the start. Language models fine-tuned on
                local corpora. Decision logic that incorporates specific
                regulatory requirements. Market models calibrated against local
                trading patterns and economic dynamics. Interaction design that
                reflects cultural expectations around communication, hierarchy,
                and decision-making. This is not about adding a translation
                layer or a compliance checklist. It is about constructing
                systems that understand the environment they operate in the way
                a knowledgeable local colleague would.
              </p>
              <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed mb-8">
                The African continent presents particular urgency here. Over
                2,000 languages spoken. 54 countries with distinct regulatory
                frameworks. Markets with unique infrastructure constraints,
                informal economy dynamics, and mobile-first technology adoption
                patterns. AI systems that ignore these realities deliver
                substandard results. Systems that understand them deliver
                competitive advantage.
              </p>
              <ul className="space-y-3">
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Language support for the actual languages your teams and
                    customers use, not just English with translation fallback
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Regulatory logic that reflects the specific obligations of
                    each jurisdiction you operate in
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Market models calibrated for local economic dynamics,
                    currency behaviour, and seasonal patterns
                  </span>
                </li>
                <li className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0" />
                  <span>
                    Cultural adaptation in communication and interaction
                    design, not just translated interfaces
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
            Need AI that speaks your context?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            Tell us where your AI needs to operate and what contexts it needs to
            understand. We will show you what context-aware AI looks like for
            your specific situation.
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
