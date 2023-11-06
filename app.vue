<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <div v-if="showChangeLauout">
    <footer m-10>
      <button @click="setPageLayout('default')" m-2>
        layouts/default.vue
      </button>
      <button @click="setPageLayout('custom')" m-2>
        layouts/custom.vue
      </button>
      <button @click="setPageLayout('other')" m-2>
        layouts/other.vue
      </button>
      <!-- 随便设置个没有的layouts便移除了 -->
      <button @click="setPageLayout('flase')" m-2>
        Remove layout
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { ComponentInternalInstance } from '@vue/runtime-dom';

const { appContext } = getCurrentInstance() as ComponentInternalInstance
console.log("🚀 ~ file: app.vue:30 ~ appContext:", appContext)

//  available on both client and server side
// access the Vue app instance, runtime hooks, runtime config variables and internal states, such as ssrContext and payload.
const nuxtApp = useNuxtApp()
console.log("🚀 ~ file: app.vue:29 ~ nuxtApp:", nuxtApp)

const route = useRoute();
const showChangeLauout = ref<boolean>(false)

watch(() => route.path, (newVal, _) => {
  newVal.match(/^\/layout/) ? showChangeLauout.value = true : showChangeLauout.value = false
}, { immediate: true })

useHead({
  titleTemplate: (titleChunk:any) => {
    // console.log("🚀 ~ file: app.vue:14 ~ titleChunk:", titleChunk);
    return titleChunk ? `${titleChunk} - Site Title` : "Site Title";
  },
});


</script>
<style scoped lang="less"></style>
