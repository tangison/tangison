import type { Metadata } from "next";
import { CaseStudiesPage } from "./page-client";

export const metadata: Metadata = {
  title: "Case Studies | TANGISON",
  description:
    "Real projects, real outcomes. Applied AI case studies from TANGISON.",
};

export default function Page() {
  return <CaseStudiesPage />;
}
