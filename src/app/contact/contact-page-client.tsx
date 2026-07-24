"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, ArrowUpRight, Loader2, CheckCircle, AlertCircle, WifiOff } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "validation-error" | "server-error" | "offline";

export function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.email = "Enter a valid email address";
    if (!message.trim()) errs.message = "Message is required";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormState("validation-error");
      return;
    }

    setErrors({});
    setFormState("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState("success");
    } catch {
      if (!navigator.onLine) {
        setFormState("offline");
      } else {
        setFormState("server-error");
      }
    }
  }

  function resetForm() {
    setFormState("idle");
    setName("");
    setEmail("");
    setOrganisation("");
    setMessage("");
    setErrors({});
  }

  return (
    <div className="min-h-screen bg-atlantic-black">
      {/* Hero with atmosphere background */}
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero-atmosphere.webp"
            alt=""
            fill
            className="object-cover opacity-[0.20]"
            priority
            sizes="100vw"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">Contact</span>
            </div>
            <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] text-skeleton-bone leading-[1.1] mb-5">
              Start a conversation
            </h1>
            <div className="w-10 h-[1px] bg-rust-signal/60 animate-line-expand" />
            <p className="font-satoshi text-sm sm:text-base text-white/30 leading-relaxed max-w-lg mt-5">
              We want to understand your challenge before proposing a solution. We respond to every enquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Success state */}
      {formState === "success" && (
        <section className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-12 h-12 border border-signal-teal/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-5 h-5 text-signal-teal" />
            </div>
            <h2 className="font-cabinet text-xl tracking-[0.1em] uppercase text-skeleton-bone mb-3">
              Message sent
            </h2>
            <p className="font-satoshi text-sm text-white/30 leading-relaxed mb-6">
              We will respond within two business days. If your enquiry is
              urgent, you can also reach us directly at
              contact@tangison.com.
            </p>
            <button
              onClick={resetForm}
              className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-rust-signal hover:text-rust-light transition-colors duration-300"
            >
              Send another message
            </button>
          </div>
        </section>
      )}

      {/* Server error state */}
      {formState === "server-error" && (
        <section className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-12 h-12 border border-error/30 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-5 h-5 text-error" />
            </div>
            <h2 className="font-cabinet text-xl tracking-[0.1em] uppercase text-skeleton-bone mb-3">
              Something went wrong
            </h2>
            <p className="font-satoshi text-sm text-white/30 leading-relaxed mb-6">
              Please try again, or email us directly at
              contact@tangison.com.
            </p>
            <button
              onClick={() => setFormState("idle")}
              className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-rust-signal hover:text-rust-light transition-colors duration-300"
            >
              Try again
            </button>
          </div>
        </section>
      )}

      {/* Offline state */}
      {formState === "offline" && (
        <section className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-12 h-12 border border-white/[0.08] flex items-center justify-center mx-auto mb-6">
              <WifiOff className="w-5 h-5 text-white/30" />
            </div>
            <h2 className="font-cabinet text-xl tracking-[0.1em] uppercase text-skeleton-bone mb-3">
              You appear to be offline
            </h2>
            <p className="font-satoshi text-sm text-white/30 leading-relaxed mb-6">
              Please check your connection and try again, or email us directly
              at contact@tangison.com.
            </p>
            <button
              onClick={() => setFormState("idle")}
              className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-rust-signal hover:text-rust-light transition-colors duration-300"
            >
              Try again
            </button>
          </div>
        </section>
      )}

      {/* Form */}
      {formState !== "success" && formState !== "server-error" && formState !== "offline" && (
        <section className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 sm:gap-12">
            {/* Form */}
            <div className="md:w-2/3">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="contact-name" className="block font-jetbrains text-[9px] uppercase tracking-[0.25em] text-white/25 mb-2">
                    Name <span className="text-rust-signal/40">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={formState === "loading"}
                    className={`w-full bg-white/[0.04] border ${errors.name ? "border-error/50" : "border-white/[0.08]"} px-4 py-3 font-satoshi text-sm text-skeleton-bone placeholder:text-white/20 focus:border-rust-signal/50 focus:outline-none transition-colors duration-300 disabled:opacity-50`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="font-jetbrains text-[9px] tracking-[0.1em] text-error mt-1" role="alert">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block font-jetbrains text-[9px] uppercase tracking-[0.25em] text-white/25 mb-2">
                    Email <span className="text-rust-signal/40">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={formState === "loading"}
                    className={`w-full bg-white/[0.04] border ${errors.email ? "border-error/50" : "border-white/[0.08]"} px-4 py-3 font-satoshi text-sm text-skeleton-bone placeholder:text-white/20 focus:border-rust-signal/50 focus:outline-none transition-colors duration-300 disabled:opacity-50`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="font-jetbrains text-[9px] tracking-[0.1em] text-error mt-1" role="alert">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-org" className="block font-jetbrains text-[9px] uppercase tracking-[0.25em] text-white/25 mb-2">
                    Organisation
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    disabled={formState === "loading"}
                    className="w-full bg-white/[0.04] border border-white/[0.08] px-4 py-3 font-satoshi text-sm text-skeleton-bone placeholder:text-white/20 focus:border-rust-signal/50 focus:outline-none transition-colors duration-300 disabled:opacity-50"
                    placeholder="Company or organisation name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block font-jetbrains text-[9px] uppercase tracking-[0.25em] text-white/25 mb-2">
                    Message <span className="text-rust-signal/40">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    disabled={formState === "loading"}
                    rows={5}
                    className={`w-full bg-white/[0.04] border ${errors.message ? "border-error/50" : "border-white/[0.08]"} px-4 py-3 font-satoshi text-sm text-skeleton-bone placeholder:text-white/20 focus:border-rust-signal/50 focus:outline-none transition-colors duration-300 resize-none disabled:opacity-50`}
                    placeholder="Tell us about your operational challenge"
                  />
                  {errors.message && (
                    <p className="font-jetbrains text-[9px] tracking-[0.1em] text-error mt-1" role="alert">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full sm:w-auto bg-rust-signal hover:bg-rust-light text-warm-white font-cabinet text-sm uppercase tracking-[0.2em] px-8 py-3.5 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending</span>
                    </>
                  ) : (
                    <>
                      <span>Send message</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Direct contact sidebar with location image */}
            <div className="md:w-1/3">
              <div className="border border-white/[0.06] overflow-hidden">
                {/* Namibia location image */}
                <div className="relative h-[160px] overflow-hidden">
                  <Image
                    src="/images/contact-location.webp"
                    alt="Namibian savanna at dawn"
                    fill
                    className="object-cover opacity-80"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-atlantic-black to-transparent" />
                </div>
                <div className="p-6 sm:p-8">
                  <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-white/15 block mb-4">Direct contact</span>
                  <div className="space-y-4">
                    <a
                      href="mailto:contact@tangison.com"
                      className="flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/25 hover:text-rust-signal transition-colors duration-300"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      contact@tangison.com
                    </a>
                    <a
                      href="https://studio.tangison.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/25 hover:text-rust-signal transition-colors duration-300"
                    >
                      studio.tangison.com
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.04]">
                    <p className="font-satoshi text-xs text-white/15 leading-relaxed">
                      We respond to every enquiry within two business days. For
                      urgent matters, email us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
