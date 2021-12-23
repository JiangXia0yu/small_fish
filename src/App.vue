<template>
  <div id="app">
    <Header></Header>
    <Login v-show="isLogin"></Login>
    <router-view/>
  </div>
</template>

<script>
import Header from './views/Header.vue'
import Login from './views/Login.vue'
export default {
  data() {
    return {
      isLogin: false
    }
  },
  components: {
    Header,
    Login
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  width: 65%;
  margin: 0 auto;
}
</style>
