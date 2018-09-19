---
sidebar: false
date: '2018-09-18'
tag: 'React'
---

## 什么是React
* A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
   * 用来构建UI的 JavaScript库
   * React 不是一个 MVC 框架，仅仅是视图（V）层的库

## 介绍
* 声明式
  React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面

* 组件化
  创建好拥有各自状态的组件，再由组件构成更加复杂的界面

* 一次学习，随处编写
  无论你现在正在使用什么技术栈，你都可以随时引入 React 开发新特性。

### 组件
React组件使用render()方法接收数据作为输入，输出页面中对应展示的内容。

### 有状态组件
通过this.props访问传人的数据，组件还可以拥有其内部的状态数据，通过this.state访问状态数据。当组件状态数据改变时，组件会调用render()方法重新渲染

### 特点
1. 使用 JSX语法 创建组件，实现组件化开发，为函数式的 UI 编程方式打开了大门
2. 性能高，通过 diff算法 和 虚拟DOM 实现视图的高效更新

## JSX简介
### 在JSX中使用表达式
* 你可以任意地在 JSX 当中使用 JavaScript 表达式，在 JSX 当中的表达式要包含在大括号里。也可以在 JSX 代码的外面扩上一个小括号，这样可以防止 分号自动插入 的 bug。

### JSX 本身其实也是一种表达式
在编译之后呢，JSX 其实会被转化为普通的 JavaScript 对象。
这也就意味着，你其实可以在 if 或者 for 语句里使用 JSX，将它赋值给变量，当作参数传入，作为返回值都可以

### JSX 属性
可以使用引号来定义以字符串为值的属性：
``` js
const element = <div tabIndex = "0"></div>;
```
也可以使用大括号来定义以Javascript表达式为值的属性：
``` js
const element = <img src={user.avatarUrl}></img>;
```
::: tip
切记你使用了大括号包裹的 JavaScript 表达式时就不要再到外面套引号了。JSX 会将引号当中的内容识别为字符串而不是表达式。
:::
如果 JSX 标签是闭合式的，那么你需要在结尾处用 />, 就好像 XML/HTML 一样：
``` js
const element = <img src={user.avatarUrl}/>
```

::: warning
因为 JSX 的特性更接近 JavaScript 而不是 HTML , 所以 React DOM 使用 camelCase 小驼峰命名 来定义属性的名称，而不是使用 HTML 的属性名称。  
例如，class 变成了 className，而 tabindex 则对应着 tabIndex。  
注意：JSX的语法需要通过 babel-preset-react 编译后，才能被解析执行
:::

### JSX防注入攻击
``` js
const title = response.potentiallyMaliciousInput;
// 直接使用是安全的：
const element = <h1>{title}</h1>;
```
React DOM 在渲染之前默认会 过滤 所有传入的值。它可以确保你的应用不会被注入攻击。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS(跨站脚本) 攻击。

### JSX 代表 Objects
Babel 转译器会把 JSX 转换成一个名为 React.createElement() 的方法调用。
下面两种代码的作用是完全相同的：
``` js
const element = (
  <h1 className = "greeting">Hello,world!</h1>
);
```
``` js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello,world!'
);
```
`React.createElement()` 这个方法首先会进行一些避免bug的检查

## 元素渲染
#### 元素是构成React应用的最小单位。
元素用来描述你在屏幕上看到的内容。与浏览器的DOM元素不同，React当中的元素事实上是普通对象，ReactDOM可以确保浏览器DOM的数据内容与React元素保持一致。元素事实上是构成组件的一个部分。

### 将元素渲染到 DOM 中
首先我们在一个 HTML 页面中添加一个 id="root" 的 `<div>`:
``` html
<div id = "root"></div>
```
在此 div 中的所有内容都将由 React DOM 来管理，所以我们将其称之为 “根” DOM 节点。  
要将React元素渲染到根DOM节点中，我们通过把它们都传递给 ReactDOM.render() 的方法来将其渲染到页面上：
``` js
const element = <h1>Hello,world</h1>
ReactDOM.render(element,document.getElementById('root'));
```
::: warning
在实际生产开发中，大多数React应用只会调用一次 ReactDOM.render()
:::

### 更新元素渲染
React 元素都是immutable 不可变的。当元素被创建之后，你是无法改变其内容或属性的。一个元素就好像是动画里的一帧，它代表应用界面在某一时间点的样子。  
React 只会更新必要的部分,React DOM 首先会比较元素内容先后的不同，而在渲染过程中只会更新改变了的部分。

## React的核心概念
1. 虚拟DOM（Virtual DOM）
2. Diff算法（虚拟DOM的加速器，提升React性能的法宝）

