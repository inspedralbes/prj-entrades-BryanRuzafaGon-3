// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  ssr: false, 
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
      socketHost: process.env.NUXT_PUBLIC_SOCKET_HOST || 'http://localhost:3001'
    }
  },
  nitro: {
    routeRules: {
      '/api/**': { proxy: 'http://localhost:8000/api/**' }
    }
  }
})
