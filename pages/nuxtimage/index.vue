<template>
    <div>Nuxtimage</div>
    <nuxt-img preset="cover" src="~/assets/avater.jpg" class="m-6" />
    <br/>
    <nuxt-img preset="cover" src="../../assets/avater.jpg" class="m-6 w-40 h-40" />
    <br/>
    <!-- preload 
    This will place a corresponding link tag in the page's head. -->
    
    <nuxt-img preset="cover" src="/avater.jpg"  class="m-6" quality="10" loading="lazy" preload/>
  </template>
  
  <script setup lang="ts">
  useHead({
    title: "Nuxtimage",
  });

  const img = useImage()
  const imgUrl = img('/avater.jpg', { width: 100,quality:10 },{})
  console.log("🚀 ~ file: index.vue:18 ~ imgUrl:", imgUrl)

  </script>
  <style scoped lang="less"></style>