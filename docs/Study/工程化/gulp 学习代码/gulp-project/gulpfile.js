// 书写我本个项目的打包配置流程
// 按照gulp的语法来进行配置
// gulp指令运行的时候才会认识

//  因为gulp是依赖于node环境运行的
// 将来的运行也是以node 为基础运行的
// 书写gulpfile.js文件就按照node的模块化语法进行书写(commonJS)
const gulp = require('gulp')

console.log(gulp)