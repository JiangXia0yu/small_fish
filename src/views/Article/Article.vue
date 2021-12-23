<template>
  <div id="article" class="e3e3e3">
    <el-container>
      <el-main>
        <!-- 广告位 -->
        <el-card class="ad aquamarine">
          <h3>广告位</h3>
        </el-card>
        <!-- 文章列表 -->
        <ArticleList></ArticleList>
      </el-main>
      <!-- 右侧 -->
      <Aside></Aside>
    </el-container>
  </div>
</template>

<script>
import ArticleList from "./ArticleList.vue"
import Aside from "../Aside.vue"
export default {
  data() {
    return {
    }
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