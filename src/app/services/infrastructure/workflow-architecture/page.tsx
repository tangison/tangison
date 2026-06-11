import type { Metadata } from "next";
import { WorkflowArchitecturePage } from "./page-client";

export const metadata: Metadata = {
  title: "Workflow Architecture | AI Infrastructure | TANGISON",
  description:
    "Design workflows that connect AI with human operations. State machines, human-in-the-loop patterns, and resilient pipelines by TANGISON.",
  alternates: {
    canonical: "/services/infrastructure/workflow-architecture",
  },
};

export default function Page() {
  return <WorkflowArchitecturePage />;
}
