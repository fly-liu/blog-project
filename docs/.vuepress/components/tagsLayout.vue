<template>
  <section class="el-box">
    <h3>Tags:</h3>
    <div class="tag-box clearfix">
      <div class="item-tag fl" 
        v-for="(tagObj,index) in tags" 
        :key="index" 
        :style="'background-color:'+tagObj.color" 
        @click="tagClick(tagObj.el)"
      >{{`${tagObj.el}&nbsp;&nbsp;(${tagObj.count})`}}</div>
    </div>

    <div class="md-list-box" v-show="isDataList">
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
  </section>
</template>
<script >
import {getCount} from './utils/utils'
export default {
  data() {
    return {
      isDataList: false,
      tags: [],
      items: []
    }
  },
  methods: {
    load_() {
      let that = this;
      let reg = RegExp(that.$page.path);
      let mark = [];
      
      that.$site.pages.map(item => {
        item.frontmatter.tag && (mark = mark.concat(item.frontmatter.tag));
      });

      that.tags = getCount(mark);
    },
    tagClick(el) {
      this.isDataList = true;
      this.items = [];
      this.$site.pages.filter(item => {
        if(item.frontmatter.tag) {
          item.frontmatter.tag.filter(val => {
            if(val == el) {
              this.items.push(item);
            }
          });
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
<style lang="scss" scoped>
@import '../assets/styles/common.scss';
.el-box {
  margin: 40px auto;
  width: 60%;
  .tag-box {
    .item-tag {
      margin: 0 10px 10px 0;
      padding: 6px;
      border: none;
      cursor: pointer;
    }
  }
}
</style>
