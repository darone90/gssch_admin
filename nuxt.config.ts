export default defineNuxtConfig({
  build: {
    transpile: ['vuetify']
  },
  runtimeConfig: {
    public: {
      api: process.env.SERVICE_URL
    }
  }
})
