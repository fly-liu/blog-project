---
title: vue面试笔记
sidebar: false
date: '2019-05-28'
tag: # 页面的标签 
  - Vue
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: 刘哈哈 笔记 vue 个人博客 vue-press
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: vue面试笔记
prev: ./git提交
next: ./vuePress
---

## 笔记

### HTML
- `<!DOCTYPE>`的作用？标准模式和兼容模式的区别？
1. `<!DOCTYPE>`声明位于HTML文档中的第一行，处于`<thml>`标签之前，告知浏览器解析器以什么文档标准解析这个文档。`<!DOCTYPE>`不存在或者格式不正确会导致文档以兼容模式显示
2. 标准模式的排版和JS运作模式都是以浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示
- HTML5为什么只需要写`<!DOCTYPE>`
HTML5不基于SGML，因此不需要对DTD进行引用，但是需要DOCTYPE来规范浏览器的行为；HTML4基于SGML，所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型
- 行内元素有哪些？块级元素有哪些？空元素有哪些？
行内元素：a,span,img,input,select,strong(代表强烈的重要性,字符使用粗体表现),b(粗体，无语义),em(强调),i  
块级元素：div,p,ol,ul,dl,dt,dd,h1~h5,section,header,footer
常见的空元素：<br>,<hr>,<link>,<meta>
- 页面导入样式时，使用link和@import有什么区别
1. link属于xthml标签，除了加载css外，还能用于定义RSS，定义rel连接属性等作用；@import是css提供的，只能用于加载CSS
2. 页面加载时，link会同时加载，er@import引用会等到页面加载完后再加载
- 常用兼任性问题
  - 浏览器默认的margin和padding不同。解决方法使用通配符选择器设置margin、padding为0,`* {margin:0;padding:0;}`
  - Chrome中文界面下默认将小于12px的文本强制按照12px显示，可通过加入CSS属性`-webkit-text-size-adjust:none;`解决
  - 超链接访问过后hover样式就不出现了，被点击访问过的超链接样式不具有hover和active。解决办法是改变CSS属性的排列顺序：`L-V-H-A(a:link {} a:visited {} a:hover {} a:active {})`
  
- HTML新特性  
增加绘画canvas，媒体标签video、audio，本地存储LocalStorage,SessionStorage  
语义化标签，article、header、footer、nav、section  
表单控件，calendar、date、time、email、url、search
新技术，webworker、websocket

- iframe的缺点和解决方法
 - iframe会阻塞主页面的onload事件
 - iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面并行下载
 - 如果需要使用iframe，最好通过JavaScript动态给iframe添加src属性值，这样可以绕开以上两个问题

- 如何关闭form表单自动完成功能
自动完成允许浏览器预测对字段的输入。当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。  
关闭此功能方式：给不想要提示的form或下的某个input设置`autocomplete=off`

- cookie,sessionlocalstorage,localstorage的区别
cookie在浏览器和服务器之间来回传递，sessionstorage和localstorage不会；  
sessionstorage,localstorage的存储空间更大；
sessionstorage存储的数据，浏览器关闭时会删除，localstorage存储的数据，没有时间限制，除非主动删除

- 如何实现浏览器内多个标签之间的通信
调用localstorage、cookies等本地存储方式

- WebSocket如何兼容低版本浏览器
Adobe Flash Socket、ActiveX HTMLFile(IE)、基于multipart编码发送XHR、基于长轮询的XHR

### CSS
- IE盒子和标准W3C盒子模型区别，IE的内容区(content)部分包含了border和padding

- CSS选择器有哪些？
  - ID选择器
  - 类选择器
  - 标签选择器
  - 相邻选择器
  - 子选择器
  - 后代选择器
  - 通配符选择器
  - 属性选择器
  - 伪类选择器

- 可继承的样式
font-size,font-family,color,ul,li,dl,dd,dt

- 不可继承的样式
border,padding,margin,width,height

- CSS标签权重和优先级如何计算
  - 权重的规则：标签的权重为1，class的权重为10，id的权重为100
  - 就近原则，同权重情况下样式定义最近者为准
  - 载入样式以最后载入的定位为准
  - !important > 行内样式 > id > class > tag

- CSS3新增哪些伪类？
``` css
p:first-of-type /*选择属于其父元素的首个 <p> 元素的每个 <p> 元素*/
p:last-of-type /*选择属于其父元素的最后一个 <p> 元素的每个 <p> 元素*/
p:only-of-type /*选择属于其父元素唯一的 <p> 元素的每个 <p> 元素*/
p:only-child /*选择属于其父元素的唯一子元素的每个 <p> 元素*/
p:nth-child(2) /*选择属于其父元素的第二个子元素的每个 <p> 元素*/
:enabled /*匹配每个启用的元素*/
:disabled /*选择器匹配每个禁用的的元素（主要用于表单元素）*/
:checked /*单选框或复选框被选中*/
```

