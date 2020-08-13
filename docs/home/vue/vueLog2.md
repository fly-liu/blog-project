---
title: vue知识点问题笔记（二）
sidebar: auto
date: '2020-07-19'
tag: # 页面的标签 
  - Vue
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: 深入理解Vue 组件 prop 插槽 自定义事件 混入 双向绑定原理
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: vue知识点问题笔记（二）
# prev: ./vuePress
next: ./vueLog
---

# vue 知识点笔记
这一篇主要记录一下Vue文档深入理解的内容

## 组件名规范
定义组件名的方式有两种：
1. kebab-case（以短横线分割命名），必须在引用组件时使用 kebab-case方式；
2. PascalCase（大驼峰命名，首字母大写），使用 PascalCase 定义组件名时，在HTML模板中引用这个自定义元素，两种命名法都可以使用。例如：`<custom-component>`和`<CustomComponent>`都可以

``` js
// 使用kebab-case
Vue.component('custom-component',{...})

// 使用PascalCase
Vue.component('CustomComponent',{...})
```

## 组件注册
### 全局注册
以上代码中，组件使用的是全局注册，使用 `Vue.component(...)`这种形式，也就是说它们在注册之后，可以在任何新创建的Vue 实例中使用。

在所有子组件中也可以相互使用。全局注册的行为必须在根 Vue 实例创建之前发生。

### 局部注册
在 Vue 实例中，通过 components 选项定义要使用的组件，在 components 对象中每个属性名就是自定义组件的名字，属性值就是这个组件的对象。

注册的局部组件在其他子组件内部不可直接用，需要在 components 中定义。

``` js
// 局部注册
// 引入模块
import ComponentA from './ComponentA.vue'

var ComponentB = {/* ... */}

export default {
  components: {
    ComponentA,
    ComponentB
  }
}
```

## Prop
HTML中的 attribute 名是大小写不敏感的，浏览器会把所有的大写字符转成小写字符。也就是说使用DOM 中的模板时，camelCase（小驼峰命名）的prop名需要使用其等价的 kebab-case 命名

### 静态和动态 Prop
任何类型的值都可以传给一个 prop，传递字符串的话可以使用静态形式，数字、布尔、对象、数组需要 v-bind 告诉Vue这是一个 Javascript 表达式。
``` html
<!-- 静态形式 -->
<custom-component title="静态形式"/>

<!-- 传递数字 -->
<custom-component v-bind:number="10"/>

<!-- 传递布尔值 -->
<!-- 在没有值的情况下，表示 true -->
<custom-component isHide/>

<!-- 传递布尔值时，需要使用 v-bind，表示是一个表达式，不是字符串 -->
<custom-component v-bind:is-hide="false"/>

<!-- 传递数组 -->
<custom-component v-bind:arr="[10,20,30]"/>

<!-- 传递对象 -->
<custom-component v-bind:comment-obj="{name: 'name'}"/>
```

### 传入一个对象的所有属性
将一个对象的所有 prototype 都作为 prop 传入，可以使用不带参数的 v-bind 。
``` html
<custom-component v-bind="post"/>
<!-- 等价于 -->
<custom-component v-bind:name="post.name" v-bind:val="post.val"/>
```
``` js
data() {
  return {
    post: {
      name: 'test',
      val: 'customValue'
    }
  }
}
```

### 单向数据流
Vue中的父子组件通过 Props 传值，使用的是单向数据流，父级prop的数据更新会向下更新到子组件中，但是反过来不行，不能在子组件内部修改 prop，如果这样做了，Vue会在浏览器控制台中发出警告。

通过 prop 传递给子组件的数据，是定义到子组件的 prototype 上，可以通过this访问。

有两种常见的试图改变一个 prop 的情景：
1. 在子组件中将传入的 prop 赋值给一个本地的 data prototype，作为本地数据的初始值；
2. 子组件中接收的值需要转换，定义一个计算属性或在 watch 中监听prop。

::: tip
computed 依赖 data 中的属性的更新而改变；  

wtach 可以监听 props 中属性的变化，计算属性是依赖实例中属性值更新而执行；  

