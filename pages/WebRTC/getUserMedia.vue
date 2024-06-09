<template>
    <el-button ref="start" @click="handleStart" m-4>开始录制</el-button>
    <el-button ref="end" @click="handleEnd" m-4>结束录制</el-button>
    <audio controls ref="audioElement" src="" m-2></audio>
</template>
<script lang="ts" setup>
definePageMeta({
    layout: false
})
const start = ref()
const end = ref()
const audioElement:Ref<HTMLAudioElement | undefined> = ref()

const stream:Ref<MediaStream | undefined> = ref() //获取流
const mediaRecoder:Ref<MediaRecorder | undefined> = ref() // 录音器
const chunks = ref<Blob[]>([]) // 存放录音内容

const handleStart = async () => {

    stream.value = await navigator.mediaDevices.getUserMedia({
        // video: true,
        audio: true
    })

    mediaRecoder.value = new MediaRecorder(stream.value)
    mediaRecoder.value.ondataavailable = (e) => {
        chunks.value.push(e.data) // 存储一段一段返回的流
    }
    mediaRecoder.value.start() // 启用

    console.log('mediaRecoder.value',mediaRecoder.value)
}
const handleEnd = () => {
    // MediaStreamTrack 接口在 User Agent 中表示一段媒体源，比如音轨或视频。
    //获取音轨或视频，并进行停止
    stream.value?.getTracks().forEach(track => {
        track.stop()
    });
    mediaRecoder.value?.stop()
    if(mediaRecoder.value) {
        mediaRecoder.value.onstop = () => {
            const blob = new Blob(chunks.value,{type: 'audio/ogg; codecs=opus'})
            audioElement.value && (audioElement.value.src = URL.createObjectURL(blob))
            chunks.value = []
        }
    }

}
</script>