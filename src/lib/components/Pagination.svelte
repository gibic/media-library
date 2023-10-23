<script lang="ts">

    export let totalPages: number
    export let currentPage: number
    let pagesBeforeEllipsis = 2;
    let pagesAfterEllipsis = 2;
    let startPage = Math.max(1, currentPage - pagesBeforeEllipsis);
    let endPage = Math.min(totalPages, currentPage + pagesAfterEllipsis);

    function nextPage() {
    if (currentPage < totalPages) {
      currentPage += 1;
    }
  }

</script>
<section class="w-full p-2 flex items-center justify-center">
<a href={`/all`} class="bg-slate-600 p-2 mx-2">
    First
</a>
  {#if startPage > 1}
    <a class="bg-slate-600 p-2 mx-2" href="/all/1">1</a>
    {#if startPage > 2}<span class="bg-slate-600 p-2 mx-2">...</span>{/if}
  {/if}
  {#each Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index) as page}
    <a href={`/all/${page}`} class="bg-slate-600 p-2 mx-2">
      {page}
    </a>
  {/each}
  {#if endPage < totalPages}
    {#if endPage < totalPages - 1}<span class="bg-slate-600 p-2 mx-2">...</span
      >{/if}
    <a href={`/all/${totalPages}`} class="bg-slate-600 p-2 mx-2">{totalPages}</a>
  {/if}
  <button
    class="bg-slate-600 p-2 mx-2"
    on:click={nextPage}
    disabled={currentPage === totalPages}>Next</button
  >
</section>
