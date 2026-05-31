import type { Metadata } from "next";
import { ResearchPage } from "./page-client";

export const metadata: Metadata = {
  title: "Research | TANGISON",
  description:
    "Research and open source from the TANGISON lab. Agent architecture, offline-first AI, and African language models.",
};

export default function Page() {
  return <ResearchPage />;
}