updated 钩子函数，只有事先设置好的 data 变量改变并且要在页面重新渲染完成之后,才会进updated方法，
光改变 data 数据但不渲染页面是不会进的。

场景需求：页面显示时，子组件中的数据通过父组件异步传递，子组件中根据是否有值，决定指定元素隐藏或显示。

在子组件中将传入的 prop 赋值给一个本地的 data prototype，这样就可以更新本地数据而不是直接修改prop，父组件中异步更新 prop 数据，此时子组件已创建完成，子组件中要通过 watch 监听 prop ，在 watch 中将新的 prop 赋值给 data 属性。
:::

### Prop的类型和验证
prop 可以指定类型、默认值等属性，定制prop的验证方式；prop会在组件创建之前验证，如果传入的 prop 不满足要求，Vue会在浏览器控制台警告。

类型：
- String
- Number
- Boolean
- Array
- Object
- Date
- Function
- Symbol

type也可以指定一个自定义构造函数，并通过 instanceof 来进行检查。

## 插槽
### 默认插槽
在组件内可以使用`<slot></slot>`接收插槽内容，插槽内可以包含任何模板代码，包括HTML、其他组件。给一个插槽设置后备（默认）内容，将它放到`<slot>`标签内，它只会在没有提供内容的时候显示。

### 具名插槽
组件内使用多个插槽时，给`<slot>`设置 name 属性，它可以根据 name 找到对应的 `<slot>`，一个不带 name 的`<slot>`，会隐式带有 “default”。

在父组件中，向具名插槽插入内容时，可以在一个`<template>`元素上使用 v-slot 指令，并以 v-slot 的参数形式提供名称，例：`v-slot:header`，任何没有被包裹在带有 v-slot 的 `<template>`中的内容都会被视为默认插槽的内容。

v-slot 只能添加在 `<template>`上。

v-slot 也有缩写，把参数之前的所有内容（v-slot:）替换为字符 `#`，例如：`v-slot:header="{ person }"`可以缩写为`#header="{ person }"`

该缩写只在其有参数的时候才可用，默认插槽使用时需要明确插槽名，`v-slot:default="{ person }"`

### 作用域插槽
让插槽内容能够访问子组件中才有的数据，在父级的插槽元素`<slot>`元素绑定一个 attribute，绑定在`<slot>`元素上的 attribute 被称为插槽 prop。在父级作用域中，可以使用带的 v-slot 来定义插槽prop的名字。
``` html
<!-- slot 标签，作用域插槽 -->
<span>
  <slot v-bind:user="user">{{user.name}}</slot>
</span>

<!-- v-slot方式 -->
<!-- v-slot:default 默认插槽的内容 -->
<custom-user>
  <template v-slot:default="user">
    {{user.name}}
  </template>
</custom-user>
```
可以简化默认插槽的写法，在提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板使用，可以把 v-slot 直接用在组件上。不带参数的 v-slot 被假定对应默认插槽，例：`v-slot="default"`

默认插槽的缩写语法不能和具名插槽混合使用，会导致作用域不明确，出现多个插槽时，始终未所有插槽使用完整的基于`<template>`语法。

可以使用解构赋值的语法，传入插槽prop

## 动态组件 keep-alive
在多标签的页面使用`is` attribute 来切换不同的组件，不会保持这些组件的状态。如果想在组件切换时想保持这些组件的状态，在组件第一次创建时缓存下来，以避免反复渲染导致的性能问题，可以使用`<keep-alive>`元素将动态组件包裹起来。

`<keep-alive>`有两个生命周期函数，activated（每次切换回来都会执行，组件是缓存不是销毁的话，created只会执行一次）、deactivated（每次离开当前组件会执行）

## 访问元素
### 访问根实例
在每个`new Vue`实例的子组件中，访问根实例可通过`$root`访问。

### 访问父级组件实例
通过`$parent`从一个子组件访问父组件的实例，这样可以随时触发父级组件，替代将数据通过prop的方式传入子组件。

