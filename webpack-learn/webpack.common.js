const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //3.0+版本引用方式修改，参数传递修改
// const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    // another: './src/another-module.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  //插件
  plugins: [
    new CleanWebpackPlugin(),
    // 生成html页面
    new HtmlWebpackPlugin({
      title: 'Output Management',
    })
  ],
  output: {
    filename: '[name].bundle.js', // name即入口key
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    chunkFilename: '[name].bundle.js'// 决定非入口 chunk 的名称
  },
  //optimization与entry/plugins同级
  // optimization: {
  //   runtimeChunk: {
  //     name: 'manifest',
  //   },
  //   splitChunks: {
  //     maxInitialRequests: 10,
  //     cacheGroups: {
  //       common: {
  //         name: 'common',
  //         //chunks: 'all'
  //       },
  //     },
  //   },
  // },
};
