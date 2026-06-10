import type { Metadata } from "next";
import { InsightsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Insights | TANGISON",
  description:
    "Perspectives on AI, engineering, and building in Africa. Read articles, case studies, and downloadable resources from the TANGISON applied AI laboratory.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    url: "https://tangison.com/insights",
  },
};

export default function Page() {
  return <InsightsPage />;
}
