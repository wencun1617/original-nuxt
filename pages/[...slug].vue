<template>
  <div>
    <ContentDoc />
  </div>
</template>

<script setup lang='ts'>
const route = useRoute()
console.log("🚀 ~ file: [..slug].vue:9 ~ route:", route.params)
</script>
<style scoped lang='less'>

</style>