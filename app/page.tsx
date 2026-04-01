import { InlineLink } from "@/components/link";
import { paths } from "@/constants";
import { Hero } from "@/components/hero";
import { SpinningText } from "@/components/spinning-text";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <div className="mx-auto flex max-w-(--breakpoint-md) flex-col gap-12 px-6 pt-24">
      <div className="mx-auto flex w-full max-w-(--breakpoint-xl) flex-col gap-4">
        <div className="group -mt-8 flex items-center justify-start gap-32">
          <Hero />

          <SpinningText
            className="-mt-4 hidden font-mono text-sm uppercase opacity-0 transition-opacity duration-750 group-hover:opacity-100 md:block"
            radius={5.5}
            duration={15}
          >
            {`web3 • engineering • design • craft • `}
          </SpinningText>
        </div>

        <HomeSection title="Today" className="mt-12 max-w-prose">
          <h2 className="text-balance">
            Paris-based <strong>product engineer</strong> with a keen eye for
            design, crafting high impact <strong>user-focused products</strong>.
          </h2>

          <p className="text-balance">
            Currently building <InlineLink href={paths.shape}>Shape</InlineLink>{" "}
            &{" "}
            <InlineLink href="https://athenaresearch.xyz">
              Athena Research
            </InlineLink>{" "}
            and <strong>having a blast</strong>.
          </p>

          <p>
            Always open to chat about AI, design, onchain digital objects,
            community, product, motorcycles, building & more.
          </p>
        </HomeSection>
      </div>

      <HomeSection title="Writing">
        <ul className="flex flex-col gap-6">
          {posts.map((post) => (
            <ListItem
              key={post.slug}
              url={paths.post(post.slug)}
              title={post.title}
              description={post.description}
            />
          ))}
        </ul>
      </HomeSection>

      <HomeSection title="Projects">
        <ul className="flex flex-col gap-6">
          {projects.map((project) => (
            <ListItem
              key={project.title}
              url={project.url}
              title={project.title}
              description={project.description}
            />
          ))}
        </ul>
      </HomeSection>

      <HomeSection title="More" contentClassName="max-w-prose">
        <p className="text-pretty">
          You can reach me on <InlineLink href={paths.x}>Twitter/X</InlineLink>{" "}
          and see more of my work on{" "}
          <InlineLink href={paths.github}>GitHub</InlineLink>.
        </p>

        <p>
          <InlineLink
            href={paths.repo}
            className="text-muted-foreground font-normal"
          >
            Source code
          </InlineLink>
        </p>
      </HomeSection>
    </div>
  );
}

function HomeSection({
  title,
  children,
  className,
  contentClassName,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <section className={cn("flex flex-col gap-4", className)}>
      <h3 className="text-accent font-sans font-medium">{title}</h3>
      <div className={cn("flex flex-col gap-6", contentClassName)}>
        {children}
      </div>
    </section>
  );
}

const ListItem = ({
  title,
  url,
  description,
}: {
  title: string;
  url: string;
  description: string;
}) => {
  const isExternal = url.startsWith("https");
  const Component = isExternal ? "a" : Link;
  return (
    <li>
      <Component
        href={url}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="group flex flex-col items-start gap-0"
      >
        <span className="group-hover:text-accent text-foreground font-medium transition-colors duration-150">
          {title}
        </span>
        <span className="text-muted-foreground transition-colors duration-150">
          {description}
        </span>
      </Component>
    </li>
  );
};

const projects = [
  {
    title: "Quartier",
    url: paths.quartier,
    description: "A liveability map of Paris, based on French open data",
  },
  {
    title: "Builder Kit",
    url: paths.builderkit,
    description: "A batteries-included monorepo to start building onchain apps",
  },
  {
    title: "Shape of Life",
    url: paths.shapeoflife,
    description: "Onchain exploration of Conway's Game of Life",
  },
];
