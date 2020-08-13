---
title: 使用Cookie，和封装
sidebar: auto
date: '2020-07-25'
tag: # 页面的标签 
  - Javascript
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: 使用Cookie，和封装 Javascript Cookie 同一浏览器内多标签之间通信
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: 使用Cookie，和封装 同一浏览器内多标签之间通信
prev: ./Javascript基础笔记
# next: 
---
[参考](https://blog.csdn.net/liwenfei123/article/details/80027155)
[参考](https://blog.csdn.net/zhangquan_zone/article/details/77627899)

# 了解Cookie
Cookie是由服务器端生成，发送给User-Agent,浏览器会将Cookie的key/value保存到某个目录下的文本文件内，下次请求同一网站时就发送该Cookie给服务器

## Cookie的处理
- 服务器像客户端发送cookie
- 浏览器将cookie保存
- 之后每次http请求浏览器都会将cookie发送给服务器端

## 发送 Cookie
例：`Set-Cookie: "name=value;domain=.domain.com;path=/;expires=Sat, 11 Jun 2016 11:29:42 GMT;HttpOnly;secure"`

name=value是必选项，其它都是可选项

## cookie主要构成
- name:一个唯一确定的cookie名称。通常来讲cookie的名称是不区分大小写的。

- value:存储在cookie中的字符串值。最好为cookie的name和value进行url编码

- domain:cookie对于哪个域是有效的。所有向该域发送的请求中都会包含这个cookie信息。这个值可以包含子域(如：yq.aliyun.com)，也可以不包含它(如：.aliyun.com，则对于aliyun.com的所有子域都有效)。默认为请求的地址，通过设置document.domain可以实现跨域访问

- path: 表示这个cookie影响到的路径，浏览器跟会根据这项配置，像指定域中匹配的路径发送cookie。默认为/，即根目录， 通常用来解决同域下cookie的访问问题。

- expires:失效时间，表示cookie何时应该被删除的时间戳(也就是，何时应该停止向服务器发送这个cookie)。如果不设置这个时间戳，浏览器会在页面关闭时即将删除所有cookie；不过也可以自己设置删除时间。这个值是GMT时间格式，如果客户端和服务器端时间不一致，使用expires就会存在偏差。

- max-age: 与expires作用相同，用来告诉浏览器此cookie多久过期（单位是秒），而不是一个固定的时间点。正常情况下，max-age的优先级高于expires。

- HttpOnly: 告知浏览器不允许通过脚本document.cookie去更改这个值，同样这个值在document.cookie中也不可见。但在http请求张仍然会携带这个cookie。注意这个值虽然在脚本中不可获取，但仍然在浏览器安装目录中以文件形式存在。这项设置通常在服务器端设置。

- secure: 安全标志，指定后，只有在使用SSL链接时候才能发送到服务器，如果是http链接则不会传递该信息。就算设置了secure 属性也并不代表他人不能看到你机器本地保存的 cookie 信息，所以不要把重要信息放cookie就对了服务器端设置

## 封装Cookie方法
``` js
var CookieUtil={
  get:function(name){
    var cookieName=encodeURIComponent(name)+"=",
        cookieStart=document.cookie.indexOf(cookieName),
        cookieValue=null;
    if(cookieStart>-1){
      var cookieEnd=document.cookie.indexOf(";",cookieStart);
      if(cookieEnd==-1){
          cookieEnd=document.cookie.length;
      }
      cookieValue=decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
    }
    return cookieValue;
  },
  set:function(name,value,expires,path,domain,secure){//cookie的构成：名称、值、失效时间（何时应停止向浏览器发送cookie）、路径（向服务器发送cookie的特定域的路径）、域（cookie对于哪个域是有效的）、安全标志（指定后只能在使用SSL连接时才发送到服务器）
    var cookieText=encodeURIComponent(name) + "=" +encodeURIComponent(value);
    if(expires instanceof Date){
        cookieText += "; expires="+expires.toGMTString();//时间为GMT格式，注意信息之间用“; ”分割
    }
    if(path){
        cookieText += "; path="+path;
    }
    if(domain){
        cookieText += "; domain="+domain;
    }
    if(secure){
        cookieText += "; secure";
    }

    document.cookie = cookieText;
  },
  unset:function(name,path,domain,secure){//没有直接删除cookie的方法
    this.set(name,"",new Date(0),path,domain,secure);//使用相同路径、域、安全选项再次设置cookie，并将失效时间设置为过去的时间
  }
};
```

## 使用
``` js
//设置cookie
CookieUtil.set("name",'lwf');
CookieUtil.set("age",21);

// 读取cookie
console.log(CookieUtil.get("name"));
console.log(CookieUtil.get("age"));

// 删除cookie
CookieUtil.unset("name");
CookieUtil.unset("age");
```

## 多标签页之间通信
``` js
// a页面
CookieUtil.set("name",val);
console.log(CookieUtil.get("name"));

// b页面
CookieUtil.get("name")
```

## 使用 cookie 实现同一浏览器多个标签页之间通信原理
``` html
<!-- a 页面 -->
<button id="btn">setCookie</button>
<script>
window.onload = function() {
  var oBtn = document.getElementById('btn');
  oBtn.onclick = function() {
    CookieUtil.set('name','testCookie');
    console.log(CookieUtil.get('name'));
  }
}
</script>
```
``` js
// b页面
window.onload = function() {
  setInterval(function() {
    CookieUtil.get("name")
  },10000)
}
```

cookie 的 path: 一个页面产生的cookie只能被与这个页面的同一目录或者其他子目录下的页面访问。通常把cookie的path设置为一个更高级别的目录，从而使更多的页面共享cookie，实现多页面之间相互通信。
