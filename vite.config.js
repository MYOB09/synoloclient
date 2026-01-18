import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  base: '/synoloclient/',//otan paroume domain prepei na schstei afth h grammh kai prepei na alla3w kai to .github\workflows logika
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // <--- Add this section
    },
  },
})
