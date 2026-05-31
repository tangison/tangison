import type { Metadata } from "next";
import { CaseStudiesPage } from "./page-client";

export const metadata: Metadata = {
  title: "Case Studies — TANGISON Insights",
  description:
    "Real-world applications and outcomes from Tangison projects.",
};

export default function Page() {
  return <CaseStudiesPage />;
}
