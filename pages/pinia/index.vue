<template>
  <div>
    user {{ test.user }}
  </div>
<div>
    name {{ test.name }}
  </div>
  <button @click="getLoginInfo">更改</button>
</template>

<script setup lang='ts'>
import { useTest } from '../../store'
const test = useTest()

const getLoginInfo = () => {
    test.getLoginInfo()
}
</script>
<style scoped lang='less'>
</style>