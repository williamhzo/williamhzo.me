import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => <p className="font-mono">{children}</p>,
    li: ({ children }) => <li className="font-mono">{children}</li>,
    ...components,
  };
}
