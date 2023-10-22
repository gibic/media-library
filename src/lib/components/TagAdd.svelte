<script lang="ts">
  import { modal, toggleModal, objectTagStore } from "$lib/stores/modalStore";

  let tagInput: string = "";
  $: visible = $modal;
  $: tagValues = $objectTagStore.tagArray;
  const addTag = () => {
    if (tagValues) {
      if (
        tagInput.trim() !== "" &&
        !tagValues.includes(tagInput.toLowerCase())
      ) {
        // tags = [...tags, tagInput.toLowerCase()];

        objectTagStore.update((storeData) => {
          if (storeData.tagArray === null) {
            storeData.tagArray = [];
          }
          storeData.tagArray.push(tagInput.toLowerCase());

          return storeData;
        });
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
    // tags = tags.filter((_, i) => i !== index);
    objectTagStore.update((storeData) => {
      // Ensure the tagArray is an array (initialize it if it's null)
      if (storeData.tagArray === null) {
        storeData.tagArray = [];
      }

      // Check if the index is valid
      if (index >= 0 && index < storeData.tagArray.length) {
        // Use the `filter` method to create a new array without the tag at the specified index
        storeData.tagArray = storeData.tagArray.filter((_, i) => i !== index);
      }

      // Return the updated storeData
      return storeData;
    });
  };

  const cancelModal = () => {
    toggleModal();
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
          {$objectTagStore.tagArray}
          <input
            type="text"
            class="bg-white rounded-sm w-full py-2 px-3"
            placeholder="tags 1, tags 2, tags 3..."
            bind:value={tagInput}
            on:keydown={handleKeyDown}
          />
        </div>
        <div class="flex gap-2">
          {#if $objectTagStore.tagArray}
            {#each $objectTagStore.tagArray as tag, index (tag)}
              <div class="rounded-lg bg-slate-400 px-2 py-1">
                {tag}
                <button type="button" on:click={() => removeTag(index)}
                  >x</button
                >
              </div>
            {/each}
          {/if}
          <!-- {#each tags as tag, index (tag)}
            <div class="rounded-lg bg-slate-400 px-2 py-1">
              {tag}
              <button on:click={() => removeTag(index)}>x</button>
            </div>
          {/each} -->
          <input type="hidden" name="tags" value={tagValues} />
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
