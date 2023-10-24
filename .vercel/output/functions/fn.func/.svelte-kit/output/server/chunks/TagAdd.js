import { c as create_ssr_component, d as subscribe, a as createEventDispatcher, b as add_attribute, e as escape, f as each } from "./ssr.js";
import { w as writable } from "./index.js";
const modal = writable(false);
const objectTagStore = writable({
  tagArray: null,
  stringField: "",
  stringId: ""
});
const ListPhotosItems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $objectTagStore, $$unsubscribe_objectTagStore;
  $$unsubscribe_objectTagStore = subscribe(objectTagStore, (value) => $objectTagStore = value);
  createEventDispatcher();
  let { thumbnail } = $$props;
  let { fileName } = $$props;
  let { filePath } = $$props;
  let { fileId } = $$props;
  let { fileTags } = $$props;
  let { url } = $$props;
  if ($$props.thumbnail === void 0 && $$bindings.thumbnail && thumbnail !== void 0)
    $$bindings.thumbnail(thumbnail);
  if ($$props.fileName === void 0 && $$bindings.fileName && fileName !== void 0)
    $$bindings.fileName(fileName);
  if ($$props.filePath === void 0 && $$bindings.filePath && filePath !== void 0)
    $$bindings.filePath(filePath);
  if ($$props.fileId === void 0 && $$bindings.fileId && fileId !== void 0)
    $$bindings.fileId(fileId);
  if ($$props.fileTags === void 0 && $$bindings.fileTags && fileTags !== void 0)
    $$bindings.fileTags(fileTags);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$unsubscribe_objectTagStore();
  return `<section class="bg-slate-800 flex flex-col w-full rounded-md drop-shadow"><picture class="aspect-video relative mb-2"><div class="cursor-pointer" role="button" tabindex="0"><img${add_attribute("src", thumbnail, 0)} alt="${escape(fileName, true) + "/"}" class="object-cover w-full aspect-video"></div> <button class="absolute top-2 right-2 bg-white rounded-full flex items-center justify-center p-2 transition hover:bg-gray-300" data-svelte-h="svelte-2a8n6d"><img src="/copy-solid-24.png" alt="copy icon" class="w-4 h-4"></button></picture> <span class="p-2 text-sm text-slate-400"${add_attribute("data-fileid", fileId, 0)}>${escape(fileName)}</span> ${fileTags ? `<div class="px-2 flex mb-2"><span class="text-sm text-gray-500 mr-2" data-svelte-h="svelte-ci7u91">Tags:</span> ${each(fileTags, (tag) => {
    return `<span class="text-sm text-gray-500 mr-1">${escape(tag)}</span>`;
  })}</div>` : `${$objectTagStore.tagArray ? `${filePath === $objectTagStore.stringField ? `<div class="px-2 flex mb-2"><span class="text-sm text-gray-500 mr-2" data-svelte-h="svelte-ci7u91">Tags:</span> ${each($objectTagStore.tagArray, (tag) => {
    return `<span class="text-sm text-gray-500 mr-1">${escape(tag)}</span>`;
  })}</div>` : ``}` : ``}`}</section>`;
});
const TagAdd = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visible;
  let $objectTagStore, $$unsubscribe_objectTagStore;
  let $modal, $$unsubscribe_modal;
  $$unsubscribe_objectTagStore = subscribe(objectTagStore, (value) => $objectTagStore = value);
  $$unsubscribe_modal = subscribe(modal, (value) => $modal = value);
  let tags = [];
  let tagInput = "";
  visible = $modal;
  {
    {
      if (visible && $objectTagStore.tagArray) {
        tags = [...$objectTagStore.tagArray];
      }
    }
  }
  $$unsubscribe_objectTagStore();
  $$unsubscribe_modal();
  return `${visible ? `<section class="bg-slate-900/80 fixed left-0 top-0 h-screen w-screen flex items-center justify-center"><div class="bg-slate-800 p-5 rounded-xl w-5/6 md:w-1/2"><h3 class="text-white" data-svelte-h="svelte-b0e16o">Add Tags</h3> <span class="text-slate-500 text-sm" data-svelte-h="svelte-1eqy8dh">Type your tags, separate by comma</span> <form method="POST"><div class="my-4"><input type="text" class="bg-white rounded-sm w-full py-2 px-3" placeholder="tags 1, tags 2, tags 3..."${add_attribute("value", tagInput, 0)}></div> <div class="flex gap-2">${tags ? `${each(tags, (tag, index) => {
    return `<div class="rounded-lg bg-slate-400 px-2 py-1">${escape(tag)} <button type="button" data-svelte-h="svelte-1cqwg2a">x</button> </div>`;
  })}` : ``} <input type="hidden" name="tags"${add_attribute("value", tags, 0)}> <input type="hidden" name="fileId"${add_attribute("value", $objectTagStore.stringId, 0)}></div> <div class="border-t border-slate-500/50 pt-4 mt-3 flex justify-end text-white gap-3"><button type="button" class="bg-slate-700 px-5 py-3 rounded-md" data-svelte-h="svelte-1xp8s6y">Cancel</button> <button type="submit" class="bg-black px-5 py-3 rounded-md" data-svelte-h="svelte-1q29m77">Submit</button></div></form></div></section>` : ``}`;
});
export {
  ListPhotosItems as L,
  TagAdd as T
};
