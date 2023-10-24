import { c as create_ssr_component } from "./ssr.js";
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<input type="text" placeholder="Masukan kata kunci..." class="border p-1 w-full"> <button class="hidden md:block w-full transition bg-slate-700/50 hover:bg-slate-700/30 mt-2 rounded-sm text-white p-1" data-svelte-h="svelte-hgtf3p">Cari</button>`;
});
export {
  Search as S
};
