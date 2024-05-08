<template>
  <Title>{{ title }}</Title>
  <div p-10 ref="unocssDemo" @click="generatorImg">
    <div italic mt-2 un-text="2xl center" hover:bg-green-500>1. rules</div>
    <div custom-rules-m-2 bg-gray-2>
      Writing custom rules , To make it smarter, change the matcher to a RegExp
      and the body to a function
    </div>

    <div italic text-2xl mt-2 yh:bg-pink-200>2. shortcuts</div>
    <div dynamic-shortcuts-red>aliasing utilities, dynamically</div>

    <div italic text-2xl mt-2>3. preflights</div>
    <el-button type="primary">preflights-test</el-button>

    <div italic text-2xl mt-2>4. theme </div>
    <div bg-gray-2 sm:bg-pink-400 md:bg-green-500 lg:bg-blue-500 text-red-500 text-center text-sx-theme-color-test>
      水平breakpoints 响应式断点
    </div>
    <div text-purple-500>theme.colors</div>

    <div italic text-2xl mt-2>5. layer</div>
    <div shortcuts-card-utilities shortcuts-card-my-layer>layer 测试</div>

    <div italic text-2xl mt-2>6. @unocss/transformer-directives</div>
    <div transformer-test1 class="transformer-test2">@apply使用</div>

    <div italic text-2xl mt-2>7. @unocss/transformer-variant-group</div>
    <div text-(pink-500 center)>Variant Groups</div>
    <div class="i-ion-earth-sharp?auto" w-20 h-20 bg-blue />
  </div>
</template>

<script setup lang="ts">
import domtoimage from 'dom-to-image-more';
const title = ref('Nuxt provides Components <Title>')
let unocssDemo = ref<HTMLElement | null>(null)

const generatorImg = () => {
  domtoimage
    .toPng(toRaw(unocssDemo.value))
    .then(function (dataUrl:any) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch(function (error:any) {
        console.error('oops, something went wrong!', error);
    });
}

defineOptions({
  name: 'UseUnoCSS',
  inheritAttrs: false,
})
</script>
<style scoped>
[transformer-test1] {
  --at-apply: text-center text-blue my-1 bg-pink;
  /* background-color: theme("colors.pink.200"); */
}

.transformer-test2 {
  --at-apply: rounded-lg;
}

/**
  @media (min-width: 640px)
 */
/* @screen md {
  .transformer-test2 {
    --at-apply: bg-cyan;
  }
} */

/**
@media (max-width: 639.9px)
 */
/* @screen lt-md {
  .transformer-test2 {
    --at-apply: bg-cyan;
  }
} */

/**
@media (min-width: 640px) and (max-width: 719.9px)
 */
--at-screen at-md {
  .transformer-test2 {
    --at-apply: bg-cyan;
  }
}

/**
@media (min-width: 320px) and (max-width: 639.9px)
 */
--at-screen at-sm {
  .transformer-test2 {
    --at-apply: bg-coolGray;
  }
}
</style>
