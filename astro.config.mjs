// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://monty1743-boop.github.io',
  base: '/rubysrescue/',
  vite: {
    plugins: [tailwindcss()]
  }
});
