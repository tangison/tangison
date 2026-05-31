import type { Metadata } from "next";
import { OpenSourcePage } from "./page-client";

export const metadata: Metadata = {
  title: "Open Source — TANGISON",
  description:
    "Contributions to the open-source ecosystem and community tools from TANGISON.",
};

export default function Page() {
  return <OpenSourcePage />;
}
