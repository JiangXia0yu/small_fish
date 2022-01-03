<template>
  <el-header id="header">
    <a href="/">
      <img src="@/assets/logo.png" alt="LOGO" class="logo">
    </a>
    <div class="menu">
      <router-link 
      :to="item.link"
      v-for="(item, index) in menu"
      :key="index"
      @click.native="changeActive(index, $event)"
      class="menus"
      @mouseover.native="mouseOver"
      @mouseleave.native="mouseLeave"
      >{{item.title}}</router-link>
    </div>
    <div class="user">
      <el-button type="primary" @click="login" v-if="btnLogin">登录</el-button>
      <!-- 用户 -->
      <el-dropdown trigger="click" v-else>
        <el-avatar size="medium" class="el-dropdown-link">
          <img src="@/static/images/OIP-C.jpg" alt="">
        </el-avatar>
        <el-badge class="mark" :value="12" />
        <el-dropdown-menu slot="dropdown">
          <router-link to="/write_article">
            <el-dropdown-item icon="el-icon-edit-outline">写文章</el-dropdown-item>
          </router-link>
          <router-link to="/user/1">
            <el-dropdown-item icon="el-icon-s-home">个人主页</el-dropdown-item>
          </router-link>
          <router-link to="/news">
            <el-dropdown-item icon="el-icon-bell">
              消息提示
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
          </router-link>
          <router-link to="/settings">
            <el-dropdown-item icon="el-icon-setting">设置</el-dropdown-item>
          </router-link>
          <router-link to="/" @click.native="gotoLogout">
            <el-dropdown-item icon="el-icon-warning-outline">账号注销</el-dropdown-item>
          </router-link>
          <router-link to="/" @click.native="exitLogin">
            <el-dropdown-item icon="el-icon-switch-button">退出</el-dropdown-item>
          </router-link>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button 
      type="text" 
      class="theme" 
      @click="cutTheme"
      :class="this.isTheme == false ? 'el-icon-sunny' : 'el-icon-moon'"></el-button>
    </div>
  </el-header>
</template>

