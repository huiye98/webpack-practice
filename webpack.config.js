const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    // 兼容不同的环境，例如 CommonJS，AMD，Node.js 或者作为一个全局变量
    // 将你的 library bundle 暴露为名为 webpackNumbers 的全局变量, consumer 通过此名称来 import
    library: 'webpackNumbers',
    // 有以下几种方式暴露 library：(不指定则默认为var)
        // 变量：作为一个全局变量，通过 script 标签来访问（libraryTarget:'var'）。
        // this：通过 this 对象访问（libraryTarget:'this'）。
        // window：在浏览器中通过 window 对象访问（libraryTarget:'window'）。
        // UMD：在 AMD 或 CommonJS require 之后可访问（libraryTarget:'umd'）。
    libraryTarget: 'umd',
  },
  externals:{
    // library 需要一个名为 lodash 的依赖，这个依赖在 consumer 环境中必须存在且可用。
    lodash:{
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    }
  },
  optimization:{
    moduleIds: 'hashed', // 保证修改依赖但vendors的hash不会变化
    // 为所有 chunk 创建一个 runtime bundle
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins:[
    new CleanWebpackPlugin({
      // 每次自动清理dist文件夹
      cleanStaleWebpackAssets: false,
    })
  ]
}