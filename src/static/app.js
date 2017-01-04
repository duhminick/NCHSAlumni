import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Home from './components/Home.vue'
import Login from './components/Login.vue'

import Auth from './auth'

Vue.use(VueRouter)
Vue.use(VueResource)

function requireLogin (to, from, next) {
  if (!Auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

// TODO: Fix redirecting with authentication (including Login.vue)
const routes = [
  { path: '/', component: Home, beforeEnter: requireLogin },
  { path: '/login', component: Login },
  { path: '/logout',
    beforeEnter (to, from, next) {
      Auth.logout()
      next('/')
    }
  }
]
const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  router,
  data () {
    return {
      loggedIn: Auth.loggedIn()
    }
  }
})
