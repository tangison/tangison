import { CompanyPage } from "./company-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
  description: "Tangison Technologies: founded in Windhoek, Namibia by Tangi Iigonda. Resilient AI, data and digital infrastructure for African and emerging-market conditions.",
  openGraph: {
    title: "TANGISON | Company",
    description: "Founded in Windhoek, Namibia by Tangi Iigonda. Resilient AI infrastructure for emerging markets.",
    url: "https://tangison.com/company",
  },
};

export default function CompanyPageRoute() {
  return <CompanyPage />;
}
