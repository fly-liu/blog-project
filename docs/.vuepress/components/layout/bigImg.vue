<template>
  <!-- 过渡动画 -->
  <transition name="fade">
    <div class="img-view" @click="bigImg">
      <!-- 遮罩层 -->
      <div class="img-layer"></div>
      <img class="img" :src="imgSrc">
    </div>
  </transition>
</template>

<script>
/**
 * 
 */
export default {
  name: 'bigImg',
  props: ['imgSrc'],
  data() {
    return {}
  },
  methods: {
    bigImg() {
      // 发送事件
      this.$emit('clickit')
    }
  },
};

</script>

<style lang='scss' scoped>
/*动画*/
.fade-enter-active,
.fade-leave-active {
  transition: all .5s linear;
  opacity: 1;
  // transform: scale(1);
  // transform: translate3D(0, 0, 0);
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  // transform: scale(0);
  // transform: translate3D(0, 100%, 0);
}


/* bigimg */

.img-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  /*遮罩层样式*/
  .img-layer {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }

  /*不限制图片大小，实现居中*/
  .img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    max-width: 70%;
  }
}
</style>