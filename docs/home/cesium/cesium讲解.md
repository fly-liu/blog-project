---
title: cesium讲解
sidebar: auto
date: '2020-07-29'
tag: # 页面的标签 
  - Javascript
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: cesium讲解 viewer 影像图层 地形图层 材质 模型
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: cesium讲解 材质 模型
# prev: 
next: ./cesium基础
---

# cesium.js 讲解
## 介绍
Cesium 是一个用于显示三维地球和地图的开源javascript 3d地图引擎，它是基于Apache 2.0 许可的开源程序，可用于商业和非商业用途；

Cesium 使用 WebGL 来进行硬件加速图形，使用时不需要任何插件，但浏览器必须支持WebGL；

## Cesium 的功能
- 支持 2D, 2.5D, 3D 形式的地图展示

- 可以绘制各种几何图形、高亮区域、显示海量三维模型数据、影像数据、地形高程数据、矢量数据等等；
  - 三维模型格式支持gltf、三维瓦片（切片）模型格式支持3d tiles。矢量数据支持geojson、topojson格式。影像数据支持wmts等。高程支持STK格式。
  
- 可用于动态数据可视化并提供良好的触摸支持，支持绝大部分的浏览器和移动端环境。

- Cesium 还支持基于时间轴的动画效果

### Cesium Ion
Cesium Ion 是一个3d内容的发布中心并且可以把你自己的数据进行切片、发布服务。CesiumJS和 ion 配合起来可以创建世界级3d地图程序。

[参考：Cesium实验室](https://zhuanlan.zhihu.com/p/34217817)

## 运行 Cesium 官方库
可以去 [github](https://github.com/CesiumGS/cesium) 拉取源码，就可以在本地运行跟官方提供的示例环境

### 源码运行步骤
1. 进入github仓库，clone项目到本地  
`git clone git@github.com:CesiumGS/cesium.git`

2. 使用npm 打包编译一下，不然进入cesium示例中没有 Developent 分类  
`npm run build`

3. 打包源码，生成API文档  
`npm run release`

4. 启动本地服务  
`npm start`

5. 打开本地服务网址，  

   进入cesium相关示例，选择 `Sandcastle`

   进入API文档，选择 `Documentation`

## 在项目中引入 cesium.js
- 普通项目
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <!-- 在HTML的head部分引入CesiumJS库 -->
  <script src="https://cesium.com/downloads/cesiumjs/releases/1.71/Build/Cesium/Cesium.js"></script>
  <link href="https://cesium.com/downloads/cesiumjs/releases/1.71/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
</head>
<body>
  <!-- 创建一个Cesium 容器 -->
  <div id="cesiumContainer" style="width: 700px; height:400px"></div>
  <script>
    // Cesium Ion 用户 token
    Cesium.Ion.defaultAccessToken = 'your_access_token';

    // 创建 Cesium 实例
    var viewer = new Cesium.Viewer('cesiumContainer', {
      // 添加地形数据
      terrainProvider: Cesium.createWorldTerrain()
    });

    // 添加 3d title 切片模型
    var tileset = viewer.scene.primitives.add(
        new Cesium.Cesium3DTileset({
            url: Cesium.IonResource.fromAssetId(your_access_token)
        })
    );

    // 根据 3d title 设置默认视角
    viewer.zoomTo(tileset);
  </script>
</body>
</html>
```
> 使用时最好去 Cesium Ion 注册一个Cesium账号，访问影像底图（卫星图层） 或 使用 Cesium Ion 中自定义数据时要带上 token

- vue-cli3 项目引入
> 后面的项目配置以“气网项目”为例，默认以安装过 vue-cli3 为基础进行配置。

1. 使用 npm 安装 cesium 依赖: `npm install cesium --save`
2. 修改 vue.config.js 配置文件
``` js
const CopyWebpackPlugin = require('copy-webpack-plugin')
const cesiumSource = './node_modules/cesium/Source'
const cesiumWorkers = '../Build/Cesium/Workers'
```
说明：定义路径，在 webpack 配置中引入 copy-webpack-plugin 插件，在项目打包时拷贝 cesium 库中的资源文件到项目打包的根目录

vue.config.js 完整配置：  
``` js
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const cesiumSource = './node_modules/cesium/Source'
const cesiumWorkers = '../Build/Cesium/Workers'

module.exports = {
  // 公共路径
  publicPath: process.env.NODE_ENV === 'production' ? '/ioc-dashboard/' : '/',
  // 打包路径
  outputDir: "ioc-dashboard", // 打包的目录
  // 静态资源路径
  assetsDir: "wassets",
  lintOnSave: false, // 关闭eslint语法检测
  //解决跨域
  devServer: {
    port: 9521,
    overlay: {
      warnings: false,
      errors: false
    },
    //端口代理
    proxy: {
      
    },

  },
  configureWebpack: {
    output: {
      sourcePrefix: ' '
    },
    amd: {
      toUrlUndefined: true
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        'cesium': path.resolve(__dirname, cesiumSource),
        'assets': path.resolve('src/assets')
      }
    },
    plugins: [
      new CopyWebpackPlugin([{
        from: path.join(cesiumSource, cesiumWorkers),
        to: 'Workers'
      }]),
      new CopyWebpackPlugin([{
        from: path.join(cesiumSource, 'Assets'),
        to: 'Assets'
      }]),
      new CopyWebpackPlugin([{
        from: path.join(cesiumSource, 'Widgets'),
        to: 'Widgets'
      }]),
      new CopyWebpackPlugin([{
        from: path.join(cesiumSource, 'ThirdParty/Workers'),
        to: 'ThirdParty/Workers'
      }]),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('./')
      }),
    ],
    externals:  {
      //此处引号中的urlConfig必须和window.urlConfig一致
      urlConfig: "urlConfig"
    },
    module: {
      // 阻止依赖报警
      unknownContextCritical: false
    }
  },
}
``` 

3. main.js 引入
``` js
// ...

