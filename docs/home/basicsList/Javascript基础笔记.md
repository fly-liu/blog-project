---
title: Javascript基础笔记
sidebar: false
date: '2020-06-09'
tag: # 页面的标签 
  - Javascript
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: Javascript 基础笔记 数据类型 DOM
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: Javascript 基础笔记
# prev: ./git提交
# next: ./vuePress
---

# Javascript基础笔记

## 什么是 JavaScript 语言？
Javascript 是一种轻量级的脚本语言。所谓“脚本语言”（Script Language），指的是不具备开发操作系统的，只能用来编写控制其他大型应用程序（比如浏览器）的“脚本”。
Javascript 也是一种嵌入式语言。本身的核心语法不算多，不提供I/O（输入/输出）相关的API，依靠宿主环境（host）提供。常见的宿主环境是浏览器、Node.js环境（服务器环境）。
Javascript 的核心语法很简洁，只包括两部分，基本的语法构造（比如操作符、控制结构、语句）和标准库（比如Array、Date、Math等）。除了这些，各种宿主环境也提供一些API（即只能在该环境使用的API），以浏览器为例，它提供的API主要要 DOM类：操作网页的各种元素、BOM类：操作浏览器、Web 类：实现互联网的各种功能


## return,break,continue
在 `for` 循环中,不能使用 `return` 语句 ，return 语句只能放在function中


## 数据类型检查
检查数据类型的方式：`typeof`,`Object.prototype.toString()`,`instanceof`

`typeof`: 适合基本数据类型、function 检测，遇到null失效
``