import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    configFile: 'tailwind.config.js'
  }), react()],
  output: "hybrid",
  adapter: netlify({
    imageCDN: false
  })
});