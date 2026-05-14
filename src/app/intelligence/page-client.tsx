"use client";

import React, { useEffect, useRef, useState } from "react";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { NarrativeSection } from "@/components/tangison/narrative";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const intelModules = [
  {
    code: "SIGINT",
    name: "Signal Intelligence",
    description: "Real-time signal monitoring and analysis across operational zones. Pattern detection. Anomaly identification. Threat classification.",
    capability: "428+ active nodes",
    metrics: [
      { label: "Active Nodes", value: "428+" },
      { label: "Coverage", value: "SADC" },
      { label: "Latency", value: "<12ms" },
    ],
  },
  {
    code: "GEOINT",
    name: "Geospatial Intelligence",
    description: "Spatial analysis of operational environments. Terrain modeling. Infrastructure mapping. Movement pattern recognition.",
    capability: "SADC coverage",
    metrics: [
      { label: "Resolution", value: "0.5m" },
      { label: "Update Cycle", value: "6hr" },
      { label: "Coverage", value: "SADC" },
    ],
  },
  {
    code: "CYBINT",
    name: "Cyber Intelligence",
    description: "Digital threat detection. Infrastructure vulnerability assessment. Attack surface monitoring. Defensive signal architecture.",
    capability: "MIL-SPEC encryption",
    metrics: [
      { label: "Encryption", value: "AES-256" },
      { label: "Threat Feeds", value: "24/7" },
      { label: "Response", value: "<4hr" },
    ],
  },
  {
    code: "OSINT",
    name: "Open Source Intelligence",
    description: "Systematic collection and analysis of publicly available data. Information verification. Source reliability scoring. Narrative detection.",
    capability: "Multi-language support",
    metrics: [
      { label: "Languages", value: "12+" },
      { label: "Sources", value: "50K+" },
      { label: "Verification", value: "3-layer" },
    ],
  },
];

const pipeline = [
  {
    stage: "Collection",
    desc: "Multi-source signal acquisition across operational domains",
    detail: "SIGINT, GEOINT, CYBINT, OSINT feeds ingest continuously. Automated prioritization based on operational relevance and threat level.",
  },
  {
    stage: "Processing",
    desc: "Structured filtering, normalization, and classification",
    detail: "Raw signal passes through noise reduction, deduplication, and structured tagging. Data is normalized into unified operational schemas.",
  },
  {
    stage: "Analysis",
    desc: "Pattern detection, anomaly identification, threat assessment",
    detail: "AI-driven pattern recognition identifies anomalies across all signal types. Threat scoring and confidence levels assigned to each finding.",
  },
  {
    stage: "Synthesis",
    desc: "Integration into decision-grade intelligence products",
    detail: "Cross-source correlation creates unified intelligence picture. Redundant verification ensures reliability before dissemination.",
  },
  {
    stage: "Delivery",
    desc: "Secure dissemination to authorized decision-makers",
    detail: "Classified compartment handling. Need-to-know access controls. Encrypted channels with sovereign key management.",
  },
];

