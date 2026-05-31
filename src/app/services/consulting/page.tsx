import type { Metadata } from "next";
import { ConsultingPage } from "./page-client";

export const metadata: Metadata = {
  title: "AI Consulting | TANGISON",
  description:
    "AI strategy, technology evaluation, implementation support, and team training for organizations in Namibia and across Africa. Practical guidance from TANGISON."
};

export default function Page() {
  return <ConsultingPage />;
}
