import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: "./", // 设置打包路径
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    cors: true,
    open: true,
  },
  // 设置代理，根据我们项目实际情况配置
  // proxy: {
  //   '/api': {
  //     target: 'http://xxx.xxx.xxx.xxx:x000',
  //     changeOrigin: true,
  //     secure: false,
  //     rewrite: (path) => path.replace('/api/', '/')
  //   }
  // },
});
