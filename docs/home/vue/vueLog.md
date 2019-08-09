---
title: vue知识点问题笔记
sidebar: false
date: '2019-05-19'
tag: # 页面的标签 
  - Vue
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: 刘哈哈 笔记 vue 个人博客 vue-press
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: vue知识点问题笔记
prev: ./git提交
next: ./vuePress
---

## vue笔记
记录一些vue开发中的知识点，以及常遇到的问题

### 父组件和子组件生命周期执行顺序及钩子函数

- 加载渲染过程  
`父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted`

- 子组件更新过程  
`父beforeUpdate->子beforeUpdate->子updated->父updated`

- 父组件更新过程  
`父beforeUpdate->父updated`

- 销毁过程  
`父beforeDestroy->子beforeDestroy->子destroyed->父destroyed`
