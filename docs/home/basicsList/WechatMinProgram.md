---
title: 小程序前世今生
sidebar: auto
date: '2020-12-07'
tag: # 页面的标签 
  - WeChatMinProgram
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: 小程序前世今生 笔记 
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: 小程序前世今生 Javascript WeChatMinProgram 基础笔记
# prev: ./TypeScript笔记
next: ./TypeScript笔记
---
# 小程序的前世今生
什么是小程序？小程序是一个不需要下载安装就可使用的应用，它实现了应用触手可及的梦想，用户扫一扫或者搜一下即可打开应用。也体现了用完即走的理念，用户不用关心是否安装太多应用的问题。应用将无处不在，随时可用，但又无需安装卸载。

使用小程序构建应用是现如今的一大趋势，它的优势也很明显，帮助很多企业实现一个构建跨多端平台的思路和移动端门户。本篇内容主要是介绍小程序基础相关知识，部分内容参考微信小程序文档和其他博客。主要描述从微信小程序技术发展过程、小程序构成、技术实现，延申到其他平台构建类似小程序的技术。

## 微信小程序技术发展史
微信小程序是所有小程序中目前用户最多，发展最早的。微信小程序的出现是为了解决服务号 HTML5 功能不足、体验和性能不好的问题。从技术的发展角度来看，微信小程序是从微信中的 webView 和 JS-SDK 进化到了今天的形态。

2016年初，张小龙在微信公开课上宣布微信将推出“应用号”。

2017年1月9日，“应用号”以“小程序”的新名称正式推出。

到如今，各大平台纷纷加入小程序队伍，比如：微信、企业微信、QQ、支付宝、高德地图、手机淘宝、百度、百度贴吧、百度地图、今日头条、抖音......

下面通过一些介绍和对比，让我们了解一下微信小程序。

小程序为什么发展这么快，下面总结了一些特点

## 小程序的一些特点
1. **自带推广**  
上线小程序后可免费开通附近的小程序，可覆盖5公里内的微信用户，解决当下商家广告无处可打的尴尬境地。

2. **触手可及，用完即走**  
小程序无需下载安装即可使用，并且小程序能将图标生成在手机桌面。

3. **搜索小程序**  
发布的小程序都可以在微信搜索页中搜索到。

4. **扫码使用**  
每个小程序都拥有自己的小程序码，在推广中打开的概率很高。

5. **公众号关联**  
可以在公众号中关联小程序，搜索、扫码、公众号，这些给小程序提供了众多的入口。

6. **更流畅的用户体验**  
小程序的使用流畅度可媲美 APP，优于 HTML5，拥有比 HTML5 更多功能和权限。

7. **低成本、低门槛，操作简单**  
微信小程序的开发成本低，准入门槛低、申请简单，后台操作简易。

## JS-SDK
在移动互联网发展初期，很多浏览器厂商通过给 WebView 扩展原生能力，补充 JS API，让 HTML5 实现更多功能，这类业务的发展的顶峰是 JS SDK。

作为国内事实上最大的手机浏览器，微信为它的浏览器内核扩充了大量 JS API，开放了扫码、支付、分享、卡券等几十个API。让用户在微信网页中可以完成 HTML5 之前不能或者很难做到的事情。

JS-SDK 解决了移动端网页的一些功能上的问题，并没有解决移动端性能、体验的问题，在浏览器中渲染页面之前会有一个白屏的过程，在移动端，受限于设备性能和网络速度，白屏会更加明显。

小程序在功能和体验上超过了 HTML5，同时也简化了开发。

## 小程序和 HTML5（以下简称H5） 网页的区别
- 运行环境：小程序基于浏览器内核重构内置解析器，H5 依赖于宿主环境--浏览器。

- 系统权限：小程序能获得更多的系统权限，比如网络通信、设备控制（蓝牙、WIFI等）、数据缓存能力、 原生组件交互等。

- 渲染机制：小程序的逻辑层和渲染层是分开的，分别运行在不同的线程中；H5 页面渲染线程和 Javascript 脚本执行线程是互斥的，在单线程中，这也是为什么长时间的脚本运行可能会导致页面失去响应。

