import type { RouterConfig } from '@nuxt/schema'
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
    routes: (_routes) => [
        ..._routes,
        {
          name: 'customRoutes',
          path: '/customRoutes',
          component: () => import('~/pages/user/useUnocss.vue')
        }
      ],
}