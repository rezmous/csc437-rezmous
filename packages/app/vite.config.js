import { resolve } from "path";

export default {
  server: {
    proxy: {
      "/api": "http://localhost:3000",
      "/auth": "http://localhost:3000",
      "/images": "http://localhost:3000",
      "/assets": "http://localhost:3000",
    },
  },
  build: {
    rollupOptions: {
      input: {
        spa: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "login.html"),
        signup: resolve(__dirname, "newuser.html"),
        jordan: resolve(__dirname, "jordan.html"),
        adidas: resolve(__dirname, "adidas.html"),
        nike: resolve(__dirname, "nike.html"),
      },
    },
  },
};
