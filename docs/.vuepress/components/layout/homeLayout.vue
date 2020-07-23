<template>
    <div class="press-list common-box">
      <NavbarLayout></NavbarLayout>
      <div class="item-warrper">
        <div class="item-data" v-for="(item,index) in items" :key="index">
          <div class="item-title-warpper">
            <h2 v-text="item.title" @click="itemClick(item)"></h2>
            <p @click="itemClick(item)">阅读全文 >></p>
          </div>

          <div class="more-box" v-if="item.excerpt" v-html="item.excerpt"></div>

          <div class="sign-box" :class="item.excerpt ? 'excerpt' : ''">
            <div class="item-time"><span class="time-icon"></span>{{item.frontmatter.date ? item.frontmatter.date : '- - -'}}</div>
            <div class="item-tag-box" v-if="item.frontmatter.tag">
              <div 
                class="item-tag" 
                @click="$router.push({ path: '/tags/' })"
                v-for="tagString in item.frontmatter.tag" 
                :key="tagString">
                <span class="tag-icon"></span>
                <span class="tag-text">{{tagString}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script >
import NavbarLayout from "@theme/layouts/Layout.vue";
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    NavbarLayout
  },
  data() {
    return {
      items: []
    }
  },
  methods: {
    load_() {
      const that = this;
      // const reg = RegExp("/home/vue/");
      const reg = RegExp(that.$page.path);
      let newDataList = []
      that.$site.pages.map(item => {
        if(item.path.match(reg)) {
          let itemArr = item.path.match(reg).input.split('/')[3] || "";
          
          if(itemArr[2]) {
            newDataList.push(item);
          }
        }
      });
      newDataList = this.sortKey(newDataList, "date")
      
      that.items = newDataList
    },
    sortKey(array, key) {
      return array.sort((a, b) => {
        var x = a.frontmatter[key];
        var y = b.frontmatter[key];
        return x > y ? -1 : x < y ? 1 : 0;
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
  .press-list {
    .sidebar {
      display: none;
    }
  }
</style>
<style lang="scss" scoped>
@import '../../assets/styles/common.scss';
.press-list {
  .item-data {
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      width: 2%;
      height: 4px;
      background: #fff;
    }
    &::after {
      position: absolute;
      content: '';
      right: 20px;
      bottom: -2px;
      width: 2%;
      height: 4px;
      background: #fff;
    }
  }

  .item-time {
    .time-icon {
      background: url(https://ae01.alicdn.com/kf/Hc151c568f616423aa733b740fb8ee94cu.jpg) no-repeat center;
      background-size: contain;
    }
  }

  .item-tag {
    .tag-icon {
      background: url(https://ae01.alicdn.com/kf/H80b41d67c10143a1a304c5be68f7297bu.jpg) no-repeat center;
      background-size: contain;
    }
  }
}
@media screen and (max-width: 768px) {
  .press-list {
    .item-time {
      .time-icon {
        margin-right: 10px;
        width: 16px;
        height: 16px;
      }
    }
    .item-tag {
      font-size: 14px;
      .tag-icon {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>
