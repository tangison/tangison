import type { Metadata } from "next";
import { SkillsCampPage } from "./page-client";

export const metadata: Metadata = {
  title: "SkillsCamp | TANGISON",
  description:
    "Self-hosted AI agent skills built for African contexts. 531+ modular skills. No cloud dependency. By TANGISON.",
};

export default function Page() {
  return <SkillsCampPage />;
}
