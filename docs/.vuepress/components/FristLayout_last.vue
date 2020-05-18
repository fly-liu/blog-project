<template>
    <section class="home-box">
      <NavbarLayout></NavbarLayout>
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide slide-1">
              <div class="bg"></div>
              <div class="main">
                <h1>Hello World</h1>
                <p>程序员的第一句代码一般是从这句开始的</p>
              </div>
              <div class="button-list">
                <img src="https://ae01.alicdn.com/kf/H154582af903845cf859fa2d65f4f766fD.jpg" alt="icon1">
                <button @click="$router.push('/about/')">About</button>
                <button @click="$router.push('/tags/')">Tags</button>
              </div>
            </div>
            <div class="swiper-slide slide-2">
              <div class="left">
                <p class="slide-title"><img src="https://ae01.alicdn.com/kf/Hb12b3c418ad04720a2e64128b9c5248ed.jpg" alt="icon2">写在前面</p>
                <p class="slide-text">这是我的个人网站，主要用来记录我学习的笔记，目前主要涉及前端开发基础部分，后面计划将一些有意思的demo也放进来。此网站使用VuePress 工具生成，借用VuePress官网的说明：一个以 Vue 驱动的主题系统的简约静态网站生成工具，和一个为编写技术文档而优化的默认主题。它是为了支持 Vue 子项目的文档需求而创建的。</p>
                <p class="slide-text">在学习的时候将有用的东西记录下来，重要的是记录的过程。如果不小心被各位看到了我的笔记并且从中有所收获，我将感到特别荣幸。</p>
              </div>
              <div class="right">
                <img src="../assets/imgs/home_img1.jpg" alt="home_img1">
              </div>
            </div>
            <div class="swiper-slide slide-3">
              <div class="left">
                <div class="slide-img1"></div>
                <div class="slide-img2"></div>
                <div class="slide-img3"></div>
              </div>
              <div class="right">
                <p class="slide-title"><img src="https://ae01.alicdn.com/kf/H5b65b3a5e82146aeb4a872d9a9f29e90d.jpg" alt="icon2">自我介绍</p>
                <p class="slide-text">非典型程序猿一枚，喜欢没事跑两步，喜欢旅游，喜欢骑行以及各种户外运动，励志成为一个拥有六块腹肌的人，不过坐下时肚子上赘肉在告诉我还得加把劲啊！</p>
                <p class="slide-text">养了一些植物，看着它们从小慢慢长大很有成就感；个人觉得人生要一直处于学习中，在午后找个咖啡店研究研究代码，不用担心被人打扰，心也会静下来。相比天天无所事事，我更希望忙碌起来，有时会想工作不光是为了拿到那点钱，能够体现自己的价值也很重要，现在的我希望每天能有所收获和进步，一直在路上，即使路途遥远、孤独，也要勇往直前。</p>
                <p class="slide-text">目前就职于一家大型企业，人家都说大公司好，很无聊倒是真的，不过有很多时间可以使用，技术无止境，所以不能停步不前，只有自己强大了，无论在哪都可以。</p>
              </div>
            </div>
            <div class="swiper-slide slide-4">
              <div class="top">
                <p class="slide-title"><img src="https://ae01.alicdn.com/kf/H3b14cccbde8c473ab77d37c0c3b96ecfT.jpg" alt="icon2">心路历程</p>
                <p class="slide-text">做过UI，写过代码，有一天想到我应该将这些东西结合起来，看够了商业网站漫天的广告，就想做一个干干净净的页面，内容、素材自定义。</p>
                <p class="slide-text">人的初始化设置应该是一片白色，随着时间推移之后可能会添上其他东西，我觉得人生应该清清白白，所以网站基色为白色，也是一种向往吧；同时，我觉得人生不应该单纯的只有一种颜色，应该是精彩、色彩缤纷的。</p>
                <p class="slide-text">学习一门编程语言一般都是从“Hello World”开始，从此开启一个全新的世界。</p>
                <p class="slide-text">我喜欢诗和远方，希望林深时见鹿，希望心中的白月光。也明白眼下必须努力，我所渴望的正是我缺失的；活在当下，我会很认真的过好每一天，虽然有时候依然很让人沮丧，不过不会熄灭希望之光，因为心中总有值得守护的东西。</p>
              </div>
              <div class="bottom">
                <img class="slide-img-item" src="https://ae01.alicdn.com/kf/Hbe87427afe124c098ec523ba1a8b65c9R.jpg" alt="img">
                <img class="slide-img-item" src="https://ae01.alicdn.com/kf/H09e3a2f053e74e91aa42b8396b22f4b3J.jpg" alt="img">
                <img class="slide-img-item" src="https://ae01.alicdn.com/kf/H3ec34588a3bd4cd4acfaed4f5e74d7deO.jpg" alt="img">
                <img class="slide-img-item" src="https://ae01.alicdn.com/kf/H86d5a812d27844f1a213263ced4104a8V.jpg" alt="img">
              </div>
            </div>
            <div class="swiper-slide slide-5">
              <p class="slide-title">上善若水,水善利万物而不争</p>
              <p class="slide-text">	记得去黄山返程的时候，下着雨一个人走在黄山市的老街上，买下了一个刻章，上面刻的是“上善若水”，愿天上的雨都是善意的。</p>
              <p class="slide-title">子曰：君子不器。</p>
              <p class="slide-text">	不能像器具一样，只有一种用途。作为一个闲不住的人，每天总有各种想法，害怕在平淡的日子里消磨自己的意志，对于各种事物我都充满好奇，做想做的事，找到心中的自由天地。
      努力，努力！方向对了叫进步，方向错了叫尝试。</p>
              <div class="bottom">
                <div class="bottom-left">
                  <div class="content-item">
                    <span class="item-icon1"></span>
                    <p>1099983219@qq.com</p>
                  </div>
                  <div class="content-item">
                    <span class="item-icon2"></span>
                    <p>15201839521</p>
                  </div>
                </div>
                <div class="bottom-right">
                  <img class="qr-img" src="https://ae01.alicdn.com/kf/Hf7ab919c1fab4fc79d8d214c984c2be6W.jpg" alt="qrcode">
                </div>
              </div>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev swiper-button-black"></div>
        <div class="swiper-button-next swiper-button-black"></div>
        
      </div>

    </section>
