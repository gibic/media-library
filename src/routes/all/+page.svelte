<script lang="ts">
  import type { PageData } from "./$types";
  import Search from "$lib/components/Search.svelte";
  import ListPhotosItems from "$lib/components/ListPhotosItems.svelte";
  import Toast from "$lib/components/Toast.svelte";
  import TagAdd from "$lib/components/TagAdd.svelte";

  export let data: PageData;

  const url = data.post.host;

  let message = "";
  let type = "green";
  let visible = false;

  function handleToast() {
    showToast("Copied to clipboard!", "success");
  }

  function showToast(msg: string, toastType: string) {
    message = msg;
    type = toastType;
    visible = true;

    setTimeout(hideToast, 3000);
  }

  function hideToast() {
    visible = false;
  }

</script>

<h1 class="text-white md:text-8xl mb-8 max-w-xs font-bold">Media Library</h1>
<div class="block md:hidden">
  <Search />
</div>
<span class="text-sm text-slate-300">Home &raquo; All Files</span>
<article
  class="grid grid-cols-1 md:grid-cols-4 gap-4 border-t border-slate-700/40 pt-5"
>
  {#each data.post.items as items}
    <ListPhotosItems
      thumbnail={items.thumbnail}
      fileName={items.name}
      filePath={items.filePath}
      fileTags={items.tags}
      fileId={items.fileId}
      {url}
      on:toast={handleToast}
    />
  {/each}
</article>
{#if visible}
  <Toast {message} />
{/if}
<TagAdd />
