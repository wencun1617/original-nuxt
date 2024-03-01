<template>
    <div ref="waveform">

    </div>
</template>

<script setup lang='ts'>
definePageMeta({
    layout: false
})
import WaveSurfer from 'wavesurfer.js'

const waveform = ref()

onMounted(() => {
    console.log('waveform.value',waveform.value)

    const wavesurfer = WaveSurfer.create({
        container: waveform.value,
        waveColor: 'rgb(200, 0, 200)',
        progressColor: 'rgb(100, 0, 100)',
        url: '~/assets/music/tuwen.mp3',
    })

    wavesurfer.on('click', () => {
        wavesurfer.play()
    })
})



</script>
<style scoped lang='less'>
</style>