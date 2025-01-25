"use client";

import { Marquee } from "@/components/marquee";
import { paths } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@/hooks";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="sticky bottom-0 z-0 flex h-20 items-end justify-start overflow-y-hidden bg-black pb-0.5 text-white">
      <Marquee gap={96} duration={25} durationOnHover={0}>
        <XLink />
        <EmailLink />
      </Marquee>
    </footer>
  );
};

const XLink: FC = () => {
  return (
    <span className="font-serif text-7xl select-none">
      {" "}
      twitter/x:{" "}
      <Link
        href={paths.x}
        rel="noopener noreferrer"
        target="_blank"
        className="decoration-1 underline-offset-4 hover:underline"
      >
        @williamhzo
      </Link>
    </span>
  );
};

const EmailLink: FC = () => {
  const [copiedText, copy] = useCopyToClipboard();

  return (
    <span className="flex items-center gap-2 font-serif text-7xl select-none">
      email:{" "}
      <button
        onClick={() => copy("hi@williamhzo.me")}
        className="group grid cursor-pointer place-items-center"
      >
        <span
          className={cn(
            "flex [grid-area:1/1]",
            copiedText ? "invisible" : "visible",
          )}
        >
          hi@williamhzo.me
        </span>
        <span
          className={cn(
            "invisible flex items-center gap-2 [grid-area:1/1]",
            copiedText ? "visible" : "invisible",
          )}
        >
          copied!
        </span>
      </button>
    </span>
  );
};
