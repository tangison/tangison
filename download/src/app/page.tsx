import type { Metadata } from "next";
import { GatewayPage } from "./page-client";

export const metadata: Metadata = {
  title: { absolute: "TANGISON | Coming Soon" },
  description:
    "Tangison Technologies — Applied AI. Built in Africa. Our new home is under construction.",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <GatewayPage />;
}