### 虚拟DOM（Vitural DOM）
::: tip
React将DOM抽象为虚拟DOM，虚拟DOM其实就是用一个对象来描述DOM，通过对比
前后两个对象的差异，最终只把变化的部分重新渲染，提高渲染的效率
为什么用虚拟dom，当dom反生更改时需要遍历 而原生dom可遍历属性多大231个
且大部分与渲染无关 更新页面代价太大
:::

### VituralDOM的处理方式
1. 用 JavaScript 对象结构表示 DOM 树的结构，然后用这个树构建一个真正的 DOM 树，插到文档当中
2. 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
3. 把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了

## React的基本使用
* 安装：npm i -S react react-dom
* react：react 是React库的入口点
* react-dom：提供了针对DOM的方法，比如：把创建的虚拟DOM，渲染到页面上

## 组件&Props
#### 组件可以将UI切分成一些的独立的、可复用的部件，这样你就只需专注于构建每一个单独的部件。
组件从概念上看就像是函数，它可以接收任意的输入值（称之为“props”），并返回一个需要在页面上展示的React元素。

### 组件定义
分为函数定义组件和类定义组件  
#### 函数定义组件
``` js
function Welcome(props) {
  return <h1>Hello,{props.name}</h1>;
}
```
#### 使用ES6 class来定义组件
``` js
class Welcome extends React.Component {
  render() {
    return <h1>Hello,{this.props.name}</h1>;
  }
}
```
组件从概念上看就像是函数，它可以接收任意的输入值（称之为“props”），并返回一个需要在页面上展示的React元素。

### 组件渲染
React元素可以是DOM标签，也可以是用户自定义的组件：
``` js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name = "Sara" />;
ReactDOM.render(element,document.getElementById('root'));
```
当React遇到的元素是用户自定义的组件，它会将JSX属性作为单个对象传递给该组件，这个对象称之为“props”。

::: warning
组件名称必须以大写字母开头。  
组件的返回值只能有一个根元素。  
例如，<div /> 表示一个DOM标签，但 `<Welcome />` 表示一个组件，并且在使用该组件时你必须定义或引入它。
:::

### 组合组件
组件可以在它的输出中引用其它组件，这就可以让我们用同一组件来抽象出任意层次的细节。

### Props的只读性
无论是使用函数或是类来声明一个组件，它决不能修改它自己的props。  
props 是一种从父级向子级传递数据的方法。  
React是非常灵活的，但它也有一个严格的规则：
#### 所有的React组件必须像纯函数那样使用它们的props。

## State & 生命周期
更新UI的方法：  
* 调用`ReactDOM.render()`方法来改变输出：
``` js
function Clock(props) {
  return (
    <div>
      <h1>Hello,World</h1>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />,document.getElementById('root'));
}

setInterval(tick,1000);
```
* 通过状态改变：  
状态与属性十分相似，但是状态是私有的，完全受控于当前组件。  
定义为类的组件有一些特性。局部状态就是如此：一个功能只适用于类。
> 在创建静态版本的时候不要使用 state。State 只在交互的时候使用，即随时间变化的数据。

#### 将函数组件改为类组件：
``` js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello,World</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
```
使用类就允许我们使用其它特性，例如局部状态、生命周期钩子

### 为一个类添加局部状态
我们会通过3个步骤将 date 从属性移动到状态中：  
1. 在`render()` 方法中使用`this.state.date`替代`this.props.date`
2. 添加一个`类构造函数`来初始化状态 `this.state`
3. 从`<Clock />`元素移除date属性：
``` js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello,World</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />,document.getElementById('root'));
```
类组件应始终使用props调用基础构造函数。

### 将生命周期方法添加到类中
每当Clock组件第一次加载到DOM中的时候，我们都想生成定时器，这在React中被称为挂载  
同样，每当Clock生成的这个DOM被移除的时候，我们也会想要清除定时器，这在React中被称为卸载。
``` js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  // 生命周期钩子中建立定时器
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000);
  }
  // 生命周期钩子中卸载计时器
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div>
        <h1>Hello,World</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />,document.getElementById('root'));
```
### 正确的使用状态
关于 `setState()` 这里有三件事情需要知道
* #### 不要直接更新状态  
  直接给`this.state.comment`赋值，不会重新渲染组件，应当使用 `setState()`;`setState()`接受一个函数或一个对象。  
  构造函数是唯一能够初始化 `this.state` 的地方。
* #### 状态更新可能是异步的  
  React 可以将多个`setState()` 调用合并成一个调用来提高性能。  
  因为 `this.props` 和 `this.state` 可能是异步更新的，你不应该依靠它们的值来计算下一个状态。
