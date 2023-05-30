import path from "path";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "yatsdi",
      formats: ["es", "umd"],
      fileName: (format) => `yatsdi.${format}.js`,
    }
  },
});
