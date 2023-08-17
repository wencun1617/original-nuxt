<template>
    <div>
        1.先将 definePageMeta 中的layout 设置成 false
    </div>
    <div>
        2. 设置变量传入 NuxtLayout 的 name 属性
    </div>
    <div>
        3. <br>
        开始最外层layout(app.vue中NuxtLayout设置的layout)是直接没有, 不是app.vue中NuxtLayout设置的layout;<br>
        只能控制该页面中 NuxtLayout 里的layout; 变量不设置具体的layout(null,如果是false，直接不使用布局),则内部的layout跟着最外层的走;<br>
        后续最外面的layout 仍会受到 app.vue 中的 NuxtLayout layout的控制(setPageLayout);<br>
    </div>
    <div class="dynamic">
        <NuxtLayout :name="layout">

            <template #header>
                <p>使用 header 插槽</p>
            </template>
            <p>使用 default 插槽</p>

            <button class="border p-1 rounded" @click="layout = layout ? null : 'custom'">
                Toggle layout
            </button>
        </NuxtLayout>
    </div>
</template>


<script setup>
definePageMeta({
    layout: false
})
const layout = ref('custom')
</script>
