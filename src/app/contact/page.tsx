import type { Metadata } from "next";
import { ContactPage } from "./page-client";

export const metadata: Metadata = {
  title: "Contact — Get in Touch",
  description:
    "Contact TANGISON's applied AI lab in Windhoek, Namibia. Tell us about your project, ask about our services, or request a consultation. We respond within 48 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "https://tangison.com/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
