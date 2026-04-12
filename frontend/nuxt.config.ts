// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  ssr: false // Desactivem Server-Side per centrar Nuxt en Client Single Page Aplicacion per l'entorn The Vue (Sockets en viu sense xocs Hydration)
})