// 因为在 cesium 1.63 版本之前是使用 AMD 方式进行编译， 
// cesium 1.63 之后使用 ES6 重构，改用 require 引入
var Cesium = require("cesium/Cesium")

// 或者 使用 import * as Cesium from 'cesium/Cesium' 的方式引入，可能会有依赖报警

// import Cesium from 'cesium/Cesium' 这种形式是不可行的

import 'cesium/Widgets/widgets.css'

// ...

// 将 Cesium 挂载到 window 或 Vue 上
window.Cesium = Cesium
```

## 创建 viewer 控件
viewer 控件是 cesium 中最常见的控件，它提供了基本的虚拟地球显示和众多的控制选项。
``` js
var viewer = new Cesium.Viewer( 'cesiumContainer', {
  animation : false, // 是否创建动画小器件，左下角仪表
  shouldAnimate: true, //  启用时间轴动画
  baseLayerPicker : false, // 是否显示图层选择器
  fullscreenButton : false, // 是否显示全屏按钮
  geocoder : false, // 是否显示geocoder小器件，右上角查询按钮
  homeButton : false, // 是否显示Home按钮
  infoBox : true, // 是否显示信息框
  sceneModePicker : false, // 是否显示3D/2D选择器
  selectionIndicator : false, // 是否显示选取指示器组件
  timeline : false, // 是否显示时间轴
  navigationHelpButton : false, // 是否显示右上角的帮助按钮
  scene3DOnly : true, // 如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
  clock : new Cesium.Clock(), // 用于控制当前时间的时钟对象
  selectedImageryProviderViewModel : undefined, // 当前图像图层的显示模型，仅baseLayerPicker设为true有意义
  imageryProviderViewModels : Cesium.createDefaultImageryProviderViewModels(), // 可供BaseLayerPicker选择的图像图层ProviderViewModel数组
  selectedTerrainProviderViewModel : undefined, // 当前地形图层的显示模型，仅baseLayerPicker设为true有意义
  terrainProviderViewModels : Cesium.createDefaultTerrainProviderViewModels(), // 可供BaseLayerPicker选择的地形图层ProviderViewModel数组
  imageryProvider : new Cesium.OpenStreetMapImageryProvider( {
    url : 'http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali' // 加载谷歌地图
  } ), // 图像图层提供者，仅baseLayerPicker设为false有意义
  terrainProvider : Cesium.createWorldTerrain({
    requestWaterMask : true, // 请求水面数据
    requestVertexNormals : true // 请求光照数据
  }), // 地形图层提供者，仅baseLayerPicker设为false有意义
  skyBox : new Cesium.SkyBox({
    sources : {
      positiveX : 'Cesium-1.7.1/Skybox/px.jpg',
      negativeX : 'Cesium-1.7.1/Skybox/mx.jpg',
      positiveY : 'Cesium-1.7.1/Skybox/py.jpg',
      negativeY : 'Cesium-1.7.1/Skybox/my.jpg',
      positiveZ : 'Cesium-1.7.1/Skybox/pz.jpg',
      negativeZ : 'Cesium-1.7.1/Skybox/mz.jpg'
    }
  }), // 用于渲染星空的SkyBox对象
  fullscreenElement : document.body, // 全屏时渲染的HTML元素,
  useDefaultRenderLoop : true, // 如果需要控制渲染循环，则设为true
  targetFrameRate : undefined, // 使用默认render loop时的帧率
  showRenderLoopErrors : false, // 如果设为true，将在一个HTML面板中显示错误信息
  automaticallyTrackDataSourceClocks : true, // 自动追踪最近添加的数据源的时钟设置
  contextOptions : undefined, // 传递给Scene对象的上下文参数（scene.options）
  sceneMode : Cesium.SceneMode.SCENE3D, // 初始场景模式
  mapProjection : new Cesium.WebMercatorProjection(), // 地图投影体系
  dataSources : new Cesium.DataSourceCollection() // 需要进行可视化的数据源的集合
  globe: true, // 是否添加地球仪
} );

// 开启全球光照，阳光照射区域高亮
viewer.scene.globe.enableLighting = false;

// 打开深度检测，那么在地形以下的对象不可见
viewer.scene.globe.depthTestAgainstTerrain = true;

