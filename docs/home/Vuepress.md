---
sidebar: false
date: '2018-09-18'
tag: 'Vue'
---

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
