<template>
    <div>
        1.先将 definePageMeta 中的layout 设置成 false
    </div>
    <div>
        2. 设置变量传入 NuxtLayout 的 name 属性
    </div>
    <div>
        3. 
        <br>
        最开始进入当前dynamic页面 ==> definePageMeta的layout设置为false,所以最外出的layout直接变没有;
        <br>
        外层layout 套 内层layout(当前dynamic页面独自拥有的layout) ==> layoutRef只控制内层layout;
        <br>
        变量(layoutRef)不设置具体的layout(null),则内部的layout跟着最外层的走 ==> (如果layoutRef是false，直接不使用布局);
        <br>
        后续 外层的layout 仍会受到 app.vue 中的 NuxtLayout layout的控制(setPageLayout);
        <br>
    </div>
    <div class="dynamic">
        <NuxtLayout :name="layoutRef">

            <template #header>
                <p>使用 header 插槽</p>
            </template>
            <p>使用 default 插槽</p>

            <button class="border p-1 rounded" @click="layoutRef = layoutRef ? null : 'custom'">
                Toggle layout
            </button>
        </NuxtLayout>
    </div>
</template>


<script setup>
definePageMeta({
    layout: false
})
const layoutRef = ref(null)
</script>
