---
sidebar: false
date: '2018-09-18'
tag: 'React'
---

## 搭建React应用

## 说明
每个命令行块都是以根目录为基础的。例如下面命令行块，都是基于根目录的

## 技术栈
### 安装依赖(--save):
* react  
* react-router-dom
* redux
* webpack
* axios

### 使用create-react-app方法安装
1. 安装：
```
npm install -g create-react-app
create-react-app react-app
cd react-app
npm start
```
2. 安装SASS、LESS等CSS预处理器配置：
```
cnpm install sass-loader node-sass --save-dev
```
2.1 找到webpack.config.dev.js文件中 loaders中的第一项exclude（值为数组），排除scss文件，否则将被'url-loader'捕获
``` js
 {
    exclude: [
        /\.html$/,
        /\.(js|jsx)(\?.*)?$/,
        /\.css$/,
        /\.json$/,
        /\.svg$/,
        /\.scss$/     ....新增项!
    ]
```
2.2 loaders新增一项：
``` js
{
    loader: require.resolve('sass-loader') // compiles sass to CSS
}
```
至此，SASS文件就可以正常打包了（此处针对SCSS文件，如用到SASS，可将SCSS的正则修改下），LESS文件类似
3. 

---
---
### 不用create-react-app搭建基于webpack的react项目
### 需要安装的项目开发依赖包(--save-dev)有：
* babel-core
* babel-preset-es2015
* babel-polyfill
* babel-loader : transpile React and ES6
* babel-preset-react  // babel-react预设
* react-hot-loader  // 热更新
* webpack
* webpack-dev-server  // webpack服务器的本地依赖
#### 按需加载
* bundle-loader // 按需加载
#### 编译css
* css-loader 
* style-loader
#### 编译图片
* url-loader 
* file-loader
#### 文件压缩
* uglifyjs-webpack-plugin
#### 打包优化
* clean-webpack-plugin
#### 抽取css
* extract-text-webpack-plugin
#### 集成PostCSS
* postcss-loader
* postcss-cssnext

### 安装到全局环境下的包有：
* webpack
* webpack-dev-server

## init项目
1. 创建React App,使用create-react-app工具
```
npm install -g create-react-app
create-react-app react-app
cd react-app
npm start
```

2. 安装依赖
``` 
cnpm install --save-dev webpack babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 css-loader style-loader url-loader file-loader bundle-loader html-webpack-plugin uglifyjs-webpack-plugin clean-webpack-plugin extract-text-webpack-plugin babel-plugin-transform-runtime postcss-loader postcss-cssnext webpack-dev-server
// cnpm install --save-dev css-loader style-loader url-loader file-loader bundle-loader html-webpack-plugin uglifyjs-webpack-plugin clean-webpack-plugin extract-text-webpack-plugin postcss-loader postcss-cssnext webpack-dev-server
```
```
cnpm install --save react-router-dom redux react-redux axios
```
3. 全局安装webpack
`cnpm install webpack webpack-cli -g`

4. 