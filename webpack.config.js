const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map' ,
  entry: __dirname + '/src/index.js',
  output:{
    path:  path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer:{
    contentBase:"./dist",
    inline: true, //实时刷新
    historyApiFallback: true, //不跳转，单页应用都跳转index.js
    port: '8080'
  },
}