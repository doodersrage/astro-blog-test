// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        host: true, // Listens on all IPs (0.0.0.0)
        port: 4321, // Optional: specify port
    },
  build: { inlineStylesheets: 'never' },
  site: "https://example.com"
});
