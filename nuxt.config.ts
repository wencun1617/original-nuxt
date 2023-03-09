// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    modules: [
        '@nuxt/devtools',
        '@unocss/nuxt',
        '@vueuse/nuxt',
        '@vue-macros/nuxt',
        'vite-plugin-inspect', // ?
    ],
    // unocss: {
    //     // presets
    //     uno: true, // enabled `@unocss/preset-uno`
    //     icons: true, // enabled `@unocss/preset-icons`
    //     attributify: true, // enabled `@unocss/preset-attributify`,

    //     // core options
    //     shortcuts: [],
    //     rules: [],
    // },
    macros: {
        // configure plugin options, if needed
    },
})
