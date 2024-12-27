import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import NextLink from "next/link";
import { LinkProps as NextLinkProps } from "next/link";

type LinkProps = NextLinkProps & {
  href: string;
  children: ReactNode;
  className?: string;
};

export const Link = ({ href, children, className }: LinkProps) => {
  const isExternal = href.startsWith("http") || href.startsWith("www");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cn(className)}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={cn(className)}>
      {children}
    </NextLink>
  );
};

export const InlineLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="font-semibold text-black underline hover:no-underline"
    >
      {children}
    </Link>
  );
};
