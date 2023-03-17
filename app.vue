<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    // console.log("🚀 ~ file: app.vue:14 ~ titleChunk:", titleChunk);
    return titleChunk ? `${titleChunk} - Site Title` : "Site Title";
  },
});
</script>
<style scoped lang="less"></style>
