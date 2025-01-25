"use client";

import { ElementType } from "react";
import { XIcon } from "@/components/icons";
import { GithubIcon } from "@/components/icons";
import { FC } from "react";
import { paths } from "@/constants";
import { Link } from "@/components/link";
import { motion } from "motion/react";

export const Hero: FC = () => {
  return (
    <div className="flex flex-col items-end">
      <motion.h1
        className="text-accent text-right font-sans text-4xl font-semibold tracking-tight select-none"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { duration: 0.3 },
          opacity: { duration: 0.5 },
        }}
      >
        hey, <br />
        i&apos;m william
      </motion.h1>

      <motion.span
        className="text-muted-foreground/75 items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.15 }}
      >
        — @williamhzo
      </motion.span>

      <motion.ul
        className="flex items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.15 }}
      >
        <SocialLink href={paths.x} icon={XIcon} />
        <SocialLink href={paths.github} icon={GithubIcon} />
      </motion.ul>
    </div>
  );
};

const SocialLink = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: ElementType;
}) => {
  return (
    <li className="grid place-items-center">
      <Link
        href={href}
        className="hover:bg-muted-background rounded-xl p-2 transition-colors duration-150"
      >
        <Icon className="text-muted-foreground size-4" />
      </Link>
    </li>
  );
};
