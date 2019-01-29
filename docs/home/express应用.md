---
sidebar: true
date: '2019-01-29'
tag: 'Node.js'
---
# express应用
### Node.js 简介：
Node.js 诞生于 2009 年，由 Joyent 的员工 Ryan Dahl 开发而成，之后 Joyent 公司一直扮演着 Node.js 孵化者的角色。由于诸多原因，Ryan 在2012年离开社区。  
Node.js 不是一门语言也不是框架，它只是基于 Google V8 引擎的 JavaScript 运行时环境，同时结合 Libuv 扩展了 JavaScript 功能，使之支持 io、fs 等只有语言才有的特性，使得 JavaScript 能够同时具有 DOM 操作(浏览器)和 I/O、文件读写、操作数据库(服务器端)等能力，是目前最简单的全栈式语言。

### 什么是Node.js？
- Node.js不是Javascript应用，不是语言（JavaScript 是语言），不是像 Rails(Ruby)、 Laravel(PHP) 或 Django(Python) 一样的框架，也不是像 Nginx 一样的 Web 服务器。Node.js 是 JavaScript 运行时环境
- 构建在 Chrome’s V8 这个著名的 JavaScript 引擎之上，Chrome V8 引擎以 C/C++ 为主，相当于使用JavaScript 写法，转成 C/C++ 调用，大大的降低了学习成本
- 事件驱动（event-driven），非阻塞 I/O 模型（non-blocking I/O model），简单点讲就是每个函数都是异步的，最后由 Libuv 这个 C/C++ 编写的事件循环处理库来处理这些 I/O 操作，隐藏了非阻塞 I/O 的具体细节，简化并发编程模型，让你可以轻松的编写高性能的Web应用，所以它是轻量（lightweight）且高效（efficient）的
- 使用 npm 作为包管理器，目前 npm 是开源库里包管理最大的生态，功能强大

### 基本原理
Node.js是基于Chrome V8引擎构建的，由事件循环（Event Loop）分发I/O任务，最终工作线程（Work Thread）将任务丢到线程池（Thread Pool）里去执行，而事件循环只要等待执行结果就可以了。

#### 核心概念：
- Chrome V8是Google发布的开源Javascript解释器，采用C/C++编写，在Google的Chrome浏览器中使用。Chrome V8引擎可以单独运行，也可以用来嵌入到C/C++应用程序中执行。
- Event Loop 事件循环
- Thread Pool 线程池

#### 总结：
- Chrome V8 是 JavaScript 引擎
- Node.js 内置 Chrome V8 引擎，所以它使用的 JavaScript 语法
- JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事
- 单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。
- 如果排队是因为计算量大，CPU 忙不过来，倒也算了，但是很多时候 CPU 是闲着的，因为 I/O 很慢，不得不等着结果出来，再往下执行
- CPU 完全可以不管 I/O 设备，挂起处于等待中的任务，先运行排在后面的任务
- 将等待中的 I/O 任务放到 Event Loop 里
- 由 Event Loop 将 I/O 任务放到线程池里
- 只要有资源，就尽力执行

### Node.js应用场景
#### 使用场景：
1. 跨平台：覆盖面向用户的所有平台，前端（Web+h5），移动端（hybrid），PC客户端
2. Node后端：Web应用，API，RPC服务等
3. 前端：React/Vue/Angular 辅助开发，以及工程化使用Gulp,Webpack构建Web开发工具
4. 工具：npm上各种工具模块，包括各种前端预编译(Sass,Less)、构建工具(Gulp,Webpack)、脚手架，命令行工具等

#### 应用场景氛围：
1. Server端
2. 命令行辅助工具
3. 移动端：cordova，PC端：nw.js和electron模块
4. 组件化，构建，代理
5. 架构，前后端分离，api proxy
6. 性能优化、反爬虫与爬虫


### 包管理器 npm
npm可以自动管理包的依赖，只需要安装你想要的包，不必考虑这个包的依赖包

### 端口
端口的作用：通过端口来区分出同一电脑内不同应用或者进程，从而实现一条物理网线（通过分组交换技术）同时链接多个程序
端口号是一个16位的uint，所以其范围为`1` to `65535` (对TCP来说, port 0 被保留，不能被使用. 对于UDP来说, source端的端口号是可选的， 为0时表示无端口)

