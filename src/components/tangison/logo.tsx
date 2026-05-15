"use client";

import React from "react";

interface TangisonLogoProps {
  className?: string;
}

export function TangisonLogo({ className = "w-8 h-8" }: TangisonLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Tangison logo — shipwreck mast mark"
    >
      {/* Vertical mast */}
      <path d="M50 8V92" stroke="currentColor" strokeWidth="5" strokeMiterlimit="10" />
      {/* Horizontal cross-beam */}
      <path d="M28 38L72 38" stroke="currentColor" strokeWidth="5" strokeMiterlimit="10" />
      {/* Top arrow point — navigational marker */}
      <path d="M38 18L50 8L62 18" stroke="currentColor" strokeWidth="5" strokeMiterlimit="10" strokeLinejoin="bevel" />
      {/* Base foundation block */}
      <rect x="42" y="64" width="16" height="16" fill="currentColor" />
      {/* Signal dot */}
      <circle cx="72" cy="38" r="4" fill="currentColor" />
    </svg>
  );
}
