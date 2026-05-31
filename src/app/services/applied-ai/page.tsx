import type { Metadata } from "next";
import { AppliedAiPage } from "./page-client";

export const metadata: Metadata = {
  title: "Applied AI — TANGISON",
  description:
    "Custom AI systems built for your organization's specific needs. Enterprise deployments, business workflow automation, and intelligent data analysis.",
};

export default function Page() {
  return <AppliedAiPage />;
}
