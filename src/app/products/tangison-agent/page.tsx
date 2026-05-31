import type { Metadata } from "next";
import { TangisonAgentPage } from "./page-client";

export const metadata: Metadata = {
  title: "Tangison Agent | TANGISON",
  description:
    "Self-hosted AI agent platform. Hermes Agent with 59 skills, OpenClaw, Graphify, PAUL, and BaseAI. Runs on your servers.",
};

export default function Page() {
  return <TangisonAgentPage />;
}
