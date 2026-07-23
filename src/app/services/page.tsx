import type { Metadata } from "next";
import { ServicesPage } from "./services-page-client";

export const metadata: Metadata = {
  title: "Services",
  description: "AI Operations, Applied AI, and Research & Consulting. Production-grade systems for emerging-market constraints.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "TANGISON | Services",
    description: "Production-grade AI systems for emerging-market constraints.",
    url: "https://tangison.com/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
