import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from './feathersVuex'
import localAuth from './localAuth'

const { service, auth, FeathersVuex } = feathersVuex

Vue.use(Vuex)
Vue.use(FeathersVuex)

export default new Vuex.Store({
  state: {
    snacbarNotification: {}
  },
  actions: {
    setSnackbarNote (store, payload) {
      store.commit('setSnackbarNote', payload)
    }
  },
  mutations: {
    setSnackbarNote (state, payload) {
      state.snacbarNotification = payload
    }
  },
  getters: {
    getSnackbarNote (state) {
      return state.snacbarNotification
    }
  },
  modules: {
    localAuth
  },
  strict: true,
  plugins: [
    service('users', {
      instanceDefaults: {
        email: '',
        password: ''
      }
    }),
    service('posts', {
      instanceDefaults: {
        title: '',
        content: ''
      }
    }),
    service('categories', {
      instanceDefaults: {
        title: '',
        slug: ''
      }
    }),
    auth({
      userService: 'users',
    })
  ]
})