- 因为小程序的逻辑层和渲染层是分开的，逻辑层运行在 JSCore 中，并没有一个完整的浏览器对象，因此没有 DOM 、BOM API。前端常用的 JQuery、Zepto 等一些库不能在小程序使用，同时 JSCore 环境和 NodeJS 环境也有一些差别，所以一些 NPM 包也不能使用。

- 面对的环境：网页要面对各式各样的浏览器环境，PC 端要面对 IE、Chrome、火狐、Safari 等浏览器，移动端面对 Safari、Chrome 和 Android、IOS系统中的 WebView；小程序在开发中面对是 Android、IOS 的微信客户端、小程序开发者工具。

根据微信小程序文档，小程序的三大运行环境也有所区别：
| 运行环境        | 逻辑层          | 渲染层    |
|:--------------- |:-------------- |:--------- |
| IOS             | JavaScriptCore | WKWebView |
| 安卓            | V8       | X5浏览器         |
| 小程序开发者工具 | NWJS     | Chrome WebView  |

所以微信小程序介于 web 端和原生 App 之间，能够丰富调用功能接口，同时又跨平台。

## 小程序的构成
通过中开发者工具中快速构成一个项目，可以发现一个应用由以下几部分组成：
- 入口文件：app.js
- 全局样式：app.wxss
- 全局配置：app.json 主要配置所有页面路径、界面表现、网络超时时间、底部 tab 等；

页面是在 pages 目录下，页面按文件夹划分，每个页面一般包含4个文件：
- .wxml 类型网页中的 HTML，构建页面结构。支持数据绑定，逻辑算术、运算，模板、引用，支持添加事件（bindtap）
- .wxss 具有大部分 CSS 特性，新增了尺寸单位 rpx，解决移动端网页开发中适配的问题，提供了全局的样式和局部样式。
- .json 非必须，页面目录中的 .json 主要配置顶部样式、标题、是否刷新等。
- .js 非必须，脚本逻辑文件

wxml 通过编译最终渲染成 html。在小程序内编写 html 标签，最终也可以运行。转换过程中，wxml 文件需要向逻辑层获取数据才能渲染页面，这中间会生成虚拟 DOM 对象。

wxss 通过工具转换为 js，因为有 rpx 单位，需要根据手机尺寸进行设置 px，之后创建 style 标签，动态添加到视图层中。

###### *[小程序框架原理之渲染流程及通信流程](https://mp.weixin.qq.com/s/0kua7abnbNPgDrcJfTv9dA)*

小程序采用 MVVM 开发模型，比如 Vue、React 也是采用这种模式，双向数据绑定，渲染和逻辑层分离，不直接用 JS 操作DOM，JS 只负责管理状态，通过模板 `{{}}` 语法去描述状态和界面结构关系。

## 小程序架构
小程序运行环境包含渲染层和逻辑层，WXML 模板、WXSS 样式工作在 View 渲染层，逻辑处理、数据请求、接口调用在 App Service 逻辑层。

小程序的渲染层和逻辑层由两个线程管理：
- 页面使用 WebView 渲染，一个小程序存在多个界面，所以渲染层存在多个 WebView 线程
- 逻辑层采用 JsCore（webkit 的一个重要组成部分，主要是对 JS 进行解析和提供执行环境） 线程运行 JS 脚本

这两个线程的通信通过系统层的 WeixinJSBridge 进行通信，逻辑层把数据变化通知到视图层，触发视图层页面更新，视图层把触发的事件通知到逻辑层进行业务处理；逻辑层发送网络请求也经由Native转发。

::: tip MVVM
页面渲染的具体流程是：在渲染层，宿主环境会把 WXML 转化成对应的 JS 对象，在逻辑层发生数据变更的时候，我们需要通过宿主环境提供的 setData 方法把数据从逻辑层传递到渲染层，再经过对比前后差异，把差异应用在原来的Dom树上，渲染出正确的 UI 界面。是通过 Json 的方式进行数据的传递，提高性能的方式就是减少交互的数据量。
:::

通信模型如图：

