<script lang="ts">
	import type { PageData } from './$types';
    import { fade } from 'svelte/transition';
    import Search from '$lib/components/Search.svelte';

	export let data: PageData;

    const url = data.post.host;

    let message = '';
    let type = 'green';
    let visible = false;

    function showToast(msg:string, toastType:string) {
        message = msg;
        type = toastType;
        visible = true;

        setTimeout(hideToast, 3000);
    }

    const handleClick = async (str:string) => {
        try {
            await navigator.clipboard.writeText(url+str);
        } catch (err) {
            console.error("Unable to copy to clipboard: ", err);
        }

        showToast('Image url copied to clipboard!', 'green')
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
<article class="grid grid-cols-1 md:grid-cols-4 gap-4 border-t border-slate-700/40 pt-5">
    {#each data.post.items as items}
        <section class="bg-slate-800 flex flex-col w-full rounded-md drop-shadow">
            <picture class="aspect-video relative mb-2">
                <a href="#">
                    <img src={items.thumbnail} alt={items.name}/ class="object-cover w-full aspect-video">
                </a>
                <button 
                    on:click={() => handleClick(items.filePath)}
                    class="absolute top-2 right-2 bg-white rounded-full flex items-center justify-center p-2 transition hover:bg-gray-300"
                >
                    <img src="/copy-solid-24.png" alt="copy icon" class="w-4 h-4">
                </button>
            </picture>
            <span class="p-2 text-sm text-slate-400">{items.name}</span>
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
{#if visible}
<div class="fixed top-6 left-0 right-0 flex justify-center" transition:fade>
    <div class="bg-green-700 text-white px-5 py-2 rounded shadow-md inline-flex max-w-fit">
      {message}
    </div>
</div>
{/if}