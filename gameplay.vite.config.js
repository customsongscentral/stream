import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { viteSingleFile } from "vite-plugin-singlefile";

console.log("Building", process.argv[2]);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), viteSingleFile()],
  build: {
    outDir: "docs",
    rollupOptions: {
      input: "./gameplay.html",
      output: {
        manualChunks: undefined,
      },
    },
  },
});
