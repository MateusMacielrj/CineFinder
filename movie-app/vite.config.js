import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/CineFinder/", // 👈 ESSA LINHA RESOLVE A TELA BRANCA
})