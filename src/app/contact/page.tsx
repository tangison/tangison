import type { Metadata } from "next";
import { ContactPage } from "./contact-page-client";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Tangison Technologies about your operational AI challenge.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "TANGISON | Contact",
    description: "Start a conversation with Tangison Technologies about your operational AI challenge.",
    url: "https://tangison.com/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
