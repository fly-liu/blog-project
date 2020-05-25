<template>
  <section class="home-box scrollbar">
    <NavbarLayout></NavbarLayout>
    <div class="home-container">
      <div class="home-wrapper">
        <div class="home-slide slide-1">
          <div class="bg"></div>
          <div class="main">
            <h1 class="text-shadow">Hello World</h1>
            <p>就从这句开始吧</p>
          </div>
          <div class="button-list">
            <img
              class="box-shadow"
              src="https://ae01.alicdn.com/kf/H154582af903845cf859fa2d65f4f766fD.jpg"
              alt="个人图标"
            />
            <button class="box-shadow" @click="$router.push('/about/')">About</button>
            <button class="box-shadow" @click="$router.push('/tags/')">Tags</button>
          </div>
        </div>

        <div class="home-slide slide-2">
          <div class="left">
            <p class="slide-header">
              <img
                src="https://ae01.alicdn.com/kf/Hb12b3c418ad04720a2e64128b9c5248ed.jpg"
                alt="icon2"
              />写在前面
            </p>
            <p
              class="slide-text"
            >这是我的个人网站，主要用来更新我学习的笔记，目前主要涉及前端开发基础部分，后面计划将一些有意思的demo也放进来。此网站使用VuePress 工具生成，借用VuePress官网的说明：一个以 Vue 驱动的主题系统的简约静态网站生成工具，和一个为编写技术文档而优化的默认主题。它是为了支持 Vue 子项目的文档需求而创建的。</p>
            <p class="slide-text">记录是学习的重要过程。如果不小心被各位看到了我的笔记并且从中有所收获，我将感到特别荣幸。</p>
          </div>
          <div class="right">
            <img
              class="box-shadow border-radius13"
              src="https://ae01.alicdn.com/kf/H3a1cbb4081a1467185857216b0a3067f6.jpg"
              alt="个人照片"
            />
          </div>
        </div>

        <div class="home-slide slide-3">
          <p class="slide-header">
            <img
              src="https://ae01.alicdn.com/kf/H5b65b3a5e82146aeb4a872d9a9f29e90d.jpg"
              alt="icon2"
            />自我介绍
          </p>
          <div class="slide-flex">
            <div class="img-fixed box-shadow">
              <img
                src="https://ae01.alicdn.com/kf/Hc9c359a1b5c64f76ae7725f366f2641cr.jpg"
                alt="个人照片1"
              />
            </div>
            <div class="img-fixed box-shadow">
              <img
                src="https://ae01.alicdn.com/kf/H2e59b0546c2348ad967947f5be5f3bcex.jpg"
                alt="个人照片2"
              />
            </div>
            <div class="img-fixed box-shadow">
              <img
                src="https://ae01.alicdn.com/kf/H2e59b0546c2348ad967947f5be5f3bcex.jpg"
                alt="个人照片2"
              />
            </div>
            <div class="img-fixed box-shadow">
              <img
                src="https://ae01.alicdn.com/kf/H2e59b0546c2348ad967947f5be5f3bcex.jpg"
                alt="个人照片2"
              />
            </div>
            <div class="img-fixed box-shadow">
              <img
                src="https://ae01.alicdn.com/kf/H2e59b0546c2348ad967947f5be5f3bcex.jpg"
                alt="个人照片2"
              />
            </div>
            <div class="img-fixed box-shadow">
              <img
                src="https://ae01.alicdn.com/kf/H2e59b0546c2348ad967947f5be5f3bcex.jpg"
                alt="个人照片2"
              />
            </div>
            <!-- <div class="slide-icon"></div> -->
          </div>
          <p class="slide-text">非典型程序猿一枚，喜欢跑步，喜欢旅游，喜欢骑行以及各种户外运动</p>
          <p
            class="slide-text"
          >喜欢养植物，看着它们从小慢慢长大很有成就感；个人觉得人要一直处于学习中，安静写写代码品品生活。希望忙碌一点，迎接挑战，能够体现自己的价值，希望每天能有所收获和进步，勇往直前。</p>
          <p class="slide-text">有丰富的web网站和小程序开发经验，平时以及周末时间充足，有良好的开发习惯和良好沟通能力。具备较强的自我学习能力和适应能力。</p>
          <!-- <div class="right"> -->
          <!-- </div> -->
        </div>

        <div class="home-slide slide-4">
          <p class="slide-header">
            <img
              src="https://ae01.alicdn.com/kf/H3b14cccbde8c473ab77d37c0c3b96ecfT.jpg"
              alt="icon2"
            />我们的项目
          </p>
          <div class="slide-wrapper">
            <div class="slide-flex">
              <img
                class="img-item box-shadow"
                src="https://ae01.alicdn.com/kf/Hd347065ad4a2401ebab0e14a2962659dE.jpg"
                alt="消防巡检1"
              />
              <img
                class="img-item box-shadow"
                src="https://ae01.alicdn.com/kf/H2a0345cfa303429fac83eb76cbe403ab8.jpg"
                alt="消防巡检2"
              />
              <img
                class="img-item box-shadow"
                src="https://ae01.alicdn.com/kf/Ha406f731286e44cb8e7186d01ce2d6b8w.jpg"
                alt="消防巡检3"
              />
            </div>
            <h3 class="slide-title">消防巡检平台</h3>
            <p
              class="slide-text"
            >项目说明：该平台是集数据可视化大屏、三维地图的消防设施管理平台，数据可视化大屏加载了三维模型，反应真实的应用场景，结合了人脸识别、实时视频流、智慧传感设备，可实时推送信息，做到远程检测和控制；发生严重异常时，比如烟雾、火灾报警会实时发出警报，设备做应急反应。该系统还包括设备管理、维护以及设备管理等功能模块。</p>
            <p class="slide-text">使用技术：项目使用前后端分离开发，单页面应用，前端基于Vue.js、Cesium.js 等框架库开发。</p>
          </div>
          <div class="slide-wrapper">
            <div class="slide-flex">
              <img
                class="img-item box-shadow"
                src="https://ae01.alicdn.com/kf/H0d9405ae821e422598ce90a0416cf224W.jpg"
                alt="富照护运营平台"
              />
            </div>
            <h3 class="slide-title">富照护运营平台</h3>
            <p
              class="slide-text"
            >项目说明：富照护系统是一款社区服务的产品，对需要照看护理的老人，配合物联网智能设备进行健康、环境的管理，对患有慢性疾病人群的健康信息检测管理，该平台在富照护系统中主要用于运营管理人员和设备等，以及数据报警、统计等功能，人员分为多种角色以及人员和人员组；设备管理主要分为健康设备和安全设备，对设备进行增删改和人员和设备关系绑定等操作；数据统计主要用于统计异常事件、量测测试等，配合地图显示设备位置和热力图分布和查看设备信息。</p>
            <p class="slide-text">使用技术：项目使用前后端分离开发，单页面应用，前端基于Vue.js 等框架库开发。</p>
          </div>
          <div class="slide-wrapper">
            <div class="slide-flex">
              <img
                class="img-item box-shadow"
                src="https://ae01.alicdn.com/kf/H0ff6dbe275a34367a0be8da675720f0c0.jpg"
                alt="富照护慢病管理系统"
              />
            </div>
            <h3 class="slide-title">富照护慢病管理系统</h3>
            <p class="slide-text">项目说明：富照护系统是一款社区服务的产品，对需要照看护理的老人，配合物联网智能设备进行健康、环境的管理，对患有慢性疾病人群的健康信息检测管理，该平台在富照护系统中主要用于医生端，医生可添加关注的人员，观察关注人员的健康信息和可视化数据。</p>
            <p class="slide-text">使用技术：项目使用前后端分离开发，单页面应用，前端基于Vue.js、Cesium.js 等框架库开发。</p>
          </div>
          <div class="slide-wrapper">
            <div class="slide-flex">
              <img
                class="img-item box-shadow"
                src="https://ae01.alicdn.com/kf/Hdda4e40e357643ae800f3fcafcdea539h.jpg"
                alt="FiiHealthcare"
              />
              <img
                class="img-item box-shadow"
                src="https://ae01.alicdn.com/kf/Hbab7c4f1fee44123a8bf0e5250d4de23j.jpg"
                alt="FiiHealthcare"
              />
              <img
                class="img-item box-shadow"
                src="https://ae01.alicdn.com/kf/He8e0f25a84004b19b1ecae8db09698ecL.jpg"
                alt="FiiHealthcare"
              />
              <img
                class="img-item box-shadow"
                src="https://ae01.alicdn.com/kf/He82e14e582264a7abc1e723840eafa31T.jpg"
                alt="FiiHealthcare"
              />
              <img
                class="img-item box-shadow"
                src="https://ae01.alicdn.com/kf/H976f30ee1a394851ac2413fac2b95f428.jpg"
                alt="FiiHealthcare"
              />
              <img
                class="img-item box-shadow"
                src="https://ae01.alicdn.com/kf/H3dd88f5c570d4439a13c32027245190cS.jpg"
                alt="FiiHealthcare"
              />
            </div>
            <h3 class="slide-title">FiiHealthcare 小程序</h3>
            <p class="slide-text">项目说明：富照护系统是一款社区服务的产品，对需要照看护理的老人，配合物联网智能设备进行健康、环境的管理，对患有慢性疾病人群的健康信息检测管理，这个是客户端小程序，用户录入完个人信息和人脸之后，可通过人脸识别或小程序开始测量，可查看历史测量数据和可视化图表，添加关注等功能，根据不同的角色有不同的操作权限，管理员或志愿者可添加人员。</p>
            <p class="slide-text">使用技术：项目使用微信小程序原生框架开发，引入qrcode.js,echarts.js等工具库。</p>
          </div>

        </div>

        <div class="home-slide slide-5">
          <p class="slide-header">
            <img
              src="https://ae01.alicdn.com/kf/H3b14cccbde8c473ab77d37c0c3b96ecfT.jpg"
              alt="icon2"
            />历史记录
          </p>
          <p class="slide-text">做过UI，写过代码</p>
          <p class="slide-text">闲时设计的几张图。</p>

          <div class="slide-flex">
            <img
              class="img-item box-shadow border-radius13"
              src="https://ae01.alicdn.com/kf/Hbe87427afe124c098ec523ba1a8b65c9R.jpg"
              alt="img"
            />
            <img
              class="img-item box-shadow border-radius13"
              src="https://ae01.alicdn.com/kf/H09e3a2f053e74e91aa42b8396b22f4b3J.jpg"
              alt="img"
            />
            <img
              class="img-item box-shadow border-radius13"
              src="https://ae01.alicdn.com/kf/H3ec34588a3bd4cd4acfaed4f5e74d7deO.jpg"
              alt="img"
            />
            <img
              class="img-item box-shadow border-radius13"
              src="https://ae01.alicdn.com/kf/H86d5a812d27844f1a213263ced4104a8V.jpg"
              alt="img"
            />
          </div>
        </div>

        <div class="home-slide footer">
          <div class="footer-left">
            <div class="content-item">
              <span class="item-icon1"></span>
              <p>1099983219@qq.com</p>
            </div>
            <div class="content-item">
              <span class="item-icon2"></span>
              <p>15201839521</p>
            </div>
          </div>
          <div class="footer-right">
            <img
              class="qr-img"
              src="https://ae01.alicdn.com/kf/Hf7ab919c1fab4fc79d8d214c984c2be6W.jpg"
              alt="qrcode"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script >
