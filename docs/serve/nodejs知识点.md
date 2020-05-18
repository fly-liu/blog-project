---
title: Node JS 知识点笔记
date: '2019-05-08'
tag: # 页面的标签 
  - Javascript
  - Node
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: nodejs 笔记
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: 笔记 node express
prev: ./nodejs基础
next: ./express应用
---

## Node JS 知识点笔记
Node.js适合开发I/O多的业务，而不适合计算任务繁重的业务。I/O越多，宏观上越适合并行，适合使用NodeJs；如果计算多，宏观上不适合并行，此时网页打开速度变慢，不适合NodeJs

- 多线程：

![多线程](./images/11.png) 

- 单线程：

![单线程](./images/22.jpg)
