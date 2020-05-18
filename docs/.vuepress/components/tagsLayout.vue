<template>
  <section class="el-box common-box">
    <NavbarLayout></NavbarLayout>
    <div class="item-warrper">
      <div class="tag-box clearfix">
        <div class="item-tag fl" 
          v-for="(tagObj,index) in tags" 
          :key="index" 
          :style="'background-color:'+tagObj.color" 
          @click="tagClick(tagObj.el)"
        >{{`${tagObj.el}&nbsp;&nbsp;(${tagObj.count})`}}</div>
      </div>
      <h2></h2>

      <div class="md-list-box" v-show="isDataList">
        <div class="item-data" v-for="(item,index) in items" :key="index" @click="itemClick(item)">
          <div class="item-left">
            <div class="item-title-warpper">
              <h2 v-text="item.title" @click="itemClick(item)"></h2>
            </div>

            <div class="more-box" v-if="item.excerpt" v-html="item.excerpt"></div>

            <div class="sign-box" :class="item.excerpt ? 'excerpt' : ''">
              <div class="item-time"><span class="time-icon"></span>{{item.frontmatter.date ? item.frontmatter.date : '- - -'}}</div>
            </div>
          </div>
          <p @click="itemClick(item)">阅读全文</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script >
import {getCount} from './utils/utils'
import NavbarLayout from "@theme/layouts/Layout.vue"
export default {
  data() {
    return {
      isDataList: false,
      tags: [],
      items: []
    }
  },
  components: {
    NavbarLayout
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
  margin: auto 22%;
  .tag-box {
    margin-top: 1.875rem;
    .item-tag {
      margin: 0 1.5rem .625rem 0;
      padding: .5rem .875rem;
      border: none;
      color: #f8f8f8;
      cursor: pointer;
    }
  }
  .md-list-box {
    .item-data {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1.25rem 0;
      border: none;
      border-top: 1px solid #cfcfcf;
      &:last-child {
        border-bottom: 1px solid #cfcfcf;
      }
      .item-left {
        width:90%;
      }
      p {
        border: 1px solid;
        font-size: 0.875rem;
        color: #46bd87;
        cursor: pointer;
        padding: .5rem 1rem;
      }
    }

    .item-time {
      .time-icon {
        background: url(https://ae01.alicdn.com/kf/Hc151c568f616423aa733b740fb8ee94cu.jpg) no-repeat center;
        background-size: contain;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .el-box {
    margin: auto 4%;
    .tag-box {
      margin: 10px 10px 0;
      .item-tag {
        margin: 0 6px 6px 0;
      }
    }
    .md-list-box {
      .item-data {
        margin: 0 6%;
        padding: 0;
        border: none;
        .item-left {
          width:70%;
        }
        
        p {
          padding: 4px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
