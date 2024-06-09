export default defineNuxtPlugin(nuxtApp => {

    // let logStyle = 'color:green;font-size:14px;font-weight:bold'

    // //#region App Hooks (runtime)

    // //#region Server & Client 6
    // nuxtApp.hook('app:created', (vueApp) => {
    //   // console.log("🚀 ~ file: testPlugin.ts:6 ~ nuxtApp.hook ~ vueApp:", vueApp)
    //   console.log('%c app:created ===> Called when initial vueApp instance is created',logStyle)
    // })

    // nuxtApp.hook('app:data:refresh', (keys?) => {
    //   console.log('keys',keys)
    //   console.log("%c app:data:refresh ===> (internal)",logStyle)
    // })

    // nuxtApp.hook('vue:setup', () => {
    //   console.log("%c vue:setup ===> (internal)",logStyle)
    // })
    // //#endregion

    // //#region Server 2 
    // nuxtApp.hook('app:rendered', (renderContext) => {
    //   console.log("%c app:rendered ===> Called when SSR rendering is done.",logStyle)
    // })

    // nuxtApp.hook('app:redirected', () => {
    //   console.log("%c app:redirected ===> Called before SSR redirection.",logStyle)
    // })
    // //#endregion

    // //#region Client   7 
    // nuxtApp.hook('app:beforeMount', (vueApp) => {
    //   console.log("%c app:beforeMount ===> Called before mounting the app, called only on client side.",logStyle)
    // })

    // nuxtApp.hook('app:mounted', (vueApp) => {
    //   console.log("%c app:mounted ===> Called when Vue app is initialized and mounted in browser.",logStyle)
    // })

    // nuxtApp.hook('app:suspense:resolve', (appComponent) => {
    //   console.log("%c app:suspense:resolve ===> On Suspense resolved event.",logStyle)
    // })

    // nuxtApp.hook('link:prefetch', (to) => {
    //   console.log("%c link:prefetch ===> Called when a <NuxtLink> is observed to be prefetched",logStyle)
    // })

    // nuxtApp.hook('page:start', (pageComponent?) => {
    //   console.log("%c page:start ===> Called on Suspense pending event.",logStyle)
    // })

    // nuxtApp.hook('page:finish', (pageComponent?) => {
    //   console.log("%c page:finish ===> Called on Suspense resolved event.",logStyle)
    // })

    // nuxtApp.hook('page:transition:finish', (pageComponent?) => {
    //   console.log("%c page:transition:finish ===> After page transition onAfterLeave event.",logStyle)
    // })
    // //#endregion

    //#endregion
  })