<script lang="ts">
  import { modal, toggleModal, objectTagStore } from "$lib/stores/modalStore";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let tags: string[] = [];
  let tagInput: string = "";
  $: visible = $modal;

  const addTag = () => {
    if (tagInput.trim() !== "" && !tags.includes(tagInput.toLowerCase())) {
      tags = [...tags, tagInput.toLowerCase()];
      tagInput = "";
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addTag();
    }
  };

  const removeTag = (index: number) => {
    tags = tags.filter((_, i) => i !== index);
  };

  const cancelModal = () => {
    toggleModal();
    tags = [];
    tagInput = "";
  };

  const handleClick = () => {
    dispatch('submitTag')
  }
</script>

{#if visible}
  <section
    class="bg-slate-900/80 fixed inset-0 flex items-center justify-center"
  >
    <div class="bg-slate-800 p-5 rounded-xl w-5/6 md:w-1/2">
      <h3 class="text-white">Add Tags</h3>
      <span class="text-slate-500 text-sm"
        >Type your tags, separate by comma</span
      >
      <form method="POST" data-sveltekit-scroll="true">
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
          {#each tags as tag, index (tag)}
            <div class="rounded-lg bg-slate-400 px-2 py-1">
              {tag}
              <button class="" on:click={() => removeTag(index)}>x</button>
            </div>
          {/each}
          <input type="hidden" name="tags" value={tags} />
          <input type="hidden" name="fileId" value={$objectTagStore.stringId} />
        </div>
        <div
          class="border-t border-slate-500/50 pt-4 mt-3 flex justify-end text-white gap-3"
        >
          <button type="button"
            class="bg-slate-700 px-5 py-3 rounded-md"
            on:click={cancelModal}>Cancel</button
          >
          <button type="submit" class="bg-black px-5 py-3 rounded-md" on:click={handleClick}>Submit</button
          >
        </div>
      </form>
    </div>
  </section>
{/if}
