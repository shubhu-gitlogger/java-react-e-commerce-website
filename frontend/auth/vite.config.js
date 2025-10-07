import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
            tailwindcss(),
  ],
  //    server: {
  //   https: true,       // ✅ enable HTTPS
  //   port: 5173,        // optional, default is 5173
  //   strictPort: true   // fail if port is busy
  // }
})
