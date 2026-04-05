import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocsLayout } from "../../components/docs-layout";
import { MDXRenderer } from "../../components/mdx-renderer";
import { getPageContent, getAllPageSlugs } from "../../lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageContent(slug);
  if (!page) return {};
  return {
    title: `${page.frontmatter.title} — SkyResources`,
    description: page.frontmatter.description,
  };
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const page = await getPageContent(slug);
  if (!page) notFound();

  return (
    <DocsLayout
      title={page.frontmatter.title}
      description={page.frontmatter.description}
    >
      {page.frontmatter.lastUpdated && (
        <p className="text-xs text-muted-foreground/60 -mt-4 mb-2">
          Last updated: {page.frontmatter.lastUpdated}
        </p>
      )}
      <MDXRenderer source={page.content} />
    </DocsLayout>
  );
}
