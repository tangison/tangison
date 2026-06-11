import type { Metadata } from "next";
import { StrategyRoadmapsPage } from "./page-client";

export const metadata: Metadata = {
  title: "AI Strategy & Roadmaps | TANGISON",
  description:
    "Build AI strategies tied to your business goals and operational realities. Honest timelines, realistic resource estimates, and measurable success metrics. By TANGISON.",
  alternates: {
    canonical: "/services/consulting/strategy-roadmaps",
  },
};

export default function Page() {
  return <StrategyRoadmapsPage />;
}
