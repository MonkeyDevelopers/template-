export default defineNuxtConfig({
  devtools: { enabled: true },

  compatibilityDate: '2024-04-03',

  icon: {
    mode: 'svg',
  },

  css: [`assets/css/style.css`],

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-mapbox',
    'koro-ui',
    '@nuxtjs/supabase',
    '@nuxt/icon',
    '@vee-validate/nuxt'
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
      baseURL: process.env.API_URL || "http://localhost:3000",
      webManiaUrl: process.env.WEB_MANIA_URL
    },
  },

  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
    },
  },
})