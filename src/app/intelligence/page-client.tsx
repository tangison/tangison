"use client";

import React, { useEffect, useRef } from "react";
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
  },
  {
    code: "GEOINT",
    name: "Geospatial Intelligence",
    description: "Spatial analysis of operational environments. Terrain modeling. Infrastructure mapping. Movement pattern recognition.",
    capability: "SADC coverage",
  },
  {
    code: "CYBINT",
    name: "Cyber Intelligence",
    description: "Digital threat detection. Infrastructure vulnerability assessment. Attack surface monitoring. Defensive signal architecture.",
    capability: "MIL-SPEC encryption",
  },
  {
    code: "OSINT",
    name: "Open Source Intelligence",
    description: "Systematic collection and analysis of publicly available data. Information verification. Source reliability scoring. Narrative detection.",
    capability: "Multi-language support",
  },
];

const pipeline = [
  { stage: "Collection", desc: "Multi-source signal acquisition across operational domains" },
  { stage: "Processing", desc: "Structured filtering, normalization, and classification" },
  { stage: "Analysis", desc: "Pattern detection, anomaly identification, threat assessment" },
  { stage: "Synthesis", desc: "Integration into decision-grade intelligence products" },
  { stage: "Delivery", desc: "Secure dissemination to authorized decision-makers" },
];

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
              <motion.div
                key={mod.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0A0B0C] border border-white/[0.06] p-8 md:p-10 group hover:border-white/[0.1] transition-colors duration-500 relative overflow-hidden"
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

                <div className="relative z-10">
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
                  <p className="font-satoshi text-fog-gray/50 text-sm leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-rust-signal/40 group-hover:w-full transition-all duration-700 ease-out" />
              </motion.div>
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
                  <div className="font-jetbrains text-[11px] text-rust-signal/40 tracking-wider pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-cabinet text-xl mb-2 tracking-tight group-hover:text-skeleton-bone transition-colors">
                      {step.stage}
                    </h3>
                    <p className="font-satoshi text-fog-gray/50 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
