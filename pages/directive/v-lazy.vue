<template>
    <div>
        <div v-for="item in arr">
            <img height="500" v-lazy:foooo.uu.aa="item" width="360" alt="" border-b-(4 red)>
        </div>
    </div>
</template>

<script setup lang="ts">
// 图片列表不一张张引入
// glob 是懒加载模式
// let modules: {
//     'XXXX' : () => import('XXX')
// }
// eager静态加载
// import XX from 'XXX'
let imageList:Record<string,{default:string}> = import.meta.glob('~/assets/lazy/*.*',{
    eager: true
})
let arr = Object.values(imageList).map(item => item.default)
console.log("🚀 ~ arr:", arr)

</script>