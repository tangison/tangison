import type { Metadata } from "next";
import { DeploymentInfrastructurePage } from "./page-client";

export const metadata: Metadata = {
  title: "Deployment Infrastructure | AI Infrastructure | TANGISON",
  description:
    "Move AI from prototype to production. Model serving, auto-scaling, blue-green deployments, and infrastructure as code. Built for African conditions by TANGISON.",
  alternates: {
    canonical: "/services/infrastructure/deployment-infrastructure",
  },
};

export default function Page() {
  return <DeploymentInfrastructurePage />;
}
