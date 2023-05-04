<template>
  <div>
    <!-- Similar to <ContentDoc :path="$route.path" /> -->
    <ContentDoc />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
console.log("🚀 ~ file: [..slug].vue:9 ~ route:", route);
</script>
<style scoped lang="less"></style>
