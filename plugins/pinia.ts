import type { PiniaPluginContext, Pinia } from 'pinia'

const __piniaKey__ = 'wencun'

const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getStorage = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}

// pinia 持久化插件
const piniaPlugin = (options: Record<string, any>) => {
    return (context: PiniaPluginContext) => {
        const { store, store: { $id, $state } } = context
        store.$subscribe(() => {
            console.log("变化的store", store)
            setStorage(`${options?.key ?? __piniaKey__}-${$id}`, toRaw($state))
        })

        const data = getStorage(`${options?.key ?? __piniaKey__}-${$id}`)

        return {
            ...data
        }
    }
}
export default defineNuxtPlugin(nuxtApp => {
    (nuxtApp?.$pinia as Pinia).use(piniaPlugin({
        key: 'yuhuan',
    }))
})

