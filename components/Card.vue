<template>
  <div flex justify-around items-center bg-coolGray p-4 rounded-lg text-white bg-sky>
    <div>左侧标题</div>
    <Button></Button>
    <div>右侧标题</div>
  </div>
  <div mt-8>
    <Slider/>
  </div>
</template>

<script setup lang='ts'>
const appConfig = useAppConfig()
console.log("🚀 ~ file: index.vue:9 ~ appConfig:", appConfig)
</script>
<style scoped lang='less'>
</style>