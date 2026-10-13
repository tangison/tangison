"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ParallaxLayer: scroll-scrubbed vertical drift for decorative background
 * image layers, driven by GSAP ScrollTrigger.
 *
 * Wrap the <Image> layer of a full-bleed section. While the section crosses
 * the viewport the layer drifts from -distance% to +distance% of its own
 * height (scrub: 1, one second of catch-up lag). Give the layer extra
 * geometry (e.g. "-top-[12%] h-[124%]") so the drift never exposes edges.
 *
 * prefers-reduced-motion: the effect is skipped entirely; the layer simply
 * sits in place. Unmount kills the tween and its ScrollTrigger.
 */
export function ParallaxLayer({
  children,
  className = "",
  distance = 10,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const tween = gsap.fromTo(
      el,
      { yPercent: -distance },
      {
        yPercent: distance,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [distance]);

  return (
    <div ref={ref} className={className} aria-hidden="true">
      {children}
    </div>
  );
}
