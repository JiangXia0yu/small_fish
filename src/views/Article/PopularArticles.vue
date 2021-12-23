<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="el-icon-medal title">&nbsp;群雄逐鹿</span>
    </div>
    <div v-for="(item, index) in popularArticles" :key="index" class="text item">
      <span class="ranking">{{item.id}}</span>
      <span class="content">
        <router-link :to="{path: '/posts/'+item.id}">
          {{item.content}}
        </router-link>
      </span>
    </div>
  </el-card>
</template>

<script>
import popularArticles from '@/plugins/popularArticles.json'
export default {
  data() {
    return {
      popularArticles: []
    }
  },
  created() {
    this.popularArticles = popularArticles.popularArticles
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  .clearfix {
    color: rgba(66, 161, 255);
  }
  .item {
    margin-bottom: 10px;
    font-size: 14px;
    .ranking {
      display: inline-block;
      width: 20px;
      text-align: center;
      margin-right: 6px;
      background-color: #e8e8e8;
      color: rgba(0, 0, 0, .38);
      font-weight: 700;
      border-radius: 2px;
    }
    .content {
      a {
        color: #555;
        transition: all .2s ease-in;
      }
      a:hover {
        color: #222222;
        border-bottom: 1px solid #222222;
      }
    }
  }
  .item:nth-child(1) {
    .ranking {
      background-color: rgba(0, 136, 245, .5);
      color: #fff;
    }
  }
  .item:nth-child(2) {
    .ranking {
      background-color: #4caf5099;
      color: #fff;
    }
  }
  .item:nth-child(3) {
    .ranking {
      background-color: #ff572299;
      color: #fff;
    }
  }
}
</style>