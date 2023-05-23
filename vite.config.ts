import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 启动端口
    port: 3000,
    // 自动打开
    open: true,
  },

  resolve: {
    // 路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
