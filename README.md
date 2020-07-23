# Blog Project
静态博客网站，使用Vuepress构建工具生成，主要内容为学习笔记，在使用一些工具、框架或者感兴趣的东西都会记录下来。

# 安装依赖
::: tip
cnpm install
:::

# 启动
::: tip
npm run docs:dev
:::

# 生成静态资源
::: tip
npm run docs:build
:::

# 项目地址
`https://github.com/fly-liu/blog-project.git`

# 项目部署

## 生成静态文件
`npm run docs:build`

## 进入生成的文件夹
`cd .vuepress/dist`

## 上传到git
`git init`  

`git add -A`  

`git commit -m "提交"`  

## 发布到 git@github.com:fly-liu/fly-liu.github.io.git
git push -f git@github.com:fly-liu/fly-liu.github.io.git master

=============================================================================

# 版本更新
## 2.1.1 20200707
* 更新知识点笔记

## 2.1.0 20190803
* 更新vuepress到 1.x 版本
* 更新UI 主页、列表页、Tag页、关于我
* 更新 Node Js 笔记
* 增加 Linux 模块笔记
* 增加 Cesium 笔记

## 1.1.1 20180919
* 增加主页UI
* 确定各页面模块
* 优化Tag页