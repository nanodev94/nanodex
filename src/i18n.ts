import { initReactI18next } from 'react-i18next'
import common from '@public/locales/en/common.json'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend, { type HttpBackendOptions } from 'i18next-http-backend'

export const SUPPORTED_LOCALES = ['en', 'es']
export const DEFAULT_LOCALE = 'en'
export const DEFAULT_NS = 'common'

export const RESOURCES = {
  en: {
    common,
  },
} as const

i18n
  // load translation using http
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init<HttpBackendOptions>({
    supportedLngs: SUPPORTED_LOCALES,
    fallbackLng: DEFAULT_LOCALE,
    debug: true,
    load: 'languageOnly',
    defaultNS: DEFAULT_LOCALE,
    ns: DEFAULT_NS,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
