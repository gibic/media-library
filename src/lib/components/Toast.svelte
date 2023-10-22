<script lang="ts">
  import { fade } from "svelte/transition";

  export let message: string;
</script>

<div class="fixed top-6 left-0 right-0 flex justify-center" transition:fade>
  <div
    class="bg-green-700 text-white px-5 py-2 rounded shadow-md inline-flex max-w-fit"
  >
    {message}
  </div>
</div>
