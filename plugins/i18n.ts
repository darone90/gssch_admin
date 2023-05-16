import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'pl',
    messages: {
      pl: {
        hello: 'Siemano!!!!!'
      }
    }
  })

  nuxtApp.vueApp.use(i18n)
})