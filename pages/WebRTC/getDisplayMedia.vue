<template>
    <button @click="handleDisplayMedia">屏幕录制</button>
</template>

<script setup lang='ts'>
definePageMeta({
    layout: false
})

// 屏幕录制
const handleDisplayMedia = async  () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
        video:true,
        audio: true
    })
    console.log("🚀 ~ handleDisplayMedia ~ stream:", stream)
    const chunks = []
    const recoder = new MediaRecorder(stream) // 捕获屏幕以及麦克风
    recoder.addEventListener('dataavailable',(e)=> { // 接收每一段流
        chunks.push(e.data)
    })
    recoder.start()
    recoder.addEventListener('stop',() => {
        const blob = new Blob(chunks,{type: 'video/mp4'})
        const url  = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'getDisplayMedia.mp4'
        a.click()
        a.remove()
    })
}
</script>
<style scoped lang='less'></style>