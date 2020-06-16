import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// import Home from './views/Home.vue'
// import Find from './views/Find.vue'
// import User from './views/User.vue'
// import Cart from './views/Cart.vue'
// import Detail from './views/Detail.vue'
const Home = ()=>import('./views/Home.vue')
const Find = ()=>import('./views/Find.vue')
const User = ()=>import('./views/User.vue')
const Cart = ()=>import('./views/Cart.vue')
const Detail = ()=>import('./views/Detail.vue')

const Good = ()=>import('@/components/find/Good.vue')
const Price = ()=>import('@/components/find/Price.vue')


let router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/home',component: Home },
    { 
      path: '/find',
      component: Find,
      children: [
        { path: 'good', component: Good},
        { path: 'price', component: Price},
        { path: '', redirect: '/find/good'}
      ]
    },
    { path: '/user',component: User },
    { path: '/cart',component: Cart },
    { path: '/detail/:id', component: Detail, props: true },
    { path: '/find*', component: Find },
    
  ]
})
//抛出实例

export default router