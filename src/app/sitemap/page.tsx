import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Human-readable sitemap for the Tangison Technologies website.",
  alternates: { canonical: "/sitemap" },
};

const sitemapLinks = [
  { href: "/", label: "Home", description: "Applied AI that works where infrastructure breaks" },
  { href: "/about", label: "About", description: "About Tangison Technologies" },
  { href: "/services", label: "Services", description: "AI Operations, Applied AI, Research & Consulting" },
  { href: "/brand", label: "Brand", description: "Tangison brand guidelines" },
  { href: "/contact", label: "Contact", description: "Start a conversation" },
  { href: "/privacy", label: "Privacy Policy", description: "How we handle your data" },
  { href: "/terms", label: "Terms & Conditions", description: "Terms of use" },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-atlantic-black">
      <section className="px-6 sm:px-8 md:px-12 pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">Navigation</span>
          </div>
          <h1 className="font-cabinet text-3xl sm:text-4xl tracking-[0.05em] text-skeleton-bone mb-6">Sitemap</h1>
          <div className="w-10 h-[1px] bg-rust-signal/60 mb-8" />

          <div className="space-y-4">
            {sitemapLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group block border border-white/[0.06] hover:border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.05] p-4 sm:p-6 transition-all duration-500"
              >
                <h2 className="font-cabinet text-lg sm:text-xl tracking-[0.05em] uppercase text-skeleton-bone group-hover:text-rust-signal transition-colors duration-300">
                  {link.label}
                </h2>
                <p className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-white/20 group-hover:text-white/30 transition-colors duration-300 mt-1">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-white/[0.06]">
            <p className="font-jetbrains text-[8px] uppercase tracking-[0.3em] text-white/10">
              External: studio.tangison.com | agent.tangison.com | labs.tangison.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
