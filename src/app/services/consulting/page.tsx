import type { Metadata } from "next";
import { ConsultingPage } from "./page-client";

export const metadata: Metadata = {
  title: "AI Consulting — TANGISON",
  description:
    "Strategic guidance for organizations starting or advancing their AI journey. Strategy development, technology evaluation, implementation support, and team training.",
};

export default function Page() {
  return <ConsultingPage />;
}
