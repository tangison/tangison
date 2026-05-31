import type { Metadata } from "next";
import { ServicesPage } from "./page-client";

export const metadata: Metadata = {
  title: "Services | TANGISON",
  description:
    "Custom AI systems, production infrastructure, and strategic consulting for organizations in Namibia and across Africa. Build, deploy, and scale applied AI with TANGISON.",
};

export default function Page() {
  return <ServicesPage />;
}
