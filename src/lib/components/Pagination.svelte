<script lang="ts">
  import { goto } from "$app/navigation";

  export let totalPages: number;
  export let currentPage: number;
  let pagesBeforeEllipsis = 2;
  let pagesAfterEllipsis = 2;
  let startPage = Math.max(1, currentPage - pagesBeforeEllipsis);
  let endPage = Math.min(totalPages, currentPage + pagesAfterEllipsis);

  function routeToPage(route: number) {
    goto(`/all/${route}`);
  }

  function nextPage() {
    if (currentPage < totalPages) {
      const target = (currentPage += 1);
      routeToPage(target);
    }
  }
</script>

<section class="w-full p-2 gap-1 flex items-center justify-center">
  {#if startPage = 1}
  <a href={`/all`} class="bg-slate-700 p-2 text-red-300"> First </a>
  {/if}
  {#if startPage > 1}
    <a class="bg-slate-700 p-2 text-slate-300" href="/all">1</a>
    {#if startPage > 2}<span class="bg-slate-700 p-2 text-slate-300">...</span>{/if}
  {/if}
  {#if endPage < totalPages}
    {#each Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index) as page}
    <a href={`/all/${page}`} class="bg-slate-700 p-2 text-slate-300">
      {page}
    </a>
  {/each}
    {#if endPage < totalPages - 1}
      <span class="bg-slate-700 p-2 text-slate-300">...</span>
    {/if}
    <a href={`/all/${totalPages}`} class="bg-slate-700 p-2 text-slate-300">Last</a>
  {/if}
  <button
    class="bg-slate-700 p-2 text-slate-300"
    on:click={nextPage}
    disabled={currentPage === totalPages}>Next</button
  >
</section>
