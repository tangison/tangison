import type { Metadata } from "next";
import { ContextAwareAiPage } from "./page-client";

export const metadata: Metadata = {
  title: "Context-Aware AI | TANGISON",
  description:
    "AI systems that understand local language, regulation, market conditions, and cultural nuance. Built for the contexts in which they operate, not for everywhere else.",
  alternates: { canonical: "/services/applied-ai/context-aware-ai" },
};

export default function Page() {
  return <ContextAwareAiPage />;
}
