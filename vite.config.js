import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  build: {
    target: ['es2015'], // ensures compatibility with older browsers
    polyfillDynamicImport: true,
  }
});
