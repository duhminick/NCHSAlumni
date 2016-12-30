import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: { template: '<div>Index</div>' } },
  { path: '/login', component: { template: '<div>Login</div>' } }
]
const router = new VueRouter({ routes })

let app = new Vue({
  el: '#app',
  router
})
