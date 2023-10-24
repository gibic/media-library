import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.e04bff21.js","_app/immutable/chunks/scheduler.3ec7a0a7.js","_app/immutable/chunks/index.54d36a3d.js","_app/immutable/chunks/TagAdd.3925cbec.js","_app/immutable/chunks/index.338d84dd.js","_app/immutable/chunks/Search.96974e3e.js"];
export const stylesheets = [];
export const fonts = [];
