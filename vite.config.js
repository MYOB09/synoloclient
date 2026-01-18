import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/synoloclient/',//otan paroume domain prepei na schstei afth h grammh
  plugins: [react()],
})
