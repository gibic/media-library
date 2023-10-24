import { c as create_ssr_component, d as subscribe, e as escape, v as validate_component, b as add_attribute } from "../../../chunks/ssr.js";
import { i as invalidateAll } from "../../../chunks/navigation.js";
import { initialize } from "svelte-google-auth/client";
import { S as Search } from "../../../chunks/Search.js";
import { w as writable } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_imagePreview;
  const imagePreview = writable("");
  $$unsubscribe_imagePreview = subscribe(imagePreview, (value) => value);
  let { data } = $$props;
  initialize(data, invalidateAll);
  let named;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_imagePreview();
  return `<div class="flex justify-between"><h1 class="text-white md:text-8xl mb-8 max-w-xs font-bold" data-svelte-h="svelte-1ezin3f">Media Library</h1> ${data.auth.user ? `<div class="hidden md:block"><span class="text-slate-200">${escape(data.auth.user.email)}</span> <button class="bg-slate-600 text-slate-200 px-4 py-1" data-svelte-h="svelte-kvn2hk">Sign Out</button></div>` : ``}</div> <div class="block md:hidden">${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div> ${data.auth.user ? `<div class="block"><div class="mt-8 w-64 flex flex-col md:flex-row gap-12"><form action="?/upload" method="post" enctype="multipart/form-data" class="flex flex-col gap-4"><label class="text-slate-300"><input type="file" name="file" id="file" accept="image/*" class="text-sm text-slate-500 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-slate-600 file:text-slate-300 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 "></label> <div class="flex flex-col"><input placeholder="filename.jpg" type="hidden" name="fileName" id="fileName"${add_attribute("value", named, 0)}></div> <button class="bg-slate-700 rounded-full py-3 text-slate-300 disabled:bg-slate-800 disabled:text-slate-700" ${"disabled"}>Upload</button></form> ${``}</div></div>` : `<div class="flex h-screen items-center"><div><h1 class="text-slate-300 text-4xl mb-4" data-svelte-h="svelte-abdakq">You need to sign in to access this page</h1> <button class="bg-slate-600 text-slate-200 px-4 py-1" data-svelte-h="svelte-860v1u">Sign In</button></div></div>`}`;
});
export {
  Page as default
};
