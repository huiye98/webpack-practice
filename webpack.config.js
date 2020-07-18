const path = require('path');
// 生成html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 每次自动清理dist文件夹
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
    filename: '[name].bundle.js'
  },
  devServer:{
    contentBase:"./dist",
    inline: true, //实时刷新
    historyApiFallback: true, //不跳转，单页应用都跳转index.js
    port: '8080'
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: '管理输出'
    }),
    new CleanWebpackPlugin(),
  ]
}