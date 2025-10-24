# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15, featuring a blog powered by MDX. The site is styled with Tailwind CSS v4 and uses Bun as the package manager.

## Development Commands

```bash
# Start development server
bun dev

# Build for production
bun run build

# Start production server
bun start

# Run linter
bun run lint
```

## Architecture

### App Router Structure

- **`app/page.tsx`**: Homepage with hero, introduction, and blog post listings
- **`app/notes/[slug]/page.tsx`**: Dynamic blog post pages using static generation
- **`app/layout.tsx`**: Root layout with font configuration (Geist Sans, Geist Mono, Cormorant Garamond)

### Content Management

Blog posts are MDX files stored in `content/` with metadata exports:

```typescript
export const metadata = {
  title: string,
  publishedDate: string,
  description: string,
  slug: string,
  canonicalUrl: string,
  publish: boolean,
};
```

The `lib/blog.ts` module handles blog post retrieval:

- `getBlogPosts()`: Returns all post metadata
- `getBlogPostMetadata(slug)`: Returns metadata for a specific post
- `POSTS`: Array defining available posts (must be manually updated)

**Important**: When adding new blog posts:

1. Create the `.mdx` file in `content/`
2. Add the post to the `POSTS` array in `lib/blog.ts`
3. Add the slug to `generateStaticParams()` in `app/notes/[slug]/page.tsx`

### MDX Configuration

MDX is configured in `next.config.ts` with:

- `remarkGfm`: GitHub Flavored Markdown support
- `remarkFrontmatter`: Frontmatter parsing
- Page extensions: `["md", "mdx", "ts", "tsx"]`

### Styling System

Uses Tailwind CSS v4 with custom theme variables in `app/globals.css`:

- Color tokens: `--color-background`, `--color-foreground`, `--color-accent`, `--color-muted-foreground`
- Font utilities: `.font-sans`, `.font-mono`, `.font-serif` (manually defined as Tailwind v4 doesn't support font theme extensions yet)
- Typography plugin: `@tailwindcss/typography` for prose content

Utility function `cn()` in `lib/utils.ts` combines `clsx` and `tailwind-merge` for conditional classnames.

### Components

- **`components/hero.tsx`**: Animated hero section using Motion (formerly Framer Motion)
- **`components/link.tsx`**: Custom link components with styling
- **`components/footer.tsx`**: Site footer
- **`components/spinning-text.tsx`**: Animated circular text component
- **`components/marquee.tsx`**: Scrolling text animation
- **`components/icons.tsx`**: SVG icon components

All components using animations import from `motion/react` (Motion v11+).

### Constants

`constants.ts` exports a `paths` object with internal and external URLs used throughout the site.

## TypeScript Configuration

- Path alias: `@/*` maps to root directory
- Target: ES2017
- Strict mode enabled

## Deployment

The site uses Vercel Analytics (`@vercel/analytics`) integrated in the root layout.

## Static Generation

Blog posts use `generateStaticParams()` with `dynamicParams = false`, meaning only explicitly defined slugs are generated at build time. No dynamic routes are allowed.
