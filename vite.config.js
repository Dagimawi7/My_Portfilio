import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // Allow importing .glb and .gltf files
  assetsInclude: ['**/*.glb', '**/*.gltf'],

  // Adding browser compatibility targets
  build: {
    target: ['chrome89', 'firefox89', 'safari14', 'edge89'], 
  }
});
