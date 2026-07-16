import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// This deploys to the default GitHub Pages URL for this repo:
// https://floki777.github.io/canterapro-website/
// If you later attach a custom domain (e.g. canterapro.app), change `site`
// to the custom domain, delete the `base` line below, and add a `CNAME`
// file to /public with the domain name. See README.md for the full steps.
export default defineConfig({
  site: 'https://floki777.github.io',
  base: '/canterapro-website/',
  integrations: [sitemap()],
});
