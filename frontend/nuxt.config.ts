// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  ssr: false, 
  runtimeConfig: {
    public: {
      apiBase: '', // Es detectarà dinàmicament al frontend
      socketHost: '' 
    }
  }
})
