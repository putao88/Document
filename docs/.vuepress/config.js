module.exports = {
	title: '葡萄的文档',
	description: '用于记录日常积累技术知识',
	// 注入到当前页面的 HTML <head> 中的标签
	head: [
	  ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
	],
	base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
	markdown: {
	  lineNumbers: true // 代码块显示行号
	},
	themeConfig: {
	  sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
	  lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
	  nav:[ //导航
		{ text: '博客', link: 'http://www.putao88.live/' }, // 外部链接
		{ text: 'GitHub', link: 'https://github.com/putao88/Document' }, // 内部链接 以docs为根目录
	  ]
	}
  };
