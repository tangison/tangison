import type { Metadata } from "next";
import { SMEFrogAcademyPage } from "./page-client";

export const metadata: Metadata = {
  title: "SMEFrog Academy | TANGISON",
  description:
    "Free learning platform for Namibian entrepreneurs. Practical business education powered by TANGISON.",
};

export default function Page() {
  return <SMEFrogAcademyPage />;
}
