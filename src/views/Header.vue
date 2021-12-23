<template>
  <el-header id="header">
    <router-link to="/">
      <img src="@/assets/logo.png" alt="LOGO" class="logo">
    </router-link>
    <div class="menu">
      <router-link 
      :to="item.link"
      v-for="(item, index) in menu" 
      :key="index"
      @click.native="changeActive(index)"
      :class="isActive == index ? 'active bg_skyblue' : ''"
      class="skyblue menus"
      @mouseover.native="mouseOver"
      @mouseleave.native="mouseLeave"
      >{{item.title}}</router-link>
    </div>
    <div class="user">
      <el-button type="primary" @click="login">登录</el-button>
      <el-button 
      type="text" 
      class="theme" 
      @click="cutTheme"
      :class="this.isTheme == false ? 'el-icon-sunny bg_skyblue' : 'el-icon-moon aquamarine'"></el-button>
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
          link: '/category'
        },
        {
          title: '关于',
          link: '/about'
        },
      ],
      isActive: 0,
      isShowLogin: false,
      isTheme: false
    }
  },
  created() {
    // 获取localStorage中的state对象
    let state = JSON.parse(localStorage.getItem('state'))
    // 将state对象中的navIndex赋值给isActive来选中
    this.isActive = state.navIndex
    bus.$on('showLogin', val => {
      this.isShowLogin = val
    })
  },
  mounted() {
    let state = JSON.parse(localStorage.getItem('state'))
    this.isTheme = state.isTheme
    if(this.isTheme == false) {
      this.moon()
    }else {
      this.sunny()
    }
  },
  methods: {
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
      let active = document.querySelector('.active');
      e.currentTarget.classList.remove('bg_skyblue')
      e.currentTarget.classList.remove('aquamarine')
      if(this.isTheme == false) {
        active.classList.add('bg_skyblue')
      }else {
        active.classList.add('aquamarine')
      }
    },
    changeActive(i) {
      this.isActive = i
      if(this.isTheme == false) {
        this.moon()
      }else {
        this.sunny()
      }
      // 将isActive的值赋给vuex中state对象的navIndex属性
      this.$store.state.navIndex = this.isActive
      // 将vuex中navIndex属性和值存储到localStorage中
      window.localStorage.setItem('state', JSON.stringify(this.$store.state))
    },
    login() {
      this.isShowLogin = !this.isShowLogin
      bus.$emit('showLogin', this.isShowLogin)
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
      let home = document.querySelector('#home');
      let article = document.querySelector('#article');
      let category = document.querySelector('#category');
      let header = document.querySelector('#header')
      let boxcard = document.querySelectorAll('.box-card');
      let active = document.querySelector('.active');
      let menus = document.querySelectorAll('.menus')
      let tags = document.querySelectorAll('.tag')
      let arrow_left = document.querySelector('.el-icon-arrow-left')
      let arrow_right = document.querySelector('.el-icon-arrow-right')
      if(this.isActive == 0) {
        home.classList.remove('e3e3e3');
        home.classList.add('black');
      }else if(this.isActive == 1) {
        article.classList.remove('e3e3e3');
        article.classList.add('black');
      }else if(this.isActive == 2) {
        category.classList.remove('e3e3e3');
        category.classList.add('black');
        arrow_left.classList.remove('skyblue')
        arrow_left.classList.add('color_aqua')
        arrow_right.classList.remove('skyblue')
        arrow_right.classList.add('color_aqua')
      }
      active.classList.remove('bg_skyblue')
      active.classList.add('aquamarine')
      header.classList.add('black')
      for(let i = 0;i < boxcard.length; i++) {
        boxcard[i].classList.add('black')
      }
      for(let i = 0;i < menus.length; i++) {
        menus[i].classList.remove('skyblue')
        menus[i].classList.add('color_aqua')
      }
      for(let i = 0;i < tags.length; i++) {
        tags[i].classList.remove('bg_skyblue')
        tags[i].classList.add('aquamarine')
      }
    },
    moon() {
      let home = document.querySelector('#home');
      let article = document.querySelector('#article');
      let category = document.querySelector('#category');
      let header = document.querySelector('#header')
      let boxcard = document.querySelectorAll('.box-card');
      let active = document.querySelector('.active');
      let menus = document.querySelectorAll('.menus')
      let tags = document.querySelectorAll('.tag')
      let arrow_left = document.querySelector('.el-icon-arrow-left')
      let arrow_right = document.querySelector('.el-icon-arrow-right')
      if(this.isActive == 0) {
        home.classList.remove('black');
        home.classList.add('e3e3e3');
      }else if(this.isActive == 1) {
        article.classList.remove('black');
        article.classList.add('e3e3e3');
      }else if(this.isActive == 2) {
        category.classList.remove('black');
        category.classList.add('e3e3e3');
        arrow_left.classList.remove('color_aqua')
        arrow_left.classList.add('skyblue')
        arrow_right.classList.remove('color_aqua')
        arrow_right.classList.add('skyblue')
      }
      active.classList.remove('aquamarine')
      active.classList.add('bg_skyblue')
      header.classList.remove('black')
      for(let i = 0;i < boxcard.length; i++) {
        boxcard[i].classList.remove('black')
      }
      for(let i = 0;i < menus.length; i++) {
        menus[i].classList.remove('color_aqua')
        menus[i].classList.add('skyblue')
      }
      for(let i = 0;i < tags.length; i++) {
        tags[i].classList.remove('aquamarine')
        tags[i].classList.add('bg_skyblue')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
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
  }
  // 用户
  .user {
    display: flex;
    height: 100%;
    .theme {
      padding: 9px;
      font-size: 18px;
      color: #fff;
      transition: all .5s ease-in;
    }
    .theme:hover {
      background-color: rgba(64, 158, 255, .7)
    }
  }
  .active {
    color: #fff !important;
  }
}
</style>