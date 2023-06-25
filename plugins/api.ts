import Api from "~/api/index";

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  return {
    provide: {
      api: new Api(config.public)
    }
  }
})