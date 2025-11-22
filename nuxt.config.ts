// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/scripts', 'vuetify-nuxt-module', 'nuxt-gtag'],
  gtag: {
    id: "G-BV563RW7PJ",
  },
})