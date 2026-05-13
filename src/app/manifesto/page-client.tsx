"use client";

import React, { useEffect, useRef } from "react";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { motion, useInView } from "framer-motion";
import { TangisonLogo } from "@/components/tangison/logo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const manifestoPoints = [
  {
    statement: "We build for what remains.",
    elaboration:
      "The Skeleton Coast teaches a simple truth: structures that survive are built differently. Not with excess, but with intention. Every element must justify its existence under extreme conditions.",
    annotation: "PRINCIPLE_01: SURVIVAL_ARCHITECTURE",
  },
  {
    statement: "Sovereignty is not negotiable.",
    elaboration:
      "African data must reside on African infrastructure. African intelligence must operate under African authority. Dependencies on foreign systems are vulnerabilities by another name.",
    annotation: "PRINCIPLE_02: ABSOLUTE_SOVEREIGNTY",
  },
  {
    statement: "Signal over noise.",
    elaboration:
      "The world is drowning in information. Our role is not to add to the noise but to extract what matters. Decision-grade intelligence for decision-makers operating under real pressure.",
    annotation: "PRINCIPLE_03: SIGNAL_DISCIPLINE",
  },
  {
    statement: "Hostile environments are the baseline.",
    elaboration:
      "We do not design for ideal conditions. We design for network failure, power instability, physical threat, and institutional pressure. If it works here, it works anywhere.",
    annotation: "PRINCIPLE_04: HOSTILE_BASELINE",
  },
  {
    statement: "Resilience is infrastructure.",
    elaboration:
      "Resilience is not a feature we add. It is the foundation we build on. Every system, every protocol, every architectural decision begins with the question: what happens when this fails?",
    annotation: "PRINCIPLE_05: FOUNDATIONAL_RESILIENCE",
  },
  {
    statement: "Clarity builds sovereign systems.",
    elaboration:
      "Complexity is the enemy of reliability. We pursue clarity in architecture, in communication, in purpose. Clear systems survive. Confused systems collapse.",
    annotation: "PRINCIPLE_06: CLARITY_IMPERATIVE",
  },
];

const closingStatement = "We are not building for the comfortable. We are building for the inevitable.";

