export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cloud.png","copy-solid-24.png","favicon.png","home.png","image.png","log-out.png","logo-square.png","logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.eb74e55b.js","app":"_app/immutable/entry/app.155e2372.js","imports":["_app/immutable/entry/start.eb74e55b.js","_app/immutable/chunks/scheduler.3ec7a0a7.js","_app/immutable/chunks/singletons.3b2afad5.js","_app/immutable/chunks/index.338d84dd.js","_app/immutable/entry/app.155e2372.js","_app/immutable/chunks/scheduler.3ec7a0a7.js","_app/immutable/chunks/index.54d36a3d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/all",
				pattern: /^\/all\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/upload",
				pattern: /^\/upload\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
