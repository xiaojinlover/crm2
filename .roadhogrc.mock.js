const path = require('path');
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  path.resolve(__dirname, 'src/assets/svg/'),  // 业务代码本地私有 svg 存放目录
];
export default {
	svgSpriteLoaderDirs: svgSpriteDirs
};
