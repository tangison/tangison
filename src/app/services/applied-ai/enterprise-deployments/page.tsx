import type { Metadata } from "next";
import { EnterpriseDeploymentsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Enterprise Deployments | TANGISON",
  description:
    "Deploy AI within your own infrastructure with full compliance, governance, and observability. Scale AI systems without surrendering control.",
  alternates: { canonical: "/services/applied-ai/enterprise-deployments" },
};

export default function Page() {
  return <EnterpriseDeploymentsPage />;
}
