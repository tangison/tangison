import type { Metadata } from "next";
import { ResearchPage } from "./page-client";

export const metadata: Metadata = {
  title: "Research | TANGISON",
  description:
    "Research and open source from the TANGISON lab. Explore our work on agent architecture, offline-first AI systems, and African language models designed for continental impact.",
  alternates: {
    canonical: "/research",
  },
};

export default function Page() {
  return <ResearchPage />;
}
