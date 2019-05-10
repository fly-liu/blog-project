<template>
    <section class="home-box">
      <div class="left-box">
        <div>
          <img src="../public/imgs/blog_home_head.png" alt="">
          <h3>刘哈哈的个人空间</h3>
        </div>
      </div>
      <div class="right-box">
        <h1>I’m is Freeman</h1>
        <p>这是我的个人网站，主要用来记录我学习的笔记，目前主要涉及前端开发基础部分，后面计划将一些有意思的demo也放进来。此网站使用VuePress 工具生成，借用VuePress官网的说明：一个以 Vue 驱动的主题系统的简约静态网站生成工具，和一个为编写技术文档而优化的默认主题。它是为了支持 Vue 子项目的文档需求而创建的。</p>
        <p>在学习的时候将有用的东西记录下来，重要的是记录的过程。如果不小心被各位看到了我的笔记并且从中有所收获，我将感到特别荣幸。</p>
        <button @click="$router.push({ path: '/home/vue/' })">start</button>
      </div>
    </section>
</template>
<script >
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    load_() {
      
    }
  }, 
  mounted() {
    
  }
}
</script>
<style lang="scss">
.home-box,
.left-box {
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
  height: 94.1vh;
}

.home-box {
  .left-box,
  .right-box {
    flex: 1;
  }
  .left-box {
    background-color: #dd7777;
    div {
      width: 100%;
      text-align: center;
      color: #fff;
    }
  }
  .right-box {
    height: 100%;
    text-align: center;
    background-color: #556270;

    h1,
    p {
      margin-left: auto;
      margin-right: auto;
      text-align: left;
      width: 80%;
      color: #fff;
    }
    h1 {
      margin-top: 25%;
      color: #fff;
    }
    p {
      text-indent:32px;
    }
    button {
      margin: 20% auto 0;
      padding: 10px 100px;
      border: none;
      border-radius: 60px;
      color: #fff;
      font-size: 24px;
      background-image: linear-gradient(0deg, #fd746c 0%, #ff9068 100%);
    }
  }
}
</style>
