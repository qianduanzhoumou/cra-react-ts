const path = require('path');
const CracoLess = require('craco-less');
const CracoCSSModules = require('craco-css-modules');

module.exports = {
  // less 以及 Modules写法
  plugins: [{ plugin: CracoLess }, { plugin: CracoCSSModules }],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      pages: path.resolve(__dirname, 'src/pages'),
      routers: path.resolve(__dirname, 'src/routers'),
      services: path.resolve(__dirname, 'src/services'),
      utils: path.resolve(__dirname, 'src/utils'),
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/assets')
    }
  },
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://cnodejs.org',
        changeOrigin: true
      }
    }
  }
};