function IntelModuleCard({ mod, index }: { mod: typeof intelModules[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#0A0B0C] border border-white/[0.06] group hover:border-white/[0.1] transition-colors duration-500 relative overflow-hidden cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setIsExpanded(!isExpanded); }}}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 p-8 md:p-10">
        <div className="flex items-center justify-between mb-6">
          <span className="font-jetbrains text-[11px] text-rust-signal/60 tracking-[0.2em]">
            {mod.code}
          </span>
          <span className="font-jetbrains text-[9px] text-green-500/40 tracking-[0.2em] uppercase">
            {mod.capability}
          </span>
        </div>

        <h3 className="font-cabinet text-xl md:text-2xl tracking-tight mb-3 group-hover:text-skeleton-bone transition-colors">
          {mod.name}
        </h3>
        <p className="font-satoshi text-fog-gray/50 text-sm leading-relaxed mb-4">
          {mod.description}
        </p>

        {/* Metrics - always visible */}
        <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 border-t border-white/[0.04]">
          {mod.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-cabinet text-lg text-skeleton-bone tracking-tight">{m.value}</div>
              <div className="font-jetbrains text-[8px] text-fog-gray/30 uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover line */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-rust-signal/40 group-hover:w-full transition-all duration-700 ease-out" />
    </motion.div>
  );
}

export default function IntelligencePage() {
  const pinnedRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !pinnedRef.current) return;

    const ctx = gsap.context(() => {
      if (window.innerWidth >= 768) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: pinnedRef.current,
          pinSpacing: false,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SiteShell>
      <PageHeader
        label="Intelligence"
        title="Signal that cuts through the noise."
        subtitle="Strategic signal synthesis, data sovereignty operations, and actionable intelligence for decision-makers operating under pressure."
      />

      {/* Intelligence Modules */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-atlantic-black" aria-label="Intelligence modules">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-16">
            <div className="w-8 h-[1px] bg-rust-signal/50" aria-hidden="true" />
            <span className="font-jetbrains text-[10px] text-fog-gray/40 uppercase tracking-[0.3em]">
              Operational Modules
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {intelModules.map((mod, i) => (
              <IntelModuleCard key={mod.code} mod={mod} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Pipeline - Scroll Pinned */}
      <section
        ref={sectionRef}
        className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-[#0A0B0C] border-t border-white/[0.04]"
        aria-label="Intelligence pipeline"
      >
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
          {/* Pinned Left */}
          <div className="md:w-[38%]">
            <div ref={pinnedRef} className="md:py-8">
              <div className="w-12 h-[1px] bg-rust-signal mb-8" aria-hidden="true" />
              <h2 className="font-cabinet text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-6 tracking-tight">
                From signal to decision.
              </h2>
              <p className="font-satoshi text-fog-gray text-lg mb-8 font-light leading-relaxed">
                Raw data is not intelligence. We transform operational signal into
                decision-grade products through a disciplined, five-stage pipeline.
              </p>
              <div className="font-jetbrains text-[10px] text-white/25 uppercase tracking-[0.25em]">
                PIPELINE: TNG-INT-PROTOCOL-v2.1
              </div>

              {/* Pipeline progress indicator */}
              <div className="mt-8 space-y-1">
                {pipeline.map((step, i) => (
                  <div key={step.stage} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-rust-signal/30" />
                    <span className="font-jetbrains text-[9px] text-fog-gray/20 uppercase tracking-wider">
                      0{i + 1} — {step.stage}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scrolling Right */}
          <div className="md:w-[62%] space-y-4">
            {pipeline.map((step, i) => (
              <motion.div
                key={step.stage}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="bg-atlantic-black border border-white/[0.06] p-7 md:p-10 group hover:border-white/[0.1] transition-colors duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="font-jetbrains text-[11px] text-rust-signal/40 tracking-wider pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {/* Connection line */}
                    {i < pipeline.length - 1 && (
                      <div className="w-[1px] h-8 bg-white/[0.04]" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-cabinet text-xl mb-2 tracking-tight group-hover:text-skeleton-bone transition-colors">
                      {step.stage}
                    </h3>
                    <p className="font-satoshi text-fog-gray/50 text-sm leading-relaxed mb-3">
                      {step.desc}
                    </p>
                    <p className="font-satoshi text-fog-gray/30 text-xs leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Parameters */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-atlantic-black border-t border-white/[0.04]" aria-label="Operational parameters">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
              Operational Parameters
            </span>
            <h2 className="font-cabinet text-4xl md:text-5xl tracking-tight">
              Engineered for pressure.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Classification Handling",
                items: [
                  "Multi-level security compartments",
                  "Need-to-know access enforcement",
                  "Sovereign key management",
                  "Zero third-party data sharing",
                ],
              },
              {
                title: "Resilience Standards",
                items: [
                  "Automatic failover at every layer",
                  "Offline-first operational capability",
                  "Graceful degradation protocols",
                  "Redundant signal paths",
                ],
              },
              {
                title: "Delivery Guarantees",
                items: [
                  "Decision-grade output only",
                  "Confidence scoring on all products",
                  "Source verification 3-layer check",
                  "Temporal relevance tagging",
                ],
              },
            ].map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0A0B0C] border border-white/[0.06] p-8"
              >
                <div className="font-cabinet text-lg tracking-tight mb-6 text-skeleton-bone">
                  {section.title}
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="font-jetbrains text-[11px] text-fog-gray/50 flex items-start gap-2 tracking-wide">
                      <span className="text-rust-signal/50 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Strategic Operations Interface Image */}
          <div className="mt-16 relative h-64 md:h-[500px] overflow-hidden border border-white/[0.06] group">
            <img
              src="/images/strategic-ops-ui.jpeg"
              alt="Strategic Operations Interface — Tangison intelligence platform"
              className="absolute inset-0 w-full h-full object-cover cinematic-image"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-atlantic-black via-atlantic-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <div className="font-jetbrains text-[9px] text-fog-gray/40 uppercase tracking-widest mb-1">
                  Interface Preview
                </div>
                <div className="font-jetbrains text-xs text-fog-gray/60 tracking-wider">
                  Strategic Operations Interface
                </div>
              </div>
              <div className="font-jetbrains text-[9px] text-rust-signal/40 uppercase tracking-widest">
                TNG-INT-PROTOCOL-v2.1
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-deep-ocean/30" aria-label="Next step">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cabinet text-3xl md:text-5xl tracking-tight mb-6">
            Read the manifesto.
          </h2>
          <p className="font-satoshi text-fog-gray/60 text-lg mb-10 font-light">
            The philosophy that underlies every system and signal we build.
          </p>
          <Link
            href="/manifesto"
            className="inline-flex items-center gap-2 bg-skeleton-bone text-atlantic-black px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-fog-gray transition-all duration-300 group"
          >
            Read Manifesto
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
