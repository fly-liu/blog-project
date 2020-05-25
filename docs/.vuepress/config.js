module.exports = {
    title: '刘哈哈的个人笔记',
    description: '记录 笔记 博客 git', // 网站描述
    // 被注入页面 HTML <head> 额外的标签
    head: [
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'icon', href: `https://ae01.alicdn.com/kf/Hf2c1a9a9686148debc15f0b0ac1fea85a.jpg` }],
        ['meta', { name: 'google', value: 'notranslate' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `https://ae01.alicdn.com/kf/Hf2c1a9a9686148debc15f0b0ac1fea85a.jpg` }],
        ['link', { rel: 'mask-icon', href: 'https://ae01.alicdn.com/kf/Hf2c1a9a9686148debc15f0b0ac1fea85a.jpg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: 'https://ae01.alicdn.com/kf/Hf2c1a9a9686148debc15f0b0ac1fea85a.jpg' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ],
    host: '0.0.0.0',
    dest: '.vuepress/dist',
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
          title: '刘哈哈的个人笔记',
          description: 'Vue-Press blog 博客 记录 笔记 git',
          serviceWorker: {
            updatePopup: {
                message: "发现新内容可用.",
                buttonText: "刷新"
            }
          },
        }
    },
    themeConfig: {
        repo: "https://github.com/fly-liu/fly-liu.github.io/", // github链接
        logo: 'https://ae01.alicdn.com/kf/Hf2c1a9a9686148debc15f0b0ac1fea85a.jpg', // 博客的 logo
        accentColor: '#ac3e40', // 定制文章标题颜色
        per_page: 5, // 每页显示的文章数量
        tags: true, // 开启标签功能
        // 导航菜单
        nav: [
            {
                text: "前端栈",
                items: [
                    { text: 'JavaScript', link: '/home/javaScript/' },
                    { text: 'Vue', link: '/home/vue/' },
                    { text: 'React', link: '/home/react/' },
                    { text: 'Cesium', link: '/home/cesium/' },
                    { text: 'Electron', link: '/home/electron/' }
                ]
            },
            { text: '后端', link: '/serve/' }, // 指定它为标签目录
            { text: 'Linux', link: '/linux/linux/'},
            { text: 'Android', link: '/android/android/' },
            { text: 'TAGS', link: '/tags/' }, // 指定它为标签目录
            { text: '关于我', link: '/about/' }
        ],
        sidebar: { //侧边栏菜单
            '/serve/': [{
                title: '后端技术',
                collapsable: false, // 设置为永远都是展开状态
                children: [
                    'nodejs基础', 
                    'nodejs知识点',  
                    'express应用',
                ]
            }]
        },
        search: true, // 是否禁用内置搜索框
        searchMaxSuggestions: 10,
        // lastUpdated: 'Last Updated', // 最后更新时间 string | boolean
        // serviceWorker: { // 0.x 版本的pwa
        //     updatePopup: true
        // }
    },
    markdown: {
        // 是否在每个代码块的左侧显示行号
        lineNumbers: false,
    },
    plugins: [
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "新的风暴已经出现",
                buttonText: "盘他"
            }
        }]
    ]
}