import type { Metadata } from "next";
import { InsightsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Insights | TANGISON",
  description:
    "Perspectives on AI, engineering, and building in Africa. Articles and case studies from TANGISON.",
};

export default function Page() {
  return <InsightsPage />;
}
