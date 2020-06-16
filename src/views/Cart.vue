<template lang='html'>
<div>
<h1>购物车</h1>
</div>
</template>

<script>
export default {

  beforeRouteLeave (to, from, next) {
    console.log('to',to);
    console.log('from',from);
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}

}
</script>
<style lang='css' scoped>


</style>