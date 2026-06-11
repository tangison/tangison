import type { Metadata } from "next";
import { AgentOrchestrationPage } from "./page-client";

export const metadata: Metadata = {
  title: "Agent Orchestration | AI Infrastructure | TANGISON",
  description:
    "Coordinate multiple AI agents on complex tasks. Multi-agent systems with dependency management, parallelization, and error recovery by TANGISON.",
  alternates: {
    canonical: "/services/infrastructure/agent-orchestration",
  },
};

export default function Page() {
  return <AgentOrchestrationPage />;
}
