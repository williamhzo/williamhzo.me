import { InlineLink } from "@/components/link";
import { paths } from "@/constants";
import { Hero } from "@/components/hero";
import { SpinningText } from "@/components/spinning-text";
import { Link } from "@/components/link";
import { getBlogPosts } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <div className="mx-auto flex max-w-(--breakpoint-md) flex-col gap-20 px-6 pt-32 pb-12">
      <div className="mx-auto flex w-full max-w-(--breakpoint-xl) flex-col gap-6">
        <div className="group -mt-8 flex items-center justify-start gap-32">
          <Hero />

          <SpinningText
            className="-mt-4 hidden font-mono text-sm uppercase opacity-0 transition-opacity duration-750 group-hover:opacity-100 md:block"
            radius={5.5}
            duration={15}
          >
            {`ai • product • design • craft • `}
          </SpinningText>
        </div>

        <Section title="Today" className="mt-16 max-w-prose">
          <p className="text-lg leading-relaxed text-balance">
            Currently building <InlineLink href={paths.shape}>Shape</InlineLink>{" "}
            & <InlineLink href={paths.athena}>Athena Research</InlineLink>,
            wearing many hats.
          </p>

          <p className="text-lg leading-relaxed text-balance">
            Paris based, always open to chat about AI tools & workflows, design,
            craft, building communities, product, motorcycles, shipping fast &
            more.
          </p>
        </Section>
      </div>

      {/* <Section title="Selected Work">
        <div className="flex flex-col gap-16">
          {selectedWork.map((work) => (
            <WorkItem key={work.title} {...work} />
          ))}
        </div>
      </Section> */}

      <Section title="Writing">
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
      </Section>

      <Section title="Get in touch">
        <ul className="marker:text-muted-foreground flex list-['–\20'] flex-col gap-2 pl-4">
          <li>
            <Link
              href="mailto:hi@williamhzo.com"
              className="text-foreground hover:text-link font-medium transition-colors duration-150"
            >
              Email
            </Link>
          </li>
          <li>
            <Link
              href={paths.x}
              className="text-foreground hover:text-link font-medium transition-colors duration-150"
            >
              Twitter/X
            </Link>
          </li>
          <li>
            <Link
              href={paths.linkedin}
              className="text-foreground hover:text-link font-medium transition-colors duration-150"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href={paths.cal}
              className="text-link hover:text-link/80 font-medium transition-colors duration-150"
            >
              Schedule a chat
            </Link>
          </li>
        </ul>
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("flex flex-col gap-5", className)}>
      <h3 className="text-muted-foreground font-mono text-sm tracking-wide uppercase">
        {title}
      </h3>
      <div className="flex flex-col gap-4">{children}</div>
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

  return (
    <li>
      <Link href={url} className="group flex flex-col items-start gap-0">
        <span className="group-hover:text-link text-foreground font-medium transition-colors duration-150">
          {title}
        </span>
        <span className="text-muted-foreground transition-colors duration-150">
          {description}
        </span>
      </Link>
    </li>
  );
};

type WorkItemProps = {
  title: string;
  description: ReactNode;
  url?: string;
  image: string;
};

function WorkItem({ title, description, url, image }: WorkItemProps) {
  const content = (
    <div className="group flex flex-col gap-4">
      <div className="bg-muted-background aspect-video w-full overflow-hidden rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="group-hover:text-link text-accent font-medium transition-colors duration-150">
          {title}
        </h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );

  if (url) {
    return (
      <Link href={url} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

const selectedWork: WorkItemProps[] = [
  {
    title: "Maximals",
    description: (
      <>
        Designed and built the product experience and onchain interactions for
        this art collection by{" "}
        <InlineLink href="https://x.com/macbethAI">MACBETH</InlineLink>.
      </>
    ),
    url: "https://maximals.shape.network/",
    image: "/maximals.jpg",
  },
  {
    title: "Project Beta",
    description:
      "Built an AI-powered internal platform serving thousands of daily active users.",
    url: "https://example.com",
    image: "/placeholder-work.svg",
  },
  {
    title: "Quartier",
    description:
      "Built a liveability map of Paris based on French open data, helping people find their ideal neighborhood.",
    url: paths.quartier,
    image: "/placeholder-work.svg",
  },
];
