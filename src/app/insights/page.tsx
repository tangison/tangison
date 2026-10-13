import type { Metadata } from "next";
import { InsightsPageClient } from "./insights-page-client";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Announcements, partnership notes and field reports from Tangison Technologies in Windhoek, Namibia.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights | TANGISON",
    description:
      "Announcements, partnership notes and field reports from Tangison Technologies in Windhoek, Namibia.",
    url: "https://tangison.com/insights",
    type: "website",
  },
};

export default function Page() {
  return <InsightsPageClient />;
}
