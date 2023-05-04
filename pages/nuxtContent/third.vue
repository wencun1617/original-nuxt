<template>
  <div></div>
</template>

<script setup lang='ts'>
const contentQuery = queryContent('frameworks')
console.log("🚀 ~ file: third.vue:7 ~ contentQuery:", contentQuery)

// where(query) --> Filter results by query
const frameworks = await queryContent('frameworks').where({ title: '1.vue.md' }).find()
console.log("🚀 ~ file: third.vue:10 ~ frameworks:", frameworks)
</script>
<style scoped lang='less'>
</style>