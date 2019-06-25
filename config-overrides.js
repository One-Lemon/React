const path = require('path');
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra');

module.exports = override(
  // 支持 antd 的按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // less
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@danger-color': 'orange'
    },
  }),
  // 配置别名
  addWebpackAlias({
    '@': path.resolve(__dirname, './src')
  })
);
