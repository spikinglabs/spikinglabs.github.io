import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://spikinglabs.com',
  redirects: {
    // Leftover template pages; keep old links from 404ing.
    '/pricing': '/',
    '/blog': '/',
  },
});
