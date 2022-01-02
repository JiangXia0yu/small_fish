import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Article from '@/views/Article/Article.vue'
import Posts from '@/views/Article/Posts.vue'
import Category from '@/views/Category/Category.vue'
import About from '@/views/About.vue'
import User from '@/views/User.vue'
import WriteArticle from '@/views/WriteArticle.vue'
import Profile from '@/views/User/Profile.vue'
import News from '@/views/News/news.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - jc'
    }
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
    meta: {
      title: 'Article - jc'
    }
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    meta: {
      title: 'Category - jc'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About - jc'
    }
  },
  {
    path: '/posts/:id',
    name: 'Posts',
    component: Posts,
    meta: {
      title: 'Article - jc'
    }
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User,
    meta: {
      title: 'User - jc'
    }
  },
  {
    path: '/write_article',
    name: 'WriteArticle',
    component: WriteArticle,
    meta: {
      title: 'WriteArticle - jc'
    }
  },
  {
    path: '/settings',
    redirect: '/settings/profile'
  },
  {
    path: '/settings/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Profile - jc'  
    }
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta: {
      title: 'News - jc'  
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, form, next) => {
  let token = window.localStorage.getItem('token')
  if(to.meta.title) {
    document.title = to.meta.title
  }
  if(token) {
    next()
  }else {
    next('/')
  }
})

export default router
