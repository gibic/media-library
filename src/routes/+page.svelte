<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
</script>
<article class="flex flex-wrap gap-5 justify-between">
    {#each data.post.items as items, i}
        <section class="border border-gray-800 flex flex-col max-w-xs rounded-md drop-shadow">
            <picture class="aspect-video relative mb-2">
                <a href="#">
                    <img src={items.thumbnail} alt={items.name}/ class="object-cover w-full aspect-video transition border border-gray-900 hover:border-gray-700">
                </a>
                <button class="absolute top-2 right-2 bg-white rounded-full flex items-center justify-center p-2 transition hover:bg-gray-300">
                    <img src="/copy-solid-24.png" alt="copy icon" class="w-4 h-4">
                </button>
            </picture>
            <span class="px-2 text-sm text-gray-500">{items.name}</span>
            {#if items.tags}
            <div class="px-2 flex mb-2">
                <span class="text-sm text-gray-500 mr-2">Tags: </span>
                {#each items.tags as tag }
                <span class="text-sm text-gray-500 mr-1">{tag}</span>
                {/each}
            </div>
            {/if}
        </section>
    {/each}
</article>
