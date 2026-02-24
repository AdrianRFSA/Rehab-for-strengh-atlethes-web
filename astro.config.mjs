import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.rehabforstrengthathletes.com',
    output: 'server',
    adapter: vercel({
        outputDirectory: 'dist'
    }),
    vite: {
        plugins: [tailwindcss()],
        define: {
        },
        server: {

        }
    },
    srcDir: './src',
    outDir: './dist',
    base: '/',
    integrations: [react(), sitemap({
        filter: (page) => !page.includes('/api/') && !page.includes('/admin/'),
        changefreq: 'weekly',
        lastmod: new Date(),
    })],
    session: {
        driver: 'redis',
        options: {
            url: process.env.REDIS_URL,
        },
    },
});