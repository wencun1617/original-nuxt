<template>
  <div>
    Data Fetching
  </div>
</template>

<script setup lang='ts'>
import { NuxtApp } from '@nuxt/schema';
type returnData = {
  data: Array<string>,
  msg: string,
  status: number
}
const { data, pending, error, execute, refresh } = await useFetch('/test/userlist', {
  method: 'GET',
  baseURL: 'http://localhost:3333',
  server: false,
})
console.log(`%c useFetch`, 'color:red;font-size：48px')
console.log("🚀 ~ file: index.vue:14 ~ data:", data?.value)

const { data: data1, pending: pending1, error: error1, execute: execute1, refresh: refresh1 } = await useAsyncData(
  'userList',
  () => $fetch('http://localhost:3333/test/userlist'),
)
console.log(`%c useAsyncData`, 'color:red;font-size：48px')
console.log("🚀 ~ file: index.vue:26 ~ res:", data1?.value)

const dataTwice = await $fetch("http://localhost:3333/test/userlist")
console.log(`%c $fetch`, 'color:red;font-size：48px')
console.log("🚀 ~ file: index.vue:30 ~ dataTwice:", dataTwice)
</script>
<style scoped lang='less'></style>