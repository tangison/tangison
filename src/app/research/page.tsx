import type { Metadata } from "next";
import { ResearchPage } from "./page-client";

export const metadata: Metadata = {
  title: "Research | TANGISON",
  description:
    "Research and open source projects from the TANGISON applied AI lab. Explore agent architecture, offline-first AI systems, and African language models built for organizations across Africa.",
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    url: "https://tangison.com/research",
  },
};

export default function Page() {
  return <ResearchPage />;
}
