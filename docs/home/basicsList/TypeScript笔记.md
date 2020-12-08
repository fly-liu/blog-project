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
prev: ./WechatMinProgram
next: ./cookieTest
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
let isOpen: boolean = false;
```
使用构造函数 Boolean 创造的对象不是布尔值, new Boolean() 返回的是一个 Boolean 对象；使用 Boolean 构造函数返回的是一个 boolean 类型

### 数值
使用 number 定义值类型
``` js
let num: number = 1;
let hexLiteral: number = 0xf00d;
```

### 字符串
使用 string 定义字符串类型
``` js
let myName: string = 'Freeman';
let myAge: number = 20;
```

### 空值
Javascript 中没有空值（Void）的概念，在 TypeScript 中，可以用 void 定义一个没有任何返回值的函数
``` js
function alertName(): void {
  alert('My name is Freeman')
}
```

声明一个 void 类型的变量没有任何意义，因为只能赋值为 undefined 和 null
``` js
// 声明变量的数据类型为 void 时，非严格模式下，变量的值可以为 undefined 或 null。严格模式下，变量的值只能为 undefined
'use strict'
let unusable: void = null; // 会报错，不能将类型 null 赋值给 void
let unusable: void = undefined; // 不会报错
```

### Null 和 Undefined
在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始类型
``` js
let u: undefined = undefined;
let n: null = null;
```
与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量可以赋值给 number 类型的变量
``` js
let num: number = undefined; // 不会报错
```

而 void 类型的变量不能赋值给 number 类型的变量
``` js
let u: void;
let num: number = u; // 报类型错误
```

### 任意值
任意值（Any）用来表示允许赋值为任何类型。
``` js
let myFavoriteNumber: any = 'a';
myFavoriteNumber = 7;
```

变量如果在声明的时候，没有指定类型，那么它就是任意值类型

### 联合类型
联合类型（Union Types）表示取值可以为多种类型中的一种。