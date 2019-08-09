---
title: git提交项目到远程分支笔记
sidebar: false
date: '2019-05-17'
tag: # 页面的标签 
  - Git
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: 刘哈哈 笔记 git 个人博客 vue-press
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: git提交项目到远程分支笔记
next: ./vuePress
---
<!-- more 摘抄 -->
## GIT提交项目到已存在的远程分支
今天记录一下提交项目到远程分支，远程分支已存在，没有和本地进行关联  

之前也遇到过要讲本地项目提交到远程的情况，我通常会先将远程项目clone下来，再将本地项目复制进去提交，之后就维护clone下来的项目。  

找到几篇博客讲的将本地项目于远程仓库的方式，add并且commit，再checkout，提交到当前分支；现在把步骤整理出来：
1. 在项目目录下打开Git Bash Here

2. git本地仓库没有初始化，使用`git init`，之后`git add .`命令，将文件夹下的文件提交添加到暂存区(这个点表示添加profile下所有的文件)
``` cmd
git init
git add .
```

3. 使用`git commit -m "commit object"` 提交  
-m选项用于提交描述信息
``` cmd
git commit -m "提交信息"
```

4. 上面都是本地为提交到远程作准备，还得让本地连接到远程：
``` cmd
git remote add origin  git@code.aliyun.com:xxxx/aaa.git (这里的origin表示的就是远程)
```

5. 把远程分支的代码pull到本地项目上：git pull <远程主机名> <远程分支名>:<本地分支名>
如：取回`origin`主机的`master`分支，与本地的`master`分支合并
``` cmd
git pull origin master:master
```

6. git push <远程主机名> <本地分支名>:<远程分支名>  
`git push origin master`(本地的分支名):`branch1`（这里表示的是远程库的名字，可以是远程的master，也可以是某一个分支branch1，如果这个分支不存在，那么上传的本地master会在远程存为一个名为branch1的分支）
``` cmd
git push origin master:master
```
::: tip
分支推送顺序写法是<来源地>:<目的地>；所以，`git push`是<本地分支>:<远程分支>
分支拉取顺序写法是`git pull`是<远程分支>:<本地分支>
:::

如果省略远程分支名，则表示将本地分支推送与之存在"追踪关系"的远程分支（通常两者同名），如果该远程分支不存在，则会被新建

### 下面还有一些其他常用命令
- 新建本地分支： `git branch <branchname>`
``` cmd
git branch xf
```

- 查看该项目的所有本地分支和远程分支： `git branch -a`，在当前所在分支前加`*`标记 
``` cmd
git branch -a
```
`git branch` 查看本地分支
`git branch -r` 查看远程分支

-- 切换本地分支： `git checkout <branchname>`
``` cmd
git checkout xf
```

### 拉远程分支的内容
```
git clone -b <branch name> [remote repository address]
```