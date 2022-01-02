<template>
<el-container>
  <el-main id="article">
    <!-- 广告位 -->
    <el-card class="ad aquamarine">
      <h3>广告位</h3>
    </el-card>
    <!-- 文章列表 -->
    <ArticleList></ArticleList>
  </el-main>
  <Aside></Aside>
</el-container>
</template>

<script>
import ArticleList from "./ArticleList.vue"
import Aside from '@/views/Aside.vue'
export default {
  data() {
    return {
    }
  },
  beforeDestroy() {
    let active = document.querySelectorAll('.menus')[1];
    active.style.backgroundColor = ''
  },
  components: {
    ArticleList,
    Aside
  }
}
</script>

<style lang="scss" scoped>
// 广告位
.ad {
  height: 200px;
}
</style>