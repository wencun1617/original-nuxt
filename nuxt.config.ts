// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    "@nuxt/devtools",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@vue-macros/nuxt",
    "vite-plugin-inspect", // ?
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
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "nuxt.config.ts配置文件标题",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "My amazing site." },
      ],
    },
  },
});
