<script>
  import "../app.css";
  import Listmenu from "$lib/components/Listmenu.svelte";
  import Search from "$lib/components/Search.svelte";
</script>
<div class="flex bg-slate-900 min-h-screen">
  <aside class="p-5 bg-slate-800/50 border border-r border-slate-700/50">
    <div class="sticky top-4">
      <img src="/logo.png" alt="Logo spektakel" class="hidden md:block">
      <img src="/logo-square.png" alt="Logo spektakel" class="block md:hidden">
      <div class="hidden md:block mt-11">
        <Search />
      </div>
      <nav>
        <ul class="mt-5 d:mt-10 pt-8 border-t border-slate-500/20">
          <Listmenu icon="home.png" text="Home" />
          <Listmenu icon="image.png" text="All Files" />
        </ul>
      </nav>
    </div>
  </aside>
  <div class="container mx-auto p-5">
      <slot />
  </div>
</div>
