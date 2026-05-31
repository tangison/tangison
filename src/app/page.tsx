import type { Metadata } from "next";
import { HomePage } from "./page-client";

export const metadata: Metadata = {
  title: "TANGISON: Applied AI Laboratory",
  description:
    "TANGISON builds and deploys AI systems, infrastructure, and products for African organizations. Custom agents, self-hosted deployments, and applied research from Windhoek, Namibia.",
};

export default function Page() {
  return <HomePage />;
}
