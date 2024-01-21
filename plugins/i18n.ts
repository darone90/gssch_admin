import { createI18n } from 'vue-i18n'
import navigationPL from '~/locale/pl/navigation.json'
import articlesPL from '~/locale/pl/Articles/index.json'
import addArticlePL from '~/locale/pl/Articles/add.json'
import loginPL from '~/locale/pl/login.json'
import errorPL from '~/locale/pl/error.json'
import indexPL from '~/locale/pl/index.json'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'pl',
    messages: {
      pl: {
        navigation: navigationPL,
        login: loginPL,
        error: errorPL,
        index: indexPL,
        articles: articlesPL,
        articles_add: addArticlePL
      }
    }
  })

  nuxtApp.vueApp.use(i18n)
})