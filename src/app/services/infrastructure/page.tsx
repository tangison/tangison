import type { Metadata } from "next";
import { InfrastructurePage } from "./page-client";

export const metadata: Metadata = {
  title: "AI Infrastructure | TANGISON",
  description:
    "Production infrastructure for applied AI: agent orchestration, automation pipelines, deployment systems, and operational monitoring. Built for African environments by TANGISON."
};

export default function Page() {
  return <InfrastructurePage />;
}
