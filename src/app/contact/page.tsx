import type { Metadata } from "next";
import { ContactPage } from "./page-client";

export const metadata: Metadata = {
  title: "Contact | TANGISON",
  description:
    "Get in touch with TANGISON. We respond to every message. Applied AI laboratory based in Windhoek, Namibia.",
};

export default function Page() {
  return <ContactPage />;
}
