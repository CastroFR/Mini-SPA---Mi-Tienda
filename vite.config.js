import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Asegura que el directorio de salida sea 'dist'
    chunkSizeWarningLimit: 1000, // Aumenta el límite de advertencia de tamaño
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'firebase/app', 'firebase/firestore', 'firebase/auth']
        }
      }
    }
  }
})
