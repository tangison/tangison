"use client";

import React from "react";
import { TangisonLogo } from "./logo";

const footerLinks = {
  Company: ["Manifesto", "Architecture", "Dispatch"],
  Access: ["Client Portal", "Security", "Terms"],
};

export function Footer() {
  return (
    <footer className="bg-[#0A0B0C] pt-20 pb-8 px-6 md:px-12 lg:px-20 border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <TangisonLogo className="w-7 h-7 text-white/70" />
            <span className="font-cabinet font-bold tracking-[0.2em] uppercase text-base text-white">
              Tangison
            </span>
          </div>
          <p className="font-jetbrains text-[10px] text-white/30 max-w-xs leading-relaxed tracking-wider">
            Sovereign intelligence infrastructure.
            <br />
            Operating from the Atlantic coast.
          </p>
        </div>

        <div className="flex gap-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-jetbrains text-[9px] text-white/20 uppercase tracking-[0.3em] mb-4">
                {category}
              </h4>
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="font-jetbrains text-[10px] text-white/40 uppercase tracking-[0.2em] hover:text-white/80 transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-20 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4 font-jetbrains text-[9px] text-white/20 uppercase tracking-[0.3em]">
        <p>&copy; {new Date().getFullYear()} TANGISON SYSTEMS. ALL RIGHTS RESERVED.</p>
        <p>IDENTIFIER: TNG-NAM-01</p>
      </div>
    </footer>
  );
}
