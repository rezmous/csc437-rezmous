export default {
  server: {
    proxy: {
      "/api": "http://localhost:3000",
      "/auth": "http://localhost:3000",
      "/images": "http://localhost:3000",
      "/icons": "http://localhost:3000",
    },
  },
};
