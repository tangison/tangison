import type { Metadata } from "next";
import { InsightsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Insights | TANGISON",
  description:
    "Thinking and perspectives on AI, engineering, and building in Africa. Articles and case studies from the Tangison laboratory.",
};

export default function Page() {
  return <InsightsPage />;
}
