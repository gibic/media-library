<script lang="ts">
  import { modal, toggleModal, objectTagStore } from "$lib/stores/modalStore";
  let tags: string[] | null;

  let tagInput: string = "";
  $: visible = $modal;
  
  $: {
    if(visible && $objectTagStore.tagArray) {
    tags = [...$objectTagStore.tagArray];
  }
  }


  const addTag = () => {
    if(tags) {
      if (tagInput.trim() !== "" && !tags.includes(tagInput.toLowerCase())) {
      tags = [...tags, tagInput.toLowerCase()];
      tagInput = "";
    }
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addTag();
    }
  };

  const removeTag = (index: number) => {
    if (tags) {
      tags = tags.filter((_, i) => i !== index);
    }
    objectTagStore.update((storeData) => {
      const tagArray = storeData.tagArray ?? [];
      if (index >= 0 && index < tagArray.length) {
        storeData.tagArray = tagArray.filter((_, i) => i !== index);
      }
      return storeData;
    });
  };

  const cancelModal = () => {
    toggleModal();
    tags = [];
    tagInput = "";
  };
</script>

{#if visible}
  <section
    class="bg-slate-900/80 fixed left-0 top-0 h-screen w-screen flex items-center justify-center"
  >
    <div class="bg-slate-800 p-5 rounded-xl w-5/6 md:w-1/2">
      <h3 class="text-white">Add Tags</h3>
      <span class="text-slate-500 text-sm"
        >Type your tags, separate by comma</span
      >
      <form method="POST">
        <div class="my-4">
          <input
            type="text"
            class="bg-white rounded-sm w-full py-2 px-3"
            placeholder="tags 1, tags 2, tags 3..."
            bind:value={tagInput}
            on:keydown={handleKeyDown}
          />
        </div>
        <div class="flex gap-2">
          {#if tags}
            {#each tags as tag, index (tag)}
              <div class="rounded-lg bg-slate-400 px-2 py-1">
                {tag}
                <button type="button" on:click={() => removeTag(index)}
                  >x</button
                >
              </div>
            {/each}
          {/if}
          <input type="hidden" name="tags" value={tags} />
          <input type="hidden" name="fileId" value={$objectTagStore.stringId} />
        </div>
        <div
          class="border-t border-slate-500/50 pt-4 mt-3 flex justify-end text-white gap-3"
        >
          <button
            type="button"
            class="bg-slate-700 px-5 py-3 rounded-md"
            on:click={cancelModal}>Cancel</button
          >
          <button type="submit" class="bg-black px-5 py-3 rounded-md"
            >Submit</button
          >
        </div>
      </form>
    </div>
  </section>
{/if}
