"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TangisonLogo } from "./logo";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  useEffect(() => {
    if (!sectionRef.current || !quoteRef.current) return;

    const ctx = gsap.context(() => {
      // Word-by-word reveal scrubbed to scroll
      const words = quoteRef.current!.querySelectorAll(".philosophy-word");
      if (words.length === 0) return;

      gsap.fromTo(
        words,
        { opacity: 0.08 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "center center",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const line1 = "Resilience is not a feature.";
  const line2 = "It is the infrastructure.";

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative py-40 md:py-56 px-6 md:px-12 lg:px-20 bg-atlantic-black flex items-center justify-center min-h-[85vh] overflow-hidden"
      aria-label="Brand philosophy"
    >
      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse at center, #C56A4A 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div ref={quoteRef} className="max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="font-satoshi italic text-fog-gray/30 text-xl md:text-3xl lg:text-4xl block">
            Clarity under pressure.
          </span>
        </motion.div>

        <h2 className="font-cabinet text-[clamp(2rem,5.5vw,5rem)] leading-[1.05] text-skeleton-bone tracking-tight">
          {line1.split(" ").map((word, i) => (
            <span key={`l1-${i}`} className="philosophy-word inline-block mr-[0.3em]">
              {word}
            </span>
          ))}
          <br />
          {line2.split(" ").map((word, i) => (
            <span key={`l2-${i}`} className="philosophy-word inline-block mr-[0.3em]">
              {word}
            </span>
          ))}
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            delay: 0.5,
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-16 flex justify-center"
        >
          <TangisonLogo className="w-10 h-10 text-rust-signal/60" />
        </motion.div>
      </div>
    </section>
  );
}
