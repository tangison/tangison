"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { ArrowUpRight, Wrench, GitCompareArrows, FlaskConical, Building2 } from "lucide-react";

const capabilities = [
  {
    title: "Tool Assessment",
    description:
      "We evaluate AI tools against your specific requirements, data environment, and operational constraints. Not feature checklists. Real-world fit. You learn what each tool actually does, not what the marketing page promises.",
    icon: Wrench,
  },
  {
    title: "Platform Comparison",
    description:
      "Side-by-side analysis of platforms based on total cost of ownership, integration complexity, scalability, and vendor stability. We cut through the noise so you can make a confident decision.",
    icon: GitCompareArrows,
  },
  {
    title: "Proof of Concept",
    description:
      "A small, controlled test that answers the question: does this approach work for our data, our workflows, our constraints? Not a demo. A real test with your actual conditions.",
    icon: FlaskConical,
  },
  {
    title: "Vendor Evaluation",
    description:
      "Independent assessment of vendor claims, contracts, and long-term viability. We look at what happens after the sale. Support quality, lock-in risk, exit strategies. The things sales calls skip over.",
    icon: Building2,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Define",
    description:
      "We establish clear evaluation criteria based on your business needs, technical constraints, and risk tolerance. Not generic benchmarks. Criteria specific to your situation and the decisions you need to make.",
  },
  {
    step: "02",
    title: "Evaluate",
    description:
      "We research, test, and compare options against your criteria. Hands-on where possible. We talk to users, not just vendors. We read the documentation, not just the pricing page.",
  },
  {
    step: "03",
    title: "Validate",
    description:
      "We run a proof of concept with your data and your workflows. This is where marketing promises meet operational reality. You see what works, what does not, and where the gaps are.",
  },
  {
    step: "04",
    title: "Recommend",
    description:
      "We deliver a clear, evidence-based recommendation with trade-offs spelled out. Not a ranking. A decision framework. You understand why we recommend what we recommend, and what you are giving up with each alternative.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function TechnologyEvaluationPage() {
  return (
    <SiteShell>
      <PageHeader
        label="TECHNOLOGY EVALUATION"
        title="Know What Works Before You Commit"
        subtitle="Independent, vendor-neutral assessment of AI tools, platforms, and approaches. Make decisions based on evidence, not sales pressure."
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
                  The AI tool landscape moves fast. New platforms launch weekly. Established vendors add AI features to existing products. Every solution claims to be the one you need. The demos look impressive. The case studies sound convincing. And yet, six months after purchase, many organizations find themselves stuck with tools that do not fit their data, their workflows, or their constraints.
                </p>
                <p>
                  Vendor marketing is designed to sell, not to inform. Feature lists emphasize breadth over depth. Pricing models obscure true costs. Integration claims skip the weeks of configuration work that real deployments require. The gap between what a tool promises and what it delivers in your specific environment can be enormous.
                </p>
                <p>
                  This is not a problem you can solve by reading more reviews or watching more webinars. You need someone who will test the tool against your actual conditions. Who will read the documentation, probe the edge cases, and ask the questions that sales teams deflect. Someone with no stake in which option you choose.
                </p>
                <p>
                  We do not resell software. We do not have partnerships that influence our recommendations. Our only incentive is to help you make the right decision for your organization. That means telling you when the expensive option is worth it, and when the affordable one will do. It means flagging the risks that vendors minimize. It means giving you evidence, not opinions.
                </p>
                <p>
                  The cost of choosing the wrong AI tool is not just the license fee. It is the months of implementation effort wasted. The data migrated to a platform you will abandon. The team that loses confidence in AI because the first experience was a poor one. Getting the evaluation right saves far more than it costs.
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
            Avoid the wrong AI investment
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            An independent evaluation costs less than a wrong decision. Get clarity before you commit.
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
