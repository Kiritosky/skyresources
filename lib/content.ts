import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface PageFrontmatter {
  title: string;
  description?: string;
  icon?: string;
  group?: string;
  lastUpdated?: string;
  tags?: string[];
  draft?: boolean;
}

export interface PageContent {
  frontmatter: PageFrontmatter;
  content: string;
  slug: string;
}

/** Load a single page from content/pages/<slug>.mdx or .md */
export async function getPageContent(slug: string): Promise<PageContent | null> {
  const mdxPath = path.join(CONTENT_DIR, "pages", `${slug}.mdx`);
  const mdPath  = path.join(CONTENT_DIR, "pages", `${slug}.md`);

  let filePath: string | null = null;
  if (fs.existsSync(mdxPath)) filePath = mdxPath;
  else if (fs.existsSync(mdPath)) filePath = mdPath;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  if (data.draft) return null;

  return {
    frontmatter: data as PageFrontmatter,
    content,
    slug,
  };
}

/** List all available page slugs (excluding _templates, drafts) */
export function getAllPageSlugs(): string[] {
  const pagesDir = path.join(CONTENT_DIR, "pages");
  if (!fs.existsSync(pagesDir)) return [];

  return fs
    .readdirSync(pagesDir)
    .filter((f) => (f.endsWith(".mdx") || f.endsWith(".md")) && !f.startsWith("_"))
    .map((f) => f.replace(/\.(mdx|md)$/, ""));
}

/** Load all pages (for sitemap, search index generation) */
export async function getAllPages(): Promise<PageContent[]> {
  const slugs = getAllPageSlugs();
  const pages = await Promise.all(slugs.map(getPageContent));
  return pages.filter(Boolean) as PageContent[];
}
