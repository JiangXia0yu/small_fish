<template>
  <div id="app" class="e3e3e3">
    <Header @showLogin="showLogin"></Header>
    <Login v-show="isLogin" @showLogin="showLogin"></Login>
    <!-- 加载动画 -->
    <el-skeleton :rows="6" animated v-if="animate">
      <el-skeleton-item variant="text" style="width: 240px; height: 240px;" />
    </el-skeleton>
    <router-view v-else/>
  </div>
</template>

<script>
import Header from './views/Header.vue'
import Login from './views/Login.vue'
export default {
  data() {
    return {
      isLogin: true,
      animate: true
    }
  },
  created() {
    let token = JSON.parse(localStorage.getItem('token'))
    if(token) {
      this.isLogin = false
    }
  },
  mounted() {
    this.animate = false
  },
  methods: {
    showLogin(msg) {
      this.isLogin = msg
    }
  },
  components: {
    Header,
    Login,
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  width: 65%;
  margin: 0 auto;
  min-height: 975px;
  padding-top: 60px;
}
</style>
