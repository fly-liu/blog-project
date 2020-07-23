---
title: cesium基础
sidebar: false
date: '2019-07-02'
tag: # 页面的标签 
  - Cesium
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: cesium 3D 模型 笔记
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: cesium 模型 知识点 笔记
# prev: 
next: ./CZML对象
---

## Cesium
CesiumJS是一个用于Web上3D地图的JavaScript库。Cesium ion是3D数据数据服务器   
这一篇笔记用来记录一个基础的Cesium程序的开发过程，以及Cesium的功能会有几个基本概念，包括配置viewer、加载数据、创建各种样式的几何体、使用3d tiles（三维模型切片）、控制相机、增加鼠标交互事件等等。

### 源码目录结构
下载`cesium`源码，下面是源码目录结构
Source/ : 我们项目的代码。  

ThirdParty/ : 外部js库，目前只包含cesium。  

LICENSE.md : 我们项目的说明条款。  

index.html : 主页，包含项目程序代码和页面结构。  

server.js : 简单的基于nodejs的http服务器。

## 常用功能代码
初始化配置以及常用需求功能代码

### 初始化配置
``` js
var viewer = new Cesium.Viewer('cesiumContainer',{ 
  //需要进行可视化的数据源的集合
  animation: false, //是否创建动画小器件，左下角仪表
  baseLayerPicker: false, //是否显示图层选择器
  fullscreenButton: false, //是否显示全屏按钮
  geocoder: false, //是否显示地名查找控件，右上角查询按钮
  homeButton: false, //是否显示Home按钮
  infoBox: false, //是否显示信息框，点击要素之后显示的信息
  sceneModePicker: false, //是否显示投影方式控件
  selectionIndicator: false, //是否显示选取指示器组件
  timeline: false, //是否显示时间轴
  sceneMode: 3, //初始场景模式 1 2D模式 2 2D循环模式 3 3D模式 或使用Cesium.SceneMode设置：Cesium.SceneMode.SCENE2D、Cesium.SceneMode.MORPHING、Cesium.SceneMode.SCENE3D
  navigationHelpButton: false, //是否显示右上角的帮助按钮
  requestRenderMode: true, //启用请求渲染模式
  scene3DOnly: true, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
  navigationInstructionsInitiallyVisible: false,
  showRenderLoopErrors: false, //是否显示渲染错误
  orderIndependentTranslucency: false, //设置半透明
  contextOptions:{ // Context和WebGL相关属性配置
    webgl:{
      alpha:true
    }
  }
});
```

### 隐藏logo
``` js
//方式一 
this.viewer._cesiumWidget._creditContainer.style.display = "none";
//方式二 css
.cesium-viewer-bottom {
  display: none;
}
```

### 自定义logo
``` js
var mapDom = document.getElementById("cesiumContainer"); 
var viewportQuad = new Cesium.ViewportQuad();
viewportQuad.rectangle = new Cesium.BoundingRectangle(
  mapDom.clientWidth - 85,
  5,
  80,
  80
);
this.viewer.scene.primitives.add(viewportQuad);

viewportQuad.material = new Cesium.Material({
  fabric: {
    type: "Image",
    uniforms: {
      color: new Cesium.Color(1.0, 1.0, 1.0, 1.0),
      image: "图片路径"
    }
  }
});
```

### 加载图标，并实现图标点击监听
``` js
var citizensBankPark = viewer.entities.add({
  name: '设备',
  code: "123456789",

  position: Cesium.Cartesian3.fromDegrees(116.39094380500626,39.910794148159475,200),
  point: { //点
    pixelSize: 70,
    color: Cesium.Color.WHITE.withAlpha(0),
    outlineColor: Cesium.Color.RED,
    outlineWidth: 8
  },
  label: { //文字标签
    text: '设备',
    font: '14pt arial',
    style: Cesium.LabelStyle.FILL,
    outlineWidth: 2,
    verticalOrigin: Cesium.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置
    pixelOffset: new Cesium.Cartesian2(0, -30)   //偏移量
  },
  billboard: { //图标
    image: '../image/icon-shebei.png',
    width: 50,
    height: 50
  }
});
viewer.zoomTo( viewer.entities );

/*
  * 鼠标点击事件
  */
var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handler.setInputAction(function(click) {
  var pick = viewer.scene.pick(click.position);
  //选中某模型   pick选中的对象
  if(pick && pick.id){
    alert(pick.id._code);
  }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK  );
```

### 各种鼠标点击位置监听
``` js
// 1、屏幕坐标（鼠标点击位置距离canvas左上角的像素值）
var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handler.setInputAction(function (movement) {
  console.log("屏幕坐标", movement.position);
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

// 2、世界坐标（Cartesian3）,在椭球下点击创建点
var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handler.setInputAction(function (movement) {
  try {
    var position = viewer.scene.camera.pickEllipsoid(movement.position, viewer.scene.globe.ellipsoid); //返回在椭球上面的点的坐标
    if (Cesium.defined(earthPosition)) {
      // createPoint(earthPosition); //在点击位置添加一个点
    }
    console.log("世界坐标", position);
  } catch(err) {
    console.log("世界坐标获取不到：",err.message);
  }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

// 3、场景坐标,拾取模型表面的位置
var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handler.setInputAction(function (movement) {
  var scene = viewer.scene;
  var position = scene.pickPosition(movement.position);

  var pickedObject = scene.pick(movement.position); //判断是否拾取到模型
  if (scene.pickPositionSupported && Cesium.defined(pickedObject)) {
      var cartesian = viewer.scene.pickPosition(movement.position);
      if (Cesium.defined(cartesian)) {
          var cartographic = Cesium.Cartographic.fromCartesian(cartesian); // 根据笛卡尔坐标获取到弧度
          var lng = Cesium.Math.toDegrees(cartographic.longitude); // 根据弧度获取到经度
          var lat = Cesium.Math.toDegrees(cartographic.latitude); // 根据弧度获取到纬度
          var height = cartographic.height; // 模型高度
          console.log("弧度:" + cartesian, "经度:" + lng, "纬度:" + lat, "模型高度：" + height);
      }
  }

  console.log("场景坐标", position);
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

// 4、地标坐标
var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handler.setInputAction(function (movement) {
  try {
    var ray = viewer.camera.getPickRay(movement.position);
    var position = viewer.scene.globe.pick(ray, viewer.scene);
    console.log("地标坐标", position);
  } catch(err) {
    console.log("地标坐标获取不到:",err.message);
  }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
```

### 影像图层
影像是Cesium程序一个关键元素。它是覆盖在地表的各种不同精度的图像集合。根据相机的朝向和距离，Cesium将请求和渲染不同LOD或者缩放级别下的图像。

