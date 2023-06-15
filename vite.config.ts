import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'
// 设置路径别名
// 表示该文件当前路径下的App.jsx（相对路径）
// import App from './App'
// 表示src/App.jsx，等价于上面的文件地址（绝对路径）
// import App from '@/App'
// 设置路径别名
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: false
    })
  ],
  server: {
    host: true,
    port: 3003,
    // cors: true, //默认启用并允许任何源
    https: false,
    open: true, //在服务器启动时自动在浏览器中打开应用程序
    // 反向代理配置，注意rewrite写法
    // 设置反向代理
    proxy: {
      // 以下示例表示：请求URL中含有"/api"，则反向代理到http://localhost
      // 例如: http://localhost:3000/api/login -> http://localhost/api/login
      '/api': {
        target: 'http://localhost/',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
