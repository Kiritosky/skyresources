import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getMDXComponents } from "./mdx-components";

interface MDXRendererProps {
  source: string;
}

/**
 * Server-side MDX renderer.
 * Drop this anywhere to render an .mdx content string with all custom components.
 */
export function MDXRenderer({ source }: MDXRendererProps) {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug],
        },
      }}
      components={getMDXComponents()}
    />
  );
}
