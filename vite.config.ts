import { defineConfig } from "vite";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        content: resolve(__dirname, "src/content/content.ts"),
        popup: resolve(__dirname, "src/popup/popup.ts"),
        background: resolve(__dirname, "src/background.ts"),
      },
      output: {
        entryFileNames: "[name].js",
        dir: "dist",
      },
    },
    assetsDir: "",
  },
  plugins: [
    viteStaticCopy({
      targets: [
        // Copy popup HTML and CSS
        { src: "src/popup/popup.html", dest: "popup" },
        { src: "src/popup/popup.css", dest: "popup" },
        // Copy content CSS
        { src: "src/content/content.css", dest: "" },
        // Copy manifest.json
        { src: "public/manifest.json", dest: "" },
      ],
    }),
  ],
});
