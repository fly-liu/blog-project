---
title: 使用VuePress搭建个人博客
sidebar: false
date: '2018-09-18'
tag: # 页面的标签 
  - JS
  - Vue
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: 刘哈哈 笔记 使用VuePress搭建 个人博客 vue-press
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: vuepress
prev: ./git提交
next: false
---
<!-- more 摘抄 -->

### Hello VuePress

## 使用VuePress搭建个人博客：

### 创建项目文件
::: tip
mkdir blog
:::

### 打开项目
::: tip
cd blog
:::

### 全局安装
### 安装方式可以使用yarn安装和npm安装
::: tip
npm install -g vuepress  或  yarn global add vuepress
:::

### 新建一个 docs 文件夹
::: tip
mkdir docs
:::

### 打开文件docs文件夹，创建一个 markdown 文件
::: tip
echo '# Hello VuePress' > README.md
:::

### 开始写作 启动
::: tip
npx vuepress dev docs
:::

### 启动成功后会看到
::: tip
VuePress dev server listening at http://localhost:8080/ 
:::

### 配置 package.json
``` js
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
配置文件与docs目录同级

### 重新启动
::: tip
npm run docs:dev  # 或 yarn docs:dev
:::

### 生成静态资源
::: tip
npm run docs:build  # 或 yarn docs:build
:::

### 默认情况下，构建的文件会位于 .vuepress/dist 中，该文件可以通过 .vuepress/config.js 中的 dest 字段进行配置。构建的文件可以部署到任何静态文件服务器。

### 配置文件
.vuepress 目录。这是放置所有 VuePress 特有(VuePress-specific) 文件的地方。

``` js 
目录结构：
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```

配置 VuePress 站点的基本文件是 .vuepress/config.js

可替代的配置格式：

可以使用 YAML(.vuepress/config.yml) 或 TOML(.vuepress/config.toml) 格式编写配置文件。

## 基本配置
在`.vuerpress`目录下新建一个`config.js`,它导出一个对象，一般的配置可以参考[官方文档](http://caibaojian.com/vuepress/config/)，下面记录一下常用配置。
这里还配置了PWA设置，设置`serviceWorker`属性为`true`,然后在`public`目录下新建`manifest.json`文件，[manifest.json 配置](https://developer.mozilla.org/zh-CN/docs/Web/Manifest)

### 网站配置
``` js
module.exports = {
    title: '刘哈哈的个人博客',
    // 网站描述
    description: '记录 笔记',
    // 被注入页面 HTML <head> 额外的标签
    head: [
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'icon', href: `/imgs/logo.png` }],
    ],
    serviceWorker: true // 开启PWA
}
```

#### manifest.json配置：
``` js
{
  "name": "刘哈哈的个人博客",
  "short_name": "刘哈哈的个人博客",
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#2196f3",
  "description": "刘哈哈的个人博客",
  "theme_color": "blue",
  "icons": [
    {
      "src": "./logo.png",
      "sizes": "144x144",
      "type": "image/png"
    }
  ],
  "related_applications": [
    {
      "platform": "web"
    },
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
    }
  ]
}
```

### 导航配置
``` js
module.exports = {
  themeConfig: {
    repo: "https://github.com/fly-liu/fly-liu.github.io/", // github链接
    logo: '/imgs/logo.png', // 博客的 logo
    accentColor: '#ac3e40', // 定制文章标题颜色
    per_page: 5, // 每页显示的文章数量
    tags: true, // 开启标签功能
    // 导航菜单
    nav: [
      {
        text: "前端栈",
        link: '/home/',
        // 下拉列表配置
        items: [
            { text: 'Vue', link: '/home/vue' },
            { text: 'React', link: '/home/react' },
            { text: 'Cesium', link: '/home/cesium' },
            { text: 'Electron', link: '/home/electron' }
        ]
      },
      { text: '后端', link: '/serve/' },
      { text: 'TAGS', link: '/tags/' },
      { text: '关于我', link: '/about/' },
    ]
  }
}
```

### 侧边栏配置
侧边栏配置可以省略.md扩展名，以`/`结尾的路径被视为`*/README.md`。该链接的文本是自动推断的（从页面的第一个标题或 `YAML front matter` 中的显式标题）。
- 简易版

``` js
module.exports = {
  themeConfig: {
    sidebar: { 
      '/home/': [
        '', /* /home/ */
        'express应用',
        'react'
      ]
    }
  }
}
```

- 完整版
支持侧边栏分组(可以用来做博客文章分类)  collapsable是当前分组是否展开

``` js
module.exports = {
  themeConfig: {
    sidebar: { 
      '/home/': [{
        title: '前端栈',
        collapsable: true,
        children: [
          'express应用',
          'express应用',
          'react'
        ]
      }],
      '/serve/': [{
        title: '后端',
        collapsable: true,
        children: [
          'NodeJS基础',
          'Nginx入门'
        ]
      }],
    }
  }
}
```

### 单页自动补充工具栏(auto sidebar for single pages)
自动生成仅包含当前页面的标题链接的侧边栏，则可以在该页面上使用 `YAML front matter`：
``` YAML
---
sidebar: auto
---
```

### 禁用侧边栏(disabling the sidebar)
使用 `YAML front matter` 禁用特定页面上的侧边栏：
``` YAML
---
sidebar: false
---
```

### 自定义布局
默认情况下，每个 *.md 文件的内容都会显示在一个 `<div class =“page”>` 容器中，以及侧边栏，自动生成的编辑链接和 prev/next 链接。如果你希望使用完全自定义的组件代替页面（同时只保留导航栏）。
我的页面禁用了侧边栏配置，想使用自定义布局，可以使用 `YAML front matter` 再次指定要使用的组件
``` YAML
---
layout: HomeLayout
---
```
这将为给定页面渲染 `.vuepress/components/HomeLayout.vue`

### 上一页/下一页链接(prev / next links)
根据激活页面的侧边栏顺序自动推断上一个和下一个链接。使用 `YAML front matter` 来显式覆盖或禁用它们：
``` YAML
---
prev: ./some-other-page
next: false
---
```

## 自定义主题
### 内容摘抄
如果一个 markdown 文件中有一个 `<!-- more -->` 注释,可以用这个属性来渲染一个带摘抄的文章列表。

### 标签TAG
``` js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'TAGS', link: '/tag/' }
    ]
  }
}
```
在 config.js 上进行如上配置, 即可开启标签功能,
再`markdown`文件头部加上以下内容
``` markdown
title: 文章标题
date: 2018-10-06 10:27:26
type: post # type 为 post 的文章会被列入 post list
tag: # 页面的标签
  - react
  - js
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: 一些描述
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: theme vuepress
```