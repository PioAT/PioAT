import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { join, parse, resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 3,
          },
        },
      },
    }),
  ],
  publicPath: process.env.NODE_ENV === "production" ? "/PioAT/" : "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      vue: "@vue/compat",
      "~": __dirname,
    },
  },
  build: {
    rollupOptions: {
      input: entryPoints(
        "index.html",
        "2023Projects/index.html",
      ),
    },
  },
});

function entryPoints(...paths) {
  const entries = paths.map(parse).map(entry => {
    const { dir, base, name, ext } = entry;
    const key = join(dir, name);
    const path = resolve(__dirname, dir, base);
    return [key, path];
  });
  const config = Object.fromEntries(entries);
  return config;
}
