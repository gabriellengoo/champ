import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({

  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US' },
      { code: 'fr', name: 'French', iso: 'fr-FR' },
      { code: 'yo', name: 'Yoruba', iso: 'yo-NG' }
    ],
    lazy: true,
    defaultLocale: 'en',
    strategy: 'no_prefix'
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});