/**
 * Vite Configuration
 * 
 * Main build tool configuration for the project.
 * Defines:
 * - Build settings
 * - Development server options
 * - Plugin configurations
 * - Path aliases
 * - Environment variables
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    cors: true,
    strictPort: true,
    port: 3000,
    host: true,
    watch: {
      usePolling: false,
      ignored: ['**/node_modules/**', '**/dist/**']
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog']
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  env: {
    development: {
      VITE_API_URL: 'http://localhost:3000'
    },
    production: {
      VITE_API_URL: 'https://api.example.com'
    }
  }
});
