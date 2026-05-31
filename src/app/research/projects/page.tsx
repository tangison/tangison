import type { Metadata } from "next";
import { ResearchProjectsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Research Projects | TANGISON",
  description:
    "Active research from the TANGISON lab. Agent architecture, offline-first AI, and African language models.",
};

export default function Page() {
  return <ResearchProjectsPage />;
}
