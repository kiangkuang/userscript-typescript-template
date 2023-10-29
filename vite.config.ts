import { defineConfig } from "vite";
import monkey, { MonkeyUserScript } from "vite-plugin-monkey";

const userscript: MonkeyUserScript = {
  name: "userscript-name",
  namespace: "https://github.com/kiangkuang",
  version: "0.0.1",
  author: "Kiang Kuang",
  // add any other userscript headers
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript,
      build: {
        fileName: "script.user.js",
      },
    }),
  ],
});