``` js
this.setState((prevState,props) => {
  counter: prevState.counter + props.increment
});  
```

* #### 状态更新合并  
调用 `setState()` 时，React 将提供的对象合并到当前状态。  
定义状态：
``` js
constructor(props) {
  super(props);
  this.state = {
    posts: [],
    comments: [],
  };
}
```
调用`setState()`更新状态，给状态赋值：
``` js
componentDidMount() {
  fetchPosts().then(res => {
    this.setState({posts: res.posts});
  });

  fetchComments().then(res => {
    this.setState({comments: res.comments});
  });
}
```

### 数据自顶向下流动
父组件或子组件都不能知道某个组件是有状态还是无状态，并且它们不应该关心某组件是被定义为一个函数还是一个类。除了拥有并设置它的组件外，其它组件不可访问。  
组件可以选择将其状态作为属性传递给其子组件,组件将在其属性中接收到 date 值,并且不知道它是来自状态、属性或手工输入，这通常被称为`自顶向下`或单向`数据流`。任何状态始终由某些特定组件所有，并且从该状态导出的任何数据或 UI 只能影响树中下方的组件。

## 事件处理
#### React 元素的事件处理和 DOM元素的很相似。但是有一点语法上的不同:
* #### React事件绑定属性的命名采用驼峰式写法，而不是小写。
* #### 如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM元素的写法)

在 React 中另一个不同是不能使用返回 false 的方式阻止默认行为。必须明确的使用 preventDefault。  
使用 ES6 class 语法来定义一个组件的时候，事件处理器会成为类的一个方法。  
``` js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(prevState => {
      isToggleOn: !prevState.isToggleOn;
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(<Toggle />,document.getElementById('root'));
```
JSX回调函数中的this,类的方法默认是不会绑定this的。如果忘记绑定`this.handleClick`并把它传人onClick，调用这个函数的时候this的值会是`undefined`。  
  
可以使用两种方式解决：  
属性初始化器语法、在回调函数中使用箭头函数  

属性初始化器语法：
``` js
class LogginButton extends React.Component {
  handleClick = () => {
    console.log('this is:',this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me</button>
    );
  }
}
```
属性初始化器语法就是添加一个类属性  

> 使用箭头函数语法在每次渲染的时候都会创建一个不同的回调函数。如果这个回调函数作为一个属性传人低阶组件，这些组件可能会进行额外的重新渲染。通常建议在构造函数中绑定或使用属性初始化器语法来避免这类性能问题。

### 向事件处理程序传递参数
通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面
``` js
class Popper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Hello,World!'};
  }

  preventPop(name,e) { //事件对象e要放在最后
    e.preventDefault();
    alert(name);
  }

  render() {
    return (
      <div>
        <p>hello</p>
        <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
      </div>
    );
  }
}
```
`e` 是一个合成事件。React 根据 W3C spec 来定义这些合成事件，所以你不需要担心跨浏览器的兼容性问题。

## 表单
#### HTML表单元素与React中的其他DOM元素有所不同,因为表单元素生来就保留一些内部状态。
### 受控组件
我们通过使react变成一种单一数据源的状态来结合二者。React负责渲染表单的组件仍然控制用户后续输入时所发生的变化。相应的，其值由React控制的输入表单元素称为“受控组件”。  
`<input type="text">`, `<textarea>`, 和 `<select>` 都十分类似 - 他们都通过传入一个value属性来实现对组件的控制。  
该标签的 value 属性是只读的， 所以它是 React 中的一个非受控组件。

## DOM Elements
在React中，所有的DOM特性和属性（包括事件处理函数）都是小驼峰命名法命名。

## 了解React全家桶
### 熟悉React API
### 熟悉Redux
### 熟悉react-router
### 熟悉React UI库
较为知名的库有[Ant Design](https://ant.design/)、[material-ui](https://material-ui.com/)

### 受欢迎的脚手架工具
`npm install -g create-react-app`

### 包管理工具 yarn
Yarn自称是比npm快十倍的包管理工具，并且还有一些很赞的特性
#### 安装：
```
npm install yarn -g
```
#### 切换为淘宝镜像：
```
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```
#### 常用命令：
> * 初始化：`yarn init`
> * 安装一个包：`yarn add` 包名
> * 更新一个包：`yarn upgrade` 包名
> * 删除一个包：`yarn remove` 包名
> * 安装所有包：`yarn`或者`yarn install`
Yarn是没有全局安装的，所以安装还是用`npm`。
另外，Yarn的包依赖也是写在package.json文件里的，所以你可以在已经使用npm的项目里使用Yarn。