import type { Metadata } from "next";
import { ContactPage } from "./page-client";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tangison.com";

export const metadata: Metadata = {
  title: "Contact — Get in Touch",
  description:
    "Contact TANGISON's applied AI lab in Windhoek, Namibia. We respond to every message within 48 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: `${baseUrl}/contact`,
  },
};

export default function Page() {
  return <ContactPage />;
}
