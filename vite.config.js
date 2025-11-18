import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // 自動開啟瀏覽器
    port: 3000, // 開發伺服器 port
  },
})
