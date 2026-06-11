import type { Metadata } from "next";
import { DataAnalysisPage } from "./page-client";

export const metadata: Metadata = {
  title: "Data Analysis & Decision Support | TANGISON",
  description:
    "Surface patterns, predict outcomes, and present actionable insights from your organisational data. Turn raw information into decisions you can act on with confidence.",
  alternates: { canonical: "/services/applied-ai/data-analysis" },
};

export default function Page() {
  return <DataAnalysisPage />;
}
