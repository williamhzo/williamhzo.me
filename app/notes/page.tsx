import { getBlogPosts } from "@/lib/blog";
import { paths } from "@/constants";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes",
  description: "Writing about web development, design, and building products.",
};

export default async function NotesPage() {
  const posts = await getBlogPosts();

  return (
    <section className="mx-auto flex max-w-(--breakpoint-md) flex-col gap-6 px-6 pt-24 font-mono">
      <Link
        href="/"
        className="text-muted-foreground hover:text-accent font-mono font-normal transition-colors duration-150"
      >
        home
      </Link>

      <h1 className="text-accent font-sans font-semibold">notes</h1>

      <ul className="flex flex-col gap-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={paths.post(post.slug)}
              className="group flex flex-col items-start gap-0"
            >
              <span className="group-hover:text-foreground text-accent font-semibold transition-colors duration-150">
                {post.title}
              </span>
              <span className="text-muted-foreground">
                {post.description.replace(/\.$/, "")}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
