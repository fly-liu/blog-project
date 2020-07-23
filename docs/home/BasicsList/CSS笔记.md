---
title: CSS笔记
sidebar: false
date: '2020-06-12'
tag: # 页面的标签 
  - CSS
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: CSS笔记 样式表 特指度 优先级
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: CSS笔记
prev: ./知识点笔记
next: ./Javascript基础笔记
---

# CSS笔记
当初学习CSS时找到了[王福朋 CSS知多少 系列博客](https://www.cnblogs.com/wangfupeng1988/p/4325007.html)，受益良多，讲的很通俗易懂，解释了心中的很多疑惑，这里把一些知识点和概念记下来增强印象，有些文字直接使用原文中的，因为觉得原文的描述已经很好了。

CSS——Cascading Style Sheets——层叠样式表。从字面意思来看，层叠的意思是需要多层叠加起来。在这些层次中有一个“浏览器默认样式”层，即浏览器默认的各个html元素的样式。

webkit内核渲染html和css，html的解析是一条线，css的解析是一条线，两者会在某一点结合，形成最终的网页。浏览器将载入的html变为dom树，但是此时没有任何显示样式。所以显示的样式，都是css定义的，浏览器只会通过css来渲染视图样式。

这会联想到一些关于CSS的问题：浏览器是如何解析CSS，CSS和html如何结合起来——选择器，布局，CSS能控制哪些显示方式。

## 浏览器是如何解析CSS
CSS的样式来源有5个，不过程序真正控制的只有3个，还有就是浏览器的
1. `<div style=''></div>` 属性样式（行内样式）
2. `<style>` 内部样式（style标签）
3. `<link>` 外部样式（引入的样式文件）
4. 浏览器用户自定义样式
5. 浏览器默认样式

## CSS和html如何结合起来——选择器
CSS如何与html结合起来是通过选择器。CSS提供了多种多样的选择器类型，而且每个级别都在不断的增加新的选择器类型，使得选择器更加灵活易用。对css选择器来说，有一个很重要的话题——css选择器级别的判断问题。这涉及到一个概念 ———— 特指度。

## 页面呈现
页面呈现可以分为两类——文字，块。
1. 针对文字来说，我们可以设置字体、字号、加粗、斜体、背景色等等；
2. 对于块来说情况比较多，有盒子模型、浮动、定位、display、背景等；


# 浏览器默认样式
## display
常见的display属性设置有：`display: block`,`display: list-item`,`display: table`,`display: table-cell`,`display: inline-block`等

## block元素
浏览器默认的block元素主要有：`html,body,div,address,blockquote,h1,h2,h3,h4,h5,h6,ol,ul,dl,dt,dd,form`等。

没有设置`block`的元素，默认为 `inline` 显示

## display: list-item
设置这个样式之后，就和浏览器默认的 ul-li 元素的样式一样了

## dispaly: table
`div`和`table`元素最大的区别在于，div的宽度和父元素一样，table宽度根据内容而定，即table具有“包裹性”
`dispaly: block;` 和 `display: table;`

## display: table-cell
列表中的元素 `td,th` 等默认样式是用的 `display:table-cell`,可以用它干一件很重要的事情 ———— 多列布局

## display: inline-block
`button,input,textarea,object,select`等元素默认是`display: inline-block;`, 行内块级元素

## body元素
``` css
body {display: block;margin: 8px;}
```
在body中默认定义了两个样式。不同浏览器为body设置的margin值可能不一样，在 css 中用 `* {margin: 0;padding: 0;}` 解决浏览器样式兼容性问题。

浏览器默认样式还为body设置了line-height，line-height: 1.12是一个相对值，即是文字高度的1.12倍

## `<br>`换行的实现
``` css
br::before {
  content: '\A';
  white-space: pre-line;
}
// 换行是`white-space: pre-line`效果
```

# 选择器
css中定义的样式，要将这些样式设置到html节点上，就需要通过选择器了。让浏览器知道css选择了哪一个dom节点。
一个浏览器使用css流程，和学习css的思路：css样式的加载和层叠 -> 择器以及选择器的等级 -> 呈现的各种样式（背景、字体、定位、浮动等）

选择器有很多，不过大可分为两类：
1. 标签选择器（*是特殊情况），可但标签，也可上下文多标签；
2. 属性选择器（id和class都是属性，特殊的属性）；

## 标签选择器
### 通用选择器 *
通用选择器 `*` 最常用的就是`* {margin: 0;padding: 0;}`

### 单标签
单标签选择器很基础了，到处都在用

### 多标签
多标签选择器一般和html上下文有关，有以下几种分类
1. 选择一个指定祖先元素的所有子元素，例如：`div p {}`
2. 选择一个父元素的所有直属子元素，例如：`div > p {}`
3. 选择某一个元素紧挨着的兄弟元素，例如： `li + li {}`
4. 选择某一个元素的所有同胞元素，例如： `span ~ a {}`

以上的各种选择器可各自组合，不过不要过于复杂，要保证代码的可读性

例如使用 `ul + li` 要在 各个菜单之间加下划线。之前的实现思路是每个`li`都加上`border-bottom`,然后用伪类选择器选择最后一个将`boder`去掉。
实际上没必要这么麻烦，下面是另一种思路：
``` css
ul li+li {
  border-top: 1px solid #ccc;
}
```
挺有意思

## 属性选择器
### 特殊： id选择器，class选择器
css选择器是根据 html 节点的特性来设定的，id选择器和class选择器属于节点的属性，只是它们比较特殊，每个html节点的id不能重复。

由于比较特殊和常用，所以单独给 `id` 和 `class` 单独的选择器标识，本质上它们还是属于属性选择器。

例如，选择id为div1的元素
``` css
#div1 {color: red;}
div[id='#div1'] {color: red;}
```

### 属性选择器
属性选择器有两种情况：
1. 只通过属性名选择，`img[title] {}`
2. 通过属性名和属性值选择，`input[type='text'] {}`

### 伪类和伪元素
伪类和伪元素可针对任何一种选择器使用

**伪类**  
伪类分为 UI伪类 和 结构化伪类。

1. UI伪类
UI伪类比较简单常用，
``` css
/* 适用于未被访问的链接；*/
a:link {}

/* 适用于已经访问过的链接； */
a:visited {}

/* 鼠标指针指向一个元素，还未激活； */
a:hover {}

/* 适用于一个元素被选择但未被释放； */
a:active {}
```
四个伪类的声明顺序应该是： `:link, :visited, :hover, active`, `a:hover` 必须放到 `a:link`,`a:visited` 之后，否则将隐藏 `a:hover` 内定义的相关规则。`a:active` 应该放在 `a:hover` 之后，否则`a:active`内的样式将隐藏。

2. 结构化伪类（低版本IE不行）
常见的应用比如 实现一个表格间隔显示背景颜色，最简单的方式是使用结构化伪类
``` css
table tr:nth-child(even) {
  background-color: #f1f1f1;
}
```

还有一些其他的常用书写：
``` css 
table tr:nth-child(event) {}
table tr:nth-child(odd) {}
table tr:first-child {}
table tr:last-child {}
```

`css3` 新增了很多伪类选择器


**伪元素** 
在`css3`的规范中，单冒号(`:`)用于CSS3伪类，双冒号(`::`)用于CSS3伪元素

伪元素中 `::before`,`::after` 非常常用,
``` css
div::before {
  content: 'CSS3';
}
```
`content`属性可以设置内容，内容也可以写成 `Unicode` 编码

## 选择器扩展
选择器本来是css的一种规则，用于为css选择html节点的。但是也有人利用这些特性创造出优秀的作品。

- jQuery被推广流行的根本原因就是它的“Query”——基于css选择器的“Query”。jquery可以通过一段css选择器表达式从既有的html结构中选择符合表达式的dom组。

- zen-Coding，在编辑器中常用的html代码生成插件，可以根据css选择器表达式创造出html节点。
``` txt
div#div1>ul>li*3
```

# 选择器的优先级
`!important` > 行内样式 > id选择器 > class选择器 > tag > * > 继承 > 默认

选择器从右往左解析

## 特指度
特指度（specificity）。特指度表示一个css选择器表达式的重要程度，可以通过 `I-C-E` 计算公式，来计算出一个数值，数越大，越重要。
- `I——Id`
- `C——Class`
- `E——Element`

针对一个css选择器表达式，遇到一个id就往特指度数值中加100，遇到一个class就往特指度数值中加10，遇到一个element就往特指度数值中加1。

::: warning 提示
!important优先级最高，高于上面一切。* 选择器最低，低于一切。
:::

# 盒子模型
页面渲染时，DOM元素所采用的布局模型。包含内容区、内边距、边框、外边距。