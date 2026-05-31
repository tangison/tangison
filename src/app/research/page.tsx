import type { Metadata } from "next";
import { ResearchPage } from "./page-client";

export const metadata: Metadata = {
  title: "Research — TANGISON",
  description:
    "Technical exploration and experimental systems from the TANGISON lab. Research projects and open-source contributions.",
};

export default function Page() {
  return <ResearchPage />;
}
