<template>
  <el-aside width="300px">
    <!-- 搜索栏 -->
    <Search></Search>
    <!-- 热门文章排行 -->
    <PopularArticles></PopularArticles>
    <!-- 广告位 -->
    <el-card class="box-card advertising">
      <div class="text item">
        <img src="../static/images/background.jpg" alt="">
      </div>
    </el-card>
    <!-- 标签分类 -->
    <Tag></Tag>
  </el-aside>
</template>

<script>
import PopularArticles from '@/views/Article/PopularArticles.vue'
import Tag from '@/views/Tag/Tag.vue'
import Search from '@/views/Search/Search.vue'
export default {
  components: {
    PopularArticles,
    Tag,
    Search
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  .box-card {
    margin-bottom: 20px;
    .clearfix {
      color: rgba(66, 161, 255);
    }
  }
  .search,.advertising {
    border: 0;
    ::v-deep .el-card__body {
      padding: 0;
    }
  }
  // 广告
  .advertising {
    .item {
      height: 100px;
      img {
        width: 100%;
        height: 100px;
      }
    }
  }
}
</style>