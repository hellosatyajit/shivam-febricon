// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(), // Add React integration
    tailwind(), // Add Tailwind CSS integration
    vercel()
  ],
output: 'server',
adapter: vercel(),
  server: {
    host: true, // Allow access from the local network
  },
});
