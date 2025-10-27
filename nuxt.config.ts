// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    // Options
  },
  app: {
    head: {
      titleTemplate: '%s · IQC',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0f172a' }
      ],
      link: [{ rel: 'icon', href: '/favicon.svg' }]
    }
  },
  image: {
    // why: strict remote images to avoid 404s at build
    domains: ['images.unsplash.com'] // edit for your sources
  },
  eslint: { config: { stylistic: true } }
})