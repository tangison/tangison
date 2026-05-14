"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const systems = [
  {
    type: "browser",
    title: "SOVEREIGN DASHBOARD",
    url: "ops.tangison.na/strategic",
    content: (
      <div className="space-y-3">
        <div className="flex justify-between items-center text-[10px] font-jetbrains">
          <span className="text-fog-gray/40">REGION</span>
          <span className="text-rust-signal">SOUTHERN AFRICA</span>
        </div>
        <div className="h-[1px] bg-white/[0.06]" />
        <div className="grid grid-cols-3 gap-3">
          <div>
            <div className="text-lg font-cabinet text-skeleton-bone">428</div>
            <div className="text-[9px] font-jetbrains text-fog-gray/40 uppercase">Active Nodes</div>
          </div>
          <div>
            <div className="text-lg font-cabinet text-skeleton-bone">12ms</div>
            <div className="text-[9px] font-jetbrains text-fog-gray/40 uppercase">Latency</div>
          </div>
          <div>
            <div className="text-lg font-cabinet text-green-500/80">ONLINE</div>
            <div className="text-[9px] font-jetbrains text-fog-gray/40 uppercase">Status</div>
          </div>
        </div>
        <div className="h-[1px] bg-white/[0.06]" />
        <div className="flex gap-2">
          <div className="h-8 flex-1 bg-rust-signal/10 border border-rust-signal/20 flex items-center justify-center">
            <span className="text-[9px] font-jetbrains text-rust-signal/70">SIGNAL ACTIVE</span>
          </div>
          <div className="h-8 flex-1 bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
            <span className="text-[9px] font-jetbrains text-fog-gray/40">ENCRYPTED</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    type: "terminal",
    title: "SIGNAL PROTOCOL",
    content: (
      <div className="font-jetbrains text-[11px] space-y-1.5">
        <p className="text-fog-gray/30">$ tangison signal --init</p>
        <p className="text-green-500/60">Initializing secure channel...</p>
        <p className="text-green-500/60">Handshake complete. Encryption: AES-256-GCM</p>
        <p className="text-fog-gray/30">$ route add --node=windhoek-01</p>
        <p className="text-green-500/60">Node windhoek-01 connected. Latency: 8ms</p>
        <p className="text-fog-gray/30">$ deploy --sovereign --region=sadc</p>
        <p className="text-rust-signal/80">Deploying sovereign infrastructure...</p>
        <p className="text-rust-signal/80">Status: PROVISIONING</p>
        <p className="text-fog-gray/30 animate-pulse">_</p>
      </div>
    ),
  },
  {
    type: "infrastructure",
    title: "INFRASTRUCTURE MAP",
    content: (
      <div className="relative h-40">
        <img
          src="/images/world-map.jpeg"
          alt="Infrastructure coverage across SADC region"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-between font-jetbrains text-[8px] text-fog-gray/30 uppercase tracking-wider">
          <span>WINDHOEK</span>
          <span>SADC REGION</span>
          <span>ATLANTIC</span>
        </div>
      </div>
    ),
  },
];

export function SystemsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-28 md:py-44 px-6 md:px-12 lg:px-20 bg-atlantic-black border-t border-white/[0.04]"
      aria-label="Strategic systems showcase"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <span className="font-jetbrains text-[10px] text-rust-signal/60 uppercase tracking-[0.3em] mb-4 block">
            Operational Interface
          </span>
          <h2 className="font-cabinet text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Systems in Practice
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {systems.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[#0A0B0C] border border-white/[0.06] overflow-hidden group hover:border-white/[0.1] transition-colors duration-500"
            >
              {/* Browser chrome header */}
              <div className="border-b border-white/[0.06] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  {/* Square dots instead of rounded — consistent with border-radius: 0 */}
                  <div className="w-2.5 h-2.5 bg-white/10" />
                  <div className="w-2.5 h-2.5 bg-white/10" />
                  <div className="w-2.5 h-2.5 bg-white/10" />
                </div>
                {system.type === "browser" && (
                  <div className="flex-1 bg-white/[0.04] px-3 py-1 text-[9px] font-jetbrains text-fog-gray/30 tracking-wider">
                    {system.url}
                  </div>
                )}
                {system.type !== "browser" && (
                  <div className="flex-1 text-[9px] font-jetbrains text-fog-gray/30 tracking-wider uppercase">
                    {system.title}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                {system.type === "browser" && (
                  <div className="mb-4">
                    <span className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-wider">
                      {system.title}
                    </span>
                  </div>
                )}
                {system.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
