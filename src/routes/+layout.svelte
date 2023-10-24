<script lang="ts">
  import "../app.css";
  import type { PageData } from "./$types.js";
  import { invalidateAll } from "$app/navigation";
  import Listmenu from "$lib/components/Listmenu.svelte";
  import Search from "$lib/components/Search.svelte";
  import { signIn, signOut, initialize } from "svelte-google-auth/client";
  export let data: PageData;

  initialize(data, invalidateAll);

</script>

<div class="flex bg-slate-900 min-h-screen">
  <aside class="p-5 bg-slate-800/50 border border-r border-slate-700/50">
    <div class="sticky top-4">
      <img src="/logo.png" alt="Logo spektakel" class="hidden md:block" />
      <img
        src="/logo-square.png"
        alt="Logo spektakel"
        class="block md:hidden"
      />
      <div class="hidden md:block mt-11">
        <Search />
      </div>
      <nav>
        <ul class="mt-5 d:mt-10 pt-8 border-t border-slate-500/20">
          <Listmenu link="/" icon="home.png" text="Home" />
          <Listmenu link="/all" icon="image.png" text="All Files" />
          <Listmenu link="/upload" icon="cloud.png" text="Upload" />
          {#if data.auth.user}
            <button
            on:click={() => signOut()}
            class="text-center  flex flex-col md:hidden items-center justify-center text-white border-b border-slate-500/20 pb-2 mb-2 cursor-pointer">
              <img src="/log-out.png" alt="logout" />
              <span class="text-[10px] md:text-sm font">Logout</span>
            </button
          >
          {/if}
        </ul>
      </nav>
    </div>
  </aside>
  <div class="container mx-auto p-5">
    <slot />
  </div>
</div>
