import { GithubIcon, XIcon } from "@/components/icons";
import { Link } from "@/components/link";
import { Username } from "@/components/username";
import { useCopyToClipboard } from "@/useCopyToClipboard";
import { ReactNode } from "react";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <h1 className="font-mono font-semibold select-none">
            hey, i'm william
          </h1>
          <Username />
        </div>

        <ul className="flex items-center gap-0.5">
          <SocialLink href="https://x.com/williamhzo">
            <XIcon className="text-muted-foreground" />
          </SocialLink>

          <SocialLink href="https://github.com/williamhzo">
            <GithubIcon className="text-muted-foreground" />
          </SocialLink>
        </ul>
      </div>

      <h2>
        a paris-based <span className="font-semibold">product engineer</span>{" "}
        with a keen eye for design, i craft high impact{" "}
        <span className="font-semibold">user-focused products</span>
      </h2>
    </div>
  );
}

const SocialLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <li className="grid place-items-center">
      <Link
        href={href}
        className="hover:bg-muted-background rounded-xl p-2 transition-colors duration-150"
      >
        {children}
      </Link>
    </li>
  );
};
