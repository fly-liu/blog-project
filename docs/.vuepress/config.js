module.exports = {
    title: '刘哈哈的个人空间',
    // 网站描述
    description: '记录 笔记',
    // 被注入页面 HTML <head> 额外的标签
    head: [
        ['link', { rel: 'icon', href: `/imgs/logo.png` }],
    ],
    serviceWorker: true,
    themeConfig: {
        // github链接
        repo: "https://github.com/fly-liu/fly-liu.github.io/",
        // 博客的 logo
        logo: '/imgs/logo.png',
        // 定制文章标题颜色
        accentColor: '#ac3e40',
        // 每页显示的文章数量
        per_page: 5,
        // 开启标签功能
        tags: true,
        // 导航菜单
        nav: [{
                text: "Home",
                link: '/home/',
                // items: [
                //     { text: 'vuePress', link: '/home/vuePress' },
                //     { text: 'react', link: '/home/react' },
                //     { text: 'buildReactFormZero', link: '/home/buildReactFormZero' },
                // ]
            },
            { text: 'TAGS', link: '/tags/' }, // 指定它为标签目录
            { text: '关于我', link: '/about/' },
        ],
        sidebar: { //侧边栏菜单
            '/home/': [
                '', /* /home/ */
                'vuePress', /* /home/vuePress.html */
                'react', 
                'buildReactFormZero', 
                'androidBasics', 
				'express应用'
            ],
            '/tags/': [
                '',
                'activity的理解',
				'androidKnowledge',
				'常用控件',
				'视图的布局',
            ],
            '/about/': [
                '',
            ],

        },
        // 禁用内置搜索框
        search: false,
        searchMaxSuggestions: 10
    },
    markdown: {
        // 是否在每个代码块的左侧显示行号
        lineNumbers: false,
    }
}