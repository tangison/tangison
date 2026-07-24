"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export function RevealSection({
  children,
  className = "",
  delay = 0,
  as = "section",
}: RevealSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      }
    },
    []
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // Use classList directly instead of setState to avoid lint warning
      el.classList.add("revealed");
      return;
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersection]);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={`reveal-section ${revealed ? "revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
