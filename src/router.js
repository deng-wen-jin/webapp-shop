import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Home from './views/Home.vue'
import Find from './views/Find.vue'
import User from './views/User.vue'

let router = new VueRouter({
  routes: [
    { path: '/home',component: Home },
    { path: '/find',component: Find },
    { path: '/user',component: User }
  ]
})
//抛出实例

export default router