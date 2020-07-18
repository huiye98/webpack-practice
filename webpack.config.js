const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map' ,
  entry:{
    app: './src/index.js',
    print: './src/print.js'
  },
  output:{
    path:  path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
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