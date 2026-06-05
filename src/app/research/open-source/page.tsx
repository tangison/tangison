import type { Metadata } from "next";
import { OpenSourcePage } from "./page-client";

export const metadata: Metadata = {
  title: "Open Source | TANGISON",
  description:
    "Open source repositories and community tools from TANGISON. Self-hosted AI agents, skills, and education platforms built for African developers.",
  alternates: {
    canonical: "/research/open-source",
  },
};

export default function Page() {
  return <OpenSourcePage />;
}
