/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   test: {
      environment: 'jsdom',
      setupFiles: ['vitest-setup.ts'],
      globals: true,
   },
   resolve: {
      alias: {
         src: path.resolve(__dirname, './src'),
      },
   },
});
