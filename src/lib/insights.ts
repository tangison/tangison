/**
 * Insights: Tangison's publishing channel for announcements, partnership
 * notes and field reports. Content lives as typed blocks so the article
 * page renders in the site's design language without a markdown pipeline.
 */

export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface Insight {
  slug: string;
  title: string;
  description: string;
  /** ISO date, Windhoek time */
  date: string;
  /** display date, e.g. "12 October 2026" */
  dateDisplay: string;
  category: "Announcement" | "Field Report" | "Partnership";
  readMinutes: number;
  blocks: InsightBlock[];
}

export const insights: Insight[] = [
  {
    slug: "tangison-is-now-a-fortinet-partner",
    title: "Tangison is now a Fortinet Partner",
    description:
      "Tangison Technologies is now a Fortinet partner. What that means for organisations in Namibia that need firewalls, network administration and security infrastructure they can defend in a tender.",
    date: "2026-10-12",
    dateDisplay: "12 October 2026",
    category: "Announcement",
    readMinutes: 3,
    blocks: [
      {
        type: "p",
        text: "Tangison Technologies is now a Fortinet partner. From our base in Windhoek we can now supply, deploy and administer Fortinet network security: the firewalls, the secure links between sites and the centralised management that sit underneath everything else we build.",
      },
      {
        type: "p",
        text: "If you already work with us, this is the layer that was missing. The platforms, dashboards and automation systems we deliver all run on a network, and that network needs a firewall policy, segmented traffic and someone who administers it after handover. Until now we designed around whatever security infrastructure a client already had. Now we can deliver and run that infrastructure ourselves.",
      },
      { type: "h2", text: "What Fortinet is" },
      {
        type: "p",
        text: "Fortinet is a network security company founded in 2000 and headquartered in Sunnyvale, California. Its best-known product line, FortiGate, is a next-generation firewall: one appliance that controls traffic between networks, inspects what passes through and keeps a record of what it stopped. Around that core sit products for centralised management (FortiManager), analysis and reporting (FortiAnalyzer), secure remote access and switching. Fortinet's threat research arm, FortiGuard Labs, feeds live intelligence to deployed firewalls so protections update as new threats appear.",
      },
      { type: "h2", text: "What we can now deliver" },
      {
        type: "p",
        text: "The partnership covers the full lifecycle of network security infrastructure:",
      },
      {
        type: "ul",
        items: [
          "FortiGate firewall supply, deployment and configuration, sized to your traffic",
          "Network segmentation that separates finance systems, operations and guest traffic",
          "Secure remote access and site-to-site links between offices, mines, farms or depots",
          "Centralised management, monitoring and reporting across all locations",
          "Ongoing administration, policy changes and support from our team in Windhoek",
        ],
      },
      { type: "h2", text: "Why we added this" },
      {
        type: "p",
        text: "A pattern kept repeating in our project work. An organisation commissions a platform, the platform goes live, and the network it runs on turns out to be the weak link: one flat network, an ageing firewall nobody administers, remote access handled through whatever router the ISP supplied. Software hardening does not hold when the network underneath is open. The security layer and the application layer need the same owner, or gaps appear exactly where the two meet.",
      },
      { type: "h2", text: "What it means for tenders" },
      {
        type: "p",
        text: "Government ministries, state-owned enterprises, municipalities and development organisations advertise ICT tenders through Namibia's e-procurement system. Many of those tenders specify network equipment by brand and expect the bidding company to hold an authorisation from that vendor. As a Fortinet partner, Tangison can bid with genuine Fortinet equipment and a local team that installs, documents and administers the solution after award. Procurement teams evaluating our bids can confirm the partnership with Fortinet directly.",
      },
      { type: "h2", text: "Where this sits in our work" },
      {
        type: "p",
        text: "Network security joins four existing service areas: AI operations and automation, data and decision systems, resilient digital platforms, and strategy and deployment. The same principle governs all five. We deliver what your conditions support, and we hand over systems your team can run. A firewall we deploy comes documented, monitored and administered by us. Where you prefer to run it in-house, we train your people and step back.",
      },
      {
        type: "p",
        text: "Planning network security, or preparing a tender that calls for Fortinet equipment? Write to contact@tangison.com or use the contact page. We respond to every serious enquiry.",
      },
    ],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
