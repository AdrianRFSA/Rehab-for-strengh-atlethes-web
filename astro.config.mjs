import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
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
    integrations: [react()],
    session: {
        driver: 'redis',
        options: {
            url: process.env.REDIS_URL,
        },
    },
});