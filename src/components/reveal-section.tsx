"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// One-time global: recalculate trigger positions once fonts and images have
// fully loaded (viewport resizes are handled by ScrollTrigger itself).
if (typeof window !== "undefined") {
  window.addEventListener(
    "load",
    () => {
      ScrollTrigger.refresh();
    },
    { once: true }
  );
}

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  id?: string;
}

/**
 * Scroll reveal wrapper, GSAP ScrollTrigger edition.
 *
 * The element fades up as it enters the viewport (start "top 88%", reveal
 * once, no reverse). Styling lives in globals.css on .reveal-section /
 * .revealed, gated behind html.js so content stays visible without JS.
 *
 * prefers-reduced-motion: the element jumps straight to .revealed with the
 * CSS collapse handling the rest. Triggers are killed on unmount so no
 * stale ScrollTrigger survives a client-side navigation.
 */
export function RevealSection({
  children,
  className = "",
  delay = 0,
  as = "section",
  id,
}: RevealSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      el.classList.add("revealed");
      return;
    }

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => el.classList.add("revealed"),
    });
    return () => st.kill();
  }, []);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal-section ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
