import type { Metadata } from "next";
import { HomePage } from "./home-page";

export const metadata: Metadata = {
  title: { absolute: "TANGISON | AI Systems Built to Keep African Operations Moving" },
  description:
    "Tangison Technologies designs resilient automation, analytics and digital platforms for organisations working with fragmented data, unreliable connectivity and complex field operations. Founded in Windhoek, Namibia by Tangi Iigonda.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TANGISON | AI Systems Built to Keep African Operations Moving",
    description: "Tangison Technologies designs resilient automation, analytics and digital platforms for organisations working with fragmented data, unreliable connectivity and complex field operations.",
    url: "https://tangison.com",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
