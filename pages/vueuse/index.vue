<template>
  <UseClipboard #default="{ copy, copied ,text}" source="copy me">
    <el-button @click="copy()">
      {{ copied ? 'Copied' : 'Copy???????????' }}
    </el-button>
    {{ text }}  -----888
  </UseClipboard>
</template>
<script setup lang="ts">
import { UseClipboard } from '@vueuse/components';
</script>
