<template lang="html">
  <div>
    <h1>发现</h1>
    <div class='tabs2'>
  <router-link to='/find/good' tag='span' active-class='on'>发现好货</router-link>
  <router-link to='/find/price' tag='span' active-class='on'>优惠优惠</router-link>
  </div>
  <!-- 显示二级路由 -->
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>


<style lang="css" scoped>

  .tabs2 {
  display: flex;
}
.tabs2>span {
  flex: 1;
  border: 1px solid #ccc;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
}
.tabs2>span.on {
  color: red;
}
</style>