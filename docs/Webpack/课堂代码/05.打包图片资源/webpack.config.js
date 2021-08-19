/*
 * @Author: your name
 * @Date: 2021-08-19 22:43:48
 * @LastEditTime: 2021-08-19 23:32:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Document/docs/Webpack/课堂代码/05.打包图片资源/webpack.config.js
 */
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'built.js',
    path: resolve(__dirname,'build')
  },
  module:{
    rules:[
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
      },
      {
      //处理图片资源
      //问题：默认处理不了html中的img图片
        test:'/\.(jpg|png|gif)$/',
        loader:'url-loader',
        options:{
          //图片大小小于8kb,就会被base64处理
          //优点：减少请求数量（减轻服务器压力）
          //缺点：图片体积会更大（文件请求速度慢）
          limit:8 * 1024,
          //问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
          //解析时会出问题
          //解决：关闭url-loader 的es6模块化，使用commonjs解析
          esModule:false,
          //[ext] 取文件原来扩展名
          name:'[hash:8].[ext]'
        }
      },
      {
        test: /\.html$/,
        //处理html文件的img图片（负责引入img,从而能被url-loader 进行处理）
        loader:'html-loader',
      }
    ]
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
