// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import netlify from '@astrojs/netlify';
//import cloudflare from '@astrojs/cloudflare';
//TODO: netlify ou cloudflare: il faudra choisir un et adapter l'adapter en consequence

export default defineConfig({
  integrations: [svelte()],
  // Exemple : Construire pour un déploiement sans serveur avec Netlify
  adapter: netlify(),
  site: 'https://SuperSandrine.github.io',
  base: '/ProjetEliott',


});