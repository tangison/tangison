import type { Metadata } from "next";
import { SkillsCampPage } from "./page-client";

export const metadata: Metadata = {
  title: "SkillsCamp | TANGISON",
  description:
    "531+ modular AI agent skills. Zero cloud dependency. Built for African contexts. SkillsCamp is self-hosted AI infrastructure by Tangison.",
};

export default function Page() {
  return <SkillsCampPage />;
}