- 如何居中div
  - 给div设置一个宽度，然后添加`margin: 0 auto`属性
  - 使用flex布局

- 居中浮动元素
``` css
.div {
  position: relative;
  left: 50%;
  top: 50%;
  margin: -150px 0 0 -250px;
  width: 500px;
  height: 300px;
}
```
- CSS3新特性
圆角(border-radius),阴影(box-shadow),文字阴影(text-shadow),渐变，动画(transform,animate)

- 为什么要初始化CSS样式
  - 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的

- 解释下浮动和它的工作原理？清除浮动的技巧
  动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。  
  1. 使用空标签清除浮动。在浮动标签的后面加一个空标签，设置css clear:both，弊端是增加了无意义标签
  2. 使用overflow。给包含浮动元素的父标签添加css overflow:hideen;
  3. 使用after伪对象清除浮动。该方法中必须为需要清除浮动元素的伪对象中设置 height:0，否则该元素会比实际高出若干像素；
  4. 父元素也使用浮动。

- `display:inline-block`会产生间隙,解决办法
父元素中设置`font-size:0;letter-spaceing:-4px;`,letter-spacing负值可以去除所有浏览器的换行符间隙

- SASS预处理器特性
  1. 使用变量，变量声明（使用`$`符合标识变量）、变量引用(凡是CSS属性的标准值可存在的地方，变量就可以使用)、变量名用中划线声明的变量可以使用下划线的方式引用，反之亦然
  2. 嵌套规则，父容器选择符&
  3. 导入SASS文件，`@import`导入其他的SASS文件，sass允许`@import`命令写在css规则内，可以省略.sass或.scss文件后缀
  4. 混合器和选择器继承，混合器允许用户编写语义化样式的同时避免视觉层面上样式的重复；继承允许你声明类之间语义化的关系，通过这些关系可以保持你的css的整洁和可维护性。

### JavaScript
- Javascript原型，原型链，有什么特点

- eval是做什么的
它的功能是把对应的字符串解析成JS代码并运行；应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）
- null，undefind的区别

- Node.js适用场景
高并发、聊天、实时消息推送

- js数据类型
基础类型：String、Number、Boolean、Symbol,undefined,null
引用类型：Object、Function、Array、RegExp、Date

- Javascript实现继承的方式
  - 原型式继承，在object函数内部，先创建一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，最后返回这个临时类型的一个新实例
  - 原型链（定义在prototype上的属性、方法），存在的问题，原型中包含引用类型值的问题
  - 构造器函数（在子类构造函数的内部调用父类构造函数，可以借助apply()和call()方法来改变对象的执行上下文），存在的问题，方法都在构造函数中定义，因此函数无法达到复用
  - 组合继承(原型链+构造函数)，使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承
  - Object.create()方法，可以接受两个参数，一个是用作新对象原型的对象和一个可选的为新对象定义额外属性的对象
  - 寄生式继承，创建一个仅用于封装继承过程的函数
  - 寄生组合式继承，借用构造函数来继承属性，通过原型链的混成形式来继承方法

- ["1","2","3"].map(parseInt)答案是多少
[1,NaN,NaN] 因为parseInt需要两个参数(val,radix),radix表示解析时的基数。map 传了 3 个 (element, index, array)，对应的 radix 不合法导致解析失败。

- 如何创建一个对象? （画出此对象的内存图）

- this
指向调用时所在函数所绑定的对象    
浏览器环境中非函数内this指向window  
this可以被call/apply/bind改变指向

- 什么是闭包（closure），为什么要用它
如果一个函数用到了它作用域外面的变量，那么这个变量和这个函数之间的环境就叫闭包。  
模仿块级作用域。  
存储变量。保存外部函数的变量，内部函数保留了对外部函数的活动变量的引用，所以变量不会被释放。  
封装私有变量。把函数当作一个范围，函数内部的变量就是私有变量，在外部无法引用，但是我们可以通过闭包的特点来访问私有变量。

- `use strict`是什么
通过严格模式，在函数内部选择进行较为严格的全局或局部的错误条件检测，使用严格模式的好处是可以提早知道代码中的存在的错误，及时捕获一些可能导致编程错误的ECMAScript行为。在开发中使用严格模式能帮助我们早发现错误。  

- 判断数据类型
typeof 可以识别简单基本类型值，但对于复合类型(Object,Array,Function)却只能识别Function。
instanceof 判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。
constructor undefined和null没有constructor属性
Object.prototype.toString.call();

- new操作符具体干了什么
  1. 创建一个空对象，并且this变量引用改对象，同时还继承了该函数的原型
  2. 属性和方法被加入到this引用的对象中
  3. 新创建的对象由this所引用，并且最后隐式返回this

