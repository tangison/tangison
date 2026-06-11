import type { Metadata } from "next";
import { OperationalAiPage } from "./page-client";

export const metadata: Metadata = {
  title: "Operational AI | AI Infrastructure | TANGISON",
  description:
    "Keep AI running in production. Model monitoring, drift detection, automated retraining, and incident response. Maintain AI quality over time by TANGISON.",
  alternates: {
    canonical: "/services/infrastructure/operational-ai",
  },
};

export default function Page() {
  return <OperationalAiPage />;
}
