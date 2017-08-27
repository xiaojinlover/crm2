const path = require('path');
const svgSpriteDirs = [
	require.resolve('antd-mobile').replace(/warn\.js$/, ''),
	
	path.resolve(__dirname, 'src/assets/svg'),
];
export default {
	entry: "src/index.js",
	env: {
		development: {
			extraBabelPlugins: [
				"dva-hmr", ["import", {
					"libraryName": "antd-mobile",
					"style": "css"
				}]
			]
		},
		"production": {
			extraBabelPlugins: ["import", {
				"libraryName": "antd-mobile",
				"style": "css"
			}]
		}
	},
	proxy: {
		"/api": {
			"target": "http://jsonplaceholder.typicode.com/",
			"changeOrigin": true,
			"pathRewrite": {
				"^/api": ""
			}
		}
	},
	svgSpriteLoaderDirs: svgSpriteDirs,
}
