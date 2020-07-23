---
title: vue基础知识点笔记（一）
sidebar: auto
date: '2020-07-18'
tag: # 页面的标签 
  - Vue
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: vue基础 笔记 指令 列表 组件 事件 知识点
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: vue基础知识点笔记（一）
prev: ./vueLog2
next: ./git提交
---

# vue笔记
最近重新看[Vue.js](https://cn.vuejs.org/)文档，记录一下知识点，以及常遇到的问题和思考。第一次看Vue.js是学习如何使用，再次看时要带着思考去看，想一想“为什么”

## 声明式渲染
Vue.js的核心是一个允许采用简洁的模型语法来声明式的将数据渲染进DOM系统。数据和DOM建立了关联，所有的东西都是响应式的。我们不在再和HTML直接交互。一个Vue应用会将其挂载到一个DOM元素上，然后对其进行完全控制。那个HTML就是我们的入口，其它的操作都是发生在Vue实例中。

## 数据和方法
当一个Vue实例被创建时，它将`data`对象中的所有prototype加到Vue的响应式系统中。当这些prototype发生改变时，视图将产生“响应”，当这些数据改变时，视图会进行重新渲染。只有实例被创建时就已存在于`data`中的prototype才是响应式的。

## 模板语法
Vue.js 使用了基于HTML的模板语法，允许声明式的将DOM帮到到底层的Vue实例的数据。所有的Vue.js的模板都是合法的HTML，所以能被遵循规范的浏览器和HTML解析器解析。

在底层实现上，Vue将模板编译成虚拟DOM渲染函数。结合响应系统，计算最少需要渲染多少组件，并把DOM操作数减到最小。

除了模板语法，还可以直接写渲染（render）函数，使用JSX语法

### 插值
数据绑定最常见的形式是使用`Mustache`语法（双大括号）的文本插值，Mustache标签将会被替代成对应数据对象上prototype的值。HTML使用 v-html 指令

Mustache语法不能作用在HTML attribute上，绑定attribute使用 v-bind 指令

Vue.js模板中支持Javascript表达式，不过只能包含单个表达式
``` js
// 生效
{{number + 1}}

{{number ? 'yes' : 'no'}}

// 不生效
{{var a = 1}} // 语句

{{ if(ok) {return 'message'} }}
```
> 模板表达式都被放在沙盒中，能访问对象prototype上的属性，只能访问部分的全局变量，如Math,Date,不应该在模板表达式中访问用户自定义的全局变量。

### 指令
指令是带有`v-`前缀的特殊 atrribute。指令的预期值是单个 JavaScript 表达式（v-for属于例外情况）。指令的作用是，当表达式的值改变时，响应式应用于DOM

**参数**  
一些指令能够接收一个参数，在指令名称之后以冒号表示。例如：`<a v-bind:href="path"></a>`。这里的href是参数，告知 v-bind 指令将该元素的href attribute和表达式“path”绑定。

**动态参数**  
可以用方括号括起来一个JavaScript表达式作为一个指令的参数，例如：`<a v-bind:[attributeName]="path"></a>`,这里的 attributeName 被作为一个JavaScript表达式进行动态求值，得到的值最终被作为参数来使用。设置 attributeName 为 href ，等价于v-bind:href

## 计算属性和侦听器
在模板中放入太多的逻辑会让模板过重且难以维护，所以对于任何复杂逻辑，都应当使用计算属性。
``` html
<div id="example">
  <p>{{ message }}</p>
  <p>{{ reversedMessage }}</p>
</div>
```
``` js
vm = new Vue({
  el: '#example',
  data: {
    message: 'hello'
  },
  computed: {
    // 计算属性的getter
    reversedMessage: function() {
      // this指向vm实例
      return this.message.split('').reverse().jion('')
    }
  }
})

// 输出: hello
//       olleh
```
上面的代码声明了一个计算属性 reversedMessage，它的值根据 message 改变。reversedMessage 绑定在 prototype 上，默认提供的函数用作计算属性的 getter 函数

计算属性默认只有 getter ，不过也可以提供一个 setter 方法

### 计算属性缓存和方法
``` html
<p>{{ reversedMessage() }}</p>
```
``` js
methods: {
  reversedMessage: function() {
    return this.message.split('').reverse().jion('')
  }
}
```
将函数作为一个方法，在表达式中调用，最终呈现的效果是相同的。区别是`计算属性是基于它们的响应式依赖缓存的`，只有相关的依赖发生改变时它们才会重新计算。调用方法的话总会执行函数。

### 侦听属性
在数据变化时执行异步或者开销较大的操作时，可以使用侦听属性，比如访问API，它侦听的是定义在 prototype 上的属性变化

## Class 和 Style 绑定
class 和 style 内联样式都是HTML的 attribute，Vue.js对使用 v-bind 动态给模板绑定 class 和 style 做了增强。表达式除了字符串还可以是对象或数组。

### 对象语法
``` html
<!-- 给 v-bind:class 传一个对象，动态切换切换class -->
<div v-bind:class="{active: isActive, 'text-red': isRed}"></div>
```
名为 active 的class是否存在，取决于数据prototype isActive 的 [truthiness](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)（布尔运算中的真值）

绑定class对象也可以定在 data 中，或者通过计算属性返回一个对象;   
v-bind:style 的对象语法传的是一个JavaScript对象，CSS prototype 名可以用驼峰式或短横线分割（要用引号）来命名
``` html
<div v-bind:class="classList" v-bind:style="styleObject"></div>
```
``` js
data() {
  return {
    isActive: true,
    isRed: null,
    styleObject: {
      color: 'red',
      'background-color': '#f1f1f1'
    }
  } 
},
computed: {
  classList: function() {
    return {
      active: this.isActive && !this.isRed,
      'text-red': this.isRed
    }
  }
}
```

### 数组语法
可以传一个数组给 v-bind:class
``` html 
<div v-bind:class="[isActive ? activeClass : '', errClass]" v-bind:style="[baseStyles, overridingStyles]"></div>
```
``` js
data: {
  isActive: true,
  activeClass: 'active',
  errorClass: 'text-danger',
  baseStyles: {
    fontSize: '14px'
  },
  overridingStyles: {
    color: '#fff'
  }
}
```
使用 v-bind:style 添加样式,Vue.js会自动侦听并添加相应的浏览器前缀


## 条件渲染和循环
我们不仅可以把数据绑定到DOM 文本或attribute，还可以绑定到DOM结构，`v-if`是条件渲染，它确保了在切换过程中条件块内的事件监听器和子组件是销毁或重建。`v-for`可以将绑定的数组数据渲染成一个项目列表。

## `v-if`
v-if 用于条件性的渲染一块内容。这块内容只会在指令的表达式返回 truthy（真） 值的时候被渲染。
v-if 是一个指令，必须将它添加到一个元素上或者`<template>`(不可见包裹元素)

## `v-else`
用来表示 v-if 的else块，`v-else`必须紧跟在带 v-if 或者 v-else-if 的元素后面。否则将不能识别。

### key
Vue 为高效的渲染元素，会复用已有元素而不是从头渲染。使用 v-if，v-else 切换模板，模板中使用了相同的元素，不会清除已输入的内容。

在元素中添加 key attribute，表示两个元素是独立的，不复用它们，未添加的元素还是会被复用

``` html
<!-- 未添加key -->
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>

<!-- 添加key -->
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```

## `v-show`
v-show 的元素始终会渲染到并保留在DOM中。v-show 只是简单的切换元素的display样式。

v-show 不支持 `<template>`元素和 `v-else`

## `v-if`和`v-show`的区别
- 在展示效果上它们都是控制元素的显示隐藏；
- v-if 是指条件渲染，确保切换过程中条件块内的事件监听和子组件被销毁和重建。原理是根据判断条件动态进行增删DOM元素，频繁的进行DOM增删操作会影响页面加载和性能；
- v-show 不管初始条件是什么，元素总会被渲染，只是切换元素的显示隐藏

## `v-if`与`v-for`的优先级
不推荐同时使用 v-if 和 v-for ，如果需要 v-if 优先使用，将 v-if 放到外层元素或`<template>`上。
当 v-if 和 v-for 指令在一个元素中一起使用时，v-for具有比 v-if 更高的优先级。

## v-for
在 v-for 块中，可以访问所有父级作用域 prototype，可以使用 `of` 代替 `in` 作为分隔符。

可以用 v-for 遍历一个对象的 prototype，可以提供第二个参数为 prototype 的名称（键名），还可以提供第三个参数作为索引
``` html
<div v-for="(value,name,index) in object">
  {{ index }}. {{ name }}: {{ value }}
</div>
```

为 v-for 块中的元素增加key attribute，可以重用和重新排序现有元素。

### 显示过滤或排序过后的数据
想要显示一个数组经过过滤或者排序后的数据，而不改变原有数据，可以创建一个计算属性，来返回过滤或排序过后的数据，在不适用计算属性的情况下（比如：嵌套数组），可以使用一个方法返回。
``` html
<li v-for="n in evenNumbers">{{ n }}</li>

<div v-for="set in sets">
  <p v-for="item in event(set)">{{ item }}</p>
</div>
```
``` js
data: {
  numbers: [ 1, 2, 3, 4, 5 ],
  sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
},
computed: {
  evenNumbers: function() {
    return this.numbers.filter(function(number) {
      return number % 2 === 0
    })
  }
}
methods: {
  event(numbers) {
    return this.numbers.filter(function(number) {
      return number % 2 === 0
    })
  }
}
```

v-for 可以接受整数。它会把模板重复对应的次数
``` html
<div v-for="n in 10">{{ n }}</div>

<!-- 输出：1 2 3 4 5 6 7 8 9 10 -->
```

## 事件监听
用户和应用进行交互，可以用`v-on`指令添加一个事件监听器，通过它调用在Vue实例中的方法，也可以是一个内联JS语句中调用方法，在内联语句中访问原始DOM事件，可以用特殊变量 $event ，把它传入方法
``` html
<div id="example">
  <button v-on:click="($event) => handleClick('hi',$event)">Button</button>
</div>
```
``` js
new Vue({
  el: '#example',
  methods: {
    handleClick(name,event) {
      console.log(name)
      console.log(event)
    }
  }
})
```

### 事件修饰符
修饰符是由点开头的指令后缀来表示的。

``` html
<!-- .stop -->
<!-- 阻止事件冒泡，不让他向外去执行函数，到此为止 -->
<a v-on:click.stop="doThis"></a>

<!-- .prevent -->
<!-- 阻止事件默认行为 -->
<a href="http://www.baidu.com" v-on:click.prevent="handleClick">Button</a>

<!-- .capture -->
<!-- 事件监听使用事件捕获模式 -->
<!-- 外部元素先触发事件，用于将事件绑定到外层元素的情景 -->
<div v-on:click.capture="handleClick">Button</div>

<!-- .self -->
<!-- 只在 event.target 是当前元素自身时触发处理函数 -->
<button v-on:click.self="handleClick">Button</button>

<!-- .once -->
<!-- 点击事件只触发一次 -->
<button v-on:click.once="handleClick">Button</button>

<!-- .passive -->
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成 -->
<div v-on:scroll.passive="onScroll"></div>
```

### 按键修饰符
监听常用的键盘事件，给 v-on 添加按键修饰符。
``` html
<!-- 键盘事件，按enter键时执行函数 -->
<input v-on:keyup.enter="submit">
```

### 系统修饰键
在按下相应的按键时才触发的鼠标或键盘的事件监听。
- .ctrl
- .alt
- .shift
- .meta

::: tip 提示
- 在Mac系统中，meta对应command键(⌘)
- windows系统中，meta对应Windows 徽标键(⊞)
:::

``` html
<!-- Alt + C -->
<input v-on:keyup.alt.67="handleInput">

<!-- .exact 修饰符 -->
<!-- 系统修饰符组合才会触发执行，精确修饰符行为 -->

<!-- Ctrl + Click -->
<!-- 这个时候 Alt 或 Shift 被一同按下也会触发 -->
<div v-on:click.ctrl="handleSubmit">按住Ctrl</div>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button v-on:click.ctrl.exact="onCtrlClick">按住Ctrl</button>

<!-- 只有点击的时候触发 -->
<button v-on:click.exact="onClick">Click</button>
```
::: tip
修饰键和keyup 事件一起使用时，事件触发时，修饰键必须处于按下状态。
:::

## 双向数据绑定
Vue提供了`v-model`指令，实现表单输入和应用状态之间的双向绑定。它会根据控件类型自动选中正确的方法来更新元素。v-model 在内部为不同的输入元素使用不同的 prototype 并抛出不同的事件：  
- text 和 textarea 元素使用 value prototype 和 input 事件；
- checkbox 和 radio 使用 checked prototype 和 change 事件；
- select 字段将 value 作为 prop 并将 change 作为事件。

### 绑定值
- 单个复选框，v-model 绑定的值可以是静态字符串，也可以绑定到布尔值；多个复选框绑定到同一个数组
- 单选按钮的 v-model 通常绑定到字符串
- 单选选择框时，绑定到字符串；多选时绑定一个数组

### 修饰符
- `.lazy` ,默认情况下， v-model 在每次 input 事件触发后将输入框的值和数据进行同步，lazy 修饰符将绑定 change 事件

- `.number` ,给 v-model 添加 number 修饰符，将输入的值转成数值类型

- `.trim` ,过滤输入的首尾空格符

``` html
<!-- .lazy修饰符 -->
<input v-model.lazy="msg">

<!-- .number 修饰符 -->
<input v-model.number="number" type="number">

<!-- .trim 修饰符 -->
<input v-model.trim="trimMsg">
```

## 组件
组件是可复用的Vue 实例，且带有一个名字，组件在 Vue 根实例中作为自定义组件使用。每个组件必须只有一个根元素。

复用组件都是创建一个新的实例，都有 new Vue 接收的选项，和生命周期，各自独立维护。

### data
一个组件中 data 选项必须是一个函数，在函数中返回一个对象，这样就可以维护这个被返回对象独立的拷贝，如果没有这个规则，操作组件中的代码会影响其他的所有实例

### 组件结构
组件的注册分成两种类型：全局注册和局部注册，通过 Vue.component 是全局注册，全局注册的组件可以用在其被注册智慧的任何新创建的Vue根实例。

全局注册的行为必须在根 Vue 实例创建之前发生。

### 组件传值
父组件通过在组件上设置自定义 prop attribute，子组件用 props 对象接收传递的prop值，prop attribute会变成这个组件实例的一个 prototype，就像访问 data 中的数据一样。一个组件默认可以拥有任意数量的prop，任何值都可以传递给任何 prop。

### 监听子组件事件
在父组件中，通过给子组件上使用 v-on 监听一个自定义事件的处理函数，子组件中通过调用内置的 `$emit` 方法并传入事件名来触发一个事件

``` html
<!-- 父组件内 -->
<div id="example">
  <p v-bind:style="{fontSize: customFontSize + 'px'}">控制字号大小</p>
  <custom-button v-on:setSize="customFontSize += 2"/>
</div>
```
``` js
// 子组件
Vue.component('custom-button',{
  template: `
    <button v-on:click="$emit('setSize')"></button>
  `
})

// 父组件
new Vue({
  el: '#example',
  data: {
    customFontSize: 12
  }
})
```

### 在组件上使用`v-model`
``` html
<input v-model="inputVal">
<!-- 等价于 -->
<input v-bind:value="inputVal" v-on:input="inputVal = $event.target.value">
```

在组件上使用 v-model ，要在组件内，将 input 元素的 value attribute 绑定到名为 value 的 prop上，input 事件绑定到自定的input事件抛出。
``` html
<!-- 父组件 -->
<div id="example2">
  <p>{{msg}}</p>
  <custom-input v-model="inputVal"/>
</div>

<!-- custom-input 等价于 -->
<custom-input v-bind:value="inputVal" v-on:input="inputVal = $event"/>
```
``` js
// 子组件
Vue.component('custom-input',{
  props: ['value'],
  template: `
    <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
  `
})

// 父组件
new Vue({
  el: '#example2',
  data: {
    inputVal: ''
  }
})
```

### 使用插槽
可以使用Vue 的`<slot>`元素向一个组件内插入内容，以下只是简单使用Vue的插槽元素
``` html
<custom-box>
  <p>插槽内容</p>
</custom-box>
```
``` js
Vue.component('custom-box',{
  template: `
    <div>
      <h1>使用插槽</h1>
      <slot></slot>
    </div>
  `
})
```

这篇主要记录一下Vue的一些基础使用，知识点、原理等内容在下篇介绍
