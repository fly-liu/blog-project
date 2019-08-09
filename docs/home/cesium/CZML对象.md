---
title: CZML对象
sidebar: false
date: '2019-07-03'
tag: # 页面的标签 
  - Cesium
  - CZML
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: 刘哈哈 笔记 cesium 个人博客 vue-press
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: cesium知识点问题笔记
prev: ./cesium基础
next: 
---

## CZML对象
CZML是JSON的一个子集，意味着一个有效的CZML文档便也是一个JSON文档，那么CZML与Cesium是什么关系呢，可以这样理解，Cesium是载体，CZML是一种数据结构，通过CZML可以在cesium球体中展现可视化的动态效果。  
一个CZML文档包含一个JSON数组，数组中每一个对象都是一个CZML数据包（packet），一个packet对应一个场景中的对象。[参考](http://www.xiaobaigis.com/Articles/cesium/czmlStructure_cesium.html)

### 文档结构
``` js
[
  {
    // 版本声明的一些信息
    "id": "document",
    "name": "polygon",
    "version": "1.0",
    "clock": {
      "interval": "2012-08-04T16:00:00Z/2012-08-04T16:02:00Z",
      "currentTime": "2012-08-04T16:00:00Z",
      "multiplier": 10
    }
  }, 
  {
    "id": "Vehicle",
    "name": "绿色轨迹线",
    "availability": "2012-08-04T16:00:00Z/2012-08-04T16:02:00Z", // 模型运动的时间
    "path": {
      "material": {
        "solidColor": {
          "color": {
            "interval": "2012-08-04T16:00:00Z/2012-08-04T18:00:00Z",
            "rgba": [0, 255, 0, 255]
          }
        }
      },
      "width": [{
        "interval": "2012-08-04T16:00:00Z/2012-08-04T18:00:00Z",
        "number": 3.0
      }],
      "show": [{
        "interval": "2012-08-04T16:00:00Z/2012-08-04T18:00:00Z",
        "boolean": true
      }]
    },
    // 模型
    "model": {
      "gltf": "../Cesium/models/GroundVehicle/GroundVehicle.glb",
      "minimumPixelSize": 100,
      "maximumScale": 50
    },
    // 坐标
    "position": {
      "interpolationAlgorithm": "LAGRANGE",
      "interpolationDegree": 1,
      "epoch": "2012-08-04T16:00:00Z", // 坐标的起始时间
      // 实际坐标值
      "cartographicDegrees": [
        0.0, 116.3932817290777, 39.90675008687875000, 0.0,
        10.0, 116.39103157846526, 39.90675133942299600, 0.0,
        20.0, 116.390694583894, 39.90689680346637400, 0.0,
        30.0, 116.39066058875329, 39.90899854654115100, 0.0,
        40.0, 116.39085332141151, 39.90939830931298408, 0.0,
        50.0, 116.39124255584764, 39.90949714214868500, 0.0,
        60.0, 116.39474370828448, 39.90947572166330602, 0.0,
        70.0, 116.39521614417647, 39.90929292541459900, 0.0,
        80.0, 116.39529781228491, 39.90895880495633600, 0.0,
        90.0, 116.39527433427607, 39.90729562976118300, 0.0,
        100.0, 116.39512780580918, 39.90693036348709000, 0.0,
        110.0, 116.39475847109615, 39.90672626559058570, 0.0,
        120.0, 116.3932817290777, 39.90675008687875000, 0.0
      ]
    },
    "orientation": {
      "velocityReference": "#position"
    },
  }
]
```
### 下面是一个包的详细属性，在使用过程中可以包含0个或一个属性
- id - 字符串:
  此数据包描述的对象的ID。ID不需要是GUID，但它们确实需要唯一地标识CZML源中的单个对象以及加载到同一范围内的任何其他CZML源。如果未指定此属性，客户端将自动生成唯一的属性。但是，这会阻止以后的数据包引用此对象以向其添加更多数据  
         
- delete - 布尔值:
  客户端是否应删除由ID标识的此对象的所有现有数据。如果为true，则将忽略此数据包中的所有其他属性

- name - 字符串:
  对象的名称。它不必是唯一的，旨在供用户使用

- parent - 字符串:
  父对象的ID（如果有）

- description - 字符串:
  对象的HTML描述

- clock-Clock:
  整个数据集的时钟设置。仅对文档对象有效

- version-字符串:
  CZML 版本

- availability-TimeIntervalCollection:
  对象数据可用的时间间隔集。该属性可以是指定单个间隔的单个字符串，也可以是表示间隔的字符串数组。如果更改或发现不正确，以后的Cesium数据包可以更新此可用性

- properties - CustomProperties:
  此对象的一组自定义属性

- position-Position:
  物体在世界上的位置。该位置没有直接的可视化表示，但它用于定位附加到对象的广告牌，标签和其他图形项。

- orientation-Orientation : 
  世界上物体的方向。方向没有直接的可视化表示，但它用于定向模型，圆锥，金字塔和附加到对象的其他图形项

- viewFrom - ViewFrom:
  查看此对象时建议的相机位置。该属性被指定为相对于对象位置的East（x），North（y），Up（z）参考系中的笛卡尔位置

- billboard - Billboard:
  广告牌或视口对齐的图像，有时称为标记。广告牌由position属性定位在场景中

- box - Box:
  一个盒子，是一个封闭的长方体。使用position和orientation属性定位和定向框。

- corridor - Corridor:
  是由中心线和宽度定义的形状

- cylinder - Cylinder:
  由长度，顶部半径和底部半径定义的圆柱体，截锥体或圆锥体。使用position和orientation属性定位和定向圆柱体。

- ellipse - Ellipse:
  是地球表面上的闭合曲线。使用position属性定位椭圆。

- ellipsoid - Ellipsoid:
  是一个闭合的二次曲面，是椭圆的三维模拟。使用position和orientation属性定位和定向椭圆体。

- label - Label:
  一串文字。标签由position物业定位在场景中

- model - Model:
  3D模型。使用position和orientation属性定位和定向模型。

- path - Path:
  是由对象随时间的运动定义的折线。路径的可能顶点由position属性指定

- point - Point:
  点或视口对齐的圆。该点由position物业定位在场景中

- polygon - Polygon:
  是地球表面上的封闭图形

- polyline - Polyline:
  是由多个线段组成的场景中的线。

- rectangle - Rectangle:
  一个制图矩形,符合地球的曲率，可以沿表面或海拔高度放置

- wall - Wall:
  二维墙，符合地球的曲率，可以沿表面或高度放置

- agi_conicSensor - ConicSensor:
  考虑到椭圆体（即球体）的遮挡的锥形传感器体积。使用position和orientation属性定位和定向传感器。

- agi_customPatternSensor - CustomPatternSensor:
  考虑到椭圆体（即球体）的遮挡的自定义传感器体积。使用position和orientation属性定位和定向传感器

- agi_rectangularSensor - RectangularSensor:
  考虑椭圆体（即球体）遮挡的矩形金字塔传感器体积。使用position和orientation属性定位和定向传感器。

- agi_fan - Fan:
  它从一个点或顶点开始，并从顶点指定的方向列表中延伸

- agi_vector - Vector:  
  定义源自position属性的图形矢量，并在提供的方向上延伸所提供的长度。使用position属性定位矢量。


