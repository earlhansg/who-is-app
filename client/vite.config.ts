import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// libs 
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  //change port for production
  preview: {
    port: 3001,
  },
  // for dev
  server: {
    port: 5000,
  },
  plugins: [react(), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})
