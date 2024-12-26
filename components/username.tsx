"use client";

import { useCopyToClipboard } from "@/hooks";
import { Clipboard, Check } from "lucide-react";

export const Username = () => {
  const [copiedText, copy] = useCopyToClipboard();

  return (
    <button
      className="group text-muted-foreground/75 relative cursor-pointer items-center gap-1"
      onClick={() => copy("williamhzo")}
    >
      — @williamhzo
      <span className="absolute top-1/2 right-0 -translate-y-1/2 opacity-0 transition-all duration-200 group-hover:translate-x-4 group-hover:opacity-100">
        {copiedText ? (
          <Check className="size-3" />
        ) : (
          <Clipboard className="size-3" />
        )}
      </span>
    </button>
  );
};
