"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Terminal, Database, Radio, Hexagon, Activity } from "lucide-react";
import gsap from "gsap";

const capabilities = [
  {
    id: "sovereign-data",
    span: "md:col-span-2 md:row-span-2",
    type: "image-large",
    icon: Shield,
    title: "Sovereign Data Facilities",
    description:
      "Physical and digital fortresses protecting institutional intelligence within African borders.",
    image: "/images/data-center.jpeg",
    tag: "CAPABILITY_01",
    accent: true,
  },
  {
    id: "signal-routing",
    span: "",
    type: "terminal",
    icon: Terminal,
    title: "Signal Routing",
    tag: "SYS.STATUS",
  },
  {
    id: "ai-infra",
    span: "",
    type: "typographic",
    icon: Hexagon,
    title: "AI Infrastructure",
    description:
      "Deploying localized models trained on regional context, bypassing offshore dependencies.",
  },
  {
    id: "uptime",
    span: "",
    type: "stat",
    stat: "99.999%",
    label: "Uptime in hostile environments",
  },
  {
    id: "resilient-platforms",
    span: "md:col-span-2",
    type: "image-wide",
    title: "Resilient Platforms",
    description:
      "Systems designed to function when primary networks fail. Built for the reality of the continent.",
    image: "/images/industrial-coast.jpeg",
  },
  {
    id: "strategic-intel",
    span: "",
    type: "typographic",
    icon: Database,
    title: "Strategic Intelligence",
    description:
      "Raw, actionable signal synthesized from unstructured data for decision-makers operating under pressure.",
  },
  {
    id: "signal-arch",
    span: "md:col-span-1",
    type: "image-small",
    icon: Radio,
    title: "Signal Architecture",
    description:
      "Low-bandwidth, high-reliability communication arrays for disparate operations.",
    image: "/images/bento-signal-tower.png",
    accent: true,
  },
];

function TerminalCard() {
  const lines = [
    "> INITIALIZING PROTOCOL...",
    "> CONNECTING NODES: 428",
    "> ENCRYPTION: MIL-SPEC",
    "> LATENCY: 12ms",
    "> SIGNAL: NOMINAL",
  ];
  const [visibleLines, setVisibleLines] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev < lines.length ? prev + 1 : prev));
    }, 800);
    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <div className="space-y-1.5 text-[11px] font-jetbrains">
      {lines.slice(0, visibleLines).map((line, i) => (
        <p key={i} className="text-green-500/70">
          {line}
        </p>
      ))}
      {visibleLines < lines.length && (
        <p className="text-green-500/40 animate-pulse">{">_"} </p>
      )}
      {visibleLines >= lines.length && (
        <p className="text-rust-signal mt-1">{"STATUS: ONLINE"}</p>
      )}
    </div>
  );
}

export function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!headingRef.current || !isInView) return;

    gsap.fromTo(
      headingRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="systems"
      className="py-28 md:py-44 px-6 md:px-12 lg:px-20 bg-atlantic-black"
      aria-label="Core Architecture"
    >
      <div className="max-w-[1400px] mx-auto">
        <div ref={headingRef} className="mb-16 md:mb-24">
          <h2 className="font-cabinet text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 opacity-0">
            Core Architecture
          </h2>
          <p className="font-jetbrains text-[11px] text-fog-gray/50 uppercase tracking-[0.2em] max-w-lg opacity-0">
            Operational capabilities spanning data sovereignty, signal analysis,
            and resilient infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[260px] sm:auto-rows-[280px] md:auto-rows-[300px] gap-3 md:gap-4 grid-flow-dense">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${cap.span} relative group overflow-hidden border border-white/[0.06] ${
                cap.type === "image-large" || cap.type === "image-wide" || cap.type === "image-small"
                  ? "bg-[#0d0f11]"
                  : cap.type === "terminal"
                  ? "bg-[#080A0B]"
                  : "bg-[#16181b]"
              }`}
            >
              {/* Large Image Card */}
              {cap.type === "image-large" && (
                <>
                  <img
                    src={cap.image}
                    alt=""
                    role="presentation"
                    className="absolute inset-0 w-full h-full object-cover cinematic-image opacity-50 group-hover:scale-[1.03] transition-transform duration-[1200ms] ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-atlantic-black via-atlantic-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
                    {cap.icon && (
                      <cap.icon className="w-5 h-5 text-rust-signal mb-4" />
                    )}
                    <h3 className="font-cabinet text-2xl md:text-3xl mb-2 tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="font-satoshi text-fog-gray/70 text-sm max-w-sm leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 font-jetbrains text-[9px] text-white/20 tracking-wider">
                    [ {cap.tag} ]
                  </div>
                </>
              )}

              {/* Wide Image Card */}
              {cap.type === "image-wide" && (
                <>
                  <img
                    src={cap.image}
                    alt=""
                    role="presentation"
                    className="absolute inset-0 w-full h-full object-cover cinematic-image opacity-30 group-hover:opacity-40 transition-opacity duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-atlantic-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
                    <h3 className="font-cabinet text-xl md:text-2xl mb-2 tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="font-satoshi text-fog-gray/60 text-sm max-w-md leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </>
              )}

              {/* Small Image Card */}
              {cap.type === "image-small" && (
                <>
                  <img
                    src={cap.image}
                    alt=""
                    role="presentation"
                    className="absolute inset-0 w-full h-full object-cover cinematic-image opacity-25 group-hover:opacity-35 transition-opacity duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-atlantic-black/90 to-atlantic-black/30" />
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    {cap.icon && (
                      <cap.icon className="w-5 h-5 text-rust-signal/80 mb-3" />
                    )}
                    <h3 className="font-cabinet text-lg mb-1 tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="font-satoshi text-fog-gray/50 text-xs leading-relaxed max-w-[200px]">
                      {cap.description}
                    </p>
                  </div>
                </>
              )}

              {/* Terminal Card */}
              {cap.type === "terminal" && (
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-rust-signal/80 text-[10px] font-jetbrains mb-4 flex justify-between uppercase tracking-wider">
                      <span>{cap.tag}</span>
                      <span className="text-green-500/60">[ ONLINE ]</span>
                    </div>
                    <TerminalCard />
                  </div>
                  <h3 className="font-cabinet text-xl text-white mt-6 tracking-tight">
                    {cap.title}
                  </h3>
                </div>
              )}

              {/* Typographic Card */}
              {cap.type === "typographic" && (
                <div className="p-6 md:p-8 flex flex-col justify-between h-full">
                  <div>
                    {cap.icon && (
                      <cap.icon className="w-7 h-7 text-fog-gray/30 mb-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-cabinet text-xl md:text-2xl mb-2 tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="font-satoshi text-fog-gray/60 text-sm leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Stat Card */}
              {cap.type === "stat" && (
                <div className="p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden="true" />
                  <div className="relative z-10">
                    <div className="text-6xl md:text-8xl font-cabinet font-black text-skeleton-bone tracking-tighter">
                      {cap.stat!.replace("%", "")}<span className="text-rust-signal">%</span>
                    </div>
                    <div className="h-[1px] w-full max-w-xs bg-white/[0.06] mt-4 mb-6" />
                    <div className="font-jetbrains text-[10px] text-fog-gray/50 uppercase tracking-[0.2em]">
                      {cap.label}
                    </div>
                  </div>
                </div>
              )}

              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
