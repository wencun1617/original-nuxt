<template>
  <div text-center>
    tourist params : {{ route.params.inspect }}
  </div>
</template>

<script setup lang='ts'>
const route = useRoute()
console.log("🚀 ~ file: [inspect].vue:9 ~ route:", route)
</script>
<style scoped lang='less'>
</style>