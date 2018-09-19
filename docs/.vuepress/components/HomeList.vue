<template>
    <div class="home-list">
      <h3>Blog List:</h3>
      <div class="item-data clearfix" v-for="(item,index) in items" :key="index" @click="itemClick(item)">
        <h4 v-text="item.title"></h4>
        <div class="item-time fl">{{item.frontmatter.date ? item.frontmatter.date : '- - -'}}</div>
        <div class="item-tag fr" v-for="tagString in item.tags" v-if="item.tags">{{tagString}}</div>
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
      let reg = RegExp("/home/");
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
.home-list {
  margin: 40px auto;
  width: 30%;
  .item-data {
    margin: 20px auto;
    padding: 10px;
    box-shadow: 1px 1px 10px 1px #ccc;
    cursor: pointer;
  }

  .item-time,
  .item-tag {
    // color: #999;
  }

  .item-time {
    color: #999;
  }

  .item-tag {
    padding: 0 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #fff;
    background-color: #999;
  }
}  
.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
}

.fl {float: left;}
.fr {float: right;}

.clearfix {
    display: block;
}
</style>