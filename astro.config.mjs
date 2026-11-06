import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const site = 'https://shrutsureja.com';

export default defineConfig({
    site,
    integrations: [
        mdx(),
        sitemap({ customPages: [new URL('/shrut-sureja-resume.pdf', site).href] }),
        tailwind({
            applyBaseStyles: false
        })
    ]
});
