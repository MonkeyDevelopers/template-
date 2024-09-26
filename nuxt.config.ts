export default defineNuxtConfig({
  devtools: { enabled: true },

  compatibilityDate: '2024-04-03',

  css: [`assets/css/style.css`],

  modules: [
    'nuxt-mapbox',
    'koro-ui',
  ],

  koroUI: {
    supabase: true,
    veeValidate: true,
  },

  mapbox: {
    accessToken: 'pk.eyJ1IjoiYW5kbHViYXIiLCJhIjoiY2xmZDJvdjNqMGg2dTN5cGtzZGRoOTY3OSJ9.PToSonCxJ-dq8Ca4MZ1Cow'
  },

  imports: {
    dirs: ["./store"],
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