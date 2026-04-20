// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: Wenn btrcka.at live geht, site auf 'https://btrcka.at' und base auf '/' setzen.
  // Derzeit noch auf Alex's GitHub Pages für Entwicklung.
  site: 'https://alex-hiermann.github.io',
  base: '/portfolio/',
  vite: {
    plugins: [tailwindcss()],
  },
});