---
title: TypeScript笔记
sidebar: false
date: '2020-12-03'
tag: # 页面的标签 
  - Javascript
  - Typescript
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: Typescript 笔记 数据类型 
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: Typescript Javascript 基础笔记
# prev: ./git提交
# next: ./vuePress
---

# TypeScript 笔记
在 TypeScript 中，我们使用 : 指定变量的类型，: 的前后有没有空格都可以。

 TypeScript 只会在编译时对类型进行静态检查，如果发现有错误，编译的时候就会报错。而在运行时，与普通的 JavaScript 文件一样，不会对类型进行检查。

TypeScript 编译的时候即使报错了，还是会生成编译结果。

如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError 即可。

## 原始数据类型
### 布尔值
布尔值是最基本的数据类型，在 TypeScript 中使用 boolean 定义布尔类型
``` js

```