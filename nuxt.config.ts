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
    "@element-plus/nuxt",
    '@nuxt/content',
    '@nuxt/image',
    '@vite-pwa/nuxt'
    // '~/modules/Nuxt Hooks (build time)/index',
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
  appConfig: {
    // you don't need to include this: only for testing purposes
    buildDate: new Date().toISOString() + "buildDatebuildDatebuildDatebuildDate",
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt Vite PWA',
      short_name: 'NuxtVitePWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
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
  //If you want to auto-import components based only on its name, not path, 
  //then you need to set pathPrefix option to false using extended form of the configuration object:
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  elementPlus: {},
  // buildDir: 'nuxt-build'
  // vite:{
  //   build: {
  //     // minify: 'terser',
  //     // terserOptions: {
  //     //   compress: {
  //     //     //生产环境时移除console.log()
  //     //     drop_console: true,
  //     //     drop_debugger: true,
  //     //   },
  //     // },
  //     outDir: 'build', // 将打包后的文件存放到 build 目录中
  //     assetsDir: 'static', // 将打包后的静态资源文件存放到 static 目录中
  //     rollupOptions: {
  //       output: {
  //         chunkFileNames: 'static/js/[name]-[hash].js',
  //         entryFileNames: 'static/js/[name]-[hash].js',
  //         assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
  //       }
  //     }
  //   }, 
  // },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret1: '123',
    apiSecret2: '456',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
  // devtools:{
  //   vscode:{}
  // },
  // nitro: {
  //   prerender: {
  //     routes: ['/user/tourist/1','/user/tourist/2']
  //   }
  // },
  content: {},
  image:{
    inject:true,
    // Presets are predefined sets of image modifiers that can be used create unified form of images in your projects.
    presets:{
      cover:{
        modifiers:{
          fit:"cover",
          format:"jpg",
          width: 160,
          height: 160
        }
      }
    }
  }
});
