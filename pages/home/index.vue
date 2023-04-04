<template>
  <div @click="handleClick"  :class="appConfig.theme.dark ? 'bg-dark text-white' : 'bg-light'">
    home index
  </div>
</template>

<script setup lang='ts'>
const appConfig = useAppConfig()
console.log("🚀 ~ file: index.vue:9 ~ appConfig:", appConfig)
const handleClick = () => {
  appConfig.theme.dark = !appConfig.theme.dark
  console.log(appConfig.theme.dark)
}
</script>
<style scoped lang='less'>
</style>