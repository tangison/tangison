import type { Metadata } from "next";
import { InfrastructurePage } from "./page-client";

export const metadata: Metadata = {
  title: "AI Infrastructure — TANGISON",
  description:
    "The systems that make AI work in production. Agent orchestration, automation systems, deployment infrastructure, and operational AI.",
};

export default function Page() {
  return <InfrastructurePage />;
}
