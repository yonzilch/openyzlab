// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://yzlab.eu.org',
  vite: {
    server: {
      allowedHosts: true,
    },
  },
  integrations: [
    starlight({
      title: 'OpenYZLab',
      favicon: '/favicon.ico',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/yonzilch/yzlab' }],
      plugins: [
        catppuccin({
          dark: { flavor: "mocha", accent: "lavender" },
          light: { flavor: "latte", accent: "teal" },
        }),
      ],
      sidebar: [
        {
          label: 'Services',
          autogenerate: { directory: 'services' },
        },
      ],
    }),
  ],
});
