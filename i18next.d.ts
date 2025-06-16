import { DEFAULT_NS, type RESOURCES } from '@/i18n'

import 'i18next'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: DEFAULT_NS
    resources: typeof RESOURCES.en
  }
}
