const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry:{
    app: './src/index.js',
    print: './src/print.js'
    // 分离方法1：使用入口依赖配置？？？报错
    // app: {import: './src/index.js', dependOn: 'shared'},
    // print: {import: './src/print.js', dependOn: 'shared'},
    // shared: 'lodash'
  },
  output:{
    path:  path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  //  分离方法2：使用optimization.splitChunks 配置选项
  optimization:{
    splitChunks:{
      chunks: 'all',
    }
  },
  devServer:{
    contentBase:"./dist", //将 dist 目录下的文件 serve 到 localhost:8080 下。（将资源作为 server 的可访问文件）
    inline: true, //实时刷新
    historyApiFallback: true, //不跳转，单页应用都跳转index.js
    port: '8080'
  },
  plugins:[
    // 生成html文件
    new HtmlWebpackPlugin({
      title: '管理输出'
    }),
    new CleanWebpackPlugin({
      // 每次自动清理dist文件夹
      cleanStaleWebpackAssets: false,
    }),
  ]
}