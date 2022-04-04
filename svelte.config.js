import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [

    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          "$components": path.resolve("./src/lib/components"),
          "$wasm": path.resolve("./src/lib/wasm/"),
        }
      }
    }
  },
};

export default config;