<template>
    <div class="press-list">
      <h3>Android 相关:</h3>
      <div class="item-data clearfix" v-for="(item,index) in items" :key="index" @click="itemClick(item)">
        <h4 v-text="item.title"></h4>
        <div class="item-time fl">{{item.frontmatter.date ? item.frontmatter.date : '- - -'}}</div>
        <div class="item-tag fr" v-for="tagString in item.tags" :key="tagString" v-if="item.tags">{{tagString}}</div>
      </div>
    </div>
</template>
<script >
export default {
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    this.load_();
  },
  methods: {
    load_() {
      let that = this;
      let reg = RegExp("/tags/");
      that.$site.pages.map(item => {
        if(item.path.match(reg)) {
          let itemArr = item.path.match(reg).input.split('/');
          if(item.frontmatter.tag) {
            item.tags = item.frontmatter.tag.split("/");
          }
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
}
</script>
<style lang="scss">
@import '../assets/styles/common.scss'
</style>