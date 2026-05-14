"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal, Database, Radio, MapPin, Layers, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const narrativeCards = [
  {
    icon: Terminal,
    title: "Strategic Intelligence",
    description:
      "We synthesize unstructured data into clear operational directives. Moving beyond generic dashboards to deliver raw, actionable signal to decision-makers.",
    accent: false,
  },
  {
    icon: Database,
    title: "Data Autonomy",
    description:
      "African data must reside on African infrastructure. We design closed-loop systems that protect institutional memory from offshore extraction and disruption.",
    accent: false,
  },
  {
    icon: Radio,
    title: "Signal Architecture",
    description:
      "Low-bandwidth, high-reliability communication arrays for disparate operations. Ensuring the signal cuts through the noise, regardless of the environment.",
    accent: true,
  },
  {
    icon: MapPin,
    title: "Geographic Sovereignty",
    description:
      "Physical presence matters. Our infrastructure operates within African borders, under African jurisdiction, free from foreign interference and data extraction.",
    accent: false,
  },
  {
    icon: Layers,
    title: "Redundant Systems",
    description:
      "No single point of failure. Every critical pathway has a fallback, every decision node has a mirror. Designed for the reality of the continent.",
    accent: false,
  },
  {
    icon: ShieldCheck,
    title: "Operational Security",
    description:
      "Security is not a layer — it is the foundation. Every system we build assumes hostile conditions and survives them.",
    accent: true,
  },
];

export function NarrativeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  useEffect(() => {
    if (!sectionRef.current || !pinnedRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the left side content
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
    <section
      ref={sectionRef}
      id="intelligence"
      className="relative py-28 md:py-44 px-6 md:px-12 lg:px-20 bg-[#0A0B0C]"
      aria-label="Strategic narrative"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
        {/* Pinned Left Side */}
        <div className="md:w-[38%]">
          <div ref={pinnedRef} className="md:py-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-12 h-[1px] bg-rust-signal mb-8" aria-hidden="true" />
              <h2 className="font-cabinet text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-6 tracking-tight">
                Survival requires structure.
              </h2>
              <p className="font-satoshi text-fog-gray text-lg mb-10 font-light leading-relaxed">
                We look to the Skeleton Coast. Where ships break, the structures
                that remain are built differently. Tangison applies this
                philosophy to digital infrastructure.
              </p>
              <div className="font-jetbrains text-[10px] text-white/30 uppercase tracking-[0.25em] space-y-3">
                <p>01. Minimal Force</p>
                <p>02. Redundant Systems</p>
                <p>03. Absolute Sovereignty</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scrolling Right Side Cards */}
        <div className="md:w-[62%] space-y-4">
          {narrativeCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-atlantic-black border border-white/[0.06] p-7 md:p-10 group relative overflow-hidden hover:border-white/[0.1] transition-colors duration-500"
            >
              {/* Dot grid pattern for accent cards */}
              {card.accent && (
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "radial-gradient(#fff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10">
                <card.icon
                  className={`w-6 h-6 mb-6 ${
                    card.accent ? "text-rust-signal" : "text-fog-gray/50"
                  }`}
                />
                <h3 className="font-cabinet text-xl md:text-2xl mb-3 tracking-tight group-hover:text-skeleton-bone transition-colors">
                  {card.title}
                </h3>
                <p className="font-satoshi text-fog-gray/60 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Hover line accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-rust-signal/50 group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
