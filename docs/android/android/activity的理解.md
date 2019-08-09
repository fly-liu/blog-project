---
title: Activity 理解
sidebar: true
date: '2018-11-30'
tag: # 页面的标签 
  - Android
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: 刘哈哈 个人博客 笔记 Activity 理解
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: Activity Android 笔记
prev: false
next: ./androidBasics
---
<!-- more 摘抄 -->

# Activity 理解
### 组件的特点：
- 它的类必须实现特定接口或基础特定类
- 需要在配置文件中配置其全类名
- 它的对象不是通过new来创建的，而是系统自动创建的
- 它的对象具有一定的生命周期，它的类中有对应的生命周期回调方法

### 哪些地方用到反射（Andriod）：
a. 配置文本中配置全类名
b. 布局文件定义标签
c. 显示意图，Intent(Context context,Class cls);

## Activity的定义：
- Activity，直译为活动，它是Android定义的四大应用组件之一，也是最重要用的最多的
- Activity用来提供一个能让用户操作并与之交互的界面
- 一个应用有多个界面，也就是包含多个Activity

## Servlet的理解
+ 狭义：
  - Servlet是一个interface，我们的Servlet类都必须是此接口的实现类
+ 广义：
  - Servlet是一种服务器端的组件，用来处理客户端（浏览器）提交的请求，并返回一个响应界面

## Activity和Servlet的对比
|  |Servlet|Activity|
|--|-----:|-------:|
|**组件**|服务器端组件|Andriod客户端组件|
|**规范定义的接口或类**|Servlet接口|Activity类|
|**注册**|web.xml|AndroidManifest.xml|
|**声明周期方法**|init()<br> service()<br> doGet()<br> doPost()<br> destory()|onCreate()<br> onStart()<br> onResume()<br> ......<br> onDestroy()|
|**请求的发出源**|浏览器/移动设备|手机屏幕|

## Activity状态
+ 运行状态：可见也可操作
+ 暂停状态：可见但不可操作
+ 停止状态：不可见但对象存在
+ 死亡状态：对象不存在

-----------------------------------------------------------

## Intent的理解
+ Intent,直译为意图，也就是你想做什么或者去哪
+ Intent是Activity,Service和BroadcastReceiver这三个应用组件之间进行通信的信使
  - 例如：在Activity中启动另一个Activity
+ 意图对象可以携带对象

::: warning 注意
Intent不是Andriod中的四大应用组件之一
:::

## Intent的分类
+ 显式意图：明确指定的目标组件的意图
  - 创建对象：Intent(Context context,Class clazz)
  - 何时使用：当操作当前自己应用的组件时使用
+ 隐式意图：没有明确指定目标组件的意图
  - 创建对象：Intent(String action)
  - 何时使用：当操作其他应用的组件时使用

## IntentFilter的理解
+ 意图过滤器
+ 在配置Activity时，可以为Activity指定一个IntentFilter的配置
+ 如果你的Activity希望其他应用能访问到，需要配置`<intent-filter>`
+ 如果你想启动其他应用的界面你必须用隐式Intent，且目标界面Activity配置了`<intent-filter>`
+ 它的作用类似于web中的为Servlet配置了`<url-pattern>`

## 相关API
### Activity的使用（活动）: 
+ 定义：
  + 定义一个类 extends Activity，并重写生命周期方法
  + 在功能清单文件中使用>`<activity>`注册
+ 启动：
  + 一般启动Activity：startActivity(Intent intent)
  + 带回调启动Activity：startActivityForResult(int reqCode,Intent intent)
+ 结束：
  + 设置要返回的结果：setResult(int resultCode,Intent data)
  + 结束当前Activity：finish()
+ 回调方法：onActivityResult(int reqCode,int resultCode,Intent data)
+ 得到启动Activity的意图：getIntent()

### Intent的使用（意图）: 
+ 创建：  
  + 创建显式意图对象：Intent(Context packageContext,Class<?> cls)
  + 创建隐式意图对象：Intent(String action)，与Activity与`<intent-filter>`的action对应
+ 携带数据：  
  + 保存额外数据：putExtra(String name,Xxx value),内部用map容器保存
  + 设置有特定前缀的uri数据：setData(Uri data)
+ 读取数据：  
  + 获取额外数据：Xxx getXxxExtra(String name)
  + 获取特定前缀的数据：Uri getData()

## Task Stack（Back Stack）结构来存储管理启动的Activity
一个应用启动，系统就会为其创建一个对应的Task Stack来存储并管理该应用的Activity对象

### Activity的launchMode
启动一个Activity有时需要总是创建一个新对象，有时需要复用已有的对象，可以在配置Activity时通过launchMode属性指定
+ standard: 标准模式，每次调用startActivity()方法就会产生一个新的实例
+ singleTop: 如果已有一个实例位于Activity栈顶部时，就不产生新的实例；如果不位于栈顶，会产生一个新的实例
+ singleTask: 只有一个实例，默认在当前Task中
+ singleInstance: 只有一个实例，创建时会新建一个栈，且此栈中不能有其他对象

