import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  base: '/adhd-to-ability-poc/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate a single HTML file with inlined assets for easy distribution
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