</template>
<script >
import {setMainHeight} from './utils/utils'
import NavbarLayout from "@theme/layouts/Layout.vue";
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'

export default {
  name: 'fristLayout',
  data() {
    return {
      items: [],
      windowHeight: 800,
      swiperOption: {
        direction: 'vertical', //垂直方向移动
        speed:1000, // 切换速度
        mousewheel: true, //开启鼠标滚轮控制Swiper切换
        height: this.windowHeight, // 高度设置，占满设备高度
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
          bulletActiveClass: 'my-bullet-active',
        },
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: 'my-button-disabled',
        }
      }
    }
  },
  components: {
    NavbarLayout
  },
  mounted() {
    this.windowHeight = window.innerHeight;
    setMainHeight('.home-box');

    var mySwiper = new Swiper ('.swiper-container', this.swiperOption);

    window.onresize = () => { // 绑定到窗口的这个事件中
      let mainHeight = setMainHeight('.home-box');
    };
  }
}
</script>
<style lang="scss">
@import "../assets/styles/reset.scss";
.home-box {
  height: 93.9vh;
  .swiper-container {
    height: 100%;
    
    .swiper-button-prev, 
    .swiper-button-next {
      left: auto;
      right: 1.875rem;
      width: .625rem;
      transform: rotate(90deg);
      background-size: 100%;
    }

    .swiper-button-prev {
      top: 35%;
    }

    .swiper-button-next {
      top: 65%;
    }

    .swiper-pagination-bullets {
      right: 1.875rem;
      .swiper-pagination-bullet {
        margin: .875rem 0;
        border: 1px solid $theme-font-color;
        background-color: #fff;
      }
      .my-bullet-active {
        border-color: $theme-color;
        background: $theme-color;
        opacity: 1;
      }
    }
  }

  .slide-title {
    display: flex;
    align-items: center;
    font-size: $theme-font-size4;
    img {
      margin-right: 1.25rem;
      height: 3.375rem;
    }
  }

  .slide-text {
    text-indent: 2.25rem;
    font-size: $theme-font-size2;
  }

  .slide-1 {
    position: relative;
    .bg {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin:  auto;
      width: 28.125rem;
      height: 28.125rem;
      background: url(../assets/imgs/home_bg.png)
    }
    .main {
      position: absolute;
      top: 8%;
      width: 100%;
      text-align: center;
      color: $theme-font-color;
      h1 {
        font-size: 8.75rem;
        line-height: 0;
      }
      p {
        font-size: $theme-font-size2;
        font-weight: 600;
      }
    }
    .button-list {
      position: absolute;
      bottom: 6.25rem;
      margin-left: 2.5rem;
      display: flex;
      img,
      button {
        margin: 0 .625rem;
        width: 3.875rem;
        height: 3.875rem;
      }
      
      button {
        border: 4px solid $theme-font-color;
        font-size: .875rem;
        font-weight: 600;
        background: #fff;
        &:hover {
          border-color: $theme-color;
          color: $theme-color;
        }
      }
    }
  }

  .slide-2,
  .slide-3 {
    display: flex;
  }

  .slide-2 {
    .left {
      padding: 6.25rem 0 0 10%;
      width: 30%;
    }
    .right {
      flex: 1;
      text-align: center;
      img {
        margin-top: 7.5rem;
        width: 70%;
      }
    }
  }

  .slide-3 {
    .left,
    .right {
      width: 50%;
    }
    .left {
      position: relative;
      display: flex;
      .slide-img1,
      .slide-img2 {
        width: 50%;
      }

      .slide-img1 {
        margin-top: 5%;
        background: url(https://ae01.alicdn.com/kf/Hc9c359a1b5c64f76ae7725f366f2641cr.jpg) no-repeat top;
        background-size: 68%;
      }

      .slide-img2 {
        margin-top: 25%;
        background: url(https://ae01.alicdn.com/kf/H2e59b0546c2348ad967947f5be5f3bcex.jpg) no-repeat top left;
        background-size: 68%;
      }

      .slide-img3 {
        position: absolute;
        top: 6%;
        left: 35%;
        width: 30%;
        height: 280px;
        background: url(https://ae01.alicdn.com/kf/Hce60910694354ba2af75002b9a1460e6r.jpg) no-repeat center center;
        background-size: contain;
      }
    }
    .right {
      margin-right: 10%;
    }
  }

  .slide-4 {
    .top {
      margin: auto;
      width: 70%;
      .slide-title {justify-content: center;}
    }
    .bottom {
      display: flex;
      width: 100%;
      justify-content: center;
      .slide-img-item {
        margin: .625rem;
        width: auto;
      }
    }
  }

  .slide-5 {
    position: relative;
    .slide-title {
      margin: 2.875rem;
      justify-content: center;
    }
    .slide-text {
      margin: 2.875rem 7.5rem;
      text-align: center;
    }
    .bottom {
      margin-top: 13%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 12.875rem;
      background-color: #f1f1f1;
      .bottom-left {
        .content-item {
          display: flex;
          align-items: center;
          margin: 10px 0;
          .item-icon1 {
            padding: .25rem;
            border-radius: 50%;
            background: url(https://ae01.alicdn.com/kf/Hb0cfd83941194415903e6287f0dbfcedH.jpg) no-repeat center center;
            background-color: $theme-font-color;
          }
          .item-icon2 {
            padding: .25rem;
            border-radius: 50%;
            background: url(https://ae01.alicdn.com/kf/H164f8d5cab804240b8e28b0b0d61ddf86.jpg) no-repeat center center;
            background-color: $theme-font-color;
          }
          span {
            width: 2.5rem;
            height: 2.5rem;
          }        
          p {
            margin-left: 1rem;
            color: $theme-font-color;
            font-size: $theme-font-size1;
          }
        }
      }
      .bottom-right {
        .qr-img {
          width: 116px;
          height: 116px;
        }
      }
    }

  }

  .my-button-disabled{
    opacity: 0.2;
  }

}

/**
 * 屏幕适配
 */
@media screen and (max-width: 1366px) {
  .home-box {
    .slide-title {
      font-size: 1.5rem;
      img {
        margin-right: .5rem;
        height: 1.75rem;
      }
    }
    .slide-text {
      font-size: $theme-font-size1;
    }
    .slide-4 .bottom {
      .slide-img-item {
        height: 320px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  /*768*/
  .home-box {
    .slide-1 {
      .main {
        h1 {
          font-size: 46px;
        }
        p {
          font-size: 12px;
        }
      }
      .button-list {
        right: 0;
      }
    }
    .slide-2 {
      display: block;
      .left {
        width: 76%;
        padding: 0;
        margin: 0 auto;
      }
      .right {
        img {
          margin-top: 20px;
        }
      }
    }
    .slide-3 {
      .left {
        width: 100%;
        height: 100%;
        .slide-img1 {
          margin-top: 25%;
        }
        .slide-img2 {
          margin-top: 80%;
        }
        .slide-img3 {
          display: none;
        }
      }
      .right {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        margin: 0 auto;
        padding: 0 12%;
        width: 76%;
        height: 100%;
        color: rgba(0,0,0,.7);
        background: rgba(255,255,255,.7);
      }
    }
    .slide-4 {
      .top {
        margin: auto;
        width: 70%;
        position: absolute;
        padding: 0 10px;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: rgba(255,255,255,.8);
      }
      .bottom {
        flex-wrap: wrap;
        .slide-img-item {
          height: 286px;
        }
      }
    }
    .slide-5 {
      .slide-title {
        margin: 20px auto;
      }
      .slide-text {
        margin: 10px 12%;
      }
      .bottom {
        margin-top: 56%;
        height: 80px;
        .bottom-left {
          margin-left: 12%;
          .content-item {
            margin: 10px 0;
            .item-icon1,
            .item-icon2 {
              padding: 0;
              width: 24px;
              height: 24px;
              background-size: 80%;
            }
            p {
              margin: 0 10px;
            }
          }
        }
        .bottom-right {
          text-align: center;
          vertical-align: middle;
          .qr-img {
            width: 50%;
            height: auto;
            vertical-align: middle;
          }
        }
      }
    }

    .slide-title {
      font-size: 24px;
      margin-bottom: 0;
    }
    .slide-text {
      font-size: 14px;
    }
  }
}
</style>
