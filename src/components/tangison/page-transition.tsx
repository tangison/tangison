"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const showTransition = useCallback(() => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = "1";
      overlayRef.current.style.pointerEvents = "auto";
    }
  }, []);

  const hideTransition = useCallback(() => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = "0";
      overlayRef.current.style.pointerEvents = "none";
    }
  }, []);

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;

      // Show transition overlay
      showTransition();

      // Clear any existing timer
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }

      // Hide overlay after delay
      transitionTimerRef.current = setTimeout(hideTransition, 600);
    }

    return () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    };
  }, [pathname, showTransition, hideTransition]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[100] bg-atlantic-black flex items-center justify-center pointer-events-none"
        style={{ opacity: 0, transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-6">
          <img
            src="/images/logo.png"
            alt=""
            className="h-8 w-auto mix-blend-screen opacity-60"
            aria-hidden="true"
          />
          <div className="w-24 h-[1px] bg-rust-signal/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-rust-signal animate-[slide_0.8s_linear_infinite]" />
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
