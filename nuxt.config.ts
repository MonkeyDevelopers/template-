export default defineNuxtConfig({
  devtools: { enabled: true },

  compatibilityDate: '2024-04-03',
  
  css: [`assets/css/style.css`],
  
  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
    '@vueuse/nuxt',
    'nuxt-mapbox',
    'koro-ui'
  ],
  
  mapbox: {
    accessToken: 'pk.eyJ1IjoiYW5kbHViYXIiLCJhIjoiY2xmZDJvdjNqMGg2dTN5cGtzZGRoOTY3OSJ9.PToSonCxJ-dq8Ca4MZ1Cow'
  },

  imports: {
    dirs: ["./store"],
  },

  pinia: {
    storesDirs: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
  },
  
  runtimeConfig: {
    public: {
      baseURL: process.env.API_URL || "http://127.0.0.1:8000/api",
      webManiaUrl: process.env.WEB_MANIA_URL
    },
  },

})
