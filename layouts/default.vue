<template>
  <div class="default">
    <slot />
    {{$attrs.title}}
  </div>
</template>

<script setup lang='ts'>
const layoutCustomProps = useAttrs()
console.log("🚀 ~ file: default.vue:9 ~ layoutCustomProps: @@", toRaw(layoutCustomProps))
</script>
<style scoped lang='less'>
.default {
  border: 1px solid #b9e39e;
  padding: 1rem;
  position: relative;
  background-color: #b8e39e87;
}
.default::before {
  content: 'layouts/default.vue  layout ==> default 绿色';
  position: absolute;
  top: 2px;
  left: 5px;
  color: #68b538;
  font-family: monospace;
}
</style>