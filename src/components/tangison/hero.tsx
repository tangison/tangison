"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1200], [0, 250]);
  const scale = useTransform(scrollY, [0, 1200], [1, 1.1]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    if (!headingRef.current) return;

    const words = headingRef.current.querySelectorAll(".hero-word");
    if (words.length === 0) return;

    const tl = gsap.timeline({ delay: 0.6 });

    tl.fromTo(
      words,
      {
        y: 60,
        opacity: 0,
        rotateX: -15,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  const headline = "Intelligence built on what remains.";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-atlantic-black"
      aria-label="Hero section"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute inset-0 w-full h-[130%] -top-[15%] will-change-transform"
      >
        <img
          src="/images/hero-shipwreck.png"
          alt=""
          role="presentation"
          className="w-full h-full object-cover cinematic-image opacity-30"
          loading="eager"
        />
        {/* Dark/Fog Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-atlantic-black via-atlantic-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-atlantic-black via-atlantic-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-atlantic-black/50 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-2 h-2 bg-rust-signal" aria-hidden="true" />
          <span className="font-jetbrains text-[11px] text-fog-gray uppercase tracking-[0.25em]">
            Sovereign Infrastructure
          </span>
        </motion.div>

        <h1
          ref={headingRef}
          className="font-cabinet text-[clamp(2.8rem,7vw,7rem)] font-black tracking-[-0.04em] leading-[0.9] text-skeleton-bone mb-8"
          style={{ perspective: "800px" }}
        >
          {headline.split(" ").map((word, i) => (
            <span
              key={i}
              className="hero-word inline-block mr-[0.25em]"
              style={{ opacity: 0 }}
            >
              {word}
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mb-10"
        >
          <p className="text-fog-gray font-satoshi text-lg md:text-xl leading-relaxed font-light">
            AI-native sovereign infrastructure and operational intelligence systems designed for resilient African enterprise and institutional operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="/contact"
            className="bg-skeleton-bone text-atlantic-black px-8 py-5 font-jetbrains text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-3 group"
          >
            Request Access
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="/manifesto"
            className="border border-white/20 text-skeleton-bone px-8 py-5 font-jetbrains text-xs uppercase tracking-widest hover:bg-white/5 transition-colors"
          >
            Read Manifesto
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="absolute bottom-10 right-8 md:right-12 hidden md:flex flex-col items-center gap-4"
        aria-hidden="true"
      >
        <span
          className="font-jetbrains text-[9px] text-white/40 tracking-[0.3em]"
          style={{ writingMode: "vertical-rl" }}
        >
          SCROLL
        </span>
        <div className="w-[1px] h-16 bg-white/15 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 64, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            className="w-full h-5 bg-white/50 absolute top-0"
          />
        </div>
      </motion.div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5" aria-hidden="true" />
    </section>
  );
}
