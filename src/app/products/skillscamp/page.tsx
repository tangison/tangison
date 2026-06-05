import type { Metadata } from "next";
import { SkillsCampPage } from "./page-client";

export const metadata: Metadata = {
  title: "SkillsCamp | TANGISON",
  description:
    "SkillsCamp by TANGISON — self-hosted AI agent skills built for African contexts. 531+ modular skills with zero cloud dependency. Deploy on your own infrastructure.",
};

export default function Page() {
  return <SkillsCampPage />;
}
