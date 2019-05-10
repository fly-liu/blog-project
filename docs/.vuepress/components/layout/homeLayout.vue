<template>
    <div class="press-list">
      <h3>{{title}}</h3>
      <div class="item-data" v-for="(item,index) in items" :key="index" @click="itemClick(item)">
        <h4 v-text="item.title"></h4>

        <div class="more-box" v-if="item.excerpt" v-html="item.excerpt"></div>

        <div class="sign-box" :class="item.excerpt ? 'excerpt' : ''">
          <div class="item-time">{{item.frontmatter.date ? item.frontmatter.date : '- - -'}}</div>
          <div class="item-tag-box" v-if="item.frontmatter.tag">
            <span class="item-tag" v-for="tagString in item.frontmatter.tag" :key="tagString">{{tagString}}</span>
          </div>
        </div>
      </div>
    </div>
</template>
<script >
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      items: []
    }
  },
  methods: {
    load_() {
      let that = this;
      // let reg = RegExp("/home/vue/");
      let reg = RegExp(that.$page.path);
      that.$site.pages.map(item => {
        if(item.path.match(reg)) {
          let itemArr = item.path.match(reg).input.split('/')[3] || "";
          
          if(itemArr[2]) {
            that.items.push(item);
          }
        }
      });
    },
    itemClick(e) {
      this.$router.push({ path: e.path });
    }
  }, 
  mounted() {
    this.load_();
  }
}
</script>
<style lang="scss">
@import '../../assets/styles/common.scss';
.press-list {
  margin: 40px auto;
  width: 40%;
}
</style>
