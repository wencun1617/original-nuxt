<template>
    <div class="slider-demo-block">
      <span class="demonstration">Format Tooltip</span>
      <el-slider v-model="value4" :format-tooltip="formatTooltip" />
    </div>
    <!-- <Button/> -->
  </template>
  
  <script lang="ts" setup>

  const value4 = ref(0)
  
  const formatTooltip = (val: number) => {
    return val / 100
  }
  </script>
  <style scoped>
  .slider-demo-block {
    display: flex;
    align-items: center;
  }
  .slider-demo-block .el-slider {
    margin-top: 0;
    margin-left: 12px;
  }
  .slider-demo-block .demonstration {
    font-size: 14px;
    color: var(--el-text-color-secondary);
    line-height: 44px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0;
  }
  .slider-demo-block .demonstration + .el-slider {
    flex: 0 0 70%;
  }
  </style>