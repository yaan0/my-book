import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/Pages", import.meta.url)),
      "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
    },
  },
});
