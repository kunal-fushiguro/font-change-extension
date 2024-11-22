import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        content: "src/content/content.ts",
        popup: "src/popup/popup.ts",
        background: "src/background.ts",
      },
      output: {
        entryFileNames: "[name].js",
        dir: "dist",
      },
    },
    assetsDir: "",
  },
});
