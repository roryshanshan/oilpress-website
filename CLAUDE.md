# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official marketing website for **Shandong Shengshi Hecheng Machinery Co., Ltd.** — an industrial edible oil press equipment manufacturer. Built with **VitePress 2.0.0-alpha.16** (static site generator using Vite + Vue 3), deployed on **Vercel**.

## Commands

```bash
npm run dev          # Start local dev server at http://127.0.0.1:5173
npm run build        # Production build → runs VitePress then postbuild-clean-urls.js
npm run docs:preview # Preview the production build locally
```

No test suite exists. Linting is not configured.

## Architecture

### Content Structure

All site content lives under `docs/`. Six locales mirror the same directory structure:

```
docs/
├── {en,zh,fr,ru,vi,bn}/
│   ├── index.md
│   ├── products/
│   ├── solutions/        # oil-type pages (seed-oils/, nuts/, fruits/, etc.)
│   │   ├── filling/      # filling machine series
│   │   ├── brewing/      # brewing + GFP low-vacuum filling model pages
│   │   └── ...           # packaging line equipment categories
│   ├── about/
│   ├── contact/
│   └── news/
├── public/               # static assets (images, icons)
└── .vitepress/
    ├── config.js         # master config — very large, single source of truth
    └── theme/
        ├── index.js
        ├── layout.vue    # mobile language switcher
        ├── custom.css
        └── components/
            ├── FloatingWhatsApp.vue
            └── BackToTop.vue
```

### Key File: `docs/.vitepress/config.js`

This is the central configuration file. It controls everything:
- **i18n**: 6-language sidebar and nav definitions per locale
- **SEO**: programmatic injection of Schema.org JSON-LD (Product, Organization, FAQ, BreadcrumbList), canonical tags, hreflang alternates, Open Graph, Twitter Card
- **Analytics**: Google Analytics (GA4) and Google Ads conversion tracking
- **Sidebar**: deeply nested collapsible trees covering ~30 oil types and ~15 machine categories

When adding new pages, you must update `config.js` to add sidebar entries for all 6 locales.

### Post-Build Script: `postbuild-clean-urls.js`

Runs automatically after `vitepress build`. Walks `docs/.vitepress/dist/` and renames any output assets with non-ASCII/whitespace characters to safe ASCII slugs (using SHA1 hash suffixes). Required because some source filenames contain Chinese characters.

### Utility Scripts (`scripts/`)

Python and JavaScript scripts for content maintenance tasks:
- Syncing translations across locales
- Repairing broken locale links
- Upgrading SEO metadata in bulk

Run these manually when needed; they are not part of the build pipeline.

## Content Conventions

- **New pages** need corresponding entries in `docs/.vitepress/config.js` sidebar for each locale.
- **Images** go in `docs/public/` and are referenced as `/image.jpg` (root-relative).
- **Frontmatter** on each `.md` page typically includes `title`, `description`, and SEO-relevant fields used by `config.js` to inject structured data.
- The root `docs/index.md` simply redirects to `/en/`.
