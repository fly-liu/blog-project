---
sidebar: true
date: '2018-09-18'
tag: 'Android'
---

## Android开发 基础部分

### Android项目 目录
+ src: 包含项目中所有.java源文件，默认情况下，它包括一个MainActivity.java源文件对应的活动类，当应用程序通过应用图标启动时，将运行它
  + MainActivity.java 主界面类
+ gen: 自动生成的源码文件夹，包含由编译器生成的.R文件，引用了所有项目中的资源。该文件不能被修改
  + R.java: 对应res文件夹
    - drawble: 图片类
    - layout： 布局
    - string： 字符串

+ bin: 包含编译生成文件的目录，如：.apk包文件，以及运行Android应用程序所需要的其他所有东西  
+ libs: 依赖的jar包目录  
+ assets: 资源文件  
+ res  
  + anim/ 定义动画属性的XML文件。他们被保存在res/anim/文件夹下，通过R.anim类访问  

  + color/ 定义颜色状态列表的XML文件。它们被保存在res/color/文件夹下，通过R.color类访问  

  + drawable/ 图片文件，如.png,.jpg,.gif或者XML文件，被编译为位图、状态列表、形状、动画图片。通过R.drawable类访问  

  + layout: 定义用户界面布局的XML文件。它们被保存在res/layout/文件夹下，通过R.layout类访问  

  + menu/ 定义应用程序菜单的XML文件，如选项菜单，上下文菜单，子菜单等。它们被保存在res/menu/文件夹下，通过R.menu类访问  

  + raw/ 任意的文件以它们的原始形式保存。需要根据名为R.raw.filename的资源ID，通过调用Resource.openRawResource()来打开raw文件  

  + values/ 包含简单值(如字符串，整数，颜色等)的XML文件。这里有一些文件夹下的资源命名规范。  
    + arrays.xml代表数组资源，通过R.array类访问；  
    + integers.xml代表整数资源，通过R.integer类访问；  
    + bools.xml代表布尔值资源，通过R.bool类访问；  
    + colors.xml代表颜色资源，通过R.color类访问；  
    + dimens.xml代表维度值，通过R.dimen类访问；  
    + strings.xml代表字符串资源，通过R.string类访问；  
    + styles.xml代表样式资源，通过R.style类访问  

  + xml/ 可以通过调用Resources.getXML()来在运行时读取任意的XML文件。可以在这里保存运行时使用的各种配置文件  

+ AndroidManifest.xml: 这个应用程序的清单文件，描述了应用程序的基础特性，定义它的各种组件
  + package属性：指定当前应用的唯一包名（标识，不同的应用此值不相同）
  + versionName：指定应用的版本号

#### Manifest文件
属性：
andriod:icon 指定应用程序图标  
android:name 指定一个Activity类子类的全名  
andriod:label 指定用于活动名称的字符串。可以用标签指定多个活动  
意图过滤器action 命名为android.intent.action.MAIN，表明这个活动被用做应用的启动入口。  
意图过滤器的category 命名为android.intent.category.LAUNCHER,表明应用程序可以通过设备启动器的图标来启动  
@string指的是strings.xml

##### Strings文件
strings.xml文件在res/value文件夹下，它包含应用程序使用到的所有文本。

##### R 文件
gen/com.example.helloworld/R.java文件是活动的Java文件，如MainActivity.java的和资源如strings.xml之间的胶水。这是自动生成的文件，不要修改R.java的文件内容  

##### Layout 文件
TextView 是一个Android的控件用于构建用户图形界面。


### 替代资源
要为特定的配置的确定一系列替代资源，遵循如下的步骤：  
+ 在res/ 下创建一个新的目录，以 <resource_name>_<config_qualifier> 的方式命名。这里的 resources_name 是上表中提到的任意资源，如布局、图片等。 qualifier 将确定个性的配置使用哪些资源。

### Activity(活动)
活动代表了一个具有用户界面的单一屏幕，如 Java 的窗口或者帧。Android 的活动是 ContextThemeWrapper 类的子类。Android 系统初始化它的程序是通过活动中的 onCreate() 回调的调用开始的。

#### Activity类定义的回调：
+ onCreacte()  这是第一个回调，在活动第一次创建时调用 
+ onStart()  活动为用户可见时被调用
+ onResume()  在应用程序与用户开始交互的时候调用
+ onPause()  被暂停的活动无法接受用户输入，不能执行任何代码。当当前活动将要被暂停，上一个活动将要被恢复是调用
+ Stop()  活动不可见时调用
+ onDestroy()  活动被系统销毁之前调用
+ onRestart()  活动被停止之后重新打开时调用

> 一个应用程序可以有1个或多个活动，而没有任何限制。每个为应用程序所定义的活动都需要在AndroidManifest.xml中声明。应用的主要活动需要在清单中声明，且意图过滤器标签中需要包含 MAIN 动作和 LAUNCHER 类别。

### Service(Andriod 服务)
服务是一个后台运行的组件，执行长时间运行且不需要用户交互的任务。即使应用被销毁也依然可以工作。服务基本上包含两种状态:
+ Started
Android的应用程序组件，如活动，通过startService()启动了服务，则服务是Started状态。一旦启动，服务可以在后台无限期运行，即使启动它的组件已经被销毁

+ Bound
当Android的应用程序组件通过bindService()绑定了服务，则服务是Bound状态。Bound状态的服务提供了一个客户服务器接口来允许组件与服务进行交互，如发送请求，获取结果，甚至通过IPC来进行跨进程通信  

要创建服务，你需要创建一个继承自Service基类或者它的已知子类的Java类。Service基类定义了不同的回调方法和多数重要方法。

+ onStartCommand()  其他组件(如活动)通过调用startService()来请求启动服务时，系统调用该方法。如果你实现该方法，你有责任在工作完成时通过stopSelf()或者stopService()方法来停止服务

+ onBind()  当其他组件想要通过bindService()来绑定服务时，系统调用该方法。如果你实现该方法，你需要返回IBinder对象来提供一个接口，以便客户来与服务通信。你必须实现该方法，如果你不允许绑定，则直接返回null。

+ onUnbind()  当客户中断所有服务发布的特殊接口时，系统调用该方法。

+ onRebind()  当新的客户端与服务连接，且此前它已经通过onUnbind(Intent)通知断开连接时，系统调用该方法。

+ onCreate()  当服务通过onStartCommand()和onBind()被第一次创建的时候，系统调用该方法。该调用要求执行一次性安装。

+ onDestroy()  当服务不再有用或者被销毁时，系统调用该方法。你的服务需要实现该方法来清理任何资源，如线程，已注册的监听器，接收器等。

### Activity 类
继承Activity类或AppCompatActivity  
重写的方法：  
onCreate：在当前(Activity)对象创建的时候自动调用    
  super.onCreate(savedInstanceState): 调用父类做一些默认初始化工作
  setContentView(R.layout.activity_main): 设置窗口要显示内容视图（界面/布局），指定布局文件在R中所对应的变量，加载布局文件最终显示到窗口中

> 回调方法：不是我们调用，是系统在一定条件下自动调用的，基本都以onXXX 开头，这些方法我们不需要调用，一般指数去重写此类方法


