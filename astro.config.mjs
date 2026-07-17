import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deploys to the custom domain https://cantera-pro.com (see /public/CNAME).
// No `base` path needed — a custom domain serves from the root, unlike the
// default project-page URL (https://<user>.github.io/<repo>/) this site
// used before.
export default defineConfig({
  site: 'https://cantera-pro.com',
  integrations: [sitemap()],
});
