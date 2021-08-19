/*
 * @Author: your name
 * @Date: 2021-08-19 22:21:05
 * @LastEditTime: 2021-08-19 22:39:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Document/docs/Webpack/课堂代码/04.打包html资源/webpack.config.js
 */
/**
 * loader :1.下载 2.使用（配置loader）
 */
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:'./src/index.js',
  output: {
    filename:'built.js',
    path: resolve(__dirname,'build')
  },
  module:{
    rules:[]
  },
  plugins:[
    //html-webpack-plugin
    // 功能：默认创建一个空的html，自动引入打包输出的所有资源（js/css）
    //需求：需要有结构的html 文件
    //
    new HtmlWebpackPlugin({
      //复制‘./src/index.html’文件，并自动引入打包输出的所有资源（js/csss）
      template:'./src/index.html'
    })
  ],
  mode:'development'
}