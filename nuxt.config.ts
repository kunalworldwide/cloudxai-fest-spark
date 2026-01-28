// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/scripts", "vuetify-nuxt-module", "nuxt-gtag"],
  css: ["~/assets/css/main.scss"],
  gtag: {
    id: "G-BV563RW7PJ",
  },
  scripts: {
    registry: {
      redditPixel: {
        id: "a2_if15i9gjp2ht",
        enable_auto_events: true,
      },
    },
  },
});