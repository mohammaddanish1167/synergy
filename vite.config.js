import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // React should run first so JSX is transformed before other plugins
    react(),
    tailwindcss(),
  ],
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
})
