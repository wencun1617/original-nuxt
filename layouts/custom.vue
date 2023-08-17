<template>
    <div class="custom">
      <slot name="header">
        具名插槽 #header 的默认内容
      </slot>
      <slot />
    </div>
  </template>
  
  <style scoped lang="less">
  .custom {
    border: 1px solid #a795ec;
    padding: 1rem;
    position: relative;
    background-color: #a795ec87;
  }
  .custom::before {
    content: 'layouts/custom.vue  loyout ==> custom 紫色';
    position: absolute;
    top: 2px;
    left: 5px;
    color: #583ccb;
    font-family: monospace;
  }
  </style>