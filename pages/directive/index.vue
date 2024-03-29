<template>
    <input type="text" v-model="color" v-color:[color].ccc.ddd="color"/>
</template>

<script setup lang='ts'>
const color = ref('red')

const vColor = {
    // mounted(el:any, binding:any,vnode:any,prevVnode:any) {
    //     console.log('mountedmountedmountedmountedmounted',)
    //     console.log('el',el)
    //     console.log('binding',binding)
    //     console.log('vnode',vnode)
    //     console.log('prevVnode',prevVnode)
    // },
    updated(el:any, binding:any,vnode:any,prevVnode:any) {
        console.log('updatedupdatedupdatedupdatedupdatedupdated',)
        console.log('el',el)
        console.log('binding',binding)
        console.log('vnode',vnode)
        console.log('prevVnode',prevVnode)
    }

}
</script>
<style scoped lang='less'>
</style>