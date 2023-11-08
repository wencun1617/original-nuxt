// `nuxt/kit` is a helper subpath import you can use when defining local modules
// that means you do not need to add `@nuxt/kit` to your project's dependencies
// 2023/11/8
import { defineNuxtModule } from 'nuxt/kit'

let logStyle = 'color:red;font-size:14px;font-weight:bold'

export default defineNuxtModule({
    meta: {
        name: 'Nuxt Hooks (build time)'
    },
    setup(options, nuxt) {

        nuxt.hook('kit:compatibility', (compatibility, issues) => {
            console.log('%c kit:compatibility ===> Allows extending compatibility checks.', logStyle)
        })

        nuxt.hook('ready', (nuxt) => {
            console.log('%c ready ===> Called after Nuxt initialization, when the Nuxt instance is ready to work.', logStyle)
        })

        nuxt.hook('close', (nuxt) => {
            console.log('%c close ===> 	Called when Nuxt instance is gracefully closing.', logStyle)
        })

        nuxt.hook('restart', (options) => {
            console.log('%c restart ===> To be called to restart the current Nuxt instance.', logStyle)
        })

        //#region modules 2 
        nuxt.hook('modules:before', () => {
            console.log('%c restart ===> Called during Nuxt initialization, before installing user modules.', logStyle)
        })

        nuxt.hook('modules:done', () => {
            console.log('%c restart ===> Called during Nuxt initialization, after installing user modules.', logStyle)
        })
        //#endregion

        //#region qpp 3
        nuxt.hook('app:resolve', (app) => {
            console.log('%c app:resolve ===> Called after resolving the app instance.', logStyle)
        })

        nuxt.hook('app:templates', (app) => {
            console.log('%c app:templates ===> Called during NuxtApp generation, to allow customizing, modifying or adding new files to the build directory (either virtually or to written to .nuxt).', logStyle)
        })

        nuxt.hook('app:templatesGenerated', (app) => {
            console.log('%c app:templatesGenerated ===> Called after templates are compiled into the virtual file system (vfs).', logStyle)
        })
        //#endregion

        //#region build 3
        nuxt.hook('build:before', () => {
            console.log('%c build:before ===> Called before Nuxt bundle builder.', logStyle)
        })

        nuxt.hook('build:done', () => {
            console.log('%c build:done ===> Called after Nuxt bundle builder is complete.', logStyle)
        })

        nuxt.hook('build:manifest', (manifest) => {
            console.log('%c build:manifest ===> Called during the manifest build by Vite and webpack. This allows customizing the manifest that Nitro will use to render <script> and <link> tags in the final HTML.', logStyle)
        })
        //#endregion

        //#region builder 2
        nuxt.hook('builder:generateApp', (options) => {
            console.log('%c builder:generateApp ===> Called before generating the app.', logStyle)
        })

        nuxt.hook('builder:watch', (event, path) => {
            console.log('%c builder:watch ===> Called at build time in development when the watcher spots a change to a file or directory in the project.', logStyle)
        })
        //#endregion

        nuxt.hook('pages:extend', (pages) => {
            console.log('%c pages:extend ===> Called after pages routes are resolved.', logStyle)
        })

        nuxt.hook('server:devHandler', (handler) => {
            console.log('%c server:devHandler ===> Called when the dev middleware is being registered on the Nitro dev server.', logStyle)
        })

        //#region imports 4
        nuxt.hook('imports:sources', (presets) => {
            console.log('%c imports:sources ===> Called at setup allowing modules to extend sources.', logStyle)
        })

        nuxt.hook('imports:extend', (imports) => {
            console.log('%c imports:extend ===> Called at setup allowing modules to extend imports.', logStyle)
        })

        nuxt.hook('imports:context', (context) => {
            console.log('%c imports:context ===> Called when the unimport context is created.', logStyle)
        })

        nuxt.hook('imports:dirs', (dirs) => {
            console.log('%c imports:dirs ===> Allows extending import directories.', logStyle)
        })
        //#endregion

        //#region components 2
        nuxt.hook('components:dirs', (dirs) => {
            console.log('%c components:dirs ===> Called within app:resolve allowing to extend the directories that are scanned for auto-importable components.', logStyle)
        })

        nuxt.hook('components:extend', (components) => {
            console.log('%c components:extend ===> Allows extending new components.', logStyle)
        })
        //#endregion

        // nitro hooks 4

        nuxt.hook('prerender:routes', (ctx) => {
            console.log('%c prerender:routes ===> Allows extending the routes to be pre-rendered.', logStyle)
        })

        nuxt.hook('build:error', (error) => {
            console.log('%c build:error ===> Called when an error occurs at build time.', logStyle)
        })

        nuxt.hook('prepare:types', (options) => {
            console.log('%c prepare:types ===> Called before Nuxi writes .nuxt/tsconfig.json and .nuxt/nuxt.d.ts, allowing addition of custom references and declarations in nuxt.d.ts, or directly modifying the options in tsconfig.json', logStyle)
        })

        nuxt.hook('listen', (listenerServer, listener) => {
            console.log('%c listen ===> Called when the dev server is loading.', logStyle)
        })

        // schemas 4

        // vite 5
        
        // webpack 8
    }
})