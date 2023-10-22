<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let text: string;
  export let icon: string;
  export let link: string;

  function handleClick() {
    // Emit a custom event with the new value
    dispatch("my-event", { message: text.toLowerCase().replace(/\s/g, "-") });
  }
</script>

<a
  href={link}
  on:click={handleClick}
  class="text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start text-white border-b border-slate-500/20 pb-2 mb-2 last-of-type:border-0 cursor-pointer"
>
  <img src={`/${icon}`} alt={text} class="md:mr-2" />
  <span class="text-[10px] md:text-sm font">{text}</span>
</a>
