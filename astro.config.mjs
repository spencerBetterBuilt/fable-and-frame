import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.fableandframestudio.com',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/client-login') &&
        !page.includes('/wedding-photography-the-woodlands') &&
        !page.includes('/wedding-photography-conroe') &&
        !page.includes('/wedding-photography-houston'),
    }),
  ],
  image: {
    domains: [],
  },
});
