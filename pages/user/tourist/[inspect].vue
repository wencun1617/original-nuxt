<template>
  <div m-10 text-sky text-3xl font-bold bg-neutral-200 p-2 rounded-lg>
    {{ formattedNowTime }}
  </div>
  <div text-center>
    tourist params : {{ route.params.inspect }}
  </div>
</template>

<script setup lang='ts'>
const route = useRoute()
const formattedNowTime = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
</script>
<style scoped lang='less'>
</style>