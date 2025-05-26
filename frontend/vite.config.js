import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      '2cce-2001-1388-5c5-2c79-f0f6-6261-7a6f-6086.ngrok-free.app'
    ]
  }
})
