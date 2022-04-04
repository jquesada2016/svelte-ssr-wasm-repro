<script lang="ts" context="module">
  import { browser } from "$app/env";
  import type { Load } from "@sveltejs/kit";
  import init from "$wasm";
  import initWasm from "../lib/wasm/index_bg.wasm";

  export const load: Load = async () => {
    if (browser) {
      await init("http://localhost:3000/src/lib/wasm/index_bg.wasm");
    } else {
      // Uncomment the following line to see the error.
      // await initWasm();
    }

    return {
      status: 200,
    };
  };
</script>

<script lang="ts">
  import "./app.css";
</script>

<slot />
