"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/architecture", label: "Architecture" },
  { href: "/systems", label: "Systems" },
  { href: "/intelligence", label: "Intelligence" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/brand", label: "Brand" },
  { href: "/contact", label: "Contact" },
];

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-5 h-5 flex flex-col justify-center gap-[5px] relative">
      <span
        className={`block w-full h-[1.5px] bg-skeleton-bone transition-all duration-300 origin-center ${
          isOpen ? "rotate-45 translate-y-[3.25px]" : ""
        }`}
      />
      <span
        className={`block w-full h-[1.5px] bg-skeleton-bone transition-all duration-300 origin-center ${
          isOpen ? "-rotate-45 -translate-y-[3.25px]" : ""
        }`}
      />
    </div>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-5 sm:px-6 md:px-12 py-4 md:py-6 flex justify-between items-center ${
          isScrolled
            ? "bg-atlantic-black/90 backdrop-blur-xl border-b border-white/5 py-3 md:py-4"
            : "bg-transparent"
        }`}
      >
        {/* Wordmark only — no brand icon in header */}
        <Link
          href="/"
          className="font-cabinet font-bold tracking-[0.3em] uppercase text-skeleton-bone text-sm md:text-base hover:text-white transition-colors duration-300"
          aria-label="Tangison home"
        >
          TANGISON
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex gap-8 font-jetbrains text-[10px] uppercase tracking-[0.2em] text-fog-gray/60">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-skeleton-bone transition-colors duration-300 relative group ${
                pathname === link.href
                  ? "text-skeleton-bone"
                  : link.href === "/contact"
                  ? "hover:text-rust-signal text-rust-signal/50"
                  : ""
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-[1px] bg-current transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile hamburger — two lines only */}
        <button
          className="lg:hidden text-skeleton-bone p-2 -mr-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          <HamburgerIcon isOpen={isMobileOpen} />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-atlantic-black/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-5 sm:gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    data-nav-link
                    className={`font-cabinet text-xl sm:text-2xl tracking-[0.15em] uppercase transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-skeleton-bone"
                        : link.href === "/contact"
                        ? "text-rust-signal hover:text-rust-signal/80"
                        : "text-fog-gray/60 hover:text-skeleton-bone"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 sm:mt-16"
            >
              <span className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-[0.3em]">
                Windhoek, Namibia
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
