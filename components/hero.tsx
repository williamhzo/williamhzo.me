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
    <div className="flex flex-col items-start">
      <motion.h1
        className="text-accent text-left font-sans font-semibold select-none"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { duration: 0.3 },
          opacity: { duration: 0.5 },
        }}
      >
        <a href={paths.x} target="_blank" rel="noreferrer">
          William Hzo
        </a>
      </motion.h1>

      <motion.h2
        className="text-muted-foreground font-medium"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { duration: 0.3 },
          opacity: { duration: 0.5 },
        }}
      >
        product engineer & AI builder
      </motion.h2>

      <motion.ul
        className="mt-1 -ml-2 flex items-center gap-1"
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
        className="hover:text-foreground text-muted-foreground rounded-xl p-2 transition-colors duration-150"
      >
        <Icon className="size-4" />
      </Link>
    </li>
  );
};
