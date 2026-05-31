import type { Metadata } from "next";
import { ServicesPage } from "./page-client";

export const metadata: Metadata = {
  title: "Services — TANGISON",
  description:
    "Applied AI, infrastructure, and consulting for organizations across Africa. Custom intelligent systems, deployment infrastructure, and strategic guidance.",
};

export default function Page() {
  return <ServicesPage />;
}
