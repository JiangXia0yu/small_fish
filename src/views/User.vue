<template>
  <el-container>
    <el-main id="user">
      <el-card class="box-card">
        <div class="text item">
          <div class="userinfo">
            <img src="@/static/images/OIP-C.jpg" alt="" class="headPhoto">
            <div class="info">
              <h3>码农小胡</h3>
              <p class="el-icon-edit">&nbsp;一个平平无奇的前端码农</p>
            </div>
          </div>
          <el-button @click="gotoProfile">编辑资料</el-button>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="text item">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="文章" name="article">
              <!-- <div class="article"> -->
                <ArticleList></ArticleList>
              <!-- </div> -->
            </el-tab-pane>
            <el-tab-pane label="关注" name="concern">
              <div class="concern" v-for="(item, index) in concern" :key="index">
                <img src="@/static/images/OIP-C.jpg" alt="" class="headPhoto">
                <router-link to="user/1">{{item}}</router-link>
              </div>
            </el-tab-pane>
            <el-tab-pane label="关注者" name="follwers">
              <div class="follwers" v-for="(item, index) in concern" :key="index">
                <img src="@/static/images/OIP-C.jpg" alt="" class="headPhoto">
                <router-link to="user/1">{{item}}</router-link>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-card>
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
      activeName: 'article',
      concern: ['姜尘', '刘伟', '江小鱼', '摸鱼大师']
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    gotoProfile() {
      this.$router.push('/settings')
    }
  },
  components: {
    ArticleList,
    Aside
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-bottom: 20px;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .userinfo {
    display: flex;
    img {
      margin-right: 20px;
    }
    .info {
      h3 {
        margin-bottom: 10px;
      }
      p {
        font-size: 12px;
      }
    }
  }
  .el-button {
    height: 40px;
  }
}
.item {
  .el-tabs {
    width: 100%;
  }
  .concern, .follwers {
    display: flex;
    align-items: center;
    padding: 5px 0;
    border: 1px solid #f1f1f1;
    border-radius: 10px;
    margin-bottom: 10px;
    .headPhoto {
      margin: 0 10px;
    }
  }
}
</style>