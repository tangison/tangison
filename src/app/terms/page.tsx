import type { Metadata } from "next";
import { TermsPage } from "./terms-page-client";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms of use for the Tangison Technologies website.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return <TermsPage />;
}
