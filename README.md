# CanteraPro Website

The marketing and documentation website for [CanteraPro](https://cantera-pro.com) — a static,
fully bilingual (English/Spanish) site built with [Astro](https://astro.build). No backend, no
server required, deployed straight to GitHub Pages. This matches CanteraPro itself: no cloud, no
account, everything works standing still.

## Running it locally

You'll need [Node.js](https://nodejs.org) 20+ installed.

```bash
npm install
npm run dev
```

This starts a local dev server (usually at `http://localhost:4321`) that live-reloads as you edit
files. To build the production version and preview it exactly as it will appear on GitHub Pages:

```bash
npm run build
npm run preview
```

## Editing content

Every page is a single, self-contained file — there's no hidden data file or CMS to hunt through.
To change copy, open the file for that page and language and edit the text directly.

| Page | English | Spanish |
|---|---|---|
| Home | `src/pages/en/index.astro` | `src/pages/es/index.astro` |
| Features | `src/pages/en/features.astro` | `src/pages/es/features.astro` |
| Pricing | `src/pages/en/pricing.astro` | `src/pages/es/pricing.astro` |
| How It Works | `src/pages/en/how-it-works.astro` | `src/pages/es/how-it-works.astro` |
| About | `src/pages/en/about.astro` | `src/pages/es/about.astro` |
| Download | `src/pages/en/download.astro` | `src/pages/es/download.astro` |
| Privacy Policy | `src/pages/en/privacy.astro` | `src/pages/es/privacy.astro` |
| Terms of Service | `src/pages/en/terms.astro` | `src/pages/es/terms.astro` |
| Support / FAQ | `src/pages/en/support.astro` | `src/pages/es/support.astro` |

The visible text sits in plain HTML-like markup between the `---` frontmatter fences at the top
of each file — you don't need to understand Astro or JavaScript to change a sentence. **When you
edit one language's page, make the same edit on its counterpart** so the two stay in sync.

Shared page furniture lives in one place each, so you only edit it once:

- `src/components/Header.astro` — top navigation + "Get the App" button + language switcher
- `src/components/Footer.astro` — footer links, tagline, copyright line (year updates automatically)
- `src/layouts/BaseLayout.astro` — `<head>` tags: SEO description, hreflang, Open Graph/social preview

### Founding-member counter

The "spots claimed" counter on the Pricing page (`src/pages/en/pricing.astro` and
`src/pages/es/pricing.astro`) is a **hand-updated placeholder**, not a live feed — this is a
static site with no backend to track real sales. Update the two numbers (`347` and the bar
`width: 34.7%`) by hand in both language files as real App Store / Google Play lifetime sales
come in. Search for `founding-tier__bar` in each file to find it.

## Colors, fonts, and spacing (design tokens)

Every color, font, and spacing value used across the whole site is defined once, at the top of
[`src/styles/global.css`](src/styles/global.css), as CSS custom properties under the
`DESIGN TOKENS` comment block. To swap in CanteraPro's real brand colors later, you only need to
edit the values inside `:root { ... }` at the top of that file — every page and component reads
from these variables, so nothing else needs to change.

## Icons

Icons come from [Lucide](https://lucide.dev) via the `lucide-static` package. The full set used on
the site is registered in `src/icons.js`. To use a different icon somewhere, find its name in
[lucide.dev/icons](https://lucide.dev/icons), add an import line to `src/icons.js`, then reference
it with `<Icon name="icon-name" />` in any `.astro` file.

## Deployment

The site deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`) every time
changes are pushed to `main`. The workflow builds the site with `npm run build` and publishes the
`dist/` folder to GitHub Pages — there's nothing to trigger manually.

Make sure GitHub Pages is set to deploy from **GitHub Actions** (not a branch) under
**Settings → Pages** in this repository. The live site is at:

```
https://cantera-pro.com
```

This repo is configured for that custom domain: `public/CNAME` contains `cantera-pro.com`, and
`astro.config.mjs` has no `base` path set (a custom domain serves from the root, unlike the
default `github.io/repo-name/` project-page URL, which needed one). DNS for `cantera-pro.com`
points at GitHub Pages' IPs, and `www.cantera-pro.com` is a CNAME to `floki777.github.io`.

If you ever need to move this to a different domain: update the domain name in `public/CNAME`,
change `site` in `astro.config.mjs` to match, and update the custom domain under
**Settings → Pages** on GitHub along with the new DNS records at your registrar.

## Before this goes fully live

A few things are intentionally left as clearly-marked placeholders and should be swapped out
before pointing real users at this site:

- **App Store / Google Play badges** (`src/pages/en/download.astro`,
  `src/pages/es/download.astro`) — replace the placeholder buttons with the official badge assets
  and your real store listing URLs once the app is published.
- **Social preview image** (`public/og-image.svg`) — a placeholder graphic. Swap in a real
  1200×630 designed PNG or JPG and update the reference in `src/layouts/BaseLayout.astro`
  (search for `og-image`).
- **Screenshots** on the How It Works page — every step has a
  `[SCREENSHOT: description of what goes here]` placeholder box marking exactly what real app
  screenshot should go there.
- **Privacy Policy and Terms of Service** — both pages carry a visible draft disclaimer at the
  top. Have an attorney review them before relying on them for legal compliance.
- **Support email** (`support@cantera-pro.com`) — used throughout the Support, Privacy, and Terms
  pages via `mailto:` links. Update it in each file if the real support address differs, and make
  sure that inbox actually exists/forwards somewhere before launch.