### 访问子组件实例或子元素
通过prop和自定义事件可以实现父子组件交互，有时需要在js中直接访问一个子组件，可以通过在组件上定义 ref 属性为子组件赋予一个ID引用。通过 `this.$refs.ID`的形式访问子元素，调用子组件方法。

当 ref 和 v-for 一起使用时，得到的ref将是一个包含了对应数据源的子组件数组。

$refs 只会在组件渲染完成之后生效，并且它们不是响应式的。

### 依赖注入
用到了两个实例选项，provide 和 inject。

provide 选项允许我们指定我们想要提供给后代组件的数据/方法；在任何后代组件中，都可以使用 inject 选项来接收指定的，想要添加到这个实例上的 prototype。

相比 $parent 来说，这个用法可以让我们在任何后代组件中访问这个属性/方法，而不需要暴露整个实例。可以把依赖注入看作一部分“大范围有效的prop”

### 事件监听
需要在一个组件实例上手动监听时，可以使用一些内容方法，
- `$on(eventName,eventHandler)` 侦听一个事件
- `$once(eventName,eventHandler)` 一次性侦听事件
- `$off(eventName,eventHandler)` 停止侦听一个事件

Vue 的事件系统不同于浏览器的EventTarget API，虽然它们的运行起来是相似的，但是 $emit,$on,$off 并不是 dispatchEvent、addEventListener、removeEventListener 的别名。

## 混入
使用混入（mixin）来分发Vue组件中可复用的功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有的混入对象的选项都被加入到使用“混入”的组件中。

当组件和混入对象含有同名的选项时，这些选项将会“合并”，数据对象在内部会进行递归合并，以组件数据优先。同名钩子函数将合并为一个数组，因此都将被调用。混入对象的钩子将在组件自身的钩子函数之前调用。

### 全局混入
混入也可以进行全局注册。一旦使用全局混入，将影响每一个之后创建的Vue实例。

``` js
// 全局混入
Vue.mixin({
  created() {
    // ...
  }
})

// 局部混入
var mixin = {
  methods: {
    foo() {
      console.log('foo')
    }
  }
}

var vm = new Vue({
  mixins: [mixin],
  methods: {
    bar() {
      console.log('bar')
    }
  }
})

vm.foo() // foo
vm.bar() // bar
```

## 插件
插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制，一般有下面几种：
- 添加全局方法或者 prototype
- 添加全局资源，指令/过滤器/过渡等
- 通过全局混入来添加一些组件选项
- 添加Vue实例方法，通过把它们添加到`Vue.prototype`上实现
- 一个库，提供自己的API，同时提供上面提到的一个或多个功能

通过全局方法`Vue.use()`使用插件，它需要在调用`new Vue()`启动应用之前完成。

`Vue.use`会自动阻止多次注册相同组件。

## 过滤器
过滤器常用于一些数据格式转换，过滤器可以用在两个地方，双花括号插值和 v-bind 表达式。过滤器应该被添加到 JavaScript表达式尾部，由`|`（管道）符号指示。
``` html
<!-- 双括号中使用 -->
{{date | dateFilter}}

<!-- v-bind中使用 -->
<div v-bind:text="rawId | formatId"></div>
```
``` js
// 全局过滤器
Vue.filter('dateFilter',(value) => {
  if(!value) return ''
  return new Date(value)
})

// 局部过滤器
new Vue({
  // ...
  filters: {
    formatId(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1) 
    }
  }
  // ...
})
```

## 使用Vuex
访问 data 对象时，一个Vue实例只是简单的代理访问。多个实例共享想要共享一个数据数据时，使用store模式， 改变 store 中 state 的的唯一途径是显式的提交 (commit)mutation 。(dispatch)action 提交的是 mutation ，而不是直接变更状态，action 可以包含任意异步操作

## Vue 指令的实现原理

### v-model实现原理



## 父组件和子组件生命周期执行顺序及钩子函数

- 加载渲染过程  
`父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted`

- 子组件更新过程  
`父beforeUpdate->子beforeUpdate->子updated->父updated`

- 父组件更新过程  
`父beforeUpdate->父updated`

- 销毁过程  
`父beforeDestroy->子beforeDestroy->子destroyed->父destroyed`


