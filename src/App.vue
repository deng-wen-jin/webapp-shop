<template>
  <div class="app">
    <!-- 渲染路由组件的标签 -->
  <router-view></router-view>

  <div class="tabs">
    <!-- router-link:相对于是a标签 -->
      <router-link to='/home' tag='span' active-class='on'>首页</router-link>
      <router-link to='/find' tag='span' active-class='on'>发现</router-link>
      <router-link to='/cart' tag='span' active-class='on'>购物车</router-link>
      <router-link to='/user' tag='span' active-class='on'>我的</router-link>
      <!-- 编程式导航 -->
      <!-- <span @click="skip(1)">首页</span>
      <span @click="skip(2)">发现</span>
      <span @click="skip(3)">我的</span> -->
  </div>

  </div>


</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import World from './components/World'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // World
  },
  methods: {

    skip(idx) {
      switch (idx) {
        case 1:
          this.$router.push('/home')
          break;
          case 2:
          this.$router.push('/find')
          break; 
          case 3:
          this.$router.push('/cart')
          break;
          case 4:
          this.$router.push('/user')
          break;
          default:
      }
    }
  }
}
</script>

<style>
html,body{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.app{
  width: 100%;
  height: 100%;
  position: relative;
}
.tabs{
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 80px;
  display: flex;
}

.tabs span{
  flex: 1;
  text-align: center;
  border: 1px solid #cccccc;
  line-height: 80px;
  cursor: pointer;
}
.tabs span.on {
  color: red;
}
</style>