export default function ManifestoPage() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  const closingSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !quoteRef.current) return;

    const ctx = gsap.context(() => {
      const words = quoteRef.current!.querySelectorAll(".manifesto-word");
      if (words.length === 0) return;

      gsap.fromTo(
        words,
        { opacity: 0.06 },
        {
          opacity: 1,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "center center",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!closingSectionRef.current || !closingRef.current) return;

    const ctx = gsap.context(() => {
      const words = closingRef.current!.querySelectorAll(".closing-word");
      if (words.length === 0) return;

      gsap.fromTo(
        words,
        { opacity: 0.08 },
        {
          opacity: 1,
          stagger: 0.06,
          ease: "none",
          scrollTrigger: {
            trigger: closingSectionRef.current,
            start: "top 60%",
            end: "center center",
            scrub: 1,
          },
        }
      );
    }, closingSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SiteShell>
      <PageHeader
        label="Manifesto"
        title="What we believe."
        subtitle="The philosophy that underlies every system, signal, and structure we build."
      />

      {/* Opening Quote */}
      <section
        ref={sectionRef}
        className="py-32 md:py-48 px-6 md:px-12 lg:px-20 bg-atlantic-black flex items-center justify-center min-h-[60vh]"
        aria-label="Opening statement"
      >
        <div ref={quoteRef} className="max-w-4xl text-center">
          <h2 className="font-cabinet text-[clamp(1.8rem,4.5vw,4rem)] leading-[1.1] text-skeleton-bone tracking-tight">
            {closingStatement.split(" ").map((word, i) => (
              <span
                key={i}
                className="manifesto-word inline-block mr-[0.25em]"
              >
                {word}
              </span>
            ))}
          </h2>
        </div>
      </section>

      {/* Manifesto Points */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-[#0A0B0C] border-t border-white/[0.04]" aria-label="Manifesto principles">
        <div className="max-w-[1000px] mx-auto">
          <div className="space-y-0">
            {manifestoPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-white/[0.06] py-12 md:py-16 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-jetbrains text-[10px] text-rust-signal/40 tracking-[0.25em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 h-[1px] bg-white/[0.04]" />
                  <span className="font-jetbrains text-[8px] text-fog-gray/15 tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {point.annotation}
                  </span>
                </div>

                <h3 className="font-cabinet text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4 leading-[1.1] group-hover:text-skeleton-bone transition-colors">
                  {point.statement}
                </h3>
                <p className="font-satoshi text-fog-gray/50 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                  {point.elaboration}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skeleton Coast Reference */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-atlantic-black border-t border-white/[0.04]" aria-label="Skeleton Coast reference">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
              Origin Story
            </span>
            <h2 className="font-cabinet text-3xl md:text-4xl tracking-tight mb-6">
              The Skeleton Coast<br />is our metaphor.
            </h2>
            <p className="font-satoshi text-fog-gray/60 text-base leading-relaxed font-light mb-6">
              Where the Atlantic meets the Namib Desert, ships run aground and structures are tested by salt, wind, and time. The hulls that remain are not the most decorated — they are the most fundamentally sound.
            </p>
            <p className="font-satoshi text-fog-gray/40 text-sm leading-relaxed font-light">
              Tangison applies this philosophy to digital infrastructure. We do not build for the showcase. We build for the storm.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="relative h-72 md:h-96 overflow-hidden border border-white/10 group">
              <img
                src="/images/hero-shipwreck.png"
                alt="Skeleton Coast — Atlantic coastline"
                className="absolute inset-0 w-full h-full object-cover cinematic-image group-hover:scale-105 transition-transform duration-[1500ms]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-atlantic-black via-atlantic-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <div className="font-jetbrains text-[9px] text-fog-gray/40 uppercase tracking-widest mb-1">
                    Coordinates
                  </div>
                  <div className="font-jetbrains text-xs text-fog-gray/60 tracking-wider">
                    19°00&apos;S 12°00&apos;E
                  </div>
                </div>
                <div className="font-jetbrains text-[9px] text-rust-signal/40 uppercase tracking-widest">
                  Skeleton Coast, Namibia
                </div>
              </div>
            </div>
            {/* Signal Towers Image */}
            <div className="mt-4 relative h-72 md:h-96 overflow-hidden border border-white/10 group">
              <img
                src="/images/signal-towers.jpeg"
                alt="Communication towers at twilight — signal architecture in harsh terrain"
                className="absolute inset-0 w-full h-full object-cover cinematic-image group-hover:scale-105 transition-transform duration-[1500ms]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-atlantic-black via-atlantic-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <div className="font-jetbrains text-[9px] text-fog-gray/40 uppercase tracking-widest mb-1">
                    Signal Architecture
                  </div>
                  <div className="font-jetbrains text-xs text-fog-gray/60 tracking-wider">
                    Low-bandwidth, high-reliability
                  </div>
                </div>
                <div className="font-jetbrains text-[9px] text-rust-signal/40 uppercase tracking-widest">
                  Namib Desert
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section
        ref={closingSectionRef}
        className="py-40 md:py-56 px-6 md:px-12 lg:px-20 bg-[#0A0B0C] flex items-center justify-center min-h-[70vh] border-t border-white/[0.04]"
        aria-label="Closing statement"
      >
        <div ref={closingRef} className="max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-satoshi italic text-fog-gray/25 text-lg md:text-2xl block mb-6">
              Clarity under pressure.
            </span>
            <h2 className="font-cabinet text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-skeleton-bone tracking-tight mb-10">
              {"Resilience is not a feature.".split(" ").map((word, i) => (
                <span key={`a-${i}`} className="closing-word inline-block mr-[0.25em]">{word}</span>
              ))}
              <br />
              {"It is the infrastructure.".split(" ").map((word, i) => (
                <span key={`b-${i}`} className="closing-word inline-block mr-[0.25em]">{word}</span>
              ))}
            </h2>
            <TangisonLogo className="w-10 h-10 text-rust-signal/40 mx-auto" />
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
