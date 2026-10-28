import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap({ filter: (page) => !page.includes('/kit') })],
  site: 'https://spikinglabs.com',
  redirects: {
    // Leftover template pages; keep old links from 404ing.
    '/pricing': '/',
    '/blog': '/',
    // Symbolon was renamed Symbola; keep the old product address working.
    '/products/symbolon': '/products/symbola',
    // Little Outings was renamed Allo Outings (小鹿出游) in October 2026.
    '/products/little-outings': '/products/allo-outings',
  },
});
