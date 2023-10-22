<script lang="ts">
  import { toggleModal, objectTagStore } from "$lib/stores/modalStore";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let isVisible = false;

  export let thumbnail: string;
  export let fileName: string;
  export let filePath: string;
  export let fileId: string;
  export let fileTags: string[] | null;
  export let url: string;

  const openModal = () => {
    toggleModal();
    objectTagStore.set({
      tagArray: null,
      stringField: filePath,
      stringId: fileId,
    });
  };

  const handleClick = async (str: string, url: string) => {
    try {
      await navigator.clipboard.writeText(url + str);
    } catch (err) {
      console.error("Unable to copy to clipboard: ", err);
    }
    isVisible = !isVisible;

    dispatch("toast", {
      isVisible: isVisible,
    });
  };
</script>

<section class="bg-slate-800 flex flex-col w-full rounded-md drop-shadow">
  <picture class="aspect-video relative mb-2">
    <div
      class="cursor-pointer"
      role="button"
      tabindex="0"
      on:click={() => openModal()}
      on:keydown={() => openModal()}
    >
      <img
        src={thumbnail}
        alt="{fileName}/"
        class="object-cover w-full aspect-video"
      />
    </div>
    <button
      on:click={() => handleClick(filePath, url)}
      class="absolute top-2 right-2 bg-white rounded-full flex items-center justify-center p-2 transition hover:bg-gray-300"
    >
      <img src="/copy-solid-24.png" alt="copy icon" class="w-4 h-4" />
    </button>
  </picture>
  <span class="p-2 text-sm text-slate-400" data-fileid={fileId}>{fileName}</span>
  {#if fileTags}
    <div class="px-2 flex mb-2">
      <span class="text-sm text-gray-500 mr-2">Tags: </span>
      {#each fileTags as tag}
        <span class="text-sm text-gray-500 mr-1">{tag}</span>
      {/each}
    </div>
  {:else if $objectTagStore.tagArray}
    {#if filePath === $objectTagStore.stringField}
      <div class="px-2 flex mb-2">
        <span class="text-sm text-gray-500 mr-2">Tags: </span>
        {#each $objectTagStore.tagArray as tag}
          <span class="text-sm text-gray-500 mr-1">{tag}</span>
        {/each}
      </div>
    {/if}
  {/if}
</section>
