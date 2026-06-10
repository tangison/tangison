import type { Metadata } from "next";
import { ResourcesPage } from "./page-client";

export const metadata: Metadata = {
  title: "AI Guides & Frameworks | TANGISON",
  description:
    "Download TANGISON's comprehensive library of AI guides, frameworks, and industry-specific playbooks designed for African organizations. From AI strategy to sector-specific implementation.",
  alternates: {
    canonical: "/insights/resources",
  },
};

export default function Page() {
  return <ResourcesPage />;
}
