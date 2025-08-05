import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    host: true,
    allowedHosts: ['cyberpit-academy-init.onrender.com', 'localhost']
  },
  preview: {
    port: 4174,
    host: true,
    allowedHosts: ['cyberpit-academy-init.onrender.com', 'localhost']
  }
})
