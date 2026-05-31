import type { Metadata } from "next";
import { TangisonAgentPage } from "./page-client";

export const metadata: Metadata = {
  title: "Tangison Agent — TANGISON",
  description:
    "Sovereign AI Agent Platform. OpenClaw-powered with Graphify, PAUL, BaseAI, and 59 built-in skills. Powered by the Hermes Agent.",
};

export default function Page() {
  return <TangisonAgentPage />;
}
