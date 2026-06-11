import type { Metadata } from "next";
import { ImplementationSupportPage } from "./page-client";

export const metadata: Metadata = {
  title: "AI Implementation Support | TANGISON",
  description:
    "Hands-on guidance from pilot to production. Avoid common pitfalls, manage change, and build confidence in AI processes. By TANGISON.",
  alternates: {
    canonical: "/services/consulting/implementation-support",
  },
};

export default function Page() {
  return <ImplementationSupportPage />;
}
