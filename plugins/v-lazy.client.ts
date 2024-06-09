import type { Directive,DirectiveBinding  } from 'vue'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('lazy', async (el:HTMLImageElement,bingding:DirectiveBinding<string>) => {
      const def = await import('~/assets/avater.jpg')
      el.src = def.default;
      console.log('bingding',bingding)
      // 判断元素是否在可视区域
      const observer = new IntersectionObserver((enr) =>{
        if (enr[0].intersectionRatio > 0) {
          setTimeout(()=> {
            el.src = bingding.value
          },2000)
          observer.unobserve(el) // 显示完图片停止监听
        }
      })
      //#region IntersectionObserver
      //       callack参数
      // 目标元素的可见性变化时，就会调用观察器的回调函数callback。

      // 一般会触发两次：1.目标元素刚刚进入视口（开始可见），2.完全离开视口（开始不可见）。

      // callback函数的参数是一个数组，每个成员都是一个IntersectionObserverEntry对象。

      // IntersectionObserverEntry 对象
      // 提供目标元素的信息，一共有六个属性。

      // time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒
      // target：被观察的目标元素，是一个 DOM 节点对象
      // rootBounds：根元素的矩形区域的信息，getBoundingClientRect()方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回null
      // boundingClientRect：目标元素的矩形区域的信息
      // intersectionRect：目标元素与视口（或根元素）的交叉区域的信息
      // intersectionRatio：目标元素的可见比例，即intersectionRect占boundingClientRect的比例，完全可见时为1，完全不可见时小于等于0
      // 所以可以通过判断intersectionRatio属性是否处于(0,1)来判断元素的可见性
      //#endregion
      observer.observe(el)
    })
  })