"use client";

import { useCopyToClipboard } from "@/useCopyToClipboard";
import { Clipboard, Check } from "lucide-react";

export const Username = () => {
  const [copiedText, copy] = useCopyToClipboard();

  return (
    <button
      className="group text-muted-foreground/50 flex cursor-pointer items-center gap-1"
      onClick={() => copy("williamhzo")}
    >
      — @williamhzo
      <span className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
        {copiedText ? (
          <Check className="size-3" />
        ) : (
          <Clipboard className="size-3" />
        )}
      </span>
    </button>
  );
};
