// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "/assets/css/custom.css",
    "/assets/css/theme.css",
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap/scss/bootstrap.scss"
  ],
  modules: [
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    'usebootstrap'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
