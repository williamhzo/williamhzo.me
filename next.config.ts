// @ts-check
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
  },
});

export default withMDX(nextConfig);
