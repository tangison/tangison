import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInsight, insights } from "@/lib/insights";
import { InsightArticleClient } from "./insight-article-client";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.description,
    alternates: {
      canonical: `/insights/${insight.slug}`,
    },
    openGraph: {
      title: `${insight.title} | TANGISON`,
      description: insight.description,
      url: `https://tangison.com/insights/${insight.slug}`,
      type: "article",
      publishedTime: insight.date,
      locale: "en_NA",
    },
    twitter: {
      card: "summary",
      title: `${insight.title} | TANGISON`,
      description: insight.description,
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.description,
    datePublished: insight.date,
    author: {
      "@type": "Organization",
      name: "Tangison Technologies",
      url: "https://tangison.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Tangison Technologies",
      url: "https://tangison.com",
    },
    mainEntityOfPage: `https://tangison.com/insights/${insight.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://tangison.com" },
      { "@type": "ListItem", position: 2, name: "Insights", item: "https://tangison.com/insights" },
      {
        "@type": "ListItem",
        position: 3,
        name: insight.title,
        item: `https://tangison.com/insights/${insight.slug}`,
      },
    ],
  };

  return (
    <>
      <InsightArticleClient slug={insight.slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
