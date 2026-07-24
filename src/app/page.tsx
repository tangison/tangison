import type { Metadata } from "next";
import { HomePage } from "./home-page";

export const metadata: Metadata = {
  title: { absolute: "TANGISON | Applied AI That Works" },
  description:
    "Tangison Technologies builds production-grade AI infrastructure for African and emerging-market conditions. Reliable, practical, resilient.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TANGISON | Applied AI That Works",
    description: "Tangison Technologies builds production-grade AI infrastructure for African and emerging-market conditions.",
    url: "https://tangison.com",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
