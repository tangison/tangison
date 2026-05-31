import type { Metadata } from "next";
import { PrivacyPolicyPage } from "./page-client";

export const metadata: Metadata = {
  title: "Privacy Policy | TANGISON",
  description:
    "TANGISON privacy policy. How we collect, use, and protect your personal information.",
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
