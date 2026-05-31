import type { Metadata } from "next";
import { CookiePolicyPage } from "./page-client";

export const metadata: Metadata = {
  title: "Cookie Policy — TANGISON",
  description:
    "TANGISON cookie policy. Information about how we use cookies on tangison.com.",
};

export default function Page() {
  return <CookiePolicyPage />;
}
