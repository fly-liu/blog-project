---
title: NodeJS基础
date: '2019-02-19'
tag: # 页面的标签 
  - JS
  - Node
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: 刘哈哈 个人博客 笔记 基础 nodejs 
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: 笔记 基础 node
next: ./nodejs知识点
---

# NodeJS基础
## Node.js 简介：
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

### 模块的使用
模块系统部分主要有三大主要内容：核心模块的引入，第三方模块引入，个人私有模块引入  
通过Node.js的官方API可以看到Node.js本身提供了很多核心模块，这些核心模块被编译成二进制文件，可以require('模块名')去获取；核心模块具有最高的加载优先级（有模块与核心模块同名时会体现）  
Node.js还有一类模块为文件模块，可以是JavaScript代码文件（.js作为文件后缀）、也可以是JSON格式文本文件（.json作为文件后缀）、还可以是编辑过的C/C++文件（.node作为文件后缀）；  
文件模块访问方式通过require('/文件名.后缀')    require('./文件名.后缀')    requrie('../文件名.后缀') 去访问，文件后缀可以省略；以"/"开头是以绝对路径去加载，以"./"开头和以"../"开头表示以相对路径加载，而以"./"开头表示同级目录下文件，前面提到文件后缀可以省略，Nodejs尝试加载的优先级 js文件 > json文件 > node文件

#### 引入核心模块
Node已经核心了很多实用模块，使用require实现模块导入。通过模块名作为参数，该命令就能成功的返回对应的模块。大多数情况下，返回的对象是一个object对象，但有时也可能会是字符串、数字或者函数。在绝大多数时候我们在引入模块的时候会用一个同名的变量来接受返回的模块对象。

#### 使用npm和package.json引入第三方模块
npm 是Node的包管理器，一般使用npm install 完成所有依赖的安装，除了安装依赖项外，npm还能完成其他任务。比如生产package.json文件。如果项目使用了第三方模块，那么其中必定存在package.json文件。package.json一般定义项目名称、版本号、作者，以及项目的外部依赖等等。

#### 实现私有模块
开发一个私有模块。每个模块只能暴露一个变量，而且必须通过`module.exports`设置,`module.exports`可以暴露任何变量，通常都会是一个对象，也可以暴露字符串或数组。  
使用时处理需要通过点语法指定相对路径之外，其余部分与前面几乎一模一样。

#### exports和module.exports的区别
module.exports才是真正的接口，exports只不过是它的一个辅助工具。　最终返回给调用的是module.exports而不是exports。  
所有的exports收集到的属性和方法，都赋值给了Module.exports。当然，这有个前提，就是module.exports本身不具备任何属性和方法。  
如果，module.exports已经具备一些属性和方法，那么exports收集来的信息将被忽略。
最好别分别定义module.exports和exports；NodeJs开发者建议导出对象用module.exports,导出多个方法和变量用exports

#### 缓存
模块在第一次加载后会被缓存。模块是基于其解析的文件名进行缓存的。这也意味着（类似其他缓存机制）如果每次调用 require('foo') 都解析到同一文件，则返回相同的对象。  
多次调用 require(foo) 不会导致模块的代码被执行多次。 这是一个重要的特性。 借助它, 可以返回“部分完成”的对象，从而允许加载依赖的依赖, 即使它们会导致循环依赖。  
如果想要多次执行一个模块，可以导出一个函数，然后调用该函数。所以实际应用中模块被引入后需要执行函数。

### 端口
端口的作用：通过端口来区分出同一电脑内不同应用或者进程，从而实现一条物理网线（通过分组交换技术）同时链接多个程序
端口号是一个16位的uint，所以其范围为`1` to `65535` (对TCP来说, port 0 被保留，不能被使用. 对于UDP来说, source端的端口号是可选的， 为0时表示无端口)


## MySQL安装后遇到的问题
#### Navicat for Mysql报错1251连接不成功Mysql
::: warning 注意
Mysql安装后需要新建用户名密码，否则在Navicat连接不成功Mysql，报错1251错误。
:::

