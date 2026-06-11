import type { Metadata } from "next";
import { TechnologyEvaluationPage } from "./page-client";

export const metadata: Metadata = {
  title: "AI Technology Evaluation | TANGISON",
  description:
    "Vendor-neutral assessment of AI tools, platforms, and approaches. Know what works before you commit. Independent evaluation by TANGISON.",
  alternates: {
    canonical: "/services/consulting/technology-evaluation",
  },
};

export default function Page() {
  return <TechnologyEvaluationPage />;
}
