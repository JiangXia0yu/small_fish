import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Article from '@/views/Article/Article.vue'
import Category from '@/views/Category/Category.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'jc - Home'
    }
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
    meta: {
      title: 'jc - Article'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title: 'jc - Category'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'jc - About'
    }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, form, next) => {
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