<script>
import bus from '@/EventBus/eventbus.js'
export default {
  data() {
    return {
      menu: [
        {
          title: '首页',
          link: '/'
        },
        {
          title: '文章',
          link: '/article'
        },
        {
          title: '分类',
          link: '/category/1'
        },
        {
          title: '关于',
          link: '/about'
        },
      ],
      isActive: 0,
      isShowLogin: true,
      isTheme: false,
      btnLogin: true
    }
  },
  created() {
    // 获取localStorage中的state对象
    let state = JSON.parse(localStorage.getItem('state'))
    let token = JSON.parse(localStorage.getItem('token'))
    if(token) {
      this.btnLogin = false
    }
    // 将state对象中的navIndex赋值给isActive来选中
    this.isActive = state.navIndex
    bus.$on('showLogin', val => {
      this.isShowLogin = val
    })
  },
  mounted() {
    this.mounte()
  },
  updated() {
    this.mounte()
  },
  methods: {
    mounte() {
      let state = JSON.parse(localStorage.getItem('state'))
      this.isTheme = state.isTheme
      this.isActive = state.navIndex
      if(this.isTheme == false) {
        this.moon()
      }else {
        this.sunny()
      }
    },
    // 鼠标移入
    mouseOver(e) {
      if(this.isTheme == false) {
        e.currentTarget.classList.remove('aquamarine')
        e.currentTarget.classList.add('bg_skyblue')
      }else {
        e.currentTarget.classList.remove('bg_skyblue')
        e.currentTarget.classList.add('aquamarine')
      }
    },
    // 鼠标移出
    mouseLeave(e) {
      e.currentTarget.classList.remove('bg_skyblue')
      e.currentTarget.classList.remove('aquamarine')
    },
    changeActive(i, e) {
      this.isActive = i
      if(this.isTheme == false) {
        e.currentTarget.style.backgroundColor = 'rgba(64, 158, 255, .7)'
        this.moon()
      }else {
        this.sunny()
        e.currentTarget.style.backgroundColor = 'rgba(127, 255, 212, .7)'
      }
      // 将isActive的值赋给vuex中state对象的navIndex属性
      this.$store.state.navIndex = this.isActive
      // 将vuex中navIndex属性和值存储到localStorage中
      window.localStorage.setItem('state', JSON.stringify(this.$store.state))
    },
    login() {
      this.$emit('showLogin', this.isShowLogin)
    },
    cutTheme() {
      if(this.isTheme == false) {
        this.sunny()
        this.isTheme = !this.isTheme
        this.$store.state.isTheme = this.isTheme
        window.localStorage.setItem('state', JSON.stringify(this.$store.state))
      }else {
        this.moon()
        this.isTheme = !this.isTheme
        this.$store.state.isTheme = this.isTheme
        window.localStorage.setItem('state', JSON.stringify(this.$store.state))
        
      }
    },
    sunny() {
      let app = document.querySelector('#app')
      let boxcard = document.querySelectorAll('.box-card');
      let menus = document.querySelectorAll('.menus')
      let tags = document.querySelectorAll('.tag')
      app.classList.remove('e3e3e3');
      app.classList.add('black');
      for(let i = 0;i < boxcard.length; i++) {
        boxcard[i].classList.add('black')
      }
      for(let i = 0;i < menus.length; i++) {
        menus[i].style.backgroundColor = ''
        menus[i].style.color = 'aquamarine'
      }
      for(let i = 0;i < tags.length; i++) {
        tags[i].style.backgroundColor = 'rgba(127, 255, 212, .7)'
      }
    },
    moon() {
      let app = document.querySelector('#app')
      let boxcard = document.querySelectorAll('.box-card');
      let menus = document.querySelectorAll('.menus')
      let tags = document.querySelectorAll('.tag')
      app.classList.remove('black');
      app.classList.add('e3e3e3');
      for(let i = 0;i < boxcard.length; i++) {
        boxcard[i].classList.remove('black')
      }
      for(let i = 0;i < menus.length; i++) {
        menus[i].style.backgroundColor = ''
        menus[i].style.color = '#409EFF'
      }
      for(let i = 0;i < tags.length; i++) {
        tags[i].style.backgroundColor = 'rgba(64, 158, 255, .7)'
      }
    },
    // 账号注销
    gotoLogout() {
      this.$confirm('此操作将永久删除该账号, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '注销成功!'
        });
        this.$store.token = false
        window.localStorage.setItem('token', JSON.stringify(this.$store.token))
        this.btnLogin = !this.btnLogin
        this.$router.push('/')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消注销'
        });          
      });
    },
    // 退出登录
    exitLogin() {
      window.localStorage.setItem('token', JSON.stringify(false))
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #fff !important;
  z-index: 999;
  background-color: rgba($color: #ffffff, $alpha: 1.0);
  // logo
  img {
    height: 56px;
  }
  // 导航
  .menu,.user {
    display: flex;
    align-items: center;
    height: 100%;
    a {
      padding: 19px 30px;
      transition: all .3s ease-in;
    }
    a:hover {
      color: #fff;
    }
    .menus {
      color: #409EFF;
    }
    .router-link-exact-active {
      color: #fff !important;
      background-color: rgba(64, 158, 255, .7)
    }
  }
  // 用户
  .user {
    display: flex;
    height: 100%;
    .el-dropdown {
      margin-right: 30px;
      position: relative;
      >.mark {
          position: absolute;
          top: -5px;
          right: -10px;
        }
      .el-dropdown-link {
        background-color: '';
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
    .theme {
      padding: 9px;
      font-size: 18px;
      color: #fff;
      transition: all .5s ease-in;
    }
  }
  .el-icon-sunny {
    background-color: rgba(64, 158, 255, .7);
  }
  .el-icon-moon {
    background-color: rgba(127, 255, 212, .7);
  }
}
</style>