#### 解决办法：
1. 打开Command Line Client，输入mysql密码回车
2. 输入ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql的密码';回车    别漏了后面有个分号    mysql的密码是安装mysql时设置的密码
3. 输入FLUSH PRIVILEGES;回车  别漏了后面的分号。也可以通过此方法修改mysql密码

::: warning 注意
mysql 新设置用户或更改密码后需用flush privileges刷新MySQL的系统权限相关表，否则会出现拒绝访问，还有一种方法，就是重新启动mysql服务器，来使新设置生效。­
:::


## 模块
### fs模块
fs模块是唯一一个同时提供同步和异步API的模块。
``` js
// 获取当前目录的文件列表
require('fs').readdir('.',function(err,files) {
	console.log(files);
})
```

### 理解什么是流（stream）
我们知道console.log会输出到控制台。事实上，console.log内部做的事情：它在指定的字符串加上\n(换行)字符，并将其写到stdout流中。

** process对象用于处理与当前进程相关的事情，它是一个全局对象，可以在任何地方直接访问到它而无需引入额外模块。 它是 EventEmitter 的一个实例。 **

** process全局对象中包含三个流对象，分别对应三个UNIX标准流 **
#### process.stdout
一个指向标准输出流(stdout)的 可写的流(Writable Stream):
``` js
process.stdout.write('Hello world');
```
另外可以使用process.stdout.isTTY来判断当前是否处于TTY上下文

#### process.stderr
一个指向标准错误流(stderr)的 可写的流(Writable Stream):
``` js
process.stderr.write('输出一行标准错误流，效果跟stdout没差');
```

#### process.stdin
一个指向 标准输入流(stdin) 的可读流(Readable Stream)。标准输入流默认是暂停 (pause) 的，所以必须要调用 process.stdin.resume() 来恢复 (resume) 接收:
``` js
process.stdin.on('end', function() {
    process.stdout.write('end');
});

function gets(cb){
    process.stdin.setEncoding('utf8');
    //输入进入流模式（flowing-mode，默认关闭，需用resume开启），注意开启后将无法read到数据
    //见 https://github.com/nodejs/node-v0.x-archive/issues/5813
    process.stdin.resume();
    process.stdin.on('data', function(chunk) {
        console.log('start!');
        //去掉下一行可一直监听输入，即保持标准输入流为开启模式
        process.stdin.pause();
        cb(chunk);
    });
    console.log('试着在键盘敲几个字然后按回车吧');
}

gets(function(reuslt){
    console.log("["+reuslt+"]");
    //process.stdin.emit('end'); //触发end事件
});
```

#### process.cwd
返回当前进程的工作目录:
``` js
console.log('当前目录：' + process.cwd()); //当前目录：E:\github\nodeAPI\process
```

#### process.argv
返回当前命令行指令参数 ，但不包括node特殊(node-specific) 的命令行选项（参数）。常规第一个元素会是 'node'， 第二个元素将是 .Js 文件的名称。接下来的元素依次是命令行传入的参数：
``` js
// 打印Node程序运行时的参数值，将数组的前两项去掉
console.log(process.argv.slice(2))
```

#### process.chdir(directory)
改变进程的当前进程的工作目录（该目录必须已存在），若操作失败则抛出异常：
``` js
var path = require('path');

console.log('当前目录：' + process.cwd()); //当前目录：E:\github\nodeAPI\process
try {
    process.chdir(path.resolve('.','tmp'));
    console.log('新目录：' + process.cwd()); //新目录：E:\github\nodeAPI\process\tmp
}
catch (err) {
    console.log('chdir: ' + err);
}
```

#### process.exit([code])
终止当前进程并返回给定的 code。如果省略了 code，退出是会默认返回成功的状态码('success' code) 也就是 0：
``` js
process.exit(1)  // node的shell将捕获到值为1的返回码
```

#### process.exitCode
可以自定义退出进程时node shell捕获到的状态码（必须是正常结束进程或者使用process.exit()指令退出）
``` js
process.exitCode = 4;
process.exit();
```

### ANSI转义码
要在文本终端下控制格式、颜色以及其他输出选项，可以使用ANSI转义码。
