module.exports = {
	title: '葡萄的文档',
	description: '用于记录日常积累技术知识',
	// 注入到当前页面的 HTML <head> 中的标签
	head: [
	  ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
	],
	base: '/document/', // 这是部署到github相关的配置 下面会讲
	markdown: {
	  lineNumbers: true // 代码块显示行号
	},
	themeConfig: {
	  sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
	  lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
	  nav:[ //导航
			{ text: '博客', link: 'http://www.putao88.live/' }, // 外部链接
			{ text: 'GitHub', link: 'https://github.com/putao88/Document' }, // 内部链接 以docs为根目录
	  ],
	  sidebar:{ 
			'/flutter/': [
				{
					title: 'flutter',   // 一级菜单名称
					collapsable: false, // false为默认展开菜单, 默认值true是折叠,
					sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
					children: [
							['AndroidStudio的安装及环境配置', 'AndroidStudio的安装及环境配置'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
					]
				},
			],
		}
	}
};
