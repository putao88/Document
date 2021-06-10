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
	themeConfig: {
	  sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
		collapsable: true, 
	  lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
	  nav:[ //导航
			{ text: '博客', link: 'http://www.putao88.live/' }, // 外部链接
			{ text: 'GitHub', link: 'https://github.com/putao88/Document' }, // 内部链接 以docs为根目录
	  ],
	  sidebar:[
			{
				title: '前端面试准备', 
				children: [
						['/前端面试准备/概览', '概览'],
						['/前端面试准备/CSS', 'CSS'],
						['/前端面试准备/JavaScript', 'JavaScript'],
						['/前端面试准备/框架', '框架'],
						['/前端面试准备/浏览器', '浏览器'],
						['/前端面试准备/算法', '算法'],
						['/前端面试准备/面试记录', '面试记录'],
						['/前端面试准备/资源', '资源'],
				]
			},
			{
				title: '常用知识点总结', 
				children: [
						['/常用知识点总结/1.常用的正则校验', '1.常用的正则校验'],
						['/常用知识点总结/2.工作中常见问题', '2.工作中常见问题'],
						['/常用知识点总结/3.常用数组方法', '3.常用数组方法'],
				]
			},
			{
				title: 'Vue', 
				children: [
						['/Vue/', '基础知识'],
				]
			},
			{
				title: 'JavaScript', 
				children: [
						['/JavaScript/查漏补缺，（严格模式)', '查漏补缺，（严格模式)'],
						['/JavaScript/定义变量和函数', '定义变量和函数'],
						['/JavaScript/正则表达式', '正则表达式'],
						['/JavaScript/JavaScript 代码规范', 'JavaScript 代码规范'],
						['/JavaScript/JS函数—函数参数', 'JS函数—函数参数'],
						['/JavaScript/JS函数—函数调用和闭包', 'JS函数—函数调用和闭包'],
						['/JavaScript/JS函数—函数定义', 'JS函数—函数定义'],
				]
			},
			{
				title: 'NodeJS', 
				children: [
						['/NodeJS/Express', 'Express'],
				]
			},
			{
				title: 'ReactNative', 
				children: [
						['/ReactNative/1.安装及配置', '1.安装及配置'],
				]
			},
			{
				title: 'TypeScript', 
				children: [
						['/TypeScript/介绍和JavaScript对比', '介绍和JavaScript对比'],
				]
			},
			{
				title: 'WeChat',
				children: [
						['/WeChat/微信小程序', '微信小程序'],  
						['/WeChat/mpvue', 'mpvue'],  
				]
			},
				{
					title: '博客搭建', 
					children: [
							['/博客搭建/1.搭建步骤', '1.搭建步骤'],
							['/博客搭建/2.疑难问题', '2.疑难问题'],
					]
				},

				{
					title: 'flutter',
					children: [
							['/flutter/AndroidStudio的安装及环境配置', 'AndroidStudio的安装及环境配置'],  
					]
				},
				{
					title: 'Git', 
					children: [
							['/Git/基础用法', '基础用法'],
					]
				},
				{
					title: '资源分享',
					children: [
							['/资源分享/在线工具', '在线工具'],
					]
				},
		]
	}
};
