# Repository Guidelines

## Project Structure & Module Organization

Application routes live in `app/`, following the Next.js App Router convention. Shared UI and layout primitives belong in `components/`, while `lib/` houses utilities and data helpers. Markdown content is sourced from `content/` and rendered through `mdx-components.tsx`. Global constants and hooks live in `constants.ts` and `hooks.tsx`, and static imagery or fonts should be placed under `assets/`.

## Build, Test, and Development Commands

Install dependencies with `bun install`; Bun is the expected runtime (a `bun.lock` is tracked). Use `bun run dev` for local development at http://localhost:3000, `bun run build` to produce a production bundle, and `bun run start` to preview the compiled output. Run `bun run lint` before opening a pull request to ensure the Next.js ESLint rules pass.

## Coding Style & Naming Conventions

Keep code in TypeScript and favor small, pure React function components. Match the existing 2-space indentation and double-quote style. Components and files that export JSX should use PascalCase, hooks should start with `use`, and shared utilities stay camelCase. Tailwind utility classes should remain concise and composable; when adding multiple classes, order them logically (layout → spacing → color) to align with the existing style. Prefer named exports unless a Next.js route segment requires a default export.

## Testing Guidelines

There is no automated test runner configured yet, so rely on `bun run lint` plus manual smoke tests across key routes (`/`, `/work`, `/about`). When adding coverage, colocate files as `*.test.ts(x)` next to the module they exercise and document setup steps in the pull request until a harness is standardized.

## Commit & Pull Request Guidelines

Recent history favors short, imperative, lower-case summaries (for example, `add hero animation`). Keep each commit focused on a single concern and ensure the diff stays reviewable. Pull requests should summarize intent, call out any visual or content updates, and attach before/after screenshots when UI changes are visible. Reference related issues or tasks by URL so changelog tooling stays accurate.

## Content & Asset Updates

Author new articles or case studies under `content/` using MDX front matter for titles, dates, and summaries. Import media from `assets/` via `next/image` to retain optimization. When embedding interactive elements, keep client-only logic within isolated components under `components/` and wrap them with `dynamic()` if they depend on browser APIs.
