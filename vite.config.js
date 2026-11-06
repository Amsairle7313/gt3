import { defineConfig } from 'vite';

// base './' makes the build work on any GitHub Pages path
// (https://USER.github.io/REPO/) and on a custom domain.
export default defineConfig({
  base: './',
  build: { target: 'es2020', chunkSizeWarningLimit: 900 },
});
