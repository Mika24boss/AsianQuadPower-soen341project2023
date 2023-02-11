const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-82d570ba.js","imports":["_app/immutable/start-82d570ba.js","_app/immutable/chunks/index-20c84258.js","_app/immutable/chunks/singletons-317f8e08.js","_app/immutable/chunks/index-295d139c.js","_app/immutable/chunks/parse-b67c4dc9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-f047af14.js'),
			() => import('./chunks/1-3d077652.js'),
			() => import('./chunks/4-dab0d5ff.js')
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
