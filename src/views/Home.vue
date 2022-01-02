<template>
  <el-container>
    <el-main id="home">
      <!-- 轮播图(slideshow) -->
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(item, index) in bannerImg" :key="index">
          <router-link to="/">
            <img :src="item" alt="">
          </router-link>
        </el-carousel-item>
      </el-carousel>
      <!-- 文章区 -->
      <ArticleList></ArticleList>
    </el-main>
    <Aside></Aside>
  </el-container>
</template>

<script>
import ArticleList from '@/views/Article/ArticleList.vue'
import Aside from '@/views/Aside.vue'
export default {
  data() {
    return {
      bannerImg: [
        require('../static/images/login.jpg'),
        require('../static/images/angularjs.jpg'),
        require('../static/images/reactjs.jpg'),
        require('../static/images/vuejs.jpg'),
        require('../static/images/background.jpg'),
      ],
      
    }
  },
  beforeDestroy() {
    let active = document.querySelector('.menus');
    active.style.backgroundColor = ''
  },
  components: {
    ArticleList,
    Aside
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  .el-main {
    .el-carousel {
      .el-carousel__item {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>