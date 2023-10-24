import { c as create_ssr_component, v as validate_component, f as each } from "../../chunks/ssr.js";
import { S as Search } from "../../chunks/Search.js";
import { L as ListPhotosItems, T as TagAdd } from "../../chunks/TagAdd.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const url = data.post.host;
  const firstThreeItems = data.post.items.slice(0, 3);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="text-white md:text-8xl mb-8 max-w-xs font-bold" data-svelte-h="svelte-1ezin3f">Media Library</h1> <div class="block md:hidden">${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div> <span class="text-sm text-slate-300" data-svelte-h="svelte-1dvjw23">Home</span> <article class="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-700/40 pt-5">${each(firstThreeItems, (items, i) => {
    return `${validate_component(ListPhotosItems, "ListPhotosItems").$$render(
      $$result,
      {
        thumbnail: items.thumbnail,
        fileName: items.name,
        filePath: items.filePath,
        fileTags: items.tags,
        fileId: items.fileId,
        url
      },
      {},
      {}
    )}`;
  })}</article> ${``} ${validate_component(TagAdd, "TagAdd").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
