---
title: express应用
date: '2019-01-29'
tag: # 页面的标签 
  - Javascript
  - Node
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: 刘哈哈 个人博客 nodejs express应用 笔记
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: 笔记 基础 node express
prev: ./nodejs知识点
---

# express应用
## 记录一次Express应用的开发
这个时代每天都在变化，随着大前端时代的来临，前端框架三足鼎立，还有各种类库，预编译语言，打包工具的应用等等，越来越多的应用基于Node.js环境构建，一直以来都是使用Node.js进行前端工程化开发，但是这肯定满足不了程序员的追求，是时候来开发后台部分的应用了。
我选择使用express框架来构建项目，开始。

## Express
官方对它的介绍是“基于nodejs平台，快速、开放、极简的web开发框架”.

### 安裝
#### 安装express
``` cmd
npm install express --save
```
#### 使用express生成器工具
- Express 应用程序生成器
``` cmd
npm install express-generator -g
```

- 利用脚手架工具快速生成 Express 应用
``` cmd
express appName
```

- 安装依赖
``` cmd
cd expressProject  
npm install
```

- 运行
``` cmd
npm start 或 node ./bin/www
```

- 查看
在浏览器输入`http://localhost:3000`,页面显示：
Express  
Welcome to Express

在终端中，会打印HTTP请求日志（该打印日志与模块morgan有关）
> 其中200表明请求被正常处理，304表明服务器允许请求访问资源；  
> 如果想要更改访问的端口号，找到目录 bin/www 修改 port 变量的端口号
>

#### 目录结构
```
expressProject/
├── app.js               # 入口文件
├── bin                  # 命令文件
│   └── www
├── package.json         # 工程依赖配置文件
├── public               # 静态资源目录
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes               # 路由文件
│   ├── index.js
│   └── users.js
└── views                # 视图模板文件
    ├── error.jade
    ├── index.jade
    └── layout.jade
```

- package.json  
通过package.json来管理整个项目的依赖以及一些信息的初始化

- 中间件  
在express中，通常在收到请求后和发送响应之前这个阶段执行的一些函数，这个叫做中间件。中间件将处理过程进行划分，并且使用多个函数构成一个完整的处理流程。在app.js中我们可以使用`app.use`来使用某个中间件。其原型如下：
``` js
app.use([path,] function [,function...])
```

- 路由  
在express中，提供一个Router对象来针对GET、POST等处理路由，通常把它传给`app.use`

- 模板渲染  
上面介绍了使用路由来对路径的解析和拦截，但是如何在拦截到请求路径的时候，将界面渲染出来呢，这个时候就需要使用模版引擎了。express初始化的时候给我们设置了使用 jade 的模版引擎进行渲染，如index.jade。

### API
#### app对象方法
- 路由HTTP请求；例如，app.METHOD和app.param
- 配置中间件；app.router
- 渲染HTML视图；app.render
- 注册模板引擎；app.engine

