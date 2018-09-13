import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store';

Vue.use(Router)

function isLoggedIn(to, from, next) {
  store.dispatch('auth/authenticate')
    .then(() => {
      next()
    })
    .catch(() => {
      next('/login')
    })
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      beforeEnter: isLoggedIn
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('./views/Posts.vue'),
      beforeEnter: isLoggedIn
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('./views/Categories.vue'),
      beforeEnter: isLoggedIn
    }
  ]
})
