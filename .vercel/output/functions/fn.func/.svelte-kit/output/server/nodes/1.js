

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2ab7f2da.js","_app/immutable/chunks/scheduler.3ec7a0a7.js","_app/immutable/chunks/index.54d36a3d.js","_app/immutable/chunks/singletons.3b2afad5.js","_app/immutable/chunks/index.338d84dd.js"];
export const stylesheets = [];
export const fonts = [];
