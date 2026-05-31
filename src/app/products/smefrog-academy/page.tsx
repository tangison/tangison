import type { Metadata } from "next";
import { SMEFrogAcademyPage } from "./page-client";

export const metadata: Metadata = {
  title: "SMEFrog Academy | TANGISON",
  description:
    "Free business education for Namibian entrepreneurs. Practical courses. Mobile-first. No paywalls. By TANGISON.",
};

export default function Page() {
  return <SMEFrogAcademyPage />;
}
