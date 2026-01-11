// @ts-check
import createMDX from "@next/mdx";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
  },
  async redirects() {
    return [
      {
        source: "/notes/building-on-shape",
        destination: "/shape",
        permanent: true,
      },
      {
        source: "/notes/letting-go-of-pixel-perfect",
        destination: "/pixel-perfect",
        permanent: true,
      },
      {
        source: "/notes/unlocking-the-blog-paralysis",
        destination: "/blog-paralysis",
        permanent: true,
      },
      {
        source: "/notes/writing-on-the-web",
        destination: "/writing",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
