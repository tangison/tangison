"use client";

import React from "react";

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-atlantic-black">
      <section className="px-6 sm:px-8 md:px-12 pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">Legal</span>
          </div>
          <h1 className="font-cabinet text-3xl sm:text-4xl tracking-[0.05em] text-skeleton-bone mb-6">Privacy Policy</h1>
          <div className="w-10 h-[1px] bg-rust-signal/60 mb-8" />

          <div className="space-y-6 font-satoshi text-sm sm:text-base text-white/30 leading-relaxed">
            <div>
              <h2 className="font-cabinet text-lg tracking-[0.05em] uppercase text-skeleton-bone mb-3">Data collection</h2>
              <p className="mb-2">Tangison Technologies collects personal data only when you voluntarily submit it through our contact form. The data we collect includes your name, email address, organisation (if provided), and the content of your message.</p>
              <p>We do not collect data through cookies, tracking pixels, or automated scraping. We do not require account creation or authentication to access any public page on this website.</p>
            </div>

            <div>
              <h2 className="font-cabinet text-lg tracking-[0.05em] uppercase text-skeleton-bone mb-3">Data use</h2>
              <p className="mb-2">Contact form submissions are used solely to respond to your enquiry. We do not sell, share, or redistribute your personal data to third parties for marketing, advertising, or any purpose unrelated to responding to your enquiry.</p>
              <p>We may use your email address to follow up on your enquiry or to send a single confirmation that your message was received. No ongoing email communication will be initiated without your explicit consent.</p>
            </div>

            <div>
              <h2 className="font-cabinet text-lg tracking-[0.05em] uppercase text-skeleton-bone mb-3">Data retention</h2>
              <p>Contact form submissions are retained for as long as necessary to complete the enquiry conversation, and then deleted within 90 days unless you request ongoing contact or a formal relationship is established that requires record retention.</p>
            </div>

            <div>
              <h2 className="font-cabinet text-lg tracking-[0.05em] uppercase text-skeleton-bone mb-3">Cookies</h2>
              <p>This website does not use cookies by default. No analytics, advertising, or tracking cookies are placed. If we introduce optional features that require cookies in the future, we will update this policy and provide clear notice and consent mechanisms before deployment.</p>
            </div>

            <div>
              <h2 className="font-cabinet text-lg tracking-[0.05em] uppercase text-skeleton-bone mb-3">Third-party services</h2>
              <p>This website does not integrate with any third-party analytics, advertising, or data processing services. Contact form submissions are processed internally by Tangison Technologies.</p>
            </div>

            <div>
              <h2 className="font-cabinet text-lg tracking-[0.05em] uppercase text-skeleton-bone mb-3">Security</h2>
              <p>We implement reasonable technical and organisational measures to protect your personal data. Contact form submissions are transmitted over encrypted connections. Data is not stored in publicly accessible systems. However, no internet transmission is fully secure, and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="font-cabinet text-lg tracking-[0.05em] uppercase text-skeleton-bone mb-3">Your rights</h2>
              <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at contact@tangison.com. We will respond to such requests within 30 days.</p>
            </div>

            <div>
              <h2 className="font-cabinet text-lg tracking-[0.05em] uppercase text-skeleton-bone mb-3">Changes to this policy</h2>
              <p>We may update this privacy policy when our data practices change. Changes will be posted on this page with an updated effective date. We will not materially change our data practices without providing clear notice.</p>
            </div>

            <div>
              <h2 className="font-cabinet text-lg tracking-[0.05em] uppercase text-skeleton-bone mb-3">Contact</h2>
              <p>For any privacy-related questions or concerns, contact us at contact@tangison.com.</p>
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
