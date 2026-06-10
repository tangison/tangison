import type { Metadata } from "next";
import { InsightsPage } from "./page-client";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tangison.com";

export const metadata: Metadata = {
  title: "Insights | TANGISON",
  description:
    "Perspectives on AI, engineering, and building in Africa. Articles and case studies from the TANGISON lab.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    url: `${baseUrl}/insights`,
  },
};

export default function Page() {
  return <InsightsPage />;
}
