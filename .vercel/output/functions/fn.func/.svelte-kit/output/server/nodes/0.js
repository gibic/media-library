import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.7c74259f.js","_app/immutable/chunks/scheduler.3ec7a0a7.js","_app/immutable/chunks/index.54d36a3d.js","_app/immutable/chunks/client.76eb14c7.js","_app/immutable/chunks/singletons.3b2afad5.js","_app/immutable/chunks/index.338d84dd.js","_app/immutable/chunks/Search.96974e3e.js"];
export const stylesheets = ["_app/immutable/assets/0.c36e350b.css"];
export const fonts = [];
