<template>
  <div id="login" v-show="isShowLogin">
    <el-card class="box-card" v-if="islogin">
      <div slot="header" class="clearfix">
        <span>密码登录</span>
        <el-button @click="closeLogin" class="el-icon-close" style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div class="text item">
        <el-input v-model="username" placeholder="请输入账号"></el-input>
        <el-input v-model="password" placeholder="请输入密码"></el-input>
        <el-button type="primary" class="login" @click="logIn">登录</el-button>
        <el-button type="text" @click="islogin = !islogin">注册</el-button>
      </div>
    </el-card>
    <el-card class="box-card" v-if="!islogin">
      <div slot="header" class="clearfix">
        <span>注册</span>
        <el-button @click="closeLogin" class="el-icon-close" style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div class="text item">
        <el-input v-model="username" placeholder="请输入账号"></el-input>
        <el-input v-model="password" placeholder="请输入密码"></el-input>
        <el-input v-model="repeat_password" placeholder="请再次输入密码"></el-input>
        <el-button type="primary" class="login">注册</el-button>
        <el-button type="text" @click="islogin = !islogin">登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import bus from '../EventBus/eventbus.js'
export default {
  data() {
    return {
      username: '',
      password: '',
      repeat_password: '',
      islogin: true,
      isShowLogin: ''
    }
  },
  methods: {
    logIn() {
      this.$notify({
        title: '自定义信息',
        message: '右上角弹出的消息'
      })
    },
    closeLogin() {
      this.isShowLogin = !this.isShowLogin
      bus.$emit('showLogin', this.isShowLogin)
    }
  },
  created() {
    bus.$on('showLogin', val => {
      this.isShowLogin = val
    })
  }
}
</script>

<style lang="scss" scoped>
#login {
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 980px;
  background-color: rgba(59, 56, 56, 0.5);
  z-index: 9999;
  display: flex;
  .box-card {
    width: 20%;
    height: 35%;
    .item {
      .el-input {
        margin-bottom: 20px;
      }
      .login {
        width: 100%;
      }
      .el-form-item__content {
        margin-left: 0 !important;
      }
    }
  }
}
</style>