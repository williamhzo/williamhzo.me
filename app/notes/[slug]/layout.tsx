import { getBlogPostMetadata } from "@/lib/blog";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await getBlogPostMetadata(slug);

  return {
    title: post.title,
    description: post.description,
  };
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="prose mx-auto flex flex-col items-start gap-6 p-5 pt-24 font-mono">
      <Link
        href="/"
        className="text-muted-foreground hover:text-accent font-mono font-normal no-underline transition-colors duration-150"
      >
        home
      </Link>
      {children}
    </section>
  );
}
