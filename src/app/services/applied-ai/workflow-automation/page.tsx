import type { Metadata } from "next";
import { WorkflowAutomationPage } from "./page-client";

export const metadata: Metadata = {
  title: "Workflow Automation | TANGISON",
  description:
    "Automate complex workflows that understand context, handle exceptions, and know when to involve people. Not rigid scripts. Workflows that adapt.",
  alternates: { canonical: "/services/applied-ai/workflow-automation" },
};

export default function Page() {
  return <WorkflowAutomationPage />;
}
