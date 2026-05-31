import type { Metadata } from "next";
import { AppliedAiPage } from "./page-client";

export const metadata: Metadata = {
  title: "Applied AI | TANGISON",
  description:
    "Custom AI systems designed for your organization's data, workflows, and regulatory context. Enterprise deployments, workflow automation, and decision support by TANGISON."
};

export default function Page() {
  return <AppliedAiPage />;
}
