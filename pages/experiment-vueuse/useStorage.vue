<template>
  <div>
    vueuse...........
  </div>
</template>

<script setup lang='ts'>
import { useStorage } from '@vueuse/core'

// returns Ref<boolean>
const flag = useStorage('my-flag', true)

// bind string with SessionStorage
const id = useStorage('my-id', 'some-string-id', sessionStorage)

// delete data from storage
id.value = null

// Merge Defaults
let explict = {
  hello: 'hello',
  deep: {
    deepMerge: {
      d: 'wencun',
      e: 'yh'
    }
  }
}
localStorage.setItem('my-store', JSON.stringify(explict))
// // bind object
const state = useStorage('my-store', { hello: 'hi', greeting: 'Hello', deep: { deepMerge: { d: 'useStorage' } } }, localStorage,
  {
    mergeDefaults: (storageValue, defaults) => {
      console.log("🚀 ~ file: index.vue:33 ~ defaults:", defaults)
      console.log("🚀 ~ file: index.vue:33 ~ storageValue:", storageValue)
      return structuredClone(storageValue,{})
    }
  })


</script>
<style scoped lang='less'></style>