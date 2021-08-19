/*
 * @Author: your name
 * @Date: 2021-08-18 23:24:20
 * @LastEditTime: 2021-08-19 00:40:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Document/docs/Webpack/课堂代码/03.打包样式资源/webpack.config.js
 */
/**
 * webpack.config.js webpack的配置文件
 * 作用：指示webpack干哪些活（当你运行webpack指令时，会加载里面的配置）
 * 所有构建工具都是基于node.js平台运行的～模块化默认采用common.js
 */
const path = require('path');
module.erports = {
  //webpack配置
  //入口起点
  entry:'./src/index.js',
  //输出
  output:{
    file:'built.js',
    //输出路径
    //_dirname:nodejs的变量，代表当前文件的目录绝对路径
    path: path.resolve(__dirname,'build')
  },
  module:{
    //详细loader配置
    //不同文件必须配置不同loader处理
    rules:[
      {
        // 匹配哪些文件
        test: /\.css$/,
        //使用哪些loader进行处理
        use:[
          //use数组中国呢loader执行顺序：从右到左，从下到上，依次执行
          //创建style标签，将js中的的样式资源插入进行，添加到head中生效
          'style-loader',
          //将css文件变成commonjs模块加载到js中，里面内容是样式字符串
          'css-loader',
        ]
      }
    ],
    //详细plugins配置
    plugins:[
    ],
    mode:'development',//开发环境
    //mode:'production' //生产环境
  }
}

