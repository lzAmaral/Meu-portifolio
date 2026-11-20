# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

**The project is the Next.js app in `meu-portfolio/`.** All commands below must be run from `meu-portfolio/`.

## Commands

Run from `meu-portfolio/`:

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint (flat config: eslint-config-next core-web-vitals + typescript)
```

There is no test suite configured in this project.

## What this is

A single-page portfolio site (in Brazilian Portuguese) for a backend developer, built with Next.js App Router. It's a marketing/CV page, not an application with business logic — most work here is UI/copy/animation.

## Architecture

- **Everything lives in one page**: `src/app/page.tsx` is a single large client component (`"use client"`) containing every section (navbar, hero, experience, projects, skills, contact, footer) as inline JSX. There is no component decomposition into separate files — sections are just JSX blocks separated by comments within the one file. Content data (e.g. the `projetos` array of project entries) is defined inline in the same file rather than in a separate data module.
- **`src/app/layout.tsx`** sets up the two Google fonts (Space Grotesk for sans, JetBrains Mono for mono, exposed as CSS vars `--font-space-grotesk` / `--font-jetbrains-mono`) and page-level `metadata` (title/description/OpenGraph/Twitter cards) — update this file when changing SEO/social preview copy.
- **`src/app/globals.css`** defines the design tokens via Tailwind v4's `@theme` block (`--color-background`, `--color-foreground`, `--color-accent`) plus a parallel set of plain CSS custom properties (`--background`, `--foreground`, `--accent`, `--accent-transparent`) used by hand-written utility classes (`.btn-fill`, `.btn-ghost`, `.exp-card-glass`, `.browser-chrome`, `.hero-aurora`/`.aurora-orb`, `.cursor-orb`, `.mono`). When changing the accent color or theme, update both the `@theme` block and the `:root` custom properties to keep Tailwind utilities and hand-written CSS in sync.
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`, no `tailwind.config` file — config is CSS-first through `@theme` in `globals.css`) combined with hand-written CSS classes in `globals.css` for bespoke effects (glassmorphism cards, aurora gradient blobs, custom cursor, browser-chrome mockups).
- **Animation**: `framer-motion` drives scroll-triggered reveals (`whileInView`/`variants` with `fadeUp`/`wordAnimation` patterns defined at the top of `page.tsx`) and entrance transitions. Reuse the existing `fadeUp`/`wordAnimation` variant objects for new animated sections rather than inventing new ones.
- **Custom cursor**: the `CursorOrb` component in `page.tsx` tracks mouse position and hovers over interactive elements; the real cursor is hidden globally via `cursor: none` in `globals.css`, so any new interactive element should be checked against the custom cursor behavior.
- **React Compiler** is enabled (`reactCompiler: true` in `next.config.ts`, `babel-plugin-react-compiler` dependency) — avoid manual `useMemo`/`useCallback` micro-optimizations; let the compiler handle memoization.
- **Path alias**: `@/*` maps to `src/*` (see `tsconfig.json`).
- Static assets (images, the downloadable CV PDF) live in `meu-portfolio/public/` and are referenced by root-relative paths (e.g. `/Luiz_Gustavo_Amaral_CV.pdf`, `/solux.jpg`).

## Notes

- Site copy and content are in Portuguese (pt-BR) — keep new content in the same language and register unless told otherwise.
- A `.agents/` directory at the repo root holds a large generic multi-agent-CLI toolkit (agent personas, skills, workflows for a Gemini-CLI-style setup). It is git-ignored and unrelated to this project's actual code — no need to consult it.
