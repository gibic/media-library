import * as server from '../entries/pages/upload/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/upload/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/upload/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.11e9d929.js","_app/immutable/chunks/scheduler.3ec7a0a7.js","_app/immutable/chunks/index.54d36a3d.js","_app/immutable/chunks/client.76eb14c7.js","_app/immutable/chunks/singletons.3b2afad5.js","_app/immutable/chunks/index.338d84dd.js","_app/immutable/chunks/Search.96974e3e.js"];
export const stylesheets = [];
export const fonts = [];
