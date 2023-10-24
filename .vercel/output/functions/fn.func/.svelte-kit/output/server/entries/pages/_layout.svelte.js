import { c as create_ssr_component, a as createEventDispatcher, b as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { i as invalidateAll } from "../../chunks/navigation.js";
import { S as Search } from "../../chunks/Search.js";
import { initialize } from "svelte-google-auth/client";
const app = "";
const Listmenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { text } = $$props;
  let { icon } = $$props;
  let { link } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<a${add_attribute("href", link, 0)} class="text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start text-white border-b border-slate-500/20 pb-2 mb-2 cursor-pointer"><img${add_attribute("src", `/${icon}`, 0)}${add_attribute("alt", text, 0)} class="md:mr-2"> <span class="text-[10px] md:text-sm font">${escape(text)}</span></a>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  initialize(data, invalidateAll);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex bg-slate-900 min-h-screen"><aside class="p-5 bg-slate-800/50 border border-r border-slate-700/50"><div class="sticky top-4"><img src="/logo.png" alt="Logo spektakel" class="hidden md:block"> <img src="/logo-square.png" alt="Logo spektakel" class="block md:hidden"> <div class="hidden md:block mt-11">${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div> <nav><ul class="mt-5 d:mt-10 pt-8 border-t border-slate-500/20">${validate_component(Listmenu, "Listmenu").$$render(
    $$result,
    {
      link: "/",
      icon: "home.png",
      text: "Home"
    },
    {},
    {}
  )} ${validate_component(Listmenu, "Listmenu").$$render(
    $$result,
    {
      link: "/all",
      icon: "image.png",
      text: "All Files"
    },
    {},
    {}
  )} ${validate_component(Listmenu, "Listmenu").$$render(
    $$result,
    {
      link: "/upload",
      icon: "cloud.png",
      text: "Upload"
    },
    {},
    {}
  )} ${data.auth.user ? `<button class="text-center flex flex-col md:hidden items-center justify-center text-white border-b border-slate-500/20 pb-2 mb-2 cursor-pointer" data-svelte-h="svelte-1jrp0il"><img src="/log-out.png" alt="logout"> <span class="text-[10px] md:text-sm font">Logout</span></button>` : ``}</ul></nav></div></aside> <div class="container mx-auto p-5">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
