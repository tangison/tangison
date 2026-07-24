import { IndustriesPage } from "./industries-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description: "Tangison serves organisations in mining, logistics, agriculture, public sector and financial services operating in African and emerging-market conditions.",
  openGraph: {
    title: "TANGISON | Industries",
    description: "Applied AI for mining, logistics, agriculture, public sector and financial services across emerging markets.",
    url: "https://tangison.com/industries",
  },
};

export default function IndustriesPageRoute() {
  return <IndustriesPage />;
}
