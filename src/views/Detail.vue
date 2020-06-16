<template lang='html'>

<div>
  <h1>详情页</h1>
</div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: function() {
    return{

    }
  },
  mounted () {
    console.log('动态',this.$route.params.id);
    console.log('路由',this.id);
  }
}
</script>
<style lang='css' scoped>
</style>