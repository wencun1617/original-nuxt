import enLocale from '../locales/en.json'
import zhLocale from '../locales/zh-CN.json'
import zhTWLocale from '../locales/zh-TW.json'

const locales = [
  {
    code: 'en',
    iso: 'en-US',
    name: 'English',
    file: 'en.json'
  },
  {
    code: 'zh',
    iso: 'zh-CN',
    name: '中文',
    file: 'zh-CN.json'
  },
  {
    code: 'zh',
    iso: 'zh-TW',
    name: '繁体',
    file: 'zh-TW.json'
  }
]

export const i18n = {
  locales,
  defaultLocale: 'en',
  langDir: 'locales/',
  vueI18n: {
    messages: {
      en: enLocale,
      'zh-CN': zhLocale,
      'zh-TW': zhTWLocale
    }
  },
  fallbackLocale: 'en',
}