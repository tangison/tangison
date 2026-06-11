"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { ArrowUpRight, Server, Maximize, GitBranch, Code } from "lucide-react";

const capabilities = [
  {
    title: "Model Serving",
    description:
      "Deploy AI models behind production-grade APIs. Low latency, high throughput, and health checks baked in. Support for batch inference, streaming responses, and multiple model versions running simultaneously.",
    icon: Server,
  },
  {
    title: "Auto-Scaling",
    description:
      "Traffic spikes shouldn't take down your AI service. We configure scaling rules that add capacity when demand rises and release it when demand falls. Built for the cost constraints most African businesses face.",
    icon: Maximize,
  },
  {
    title: "Blue-Green Deployments",
    description:
      "Deploy new model versions without downtime. Route traffic gradually from the old version to the new one. If something goes wrong, switch back instantly. No gambles with production traffic.",
    icon: GitBranch,
  },
  {
    title: "Infrastructure as Code",
    description:
      "Every server, every configuration, every network rule defined in code. Reproducible environments. Version-controlled changes. No more \"it works on my machine\" in production.",
    icon: Code,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Architect",
    description:
      "Design the deployment topology. Choose serving infrastructure, scaling thresholds, and rollback strategies based on your traffic patterns and latency requirements.",
  },
  {
    step: "02",
    title: "Provision",
    description:
      "Set up the infrastructure using code. Servers, load balancers, databases, monitoring. Everything reproducible, everything version-controlled.",
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "Push the model to production using blue-green deployment. Route a small percentage of traffic first. Validate. Then shift the rest.",
  },
  {
    step: "04",
    title: "Monitor",
    description:
      "Watch latency, error rates, and resource usage in real time. Get alerts when metrics drift. Run post-deployment validation to confirm the model behaves as expected.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function DeploymentInfrastructurePage() {
  return (
    <SiteShell>
      <PageHeader
        label="DEPLOYMENT INFRASTRUCTURE"
        title="From Prototype to Production"
        subtitle="Getting an AI model working in a notebook is the easy part. Serving it reliably to thousands of users, scaling it under load, and rolling back when something breaks — that's where most teams get stuck. We build deployment infrastructure that handles all of it."
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
                  The gap between a working prototype and a production system is wide. A model in a Jupyter notebook doesn't have to worry about latency, concurrency, or uptime. A model serving real users does. Most AI projects die in this gap — not because the model is bad, but because the infrastructure around it isn't ready for real conditions.
                </p>
                <p>
                  Production deployment means handling traffic that varies throughout the day. It means serving predictions in under 200 milliseconds. It means deploying a new model version without taking the service offline. It means knowing within seconds when something goes wrong, not finding out from a customer complaint hours later.
                </p>
                <p>
                  These challenges are amplified in African operating environments. Internet connectivity can be intermittent. Power infrastructure isn't always reliable. Cloud compute costs are higher relative to local budgets. A deployment strategy that works in a well-connected data centre in Virginia may fail completely in Lagos or Nairobi.
                </p>
                <p>
                  We build deployment infrastructure that accounts for these realities. Caching layers that reduce the number of model calls. Auto-scaling that respects cost budgets. Blue-green deployments that let you ship updates safely. Infrastructure as code so your team can reproduce and debug any environment.
                </p>
                <p>
                  If your AI model works in development but you can't ship it to production — or if it's in production but you're afraid to update it — we can help. Deployment infrastructure is not a luxury. It's the difference between an AI demo and an AI product.
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
            Ready to ship your AI model?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            We'll build the deployment infrastructure so you can serve your model with confidence. Scaling, rollback, and monitoring included.
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
