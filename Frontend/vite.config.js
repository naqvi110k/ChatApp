import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Set the development server port
    host: '0.0.0.0', // Allows access from your local network
    proxy: {
      "/api": {
        target: 'http://192.168.0.126:4000', // Backend server address
        changeOrigin: true,
       
      }
    }
  }
})
