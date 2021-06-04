import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// @ts-ignore
// import _ from 'lodash'

// https://vitejs.dev/config/


export default defineConfig({
  plugins: [vue()],
  build: {
    target: "es2015",
    polyfillDynamicImport: true,
  },
  server: {
    host: "0.0.0.0", // host监听所有地址包括局域网和公网地址
    port: 80,
    force: true, // 依赖预构建
    proxy: {
      "/api": {
        target: "http://sitapp.qixin007.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/v4/internal"),
        headers: {
          "Content-Type": "application/json",
        },

      },
    },
  },
});
