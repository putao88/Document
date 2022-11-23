module.exports = {
	title: '葡萄的文档',
	description: '用于记录日常积累技术知识',
	// 注入到当前页面的 HTML <head> 中的标签
	head: [
	  ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
	],
	base: '', // 这是部署到github相关的配置 下面会讲
	markdown: {
	  lineNumbers: true // 代码块显示行号
	},
	plugins:[['vuepress-plugin-code-copy',true]],
	themeConfig: {
	  sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
		collapsable: true, 
	  lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
	  nav:[ //导航
			{ text: 'Study', link: '/Study/前端学习路线/概览' },
			{ text: 'Chrome', link: '/Chrome/Devtools/概览' },
			{ text: '面试', link: '/面试/前端面试准备/概览' },
			{ text: '博客', link: 'https://putao88.github.io' }, // 外部链接
			{ text: 'GitHub', link: 'https://github.com/putao88/Document' }, // 内部链接 以docs为根目录
	  ],
	  sidebar:{
		  '/Study/':[
			{
				title: '前端学习路线', 
				children: [
						['/Study/前端学习路线/概览', '概览'],
				]
			},
			{
				title: '资源分享',
				children: [
						['/Study/资源分享/资源导航', '资源导航'],
						['/Study/资源分享/Github优秀项目', 'Github优秀项目'],
				]
			},
			{
				title: '常用知识点总结', 
				children: [
						['/Study/常用知识点总结/常用的正则校验', '常用的正则校验'],
						['/Study/常用知识点总结/工作中常见问题', '工作中常见问题'],
						['/Study/常用知识点总结/常用JavaScript方法封装', '常用JavaScript方法封装'],
						['/Study/常用知识点总结/axios的封装', 'axios的封装'],
						['/Study/常用知识点总结/软件配置相关', '软件配置相关'],
						['/Study/常用知识点总结/移动端真机调试', '移动端真机调试'],
						['/Study/常用知识点总结/SSH文件传输', 'SSH文件传输'],
				]
			},
			{
				title: 'CSS', 
				children: [
					['/Study/CSS/CSS盒模型', 'CSS盒模型'],
					['/Study/CSS/CSS选择器', 'CSS选择器'],
					['/Study/CSS/BFC','BFC'],
					['/Study/CSS/flex布局','flex布局'],
					['/Study/CSS/grid布局','grid布局'],
					['/Study/CSS/CSS优先级','CSS优先级'],
					['/Study/CSS/层叠上下文','层叠上下文'],
				]
			},
			{
				title: 'JavaScript', 
				children: [
					['/Study/JavaScript/基础知识', '基础知识'],
					['/Study/JavaScript/JavaScript之面向对象', 'JavaScript之面向对象'],
					['/Study/JavaScript/JavaScript之执行环境', 'JavaScript之执行环境'],
					['/Study/JavaScript/JavaScript之函数', 'JavaScript之函数'],
					['/Study/JavaScript/JavaScript之垃圾回收机制', 'JavaScript之垃圾回收机制'],
					['/Study/JavaScript/JavaScript之事件循环机制', 'JavaScript之事件循环机制'],
					['/Study/JavaScript/JavaScript之事件模型', 'JavaScript之事件模型'],
				]
			},
			{
				title: 'ES6', 
				children: [
					['/Study/ES6/面向对象编程', '面向对象编程'],
					['/Study/ES6/Class', 'Class'],
					['/Study/ES6/Promise对象', 'Promise对象'],
					['/Study/ES6/Generator函数','Generator函数'],
					['/Study/ES6/async函数','async函数'],
				]
			},
			{
				title: 'Vue', 
				children: [
						['/Study/Vue/基础知识', '基础知识'],
				]
			},
			{
				title: 'React', 
				children: [
						['/Study/React/Hook', 'Hook'],
						['/Study/React/Redux', 'Redux'],
						['/Study/React/React+Ts项目搭建', 'React+Ts项目搭建'],
				]
			},
			{
				title: 'Electron', 
				children: [
						['/Study/Electron/基础知识', '基础知识'],
				]
			},
			{
				title: '工程化', 
				children: [
						['/Study/工程化/模块化机制', '模块化机制'],
						['/Study/工程化/webpack', 'webpack'],
						['/Study/工程化/uglify原理', 'uglify原理'],
						['/Study/工程化/Babel', 'Babel'],
				]
			},
			{
				title: '浏览器', 
				children: [
						['/Study/浏览器/基础知识', '基础知识'],
						['/Study/浏览器/缓存策略', '缓存策略'],
						['/Study/浏览器/同源策略', '同源策略'],
						['/Study/浏览器/前端路由模式', '前端路由模式'],
				]
			},
			{
				title: '性能', 
				children: [
						['/Study/性能/前端性能优化', '前端性能优化'],
				]
			},
			{
				title: 'NodeJS', 
				children: [
					['/Study/NodeJS/基础知识', '基础知识'],
					['/Study/NodeJS/Express', 'Express'],
				]
			},
			{
				title: 'ReactNative', 
				children: [
						['/Study/ReactNative/1.安装及配置', '1.安装及配置'],
				]
			},
			{
				title: 'TypeScript', 
				children: [
						['/Study/TypeScript/介绍和JavaScript对比', '介绍和JavaScript对比'],
				]
			},
			{
				title: 'Web3',
				children: [
						['/Study/Web3/基础知识', '基础知识'],  
						['/Study/Web3/web3开发', 'web3开发'],  
				]
			},
			{
				title: 'WeChat',
				children: [
						['/Study/WeChat/微信小程序', '微信小程序'],  
						['/Study/WeChat/mpvue', 'mpvue'],  
				]
			},
			{
				title: '算法', 
				children: [
						['/Study/算法/概览', '概览'],
				]
			},
			{
				title: '博客搭建', 
				children: [
						['/Study/博客搭建/1.搭建步骤', '1.搭建步骤'],
						['/Study/博客搭建/2.疑难问题', '2.疑难问题'],
				]
			},

			{
				title: 'flutter',
				children: [
						['/Study/flutter/AndroidStudio的安装及环境配置', 'AndroidStudio的安装及环境配置'],  
				]
			},
			{
				title: 'Git', 
				children: [
						['/Study/Git/基础用法', '基础用法'],
				]
			},
			{
				title: '微前端', 
				children: [
						['/Study/微前端/基础知识', '基础知识'],
						['/Study/微前端/micro-app', 'micro-app'],
						['/Study/微前端/qiankun', 'qiankun'],
						['/Study/微前端/技术分享', '技术分享'],
				]
			},
		],
		'/Chrome/':[
			{
				title:'Chrome调试',
				sidebarDepth: 2,
				children: [
					['/Chrome/Devtools/概览','概览'],
					['/Chrome/Devtools/CSS','CSS'],
					['/Chrome/Devtools/技术分享','技术分享'],
				],
			}
		],
		'/面试/':[
			{
				title: '前端面试准备', 
				children: [
						['/面试/前端面试准备/概览', '概览'],
						['/面试/前端面试准备/CSS', 'CSS'],
						['/面试/前端面试准备/JavaScript', 'JavaScript'],
						['/面试/前端面试准备/ES6', 'ES6'],
						['/面试/前端面试准备/Vue', 'Vue'],
						['/面试/前端面试准备/React', 'React'],
						['/面试/前端面试准备/浏览器', '浏览器'],
						['/面试/前端面试准备/前端工程化', '前端工程化'],
						['/面试/前端面试准备/前端性能优化', '前端性能优化'],
						['/面试/前端面试准备/前端安全', '前端安全'],
						['/面试/前端面试准备/算法', '算法'],
						['/面试/前端面试准备/面试记录', '面试记录'],
						['/面试/前端面试准备/常考面试题目总结', '常考面试题目总结'],
						['/面试/前端面试准备/网上相关公司面试题目总结', '网上相关公司面试题目总结'],
						['/面试/前端面试准备/预期面试', '预期面试'],
						['/面试/前端面试准备/面试题目准备', '面试题目准备'],
						['/面试/前端面试准备/资源', '资源'],
				]
			},
		]
	  }
	}
};
