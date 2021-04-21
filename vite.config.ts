// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "vite";
// eslint-disable-next-line import/no-extraneous-dependencies
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: "./", // 设置打包路径
  resolve: {
    alias: {
      "~": resolve(__dirname, "./"),
      "@": resolve(__dirname, "src")
    }
  },
  server: {
    cors: true,
    open: true,

    // 设置代理，根据我们项目实际情况配置
    proxy: {
      "/api": {
        target: "http://xxx.xxx.xxx.xxx:x000/api/v1",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
