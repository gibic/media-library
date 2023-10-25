<script lang="ts">
  import Search from "$lib/components/Search.svelte";
  import { writable } from 'svelte/store';

  const imagePreview = writable('');

  let named: string | undefined;

  function handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    named = file?.name;
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        imagePreview.set(reader.result as string);
      };

      reader.readAsDataURL(file);
    } else {
      imagePreview.set('');
    }
  }
</script>
<div class="flex justify-between">
  <h1 class="text-white md:text-8xl mb-8 max-w-xs font-bold">Media Library</h1>
</div>
<div class="block md:hidden">
  <Search />
</div>
  <div class="block">
    <div class="mt-8 w-64 flex flex-col md:flex-row gap-12">
      <form
        action="?/upload"
        method="post"
        enctype="multipart/form-data"
        class="flex flex-col gap-4"
      >
        <label class="text-slate-300">
          <input type="file" name="file" id="file" accept="image/*" class="text-sm text-slate-500
          file:mr-5 file:py-2 file:px-6
          file:rounded-full file:border-0
          file:text-sm file:font-medium
          file:bg-slate-600 file:text-slate-300
          hover:file:cursor-pointer hover:file:bg-amber-50
          hover:file:text-amber-700
        " on:change={handleFileInput} />
        </label>
        <div class="flex flex-col">
          <input
            placeholder="filename.jpg"
            type="hidden"
            name="fileName"
            id="fileName"
            bind:value={named}
          />
        </div>
        <button class="bg-slate-700 rounded-full py-3 text-slate-300 disabled:bg-slate-800 disabled:text-slate-700" disabled={!named}>Upload</button>
      </form>
      {#if named}
        <img src={$imagePreview} alt="preview thumbs" width="800">
      {/if}
    </div>
  </div>