### Vue
1. 谈谈对MVVM开发模式的理解
MVVM分为Model、View、ViewModel  
Model 代表数据模型，数据和业务逻辑都在Model层中定义
View 代表UI视图，负责数据展示  
ViewModel 负责监听Model中数据的改变并且控制视图的更新，处理用户交互操作。Model和View并无直接关联，而是通过ViewModel来进行联系，Model和ViewModel之间有着双向数据绑定的关系。因此当Model中的数据改变时会触发View层的刷新，View中由于用户交互操作而改变的数据也会在Model中同步。  
这种模式实现了Model和View的数据同步，因此只需要专注对数据的维护操作，而不需要自己操作dom

2. Vue中有哪些指令
v-html,v-text,v-bind,v-on,v-if,v-show,v-for,v-model

3. v-if和v-show的区别
v-show只控制元素的显示与隐藏，将display属性在block和none之间切换；v-if会控制DOM节点的存在与否。
当我们需要经常切换某个元素的显示/隐藏时，使用v-show会更加节省性能上的开销；只需要一次显示与隐藏的时候，使用v-if更合理。

4. Vue的响应原理
当一个Vue实例创建时，vue会遍历data选项的属性，用Object.ddfineProperty将他们转为setter/getter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。  
每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据属性记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。

5. Vue检测属性的变化
受现代Javascript的限制，Vue无法检测到对象属性的添加或删除。由于Vue会在初始化实例时对属性执行getter/setter转化，所以属性必须在data对象上存在才能让Vue将他转换为响应式的。对于已经创建的实例，Vue不允许动态添加根级的响应式属性，但是可以使用Vue.set(object,propertyName,value)方法向嵌套对象添加响应式属性。  
还可以使用vm.$set实例方法，这是全局Vue.set方法的别名

6. 在Vue中在组件内部实现一个双向数据绑定的例子？
假设有一个输入框组件，用户输入时，同步父组件页面中数据。  
父组件通过props传值给子组件，子组件通过$emit来通知父组件修改相应的props值  
父组件中做了两件事，一是给子组件传入props，二是监听input事件并同步自己的属性。
v-model会帮我们完成上面两步操作

7. Vue监听某个属性值的变化
watch、computed

8. Vue给data中的对象属性添加一个新的属性
给data中的对象添加新属性，视图不会刷新。原因是在Vue实例创建时，未声明的属性不会被Vue转换为响应式的属性，不会触发视图更新，需要使用Vue的全局api $set(),手动的把新增属性处理成一个响应式属性

9. delete和Vue.delete删除数组的区别
delete只是把删除的元素变成 empty/undefined ，元素的键值还是不变  
Vue.delete直接删除了数组 改变了数组的键值。

10. 优化SPA应用首屏加载速度慢的问题
- 将公用的JS库通过script标签外部引用，减小app.bundel的大小，让浏览器并行下载资源，提高下载速度
- 在配置路由时，页面和组件使用懒加载方式引入，进一步缩小app.bundel的体积，在调用某个组件时再加载对应的js文件
- 加个首屏loading，提升用户体验

11. 优化网站性能
- 减少HTTP请求数量
- CSS Sprites（CSS 精灵），将多张图片合并成一张达到减少HTTP请求的方案，通过CSS background属性来使用。这种方法还可以减少图片总字节数
- 合并CSS和JS文件，通过各种打包工具
- 采用lazLoad（懒加载），控制网页的内容一开始不加载，等到需要的时候立即加载出来
- 控制资源文件加载优先级
- 利用浏览器缓存
- 减少重排（Reflow），基本原理：重排是 DOM 的变化影响到了元素的几何属性（宽和高），浏览器会重新计算元素的几何属性，会使渲染树中受到影响的部分失效
- 减少DOM操作
- 图标使用iconfont替换

12. 网页从输入网址到渲染完成经历了哪些过程
  大致分为7步：  
  1. 输入网址
  2. 发送到DNS服务器，并获取域名对应的web服务器对应的IP地址
  3. 与WEB服务器建立TCP连接
  4. 浏览器想WEB服务器发送HTTP请求
  5. WEB服务器响应请求，并返回指定URL的数据（或错误信息，或重定向的新的URL地址）
  6. 浏览器下载WEB服务器返回的数据及解析HTML源文件
  7. 生成DOM树，解析CSS和JS，渲染页面，直到显示完成

13. jQuery获取的DOM对象和原生的DOM对象有何区别
原生JS获取的DOM是一个对象，jQuery对象就是一个数组对象，他们是不同的对象，类型不等价
- 原生DOM对象转jQuery对象：
``` js
var box= document.getElementById('box');
var $box = $(box);
```

- jQuery对象转原生DOM对象：
``` js
var $box = $('#box');
var box = $box[0];
```
14. Vue生命周期
beforeCreate  -------创建前  
created       -------创建后  
beforeMount   -------挂载前  
mounted       -------挂载后  
beforeUpdate  -------更新前  
updated       -------更新后  
beforeDestroy -------销毁前  
destroyed     -------销毁后  

15. created 和 mounted 区别
beforeCreate: el和data并未初始化
created: 完成了data数据的初始化，el没有
beforeMount: 完成了el和data初始化
mounted: 完成挂载