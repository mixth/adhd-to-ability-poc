import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
