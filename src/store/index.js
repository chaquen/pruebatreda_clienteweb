import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token : sessionStorage.getItem('token'),
    user:{}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
