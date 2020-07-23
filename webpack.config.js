const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'production',
  devtool: 'eval-source-map',
  entry:{
    app: './src/index.js',
  },
  output:{
    path:  path.resolve(__dirname, 'dist'),
    // 文件内容变化后文件名随之发生改变，以确保不使用缓存
    filename: '[name].[contenthash].js',
  },
  devServer:{
    contentBase:"./dist", //将 dist 目录下的文件 serve 到 localhost:8080 下。（将资源作为 server 的可访问文件）
    inline: true, //实时刷新
    historyApiFallback: true, //不跳转，单页应用都跳转index.js
    port: '8080'
  },
  optimization:{
    moduleIds: 'hashed', // 保证修改依赖但vendors的hash不会变化
    // 为所有 chunk 创建一个 runtime bundle
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        // 将所有css放在同一个文件中
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module:{
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
              hmr: devMode,
              reloadAll: true,
            },
          },
          'css-loader',
          {
            loader: `postcss-loader`,
            options: {
              options: {},
            }
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins:[
    // 生成html文件
    new HtmlWebpackPlugin({
      title: '缓存'
    }),
    new CleanWebpackPlugin({
      // 每次自动清理dist文件夹
      cleanStaleWebpackAssets: false,
    }),
    new MiniCssExtractPlugin({
      // the css order warnings can be disabled by setting the ignoreOrder flag to true for the plugin.
      ignoreOrder: true,
      filename: devMode ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
    }),
  ]
}