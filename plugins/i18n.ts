import { createI18n } from 'vue-i18n'
import en from '~/locales/en.json'
import zhCN from '~/locales/zh-CN.json'
import zhTW from '~/locales/zh-TW.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      'zh-CN': zhCN,
      'zh-TW': zhTW
    }
  })

  vueApp.use(i18n)
})