![通信模型图片](https://res.wx.qq.com/wxdoc/dist/assets/img/4-1.ad156d1c.png)

###### *图片来自微信[小程序文档](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/framework.html#%E6%B8%B2%E6%9F%93%E5%B1%82%E5%92%8C%E9%80%BB%E8%BE%91%E5%B1%82)*

双线程模型是小程序框架与大多数前端 Web 框架不同之处。基于这个模型，可以更好地管控以及提供更安全的环境。缺点是无处不在的异步问题，小程序是双线程模型，这意味着任何数据的传递都是在线程间的通信，会有一定的延时，因此逻辑层与渲染层需要有一定的机制保证时序正确。

<!-- ## 小程序技术实现
小程序的 UI 视图和逻辑处理是用多个 WebView 实现的，逻辑处理的 JS 代码全部加载到一个 WebView 里面，称之为 AppService，整个小程序只有一个，并且整个生命周期常驻内存，而所有的视图（wxml和wxss）都是单独的 Webview 来承载，称之为 AppView。所以一个小程序打开至少就会有2个 WebView 进程，正式因为每个视图都是一个独立的 WebView 进程，考虑到性能消耗，小程序不允许打开超过5个层级的页面，当然也是为了体验更好。 -->

<!-- ###### 参考：*[小程序实现原理解析](https://cloud.tencent.com/developer/article/1029663)* -->

## 小程序打包
小程序开发完成，点击“上传”发布，审核通过之后就可以搜索到了，打包是如何实现呢？

打包是在编辑器中实现的，微信开发者工具是基于 WEB 技术体系实现的，nwjs + react，nwjs 简单的说就是 NodeJs + Webkit，Node 提供本地 API 能力，Webkit 提供 Web 能力。

有了 NodeJs 之后，打包就好实现了，主要做了几个方面的事情：
- ES6 转 ES5，引入 babel-core 的 node 包
- CSS 补全，引入 postcss 和 autoprefixer 的 node 包
- 代码压缩，引入 uglifyjs 的 node 包

### 小程序打包后结构包含：
- WAService.js，小程序逻辑层基础库；
- WAWebview.js，小程序视图层基础库；
- WAConsole.js，小程序 JS 库，控制台；
- app-config.js，小程序完整的配置，包含我们通过app.json里的所有配置，综合了默认配置型；
- app-service.js，自定义的JS代码，全部打包到这个文件
- page-frame.html，小程序视图的模板文件，所有的页面都使用此加载渲染，且所有的WXML都拆解为JS实现打包到这里；
- pages，所有的页面，主要处理 WXSS 转换，使用 JS 插入到 head 区域

基础库提供组件和 API，处理数据绑定、组件系统、事件系统、通信系统等一系列框架逻辑，可以被注入到渲染层和逻辑层运行。在渲染层可以用各类组件组建界面的元素，在逻辑层可以用各类 API 来处理各种逻辑。

WAWebview 主要由以下几个部分组件：
- Foundation，基础模块
- WeixinJSBridge，消息通信模块
- exparser，组件系统模块
- `__virtualDOM__`，Virtual DOM 模块
- `——webViewSDK——`，WebView SDK 模块
- Reporter，日志上报模块(异常和性能统计数据)

WAService 基本组成：
- Foundation: 基础模块
- WeixinJSBridge: 消息通信模块
- WeixinNativeBuffer: 原生 Buffer
- WeixinWorker: Worker 线程
- JSContext: JS Engine Context
- Protect: JS 保护的对象
- subContextEngine: 提供 App、Page、Component、Behavior、getApp、getCurrentPages 等方法

WeixinJSBridge 模块
WeixinJSBridge 提供了视图层 JS 与 Native、视图层与逻辑层之间消息通信的机制。

## 数据通信
小程序是运行在基础库之上的，其中  WAService.js 和 WAWebview.js，它们分别是视图层和逻辑层的核心实现。它们之间通过 JSBridge 模块通信。JS Bridge 提供调用原生功能的接口（摄像头，定位等），它的核心是构建原生和非原生间消息通信的通道，而且这个通信的通道是双向的。通过 JS Bridge 的发布订阅方法，视图层和逻辑层进行数据通信。

## 缓存机制
小程序宿主环境会管理不同小程序的数据缓存，不同小程序的本地缓存空间是分开的，每个小程序的缓存空间上限为10MB，如果当前缓存已经达到 10MB，再通过 wx.setStorage 写入缓存会触发 fail 回调。宿主环境还对不同用户的缓存进行了隔离，避免用户间的数据隐私泄露。

### 组件系统
小程序有自己的组件的，这些基本组件就是基于 Exparser 框架，也支持自定义组件，用法和组件间通信类似于 Vue。

在内置组件中，有些原生组件，不完全是 Exparser 框架下渲染，由客户端原生参与组件的渲染。比如说 Map 组件。它渲染的层级比在 WebView 层渲染的普通组件要高。

引入原生组件的优点是：
- 扩展 Web 的能力
- 体验更好，减轻 WebView 的渲染工作
- 绕过 setData、数据通信和重渲染流程，性能更好

## 运行机制
微信客户端在打开小程序之前，会从 CDN 把整个小程序代码下载到本地，然后通过 app.json 的 pages 字段就可以知道你当前小程序的所有页面路径。

### 启动分为两种：
- 热启动，假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动；
- 用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。

### 销毁
只有当小程序进入后台一定时间，或者系统资源占用过高，才会被真正的销毁。

### 更新
开发者在后台发布新版本之后，无法立刻影响到所有现网用户，但最差情况下，也在发布之后 24 小时之内下发新版本信息到用户。

小程序每次冷启动时，都会检查是否有更新版本，如果发现有新版本，将会异步下载新版本的代码包，并同时用客户端本地的包进行启动，即新版本的小程序需要等下一次冷启动才会应用上；也可以使用 `wx.getUpdateManager` 检查更新功能。

###### *以上内容，部分参考[微信小程序的底层架构原理—技术干货！](https://www.cgtblog.com/wx/3579.html) 和 [小程序文档](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%8A%80%E6%9C%AF%E5%8F%91%E5%B1%95%E5%8F%B2)*


## 小程序生态
微信利用自身的高频/高黏性的优势，制造小生态：定制标准，开放入驻，利用微信作为天然的传播媒介，分发/分享小程序。

发明能解决功能体验和动态性的技术方案，虽然难，但不是最难的事情。

最难的是开发者生态的建设。

小程序丢弃了国际标准组织 W3C 的 DOM 和 Window 标准，仅仅采用基础 JavaScript。这意味着 HTML5 生态的各种轮子无法复用，要完全重造一个新的小程序开发生态。

前端技术发展到现在能扩展的领域越来越多了，已经很少用原生 JS 了，开始大量使用 Vue 、React 等框架，并且在 Vue 的基础上，又有很多技术。技术生态的发展其中比较重要的是开发框架的迭代，最初的微信小程序很原始，IDE 难用，NPM、预处理器等都不支持，但是这些工具已经是大型项目不可缺少的了。

小程序技术生态是如何快速成长的？
首先微信提供了比较完善的开发环境，文档内容友好，还有提供针对微信小程序的开发框架，在越来越多平台推出小程序之后，如果想发布到其他平台上，就得重新进行开发，这无形的增加了我们的工作量。后来兼容多平台的框架出现了。

2017 年出现第一个标志性框架 WePY，原本是腾讯其他部门的一个个人工程师作品。WePY 解决了小程序不支持 NPM、预处理的问题，不过 WePY 也存在很多问题，比如使用的是私有变量，在 IDE 中没有语法提示、语法校验等问题。

美团在 2018 年开源了 MPVue ，MPVue 采用 Vue 语法来开发小程序，通过对 Vue.js 底层改造，编译生成微信小程序，MPVue2.0 支持生成其他平台小程序 百度小程序、头条小程序、支付宝小程序 等等。

京东团队开发了 [Taro](https://taro.jd.com/) 框架，支持多端多框架开发，最新的 Taro 3 支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 等应用。

同时小程序也开始支持自定义组件，这种组件在数据更新时，只会更新组件内部的数据，而不是整个页面更新数据，从而大幅减少了数据通信量。

然后就是 Dcloud 团队基于 Vue 开发了 uni-app 框架，它实现了自定义组件编译模式，并在算法上做了很多优化。一套代码可以发布 App、各种小程序平台、H5 等。

Vue、React 技术生态结合到小程序生态中，大大加快了小程序发展。

在这些基于 Vue、React 框架生成的小程序之上，发展出了多端支持的 UI 框架，首先是 Taro 推出的 Taro UI，实现了 H5 和小程序的 UI 统一，不过 Taro 不支持 App 端。

然后 uni-app 推出了 uni UI，这个 UI 库同时支持多家小程序、H5、App。uni-app 和 MPVue 还搞了一个插件市场，通过 npm 安装插件就可以使用。

以及我们正在用的 uView UI 框架，它是 uni-app 生态最优秀的 UI 框架，全面的组件和便捷的工具，可以多端发布。

###### *以上内容，参考[小程序技术演进史](https://mp.weixin.qq.com/s/Q3Dfrcf5FTmWUrsIkPWncA)*

## 小游戏和小程序的区别
小游戏是小程序的一个特殊类目，其技术实现与普通小程序有一些差异。

小游戏只支持 JavaScript 一种语言。

小游戏只有两个必要文件：`game.js`,`game.json`，小游戏没有 `wxss`,`wxml`,多页面等文件，但是加了一些渲染、文件系统和后台多线程功能。

# 小程序之外的技术
## 快应用
[快应用](https://www.quickapp.cn/)也叫免安装应用。主流手机厂商利用系统优势组成的“快应用联盟”联合制定，统一接入，即点即用，无需安装下载。比如小米的“直达服务”，华为的“快应用”。快应用目前使用范围只是 Android 系统，且只包含国内手机。小微信程序和轻应用能解决低频，单一业务需求的使用场景，重度使用不够友好。

使用前端技术栈开发，原生渲染，具备 H5 页面和原生应用的优点。即点即用，拥有原生应用的性能体验，可将应用添加主屏幕桌面。

快应用和小程序不再基于浏览器厂商运行，从系统层面拥有更多原生能力，我觉得小程序 和 快应用都是在 PWA 的基础上开发的拥有更强能力的应用，我新建的 PWA 应用在“快应用”列表中也是可以看到和打开的。

## PWA（Progressive Web App 渐进式网页应用）
PWA是 Google 在 2015 年提出，2016年6月才推广的项目。是结合了一系列现代Web技术的组合，在网页应用中实现和原生应用相近的用户体验。

它有几个特点：
- 离线访问，通过 service workers 可以在离线或者网速差的环境下工作。

- PWA 可以添加到系统主屏幕上，不用从应用商店下载，通过 Manifest file 提供类似 App 上的使用体验，在 Android 上可以全屏显示；不支持 Safari，所以 IOS 不可以使用。

- 支持推送通知，受益于 service worker 的更新进程，应用能够始终保持更新。

- 安全，通过 HTTPS 来提供服务来防止网络窥探，保证内容不被篡改。

### PWA关键技术
- Service Worker，以下简称 SW，是指离线缓存文件，SW 作用于浏览器和服务器之间，相当于一个代理服务器，只能在 HTTPS 环境下使用 SW，因为 SW 的权利比较大，能够直接截取和返回用户的请求，所以要考虑一下安全性问题。

- Manifest，一个 JSON 配置文件，能够配置应用的 横竖屏显示，定义启动动画，启动页面的 URL 地址，添加到主屏幕上的应用程序图标、名字、图标大小等。

- Push Notification，Push 和 Notification 是两个不同的功能，涉及到两个API；Push 和 Notification 关系，Push 是服务器将更新的信息传递到 SW，Notification 是浏览器发送的通知消息，SW 将更新的信息推送给用户。

## 快应用和 PWA 应用的区别  
开发规范：PWA是在传统web规范基础上加持新的web强化能力，最终还是web网页，向下降级兼容老版本浏览器；快应用是国内手机厂商联盟单独制定的开发规范，和其它规范无关；

渲染引擎：PWA就是网页，依然由浏览器的webview渲染，快应用是原生渲染，类似react native和weex；

设备能力：PWA对手机设备能力基本无扩展，虽有推送能力，但依赖GCM，因墙的存在，与国内用户无缘；快应用则暴漏了大量的系统接口，例如二维码、传感器、视频音频、原生分享等，可以满足更多业务需求；

发行方式：PWA只需升级更新自己服务器即可，无需提交审核；快应用需要在联盟网站注册账号，并绑定各手机厂商的开放平台账号；

使用入口：PWA仅可在部分浏览器下使用，快应用有更多的使用入口，比如桌面搜索、负一屏、应用市场、短信卡片等；

###### *以上内容，参考[快应用和pwa有什么不同？](https://www.zhihu.com/question/269648307)*
