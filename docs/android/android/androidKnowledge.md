---
title: android 基础知识
sidebar: false
date: '2018-11-26'
tag: # 页面的标签 
  - Android
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: android 基础知识
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: 基础 Android 笔记
---
<!-- more 摘抄 -->

# android 基础知识
--------------------------------------
## UI的定义
+ 全称user interface，意为：用户界面
+ UI有View和ViewGroup组成
+ View类是所有视图（包括ViewGroup的基类）
+ View在屏幕上占据一片矩形区域，并会在上面进行内容绘制
+ ViewGroup包含一些View或ViewGroup，用于控制子View布局

## View与ViewGroup的概念
在Android APP中，所有的用户界面元素都是由View和ViewGroup的对象构成的。View是绘制在屏幕上的用户能与之交互的一个对象。而ViewGroup则是一个用于存放其他View（和ViewGroup）对象的布局容器。  
Android为我们提供了一个View和ViewGroup子类的集合，集合中提供了一些常用的输入控件(比如按钮和文本域)和各种各样的布局模式（比如线性或相对布局）。

## 用户界面布局
用户界面上的每一个组件都是用View和ViewGroup对象的层次结构来构成的，每个ViewGroup都是要给看不见的用于阻止子View的容器，子View可能是输入控件或者是UI上绘制的某块区域的小部件。  
布局规则使用XML文件定义的，使用XML元素

## 尺寸单位
+ px: pixels(像素)  
  1px的长度对应屏幕一个像素点的大小

+ dp/dip: device-indepencent pixels(设备无关像素)
  1dp = (dpi/160) px
  1dp = density px
  1px = 1/density dp

+ sp: scaled pixels(可缩放像素)
  与dp类似，但是可以根据用户的字体大小首选项进行缩放

::: warning 注意
Android在运行时会自动将dp/dip/sp为单位的尺寸转换为像素单位的值
:::

在布局文件，视图的宽高尽量用match_parent/wrap_content,如果必须指定特定值，使用dp/dip做单位，文本大小使用sp做单位

