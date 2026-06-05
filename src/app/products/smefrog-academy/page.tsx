import type { Metadata } from "next";
import { SMEFrogAcademyPage } from "./page-client";

export const metadata: Metadata = {
  title: "SMEFrog Academy | TANGISON",
  description:
    "Free business education for Namibian entrepreneurs by TANGISON. Practical AI courses designed for African SMEs. Mobile-first. No paywalls. No technical background required.",
  alternates: {
    canonical: "/products/smefrog-academy",
  },
};

export default function Page() {
  return <SMEFrogAcademyPage />;
}
