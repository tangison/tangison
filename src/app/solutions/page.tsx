import { SolutionsPage } from "./solutions-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Four service areas designed against real deployment constraints: AI Operations, Data & Decision Systems, Resilient Digital Platforms, and Strategy & Deployment.",
  openGraph: {
    title: "TANGISON | Solutions",
    description: "Four service areas designed against real deployment constraints.",
    url: "https://tangison.com/solutions",
  },
};

export default function SolutionsPageRoute() {
  return <SolutionsPage />;
}
