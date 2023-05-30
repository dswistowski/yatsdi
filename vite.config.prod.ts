import { mergeConfig } from "vite";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  {
    esbuild: {
      drop: ["console", "debugger"],
    },
    build: {
      target: "es2017",
      minify: true,
      minifier: "esbuild",
    },
  },
  true
);
