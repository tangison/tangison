import type { Metadata } from "next";
import { IntegrationLayerPage } from "./page-client";

export const metadata: Metadata = {
  title: "Integration Layer | AI Infrastructure | TANGISON",
  description:
    "Connect AI infrastructure to your existing tools, APIs, and data pipelines. API gateways, data pipeline management, and observability by TANGISON.",
  alternates: {
    canonical: "/services/infrastructure/integration-layer",
  },
};

export default function Page() {
  return <IntegrationLayerPage />;
}
