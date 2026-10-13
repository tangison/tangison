"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Mission trace — the site's signature move.
 *
 * A telemetry rail fixed to the bottom edge of the viewport: a hairline
 * track with one tick per section of the journey. The playhead (rust)
 * follows scroll position; each waypoint stamps to teal as its section
 * is passed, so by the footer the trace is a complete record of where
 * the visitor has been. Waypoints are buttons: the trace doubles as
 * navigation.
 *
 * Embodiment rules: desktop labels are a fine-pointer affordance; phones
 * get ticks + playhead only. prefers-reduced-motion keeps the same
 * information (it is progress, not decoration) with no smoothing and
 * no smooth-scroll. Nothing transitions: every value is a direct
 * scroll reading, updated on rAF.
 */
interface Waypoint {
  id: string;
  label: string;
  at: number; // 0..1 along the track
  passed: boolean;
}

export function MissionTrace() {
  const [waypoints, setWaypoints] = useState<Waypoint[]>([]);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);
  const docHeightRef = useRef(0);

  const measure = useCallback(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-trace]")
    );
    if (sections.length === 0) return;

    const doc = document.documentElement;
    const docH = doc.scrollHeight;
    const vh = window.innerHeight;
    const travel = Math.max(docH - vh, 1);
    docHeightRef.current = docH;

    const next = sections.map((el) => {
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const center = top + rect.height / 2;
      // waypoint sits where the playhead is when the section is centered
      const at = Math.min(Math.max((center - vh / 2) / travel, 0), 1);
      return {
        id: el.id,
        label: el.dataset.trace ?? "",
        at,
        passed: window.scrollY >= at,
      };
    });
    setWaypoints(next);
    setProgress(Math.min(Math.max(window.scrollY / travel, 0), 1));
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafRef.current = requestAnimationFrame(() => {
        ticking = false;
        // late-arriving content (images, console) shifts offsets: re-measure
        if (document.documentElement.scrollHeight !== docHeightRef.current) {
          measure();
          return;
        }
        const vh = window.innerHeight;
        const travel = Math.max(document.documentElement.scrollHeight - vh, 1);
        const y = window.scrollY;
        setProgress(Math.min(Math.max(y / travel, 0), 1));
        setWaypoints((prev) =>
          prev.map((w) => ({ ...w, passed: y >= w.at }))
        );
      });
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      cancelAnimationFrame(rafRef.current);
    };
  }, [measure]);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  if (waypoints.length === 0) return null;

  // Portaled to document.body: the app's <main> carries a runtime transform
  // (entrance animation leftover), which would otherwise become the
  // containing block for this fixed rail and anchor it to main's bottom
  // instead of the viewport edge. The portal escapes it.
  return createPortal(
    <nav
      aria-label="Page progress"
      className="fixed inset-x-0 bottom-0 z-[60] h-6 pointer-events-none select-none"
      style={{
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      {/* track: the whole journey */}
      <span
        aria-hidden="true"
        className="absolute left-0 right-0 bottom-[5px] h-px bg-white/[0.07]"
      />
      {/* record: the part already travelled */}
      <span
        aria-hidden="true"
        className="absolute left-0 bottom-[5px] h-px bg-signal-teal/50"
        style={{ width: `${progress * 100}%` }}
      />
      {/* playhead: the visitor's hand on the timeline */}
      <span
        aria-hidden="true"
        className="absolute bottom-[2px] h-[7px] w-[2px] -translate-x-1/2 bg-rust-signal"
        style={{ left: `${progress * 100}%` }}
      />
      {/* waypoints: stamped as passed, clickable as navigation */}
      {waypoints.map((w) => (
        <button
          key={w.id}
          type="button"
          onClick={() => jump(w.id)}
          aria-label={`Go to ${w.label}`}
          className="group absolute bottom-0 -translate-x-1/2 pointer-events-auto flex flex-col items-center"
          style={{ left: `${w.at * 100}%` }}
        >
          <span
            className={`hidden lg:block font-jetbrains text-[8px] uppercase tracking-[0.18em] mb-[3px] transition-colors duration-300 ${
              w.passed ? "text-white/60" : "text-white/25 group-hover:text-white/45"
            }`}
          >
            {w.label}
          </span>
          <span
            className={`w-px h-[9px] transition-colors duration-300 ${
              w.passed ? "bg-signal-teal" : "bg-white/20 group-hover:bg-white/40"
            }`}
          />
        </button>
      ))}
    </nav>,
    document.body
  );
}
