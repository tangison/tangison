import type { Metadata } from "next";
import { ContactPage } from "./page-client";

export const metadata: Metadata = {
  title: "Contact | TANGISON",
  description:
    "Get in touch with TANGISON. We respond to every message within 48 hours. Applied AI lab in Windhoek, Namibia.",
};

export default function Page() {
  return <ContactPage />;
}