// 去掉太阳
viewer.scene.sun.destroy();
viewer.scene.sun = undefined;

// 去掉月亮
viewer.scene.moon.destroy();
viewer.scene.moon = undefined;

// 显示帧速(FPS)
viewer.scene.debugShowFramesPerSecond = true;

// 隐藏 cesium 商标
viewer._cesiumWidget._creditContainer.style.display = "none";

// 挂载 viewer 到window
window.viewer = viewer;
```
- geocoder: 查找位置工具，查找到之后会将镜头对准找到的地址，默认使用bing地图
- homeButton: 视角返回初始位置
- sceneModePicker: 选择视角的模式，有三种：3D，2D，哥伦布视图(CV)
- baseLayerPicker: 图层选择器，选择要显示的地图服务和地形服务
- animation: 动画器件，控制视图动画的播放速度
- timeline: 时间线,指示当前时间，并允许用户跳到特定的时间
- terrainProvider: 使用createWorldTerrain辅助函数去创建 Cesium全球地形。requestWaterMask 和 requestVertexNormals 为可选项，告诉Cesium去请求额外的水面数据和光照数据。 默认都为false.

加载单个模型时，如果不需要显示三维球，将 viewer 配置中的 globe 设置为 false

## 影像图层
影像是Cesium程序一个关键元素。它是覆盖在地表的各种不同精度的图像集合。根据相机的朝向和距离，Cesium将请求和渲染不同LOD或者缩放级别下的图像。

Cesium支持多个影像图层同时加载、删除、排序和调整。

Cesium为影像图层提供了大量方法，类似调整颜色、混合等。

#### 支持的格式：
- WMS
- TMS
- WMTS (with time dynamic imagery)
- ArcGIS
- Bing Maps
- Google Earth
- Mapbox
- Open Street Map

Cesium默认使用Bing map的影像图层。也可以加载一些国内地图

## 地形图层
Cesium支持渐进流式加载和渲染全球高精度地形，并且包含海、湖、河等水面效果。和影像图层一样，Cesium需要在服务端预先把地形数据处理为切片形式，在客户端基于当前相机位置去请求和渲染地形切片。

[参考: 地形图层](https://my.oschina.net/u/1585572/blog/290481)

## 场景配置
cesium 的场景主要通过 viewer.scene 控制，这个类控制着 viewer 中所有的图形元素

先了解一下 cesium 设置位置的类和使用的坐标系：
- [Cartesian3(x, y, z)](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html) ，三维笛卡尔（直角）坐标 – 当用来表示位置的时候，这个坐标指在地固坐标系（Earth fixed-frame (ECEF)）下，相对地球中心的坐标位置，单位是米。

- [Cartographic(longitude, latitude, height)](https://cesium.com/docs/cesiumjs-ref-doc/Cartographic.html) ，使用经纬度（弧度）和高度(WGS84地球高程)描述的三维坐标。

- [HeadingPitchRoll(heading, pitch, roll)](https://cesium.com/docs/cesiumjs-ref-doc/HeadingPitchRoll.html) ，在ENU（East-North-Up）坐标系中，相对坐标轴的旋转（弧度）。Heading 相对负z轴（垂直向下）. Pitch 相对负y轴. Roll相对正x轴

- [Quaternion(x, y, z, w)](https://cesium.com/docs/cesiumjs-ref-doc/Quaternion.html) ，使用四维坐标描述的三维旋转

cesium 中设置对象的位置，基本上会用这些方法，cesium 还提供的有互相转换的函数。详情请查看 [cesium 文档](https://cesium.com/docs/cesiumjs-ref-doc/)

cesium 中常用的坐标有两种 WGS84 地理坐标系和笛卡尔空间坐标系。平时使用经纬度指定一个地点就是使用 WGS84坐标，笛卡尔空间坐标系的原点是椭球的中心，用来做一些空间位置变换，如平移、缩放等。

## 控制相机（Camera）
Camera 是 viewer.scene 的一个属性，用来控制当前可见范围；可以设置相机的位置和朝向。

相机方法中的参数配置，就是上面提到的设置位置类下的一些方法。

一些常用方法：
- Camera.setView(options): 立即设置相机位置和朝向。
- Camera.zoomIn(amount): 沿相机的视角矢量 缩放。
- Camera.zoomOut(amount): 沿与相机视角向量相反的方向 缩放。
- Camera.flyTo(options): 创建从一个位置到另一个位置的相机飞行动画。
- Camera.lookAt(target, offset): 依据目标偏移来设置相机位置和朝向。
- Camera.move(direction, amount): 沿着direction方向移动相机。
- Camera.rotate(axis, angle): 绕着任意轴旋转相机。

默认情况下 zoomTo, flyTo 场景鼠标和触摸事件。 是下面的相机控制方法:

- 左键单击和拖拽 - 沿着地球表面平移（调整相机位置）.
- 右键单击和拖拽 - 相机放大缩小（调整相机距离）.
- 滚轮 - 相机放大缩小（调整相机距离）.
- 中间按下和拖拽 - 围绕地球表面旋转相机（调整相机方向）。

[参考：Cesium实验室](https://www.jianshu.com/p/24ffa692aac3)

## 空间数据可视化
无论最初是什么格式，所有的空间矢量数据在 cesium 中都是使用 Entity 相关的API去展示。

Entity API 可以绘制如：点，图标，文字标注，折线，模型，图形和立体图形。

### Entity API 简介
cesium 提供了两类 API：
1. 面向图形开发人员的底层API，通常称为“Primitive API”。主要目的是为了完成（可视化）任务的最少的抽象需求，使用图形学术语，具有很大的灵活性，需要具有图形学编程的知识。每种可视化都有自己鲜明的特色。此外，他们每种都有自己的独特的性能提升方式，也需要遵守不同的优化原则。

2. 高级别的数据驱动的API，称为“Entity API”。主要目的是定义一组高级对象，它们把可视化和信息存储到统一的数据结果中，这个对象叫Entity。它让我们更加关注我们的数据展示而不是底层的可视化机制。它提供了很方便的创建复杂的，与静态数据相匹配的随时间变化的可视化效果。其底层使用 Primitive API

## 通过 Entity 创建各种样式的几何体
``` js
var viewer = new Cesium.Viewer('cesiumContainer'); //创建一个查看器（Viewer widget）
var wyoming = viewer.entities.add({  //添加一个实体，仅需要传递一个简单JSON对象，返回值是一个Entity对象
  name : 'Wyoming',
  polygon : {
    hierarchy : Cesium.Cartesian3.fromDegreesArray([//一组地理坐标
      -109.080842,45.002073,
      -105.91517,45.002073,
      -104.058488,44.996596,
      -104.053011,43.002989,
      -104.053011,41.003906,
      -105.728954,40.998429,
      -107.919731,41.003906,
      -109.04798,40.998429,
      -111.047063,40.998429,
      -111.047063,42.000709,
      -111.047063,44.476286,
      -111.05254,45.002073]),
    material : Cesium.Color.RED.withAlpha(0.5), //材质
    outline : true, //是否显示轮廓
    outlineColor : Cesium.Color.BLACK //轮廓的颜色
  }
});
viewer.zoomTo(wyoming);//缩放、平移视图使实体可见 
```
通过 viewer.entities.add 添加 Entity 。传给 add 方法的参数一个包含了初始化配置的js 对象。返回值就是 entity 对象

Entity 的配置项里有大量的参数，通过 配置 add 方法中的对象参数添加其他形状和立体
- 面和体 box ，例：`viewer.entities.add({ name : 'testBox', box : { // ... } })`

- 圆和椭圆 ellipse ，例：`viewer.entities.add({ name : 'testEllipse', ellipse : { // ... } })`

- corridor（通道）corridor ，例：`viewer.entities.add({ name : 'testCorridor', corridor : { // ... } })`

- 圆柱和圆锥 cylinder ，例：`viewer.entities.add({ name : 'testCylinder', cylinder : { // ... } })`

- 多边形 polygon ，例：`viewer.entities.add({ name : 'testPolygon', polygon : { // ... } })`

- 折线 polyline ，例：`viewer.entities.add({ name : 'testPolyline', polyline : { // ... } })`

- 多段线体 polylineVolume ，例：`viewer.entities.add({ name : 'testPolylineVolume', polylineVolume : { // ... } })`

- 矩形 rectangle ，例：`viewer.entities.add({ name : 'testRectangle', rectangle : { // ... } })`

- 球和椭球 ellipsoid ，例：`viewer.entities.add({ name : 'testEllipsoid', ellipsoid : { // ... } })`

- 墙 wall ，例：`viewer.entities.add({ name : 'testWall', wall : { // ... } })`

#### 材质和轮廓
这些几何体各自有所不同，多数形状均支持通过一致的方式来设置属性、控制外观。
- fill：布尔型，用于指定目标形状是否被填充
- outline：布尔型，用于指定是否绘制形状的边缘
- material：如果fill为true，该属性可以控制填充的材质类型

##### 材质
设置颜色和图片材质时，可直接将颜色值或图片路径赋值给 material ，Cesium回自动创建 ColorMaterialProperty 或者ImageMaterialProperty对象。更复杂的材质需要手动创建 MaterialProperty对象。Entity 面和体支持 颜色(colors),纹理图片（ images）,棋盘 （checkerboard）, 条纹（stripe）, 网格（grid）等材质。

##### 轮廓
outline没有对应的材质配置，而是用两个独立的属性outlineColor和outlineWidth。

::: warning 注意
outlineWidth属性仅仅在非windows系统上有效，比如Android, iOS, Linux, 和OS X。Windows系统上边线宽度永远为1。主要是因为三大主流浏览器引擎在windows平台上实现webgl上的技术限制。
:::

##### 高度和拉伸
所有的形状均默认均是沿着地表的，目前圆形、椭圆、矩形可以在一定高度浮空显示，或者拉伸为Volume。
``` js
greenRectangle.rectangle.height = 10000 //设置高度
greenRectangle.rectangle.extrudedHeight = 5000 //设置拉伸高度
```

Cesium总是使用米、弧度、秒为度量单位。

``` js
// 矩形
// 绿色旋转、拉伸的矩形
var greenRectangle = viewer.entities.add({
  name : 'Green translucent, rotated, and extruded rectangle',
  rectangle : {
    coordinates : Cesium.Rectangle.fromDegrees(-100.0, 30.0, -90.0, 40.0),
    material : Cesium.Color.GREEN.withAlpha(0.5),
    rotation : Cesium.Math.toRadians(45),
    extrudedHeight : 300000.0,
    height : 100000.0,
    outline : true,
    outlineColor : Cesium.Color.GREEN
  }
});
```

### 选中和描述
除非明确禁用，否则点击Entity将在它的位置会显示 SelectionIndicator 控件，并且在 InfoBox 控件里显示它的描述信息。也可以通过 Entity.description 设置一段HTML当作infobox的内容。

### Entity 与 相机控制
双击Entity或者点击 InfoBox左上角按钮，会默认使用 zoomTo 方法，默认自动计算一个视图，确保所有所有传到方法里的entity都可见，相机朝向正北，以45°倾斜俯视。可以提供一个自定义的heading, pitch, and range.来修改这个朝向。

## 管理 Entity 集合
EntityCollection 对象是一个从 Entity Id 到 Entity 的关联数组，其提供例如add、remove、removeAll之类的常规函数，用于添加或者删除某个Entity

## 动态撒点
``` js
// 封装了一个添加点位的方法
/**
 * obj.id       ID
 * obj.name     名称
 * obj.lon      笛卡尔空间坐标系 x
 * obj.lat      笛卡尔空间坐标系 y
 * obj.height   笛卡尔空间坐标系 z
 * obj.url      icon地址
 */
addBillboard(obj) {
  const entity = viewer.entities.add({
    id: obj.id,
    name: obj.name || "",
    position: Cesium.Cartesian3.fromDegrees(obj.lon, obj.lat, obj.height),
    billboard: { // 广告牌材质
      image: obj.url,
      scale: 0.8,
      scaleByDistance: new Cesium.NearFarScalar(1.5e2, 0.8, 1.5e5, 0.2)
    }
  });
  viewer.scene.postProcessStages.fxaa.enabled = false;
},

// 如果要显示标注，添加 label 对象

// 使用
this.addBillboard({
  id: item.deviceId,
  name: "deviceList",
  lon: item.lon,
  lat: item.lat,
  height: -2,
  url: item.deviceType ? png_1 : alarmImg
});

// 绑定点击事件
var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handler.setInputAction(function (movement) {
  const pick = viewer.scene.pick(movement.position); //判断是否拾取到模型
  
  if (!pick || !pick.id || !pick.id.id) return;
  if (pick.id.name != "deviceList") return;
  let params = {
    deviceId: pick.id.id
  };

  // 访问接口，增加选中时描述
  deviceDetail(params)
    .then(res => {
      let entialty = viewer.entities.getOrCreateEntity(pick.id.id);
      let deviceLog = res || null;
      if (!deviceLog) return;

      entialty.description = `<p>deviceId : ${deviceLog.deviceId}</p>
        <p>deviceType : ${deviceLog.deviceType}</p>
        <p>deviceName : ${deviceLog.deviceName}</p>
        <p>floor : ${deviceLog.floor}</p>
        <p>createTime : ${deviceLog.createTime}</p>
        <p>modifyTime : ${deviceLog.modifyTime}</p>`;
    })
    .catch(err => {
      console.err(err);
    });
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
```

### KML 文件
为了读取数据文件，需要根据你的数据格式创建一个合适的 DataSource ，它将负责解析你配置的url里的数据，然后创建一个 EntityCollection 用来存储从数据里加载的每一个Entity 。DataSource 只是定义一些接口，依据数据格式的不同会有不同的解析过程。比如 KML使用KmlDataSource。

使用 Cesium.KmlDataSource.load(url,options) 从 KML 文件中读取点位数据。对于KmlDataSource，camera 和 canvas 选项必须要配置。clampToGround 选项控制数据是否贴地

Entity 数据采用的是异步加载，函数返回一个 Promise 对象，需要在.then函数里操作数据，把KmlDataSource添加到 viewer.datasources。

### 3D Tiles (三维模型切片)
使用一种类似Cesium的地形和影像数据切片技术，3d tiles格式使原先那些不可能做可视化交互的大模型数据能够展示出来，包括建筑物数据、CAD（或者BIM）模型，点云，倾斜模型。通过 Cesium.Cesium3DTileset 添加。

模型可自己定义一个坐标位置，设置一些透明效果，还可以根据高度显示不同颜色。

大概有以下分类：
- 倾斜摄影
- BIM数据
- 点云
- 所有类型

``` js
/**
 * 封装 3dtiles 加载方法
 */
loadModel(url, longitude, latitude) {
  var tileset = new Cesium.Cesium3DTileset({
    name: "model",
    url: url,
    show: true,
    skipLevelOfDetail: true,
    baseScreenSpaceError: 1024,
    skipScreenSpaceErrorFactor: 16,
    skipLevels: 1,
    immediatelyLoadDesiredLevelOfDetail: true,
    loadSiblings: false,
    cullWithChildrenBounds: true,
    dynamicScreenSpaceError: false,
    dynamicScreenSpaceErrorDensity: 0.00001,
    dynamicScreenSpaceErrorFactor: 0,
    dynamicScreenSpaceErrorHeightFalloff: 0,
    maximumMemoryUsage: 2048,
    luminanceAtZenith: 1.1, //太阳光照在天顶的亮度
    maximumScreenSpaceError: 4,
    lightColor: new Cesium.Cartesian3(100.0, 100.0, 100.0) // 白光增强到100倍
  });

  // tileset数据加载好后,模型贴地
  tileset.readyPromise.then((dataSource) => {
    const height = Number(0);
    if (longitude && latitude) {
      let hpr = new Cesium.Matrix3();
      let hprObj = new Cesium.HeadingPitchRoll(
        Math.PI,
        Math.PI,
        Math.PI
      );

      hpr = Cesium.Matrix3.fromHeadingPitchRoll(hprObj, hpr);
      let matrix = Cesium.Transforms.eastNorthUpToFixedFrame(
        Cesium.Cartesian3.fromDegrees(longitude, latitude, 10)
      );

      Cesium.Matrix4.multiplyByMatrix3(matrix, hpr, matrix);

      // 透明度
      dataSource.style = new Cesium.Cesium3DTileStyle({
        color: {
          evaluateColor: (feature, result) => {
            let featureName = feature.getProperty("name");
            if (featureName === "highPressurePipeline_old") {
              return Cesium.Color.RED;
            } else if (featureName === "city_01") {
              return Cesium.Color.WHITE.withAlpha(0.5);
            } else {
              return Cesium.Color.WHITE.withAlpha(0.5);
            }
          }
        }
      })

      dataSource._root.transform = matrix;
    } else {
      const cartographic = Cesium.Cartographic.fromCartesian(
        dataSource.boundingSphere.center
      );
      const surface = Cesium.Cartesian3.fromRadians(
        cartographic.longitude,
        cartographic.latitude,
        cartographic.height
      );
      const offset = Cesium.Cartesian3.fromRadians(
        cartographic.longitude,
        cartographic.latitude,
        height
      );
      const translation = Cesium.Cartesian3.subtract(
        offset,
        surface,
        new Cesium.Cartesian3()
      );
      dataSource.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
    }
  });

  viewer.scene.primitives.add(tileset);

  // 闪烁效果
  this.trashBink()
  viewer.flyTo(tileset);
  return tileset;
}
```

## 加载 .geojson 数据
通过一个 GeoJson 文件创建一些区域的多边形，可进入 [geojson官网](http://geojson.io/#map=2/20.0/0.0) 编辑区域、点、标注等信息。

使用 Cesium.GeoJsonDataSource.load(url,options) 。必须在 promise 的 then 函数里把数据添加到viewer.datasources 中，数据才能显示。
``` js
var geojsonOptions = {
  clampToGround: true // 贴地
};
// 设置区域多边形
var neighborhoods;
var neighborhoodsPromise = Cesium.GeoJsonDataSource.load('model/map.geojson', geojsonOptions);
neighborhoodsPromise.then(dataSource => {
  neighborhoods = dataSource.entities;

  // 获取enity列表遍历
  var neighborhoodEntities = dataSource.entities.values;
  for (var i = 0; i < neighborhoodEntities.length; i++) {
    var entity = neighborhoodEntities[i];

    if (Cesium.defined(entity.polygon)) {
      // 设置样式代码
      // 把properties里的neighborhood设置到name
      entity.name = entity.properties.neighborhood;
      // 设置一个随机半透明颜色

      entity.polygon.outline = false;
      entity.polygon.extrudedHeight = 10;

      // entity.polygon.material = Cesium.Color.fromRgba({
      //   red : 0.1,
      //   maximumGreen : 0.5,
      //   minimumBlue : 0.5,
      //   alpha : 0.6
      // });

      entity.polygon.material = Cesium.Color.DARKGRAY.withAlpha(0.5)
      // 设置这个属性让多边形贴地，ClassificationType.CESIUM_3D_TILE 是贴模型，ClassificationType.BOTH是贴模型和贴地
      entity.polygon.classificationType = Cesium.ClassificationType.TERRAIN;

      // 获取多边形的positions列表 并计算它的中心点
      var polyPositions = entity.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
      var polyCenter = Cesium.BoundingSphere.fromPoints(polyPositions).center;
      polyCenter = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(polyCenter);

      // entity.position = polyCenter;

      var cartographic = Cesium.Cartographic.fromCartesian(polyCenter);
      var longitude = Cesium.Math.toDegrees(cartographic.longitude);
      var latitude = Cesium.Math.toDegrees(cartographic.latitude);
      var height = 15;

      entity.position = Cesium.Cartesian3.fromDegrees(longitude, latitude, height);


      // 生成文字标注
      entity.label = {
        text: entity.name,
        showBackground: true,
        scale: 0.6,
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        verticalOrigin: Cesium.VerticalOrigin.CENTER,
        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(10.0, 8000.0),
        disableDepthTestDistance: 100.0
      };
    }
  }

  viewer.dataSources.add(dataSource);
});
viewer.flyTo(neighborhoodsPromise);
```


## 加载烟雾、火焰 效果
烟雾、火焰添加使用的是 cesium 粒子系统，粒子系统是一种图形学技术，用来模拟复杂的物理效果。粒子系统是由一堆很小的图片组成，看起来就像一些复杂的“含糊不清（fuzzy）”对象，就像火、烟、天气、或者 烟花。这些复杂效果其实是通过控制每一个独立的粒子的初始位置、速度、生命周期等属性来完成。

``` js
/**
 * 封装一个加载烟雾、火焰方法
 */
addFireAndSmoke(point) {
  var entity = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(
      point.lon,
      point.lat,
      point.height
    )
  });
  this.particleSystem = viewer.scene.primitives.add(
    new Cesium.ParticleSystem({
      image: point.imageUrl,
      show: true,
      imageSize: new Cesium.Cartesian2(15, 15),
      startColor: Cesium.Color.RED.withAlpha(0.8),
      endColor: Cesium.Color.GAINSBORO.withAlpha(1),
      startScale: 1.0, // 在粒子生命开始时应用于粒子图像的初始比例
      endScale: 10.0, // 粒子寿命结束时图像的最终比例
      // particleLife: 1.0, // 设置粒子寿命可能持续时间的界限
      maximumParticleLife: 3.0,
      emissionRate: 2.0, // 每秒发射的粒子数
      lifetime: 1.0, // 粒子系统在几秒钟内发射粒子的时间
      speed: 5.0, // 设置以米/秒为单位的界限
      emitter: new Cesium.CircleEmitter(2.0), // BoxEmitter 类在盒子里（box）里随机一个位置，沿着盒子的6个面的法向量向外运动。它可以接受一个Cartesian3 参数，定义了盒子的长宽高。
      modelMatrix: entity.computeModelMatrix(
        viewer.clock.startTime,
        new Cesium.Matrix4()
      )
    })
  );
},
```

## 管线泄漏-闪烁效果
目前使用的方法是对独立的模型添加效果。这种方式需要 3DMAX 开发人员配置，将模型中需要添加效果的区域做成单独的模型，单独的模型可预设 name 属性，在 3Dtiles 加载完成后， 根据 name 找到这个模型，使用定时器，闪烁动画就是通过给模型不断调整颜色来实现的。

直接改变模型颜色可能显示不明显或无效果，目前找到一个解决方法，加载3dtiles时，通过增强模型的RGB颜色，之后设置自定义颜色就可以了，例：`new Cesium.Cesium3DTileset({ //..., lightColor: new Cesium.Cartesian3(100.0, 100.0, 100.0) , //...}`
``` js
/**
 * 封装一个闪烁方法
 */
trashBink(boolean = true) {
  this.trashTimer = null
  clearInterval(this.trashTimer);
  let time = 0;
  let tileset = getPrimitives(viewer, "http://123.207.127.222:8089/modelResources/syix/tileset.json", 'url')

  if (boolean) { // 闪烁
    this.trashTimer = setInterval(() => {
      setBlinkModel(tileset, (feature, result) => {
        let featureName = feature.getProperty("name");
        if (featureName === "highPressurePipeline_old") {
          if (time % 2 == 0) {
            return Cesium.Color.RED;
          } else {
            return Cesium.Color.YELLOW;
          }
        }
        return Cesium.Color.WHITE.withAlpha(0.5);
      })
      time++
    }, 500);
  } else if (this.trashTimer && !boolean) { // 停止闪烁
    clearInterval(this.trashTimer);
    time = 1;
    setBlinkModel(tileset, (feature, result) => {
      let featureName = feature.getProperty("name");
      if (featureName === "highPressurePipeline_old") {
        if (time % 2 == 0) {
          return Cesium.Color.RED;
        } else {
          return Cesium.Color.YELLOW;
        }
      }

      return Cesium.Color.WHITE.withAlpha(0.5);
    })
    time = 0;
  }
  }
```

## 事件绑定
- 相机事件（移动开始、移动结束等等）
``` js
viewer.scene.camera.moveEnd.addEventListener(function(){
  // ...
});
```

- 鼠标事件（单击、移动、右键等）
``` js
var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handler.setInputAction(function (movement) {
     // 处理鼠标移动事件
     // 更新鼠标位置
    mousePosition = movement.endPosition;
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

handler.setInputAction(function(click) {
   // 处理鼠标按下事件
   // 获取鼠标当前位置
   mousePosition = click.position;
 }, Cesium.ScreenSpaceEventType.LEFT_DOWN);
```

- 渲染事件(实时渲染)
``` js
var renderEnd = viewer.scene.postRender.addEventListener(function(){
  // ...
});
```

- 清除事件
``` js
//清除图层并且注销事件
var selectCancel = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
selectCancel.setInputAction(function (event) {
  selectCancel.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
}, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
```
[参考：详细的Cesium事件基础](https://www.jianshu.com/p/85828d7fcda0)

## CZML 数据
CZML 是 cesium 中很重要的一个概念，也是一个亮点，cesium 可以使用 CZML 数据展示炫酷的动态数据。

CZML是一种JSON格式的字符串，用于描述与时间有关的动画场景，CZML包含点、线、地标、模型、和其他的一些图形元素，并指明了这些元素如何随时间而变化。某种程度上说, Cesium 和 CZML的关系就像 Google Earth 和 KML。

它可以绑定一个动态模型，传入一组坐标系数据，可以根据这组坐标显示一段线条，根据坐标与时间，调用 cesium 的时间轴，计算时间点上坐标的位置，实现模型在一个时间周期内的位置变化，在播放动画时，时间轴上的时间将换成 CZML 中的时间

``` js
// 运动中的实体对象初始化方法
initRunEntity() {
  // 创建czml文件；得到czml数据源
  let currentTime = "2020-05-27T17:50:00Z";
  let currentTimeEnd = "2020-05-27T17:50:20Z";

  // 位置属性
  let positionProperty;
  // 实体对象
  let entity;

  if (this.personTimer) {
    return
  }
  const model = "model/Cesium_Man.glb";
  const path = [
    0, 113.06184383283379, 22.644360324978273, 0.0,
    2, 113.0616960407068, 22.64320786049097, 0.0,
    4, 113.06322457538664, 22.64323264478755, 0.0,
    6, 113.06429107094846, 22.643066650958545, 0.0,
    8, 113.06443504442973, 22.643664087862163, 0.0,
    10, 113.06405733305152, 22.64494654147187, 0.0,
    12, 113.06403991096553, 22.64607631623524, 0.0,
    14, 113.06238449452161, 22.646275976812056, 0.0,
    16, 113.06220203406647, 22.64630414380813, 0.0,
    18, 113.06184383283379, 22.644360324978273, 0.0,
  ];
  const czml = this.getCzmlDataSource(model, path, currentTime, currentTimeEnd, 'person', 12);
  const tileset = this.getPrimitives(this.person, 'url');
  // 加载提供的URL或CZML对象，替换任何现有数据。
  const dataSourcePromise = Cesium.CzmlDataSource.load(czml);

  // 添加czml到三维球上
  // viewer.zoomTo(dataSourcePromise);

  viewer.dataSources.add(dataSourcePromise).then(function (dataSource) {
    entity = dataSource.entities.getById('Vehicle');
    positionProperty = entity.position;
    // 带着相机跟踪车辆。
    // if (!viewer.trackedEntity) {
    //   viewer.trackedEntity = entity;
    // }
  });

  // 渲染监听
  viewer.scene.postRender.addEventListener(function () {
    var position = positionProperty.getValue(viewer.clock.currentTime);

    // 运行中则打印地理坐标位置
    if (viewer.clock.shouldAnimate) {
      // console.log(position);
    }
  });
  // 确定时钟到达终点的行为
  viewer.clock.clockRange = Cesium.ClockRange.CLAMPED;
  // 动画执行完毕监听
  viewer.clock.onStop.addEventListener(function (e) {});
}

// 封装czml数据源
getCzmlDataSource(model, path, currentTime, currentTimeEnd, name, scale) {
  var czml = [{
    // 版本声明的一些信息
    "id": "document",
    "name": name,
    "version": "1.0",
    "clock": {
      "interval": `${currentTime}/${currentTimeEnd}`,
      "currentTime": currentTime,
      "multiplier": 1
    }
  }, {
    "id": "Vehicle",
    "name": "绿色轨迹线",
    "availability": `${currentTime}/${currentTimeEnd}`, // 模型运动的时间
    "path": {
      "material": {
        "solidColor": {
          "color": {
            "interval": `${currentTime}/${currentTimeEnd}`,
            "rgba": [255, 255, 0, 255]
          }
        }
      },
      "width": [{
        "interval": `${currentTime}/${currentTimeEnd}`,
        "number": 1.0
      }],
      "show": [{
        "interval": `${currentTime}/${currentTimeEnd}`,
        "boolean": true
      }]
    },
    // 模型
    "model": {
      "gltf": model,
      // "minimumPixelSize": 1000,
      // "maximumScale": 10
      "runAnimations": true,
      "scale": scale || 1
    },
    // 坐标
    "position": {
      "interpolationAlgorithm": "LAGRANGE",
      "interpolationDegree": 1,
      "epoch": currentTime, // 坐标的起始时间
      // 实际坐标值
      "cartographicDegrees": path
    },
    "orientation": {
      "velocityReference": "#position"
    },
  }];
  return czml;
}
```

## 静态资源服务器部署
静态资源，比如 3Dtiles, CZML 等文件数据目前是独立放在 Nginx 服务器中，使用时通过 url 地址引用，可减小打包时资源大小。