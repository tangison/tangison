import type { Metadata } from "next";
import { PrivacyPage } from "./privacy-page-client";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Tangison Technologies handles your data.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <PrivacyPage />;
}
