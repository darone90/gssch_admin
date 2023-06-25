import { createI18n } from 'vue-i18n'
import navigationPL from '~/locale/pl/navigation.json'
import loginPL from '~/locale/pl/login.json'
import errorPL from '~/locale/pl/error.json'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'pl',
    messages: {
      pl: {
        navigation: navigationPL,
        login: loginPL,
        error: errorPL
      }
    }
  })

  nuxtApp.vueApp.use(i18n)
})