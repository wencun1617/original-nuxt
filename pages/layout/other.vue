<template>
    <div>
        pages/layout/other.vue
    </div>
    <div>
        在 <code>middleware/other.ts</code> 中设置使用的layout   ==>  definePageMeta({middleware})
    </div>
</template>

<script setup lang='ts'>
definePageMeta({
    middleware: 'other'
})
</script>

<style scoped lang='less'></style>