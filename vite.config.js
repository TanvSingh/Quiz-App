import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.jsonserve.com', // The API base URL
        changeOrigin: true,  // Ensures the proxy works properly
        rewrite: (path) => path.replace(/^\/api/, '') // Optional: removes "/api" prefix
      },
    },
  },
});
