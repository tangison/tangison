"use client";

import React from "react";

export function TermsPage() {
  return (
    <div className="min-h-screen bg-atlantic-black">
      <section className="px-6 sm:px-8 md:px-12 pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">Legal</span>
          </div>
          <h1 className="font-cabinet text-3xl sm:text-4xl tracking-[0.05em] text-skeleton-bone mb-6">Terms &amp; Conditions</h1>
          <div className="w-10 h-[1px] bg-rust-signal/60 mb-8" />

          <div className="space-y-6 font-satoshi text-sm sm:text-base text-white/30 leading-relaxed">
            <div>
              <h2 className="font-cabinet text-lg tracking-[0.05em] uppercase text-skeleton-bone mb-3">Site use</h2>
              <p className="mb-2">This website is provided by Tangison Technologies for informational purposes. You may browse and use the site for its intended purpose: learning about Tangison&apos;s services and initiating contact with our team.</p>
              <p>You may not use the site for any unlawful purpose, to transmit harmful code, to attempt unauthorised access to our systems, or to interfere with the site&apos;s operation or availability.</p>
            </div>

            <div>
              <h2 className="font-cabinet text-lg tracking-[0.05em] uppercase text-skeleton-bone mb-3">Intellectual property</h2>
              <p className="mb-2">All content on this website, including text, design, logos, images, and code, is the property of Tangison Technologies or its licensors. You may not reproduce, distribute, modify, or create derivative works from this content without explicit written permission.</p>
              <p>The Tangison name, logo, and visual design system are protected trademarks. Use of these marks without permission is prohibited.</p>
            </div>

            <div>
              <h2 className="font-cabinet text-lg tracking-[0.05em] uppercase text-skeleton-bone mb-3">Disclaimer</h2>
              <p>The information on this website is provided for general informational purposes. While we strive to keep it accurate and current, Tangison Technologies makes no warranties or representations about the completeness, reliability, or accuracy of the content. Any reliance you place on the information is at your own risk.</p>
            </div>

            <div>
              <h2 className="font-cabinet text-lg tracking-[0.05em] uppercase text-skeleton-bone mb-3">Limitation of liability</h2>
              <p>Tangison Technologies shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on its content. This limitation applies to the fullest extent permitted by applicable law.</p>
            </div>

            <div>
              <h2 className="font-cabinet text-lg tracking-[0.05em] uppercase text-skeleton-bone mb-3">Governing law</h2>
              <p>These terms are governed by the laws of Namibia. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of Namibia.</p>
            </div>

            <div>
              <h2 className="font-cabinet text-lg tracking-[0.05em] uppercase text-skeleton-bone mb-3">Changes to these terms</h2>
              <p>We may update these terms from time to time. Changes will be posted on this page with an updated effective date. Continued use of the site after changes constitutes acceptance of the revised terms.</p>
            </div>

            <div>
              <h2 className="font-cabinet text-lg tracking-[0.05em] uppercase text-skeleton-bone mb-3">Contact</h2>
              <p>For legal questions or concerns about these terms, contact us at contact@tangison.com.</p>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-white/10">Effective date: July 2026</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
