import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
    // Add this to prevent premature server termination
    watch: {
      usePolling: true,
      interval: 100
    }
  },
  build: {
    target: 'esnext', // or 'modules',
    modulePreload: {
      polyfill: false, // Disable module preload polyfill
    },
    rollupOptions: {
      output: {
        manualChunks: undefined, // Disable manual chunks
      }
    }
  }
})
