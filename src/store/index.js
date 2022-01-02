import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navIndex: 0,
    isTheme: false,
    postsId: 1,
    token: '',
    user: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [persistedState({})]
})