import { setMainHeight } from "./utils/utils";
import NavbarLayout from "@theme/layouts/Layout.vue";

export default {
  name: "fristLayout",
  data() {
    return {};
  },
  components: {
    NavbarLayout
  },
  mounted() {
    setMainHeight(".slide-1");

    window.onresize = () => {
      // 绑定到窗口的这个事件中
      let mainHeight = setMainHeight(".slide-1");
    };
  }
};
</script>
<style lang="scss">
@import "../assets/styles/reset.scss";
.home-box {
  height: 100%;
  .home-container {
    height: 100%;
  }

  .slide-header {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $theme-font-size3;
    img {
      margin-right: 1.25rem;
      height: 2.125rem; // 34px
    }
  }

  .slide-title {
    margin: 0.625rem auto;
  }

  .slide-text {
    font-size: $theme-font-size1;
    color: #8492a6;
  }

  .home-slide:not(:first-child):not(:last-child) {
    margin: auto;
    padding: 2vw 0;
    width: 70%;
  }

  .slide-flex {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    .img-item {
      margin: 0.96vw 0.96vw 0.96vw 0;
      max-width: 90vw;
      max-height: 160px;
    }

    .img-fixed {
      margin: 0.96vw;
      width: 12vw;
      height: 12vw;
      overflow: hidden;

      img {
        width: 100%;
      }
    }
  }

  .slide-1 {
    position: relative;
    height: 94vh;
    .bg {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      max-width: 100vw;
      height: 28.125rem;
      background: url(https://ae01.alicdn.com/kf/H4cf00f032a354e989f9cb04ac64a033dS.jpg) center no-repeat;
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
      bottom: 4vh;
      margin-left: 2.5rem;
      display: flex;
      img,
      button {
        margin: 0 0.625rem;
        width: 3.875rem;
        height: 3.875rem;
      }

      button {
        border: 4px solid $theme-font-color;
        font-size: 0.875rem;
        font-weight: 600;
        background: #fff;
        &:hover {
          border-color: $theme-color;
          color: $theme-color;
        }
      }
    }
  }

  .slide-2 {
    display: flex;
    .left {
      padding: 0 0 6.25rem 0;
      width: 32%;
    }
    .right {
      flex: 1;
      text-align: right;
      img {
        width: 75%;
      }
    }
  }

  .slide-3 {
    position: relative;
    .slide-icon {
      position: absolute;
      top: 15%;
      right: 10%;
      width: 5vw;
      height: 5vw;
      background: url(https://ae01.alicdn.com/kf/Hce60910694354ba2af75002b9a1460e6r.jpg)
        no-repeat center center;
      background-size: contain;
    }
  }

  .slide-5 {
    .slide-flex {
      display: flex;
      width: 100%;
      justify-content: center;
      .img-item {
        margin: 10px;
        max-height: 350px;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f1f1f1;
    .footer-left {
      .content-item {
        display: flex;
        align-items: center;
        margin: 10px 0;
        .item-icon1 {
          padding: 0.25rem;
          border-radius: 50%;
          background: url(https://ae01.alicdn.com/kf/Hb0cfd83941194415903e6287f0dbfcedH.jpg)
            no-repeat center center;
          background-color: $theme-font-color;
        }
        .item-icon2 {
          padding: 0.25rem;
          border-radius: 50%;
          background: url(https://ae01.alicdn.com/kf/H164f8d5cab804240b8e28b0b0d61ddf86.jpg)
            no-repeat center center;
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
    .footer-right {
      .qr-img {
        width: 116px;
        height: 116px;
      }
    }
  }

  .my-button-disabled {
    opacity: 0.2;
  }
}

/**
 * 屏幕适配
 */
@media screen and (max-width: 1366px) {
  .home-box {
    .slide-header {
      font-size: 1.5rem;
      img {
        margin-right: 0.5rem;
        height: 1.75rem;
      }
    }

    .slide-flex {
      .img-fixed {
        width: 27.5vw;
        height: 27.5vw;
      }
      .img-item {
        max-height: 7.5rem;
      }
    }

    .home-slide:not(:first-child):not(:last-child) {
      width: 90%;
    }

    .slide-text {
      font-size: $theme-font-size1;
      width: 100%;
    }

    .slide-5 {
      .slide-flex {
        justify-content: left;
        flex-wrap: wrap;
        .img-item {
          max-height: 35vw;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  /*768*/
  .home-box {
    .slide-header {
      font-size: 24px;
      margin-bottom: 0;
    }

    .slide-text {
      font-size: 14px;
      width: 100%;
    }

    .slide-flex {
      .img-fixed {
        width: 27.5vw;
        height: 27.5vw;
      }
    }

    .slide-1 {
      .main {
        h1 {
          font-size: 46px;
        }
      }
      .button-list {
        right: 0;
      }
    }
    .slide-2 {
      .left {
        width: 100%;
        padding: 0 0 10px 0;
      }
      .right {
        display: none;
      }
    }
    
    .slide-5 {
      .slide-flex {
        justify-content: left;
        flex-wrap: wrap;
        .img-item {
          max-height: 68vw;
        }
      }
    }

    .footer {
      .footer-left {
        margin-left: 12%;
        .content-item {
          .item-icon1,
          .item-icon2 {
            width: 24px;
            height: 24px;
            background-size: 80%;
          }
          p {
            margin: 0 10px;
          }
        }
      }
      .footer-right {
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
}
</style>
