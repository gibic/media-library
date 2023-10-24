import { c as create_ssr_component, a as createEventDispatcher, f as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { S as Search } from "../../../chunks/Search.js";
import { L as ListPhotosItems, T as TagAdd } from "../../../chunks/TagAdd.js";
function paginate({ items, pageSize: pageSize2, currentPage }) {
  return items.slice((currentPage - 1) * pageSize2, (currentPage - 1) * pageSize2 + pageSize2);
}
var SymbolType;
(function(SymbolType2) {
  SymbolType2["PREVIOUS_PAGE"] = "PREVIOUS_PAGE";
  SymbolType2["NEXT_PAGE"] = "NEXT_PAGE";
  SymbolType2["ELLIPSIS"] = "ELLIPSIS";
})(SymbolType || (SymbolType = {}));
function generateNavigationOptions({ totalItems, pageSize: pageSize2, currentPage, limit, showStepOptions = false }) {
  const totalPages = Math.ceil(totalItems / pageSize2);
  const limited = limit && totalPages > getLimitThreshold(limit);
  const options = limited ? generateLimitedOptions({ totalPages, limit, currentPage }) : generateUnlimitedOptions({ totalPages });
  return showStepOptions ? addStepOptions({ options, currentPage, totalPages }) : options;
}
function generateUnlimitedOptions({ totalPages }) {
  return new Array(totalPages).fill(null).map((_, index) => ({
    type: "number",
    value: index + 1
  }));
}
function generateLimitedOptions({ totalPages, limit, currentPage }) {
  const boundarySize = limit * 2 + 2;
  const firstBoundary = 1 + boundarySize;
  const lastBoundary = totalPages - boundarySize;
  const totalShownPages = firstBoundary + 2;
  if (currentPage <= firstBoundary - limit) {
    return Array(totalShownPages).fill(null).map((_, index) => {
      if (index === totalShownPages - 1) {
        return {
          type: "number",
          value: totalPages
        };
      } else if (index === totalShownPages - 2) {
        return {
          type: "symbol",
          symbol: SymbolType.ELLIPSIS,
          value: firstBoundary + 1
        };
      }
      return {
        type: "number",
        value: index + 1
      };
    });
  } else if (currentPage >= lastBoundary + limit) {
    return Array(totalShownPages).fill(null).map((_, index) => {
      if (index === 0) {
        return {
          type: "number",
          value: 1
        };
      } else if (index === 1) {
        return {
          type: "symbol",
          symbol: SymbolType.ELLIPSIS,
          value: lastBoundary - 1
        };
      }
      return {
        type: "number",
        value: lastBoundary + index - 2
      };
    });
  } else if (currentPage >= firstBoundary - limit && currentPage <= lastBoundary + limit) {
    return Array(totalShownPages).fill(null).map((_, index) => {
      if (index === 0) {
        return {
          type: "number",
          value: 1
        };
      } else if (index === 1) {
        return {
          type: "symbol",
          symbol: SymbolType.ELLIPSIS,
          value: currentPage - limit + (index - 2)
        };
      } else if (index === totalShownPages - 1) {
        return {
          type: "number",
          value: totalPages
        };
      } else if (index === totalShownPages - 2) {
        return {
          type: "symbol",
          symbol: SymbolType.ELLIPSIS,
          value: currentPage + limit + 1
        };
      }
      return {
        type: "number",
        value: currentPage - limit + (index - 2)
      };
    });
  }
  return [];
}
function addStepOptions({ options, currentPage, totalPages }) {
  return [
    {
      type: "symbol",
      symbol: SymbolType.PREVIOUS_PAGE,
      value: currentPage <= 1 ? 1 : currentPage - 1
    },
    ...options || [],
    {
      type: "symbol",
      symbol: SymbolType.NEXT_PAGE,
      value: currentPage >= totalPages ? totalPages : currentPage + 1
    }
  ];
}
function getLimitThreshold(limit) {
  const maximumUnlimitedPages = 3;
  const numberOfBoundaryPages = 2;
  return limit * 2 + maximumUnlimitedPages + numberOfBoundaryPages;
}
const PaginationNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options;
  let totalPages;
  createEventDispatcher();
  let { totalItems = 0 } = $$props;
  let { pageSize: pageSize2 = 1 } = $$props;
  let { currentPage = 1 } = $$props;
  let { limit = void 0 } = $$props;
  let { showStepOptions = false } = $$props;
  if ($$props.totalItems === void 0 && $$bindings.totalItems && totalItems !== void 0)
    $$bindings.totalItems(totalItems);
  if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize2 !== void 0)
    $$bindings.pageSize(pageSize2);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  if ($$props.showStepOptions === void 0 && $$bindings.showStepOptions && showStepOptions !== void 0)
    $$bindings.showStepOptions(showStepOptions);
  options = generateNavigationOptions({
    totalItems,
    pageSize: pageSize2,
    currentPage,
    limit,
    showStepOptions
  });
  totalPages = Math.ceil(totalItems / pageSize2);
  return `<div class="pagination-nav">${each(options, (option) => {
    return `<span class="${[
      "option",
      (option.type === "number" ? "number" : "") + " " + (option.type === "symbol" && option.symbol === SymbolType.PREVIOUS_PAGE ? "prev" : "") + " " + (option.type === "symbol" && option.symbol === SymbolType.NEXT_PAGE ? "next" : "") + " " + (option.type === "symbol" && option.symbol === SymbolType.NEXT_PAGE && currentPage >= totalPages || option.type === "symbol" && option.symbol === SymbolType.PREVIOUS_PAGE && currentPage <= 1 ? "disabled" : "") + " " + (option.type === "symbol" && option.symbol === SymbolType.ELLIPSIS ? "ellipsis" : "") + " " + (option.type === "number" && option.value === currentPage ? "active" : "")
    ].join(" ").trim()}" role="presentation">${option.type === "number" ? `${slots.number ? slots.number({ value: option.value }) : ` <span>${escape(option.value)}</span> `}` : `${option.type === "symbol" && option.symbol === SymbolType.ELLIPSIS ? `${slots.ellipsis ? slots.ellipsis({}) : ` <span data-svelte-h="svelte-9cz974">...</span> `}` : `${option.type === "symbol" && option.symbol === SymbolType.PREVIOUS_PAGE ? `${slots.prev ? slots.prev({}) : ` <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path></svg> `}` : `${option.type === "symbol" && option.symbol === SymbolType.NEXT_PAGE ? `${slots.next ? slots.next({}) : ` <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg> `}` : ``}`}`}`} </span>`;
  })}</div>`;
});
const LightPaginationNav_svelte_svelte_type_style_lang = "";
const DarkPaginationNav_svelte_svelte_type_style_lang = "";
let pageSize = 12;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paginatedItems;
  let { data } = $$props;
  let items = data.post.items;
  let currentPage = 1;
  const url = data.post.host;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  paginatedItems = paginate({ items, pageSize, currentPage });
  return `<h1 class="text-white md:text-8xl mb-8 max-w-xs font-bold" data-svelte-h="svelte-1ezin3f">Media Library</h1> <div class="block md:hidden">${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div> <span class="text-sm text-slate-300" data-svelte-h="svelte-c10mmu">Home » All Files</span> <section class="my-5 text-xs md:text-base text-slate-300">${validate_component(PaginationNav, "PaginationNav").$$render(
    $$result,
    {
      totalItems: items.length,
      pageSize,
      currentPage,
      limit: 1,
      showStepOptions: true
    },
    {},
    {}
  )}</section> <article class="grid grid-cols-1 md:grid-cols-4 gap-4 border-t border-slate-700/40 pt-5">${each(paginatedItems, (items2) => {
    return `${validate_component(ListPhotosItems, "ListPhotosItems").$$render(
      $$result,
      {
        thumbnail: items2.thumbnail,
        fileName: items2.name,
        filePath: items2.filePath,
        fileTags: items2.tags,
        fileId: items2.fileId,
        url
      },
      {},
      {}
    )}`;
  })}</article> <section class="my-5 text-xs md:text-base text-slate-300">${validate_component(PaginationNav, "PaginationNav").$$render(
    $$result,
    {
      totalItems: items.length,
      pageSize,
      currentPage,
      limit: 1,
      showStepOptions: true
    },
    {},
    {}
  )}</section> ${``} ${validate_component(TagAdd, "TagAdd").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
