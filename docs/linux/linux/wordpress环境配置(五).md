---
title: wordpress环境配置(五)
date: '2019-08-01'
sidebar: auto
tag: # 页面的标签 
  - Linux
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: 刘哈哈 个人博客 笔记 基础 Linux 配置 wordpress
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: 笔记 基础 Linux 配置 wordpress
prev: ./VIM编辑器配置(四)
next: ./文件操作
---

# 搭建Web服务器环境

## 服务器解决方案
LAMP Linux + Apache + Mysql + Php

LNMP Linux + Nginx + Mysql + Php

终端工具

## Ubuntu Server管理员权限解读
为了安全考虑，Ubuntu官方不推荐使用root账户远程登录

普通账户没有管理员权限

默认情况下root账户密码为空并且在终端中不允许无密码登录，所以默认情况下root账户无法登录

### 切换到超级管理员  
su (Switch User) 切换到超级管理员

sudo (Switch User and DO) 以超级管理员身份执行

**su命令**：当前用户身份完全切换到root账户，使用root账户密码登录，除非执行exit退出登录，否则超级权限将一直有效

**sudo命令**：当前用户身份没有改变，使用自身密码获得授权，超级权限是临时的

**优缺点**： sudo弥补了su产生的多账户安全问题，使用su命令必须得知道root账户的密码，sudo使得普通管理员使用自己的密码也可以获得超级管理员权限

### Ubuntu 命令行
登录进终端后，会显示主机信息，下面以root账户为例：
```
root@ubuntu:~#

root: 用户名

@ubuntu: 主机名

~: 当前目录，Ubuntu为每一个普通用户创建了一个和账户名称相同的目录作为个人文件夹，只有在当前目录才会显示"~"，处于其他目录会显示真实路径

#: 表示超级管理员，"$" 表示普通用户

```

