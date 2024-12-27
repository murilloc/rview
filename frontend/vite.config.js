import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    watch: {
      usePolling: true, // Habilita polling para detectar mudanças no Docker
    },
    host: true,         // Permite acesso externo
    port: 5173,         // Porta padrão do Vite
  },
});
