import { WorkPage } from "./work-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Client work, prototypes and demonstrations from Tangison Technologies. Honest evidence of what we have built and delivered.",
  openGraph: {
    title: "TANGISON | Work",
    description: "Client work, prototypes and demonstrations from Tangison Technologies.",
    url: "https://tangison.com/work",
  },
};

export default function WorkPageRoute() {
  return <WorkPage />;
}
