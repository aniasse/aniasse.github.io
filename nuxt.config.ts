// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  app: {
    buildAssetsDir: '_assets',
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  // Plugins are auto-detected: .client.ts suffix = client-only

  site: {
    url: 'https://aniasse.github.io',
  },

  devtools: { enabled: true },

  modules: [
    '@vueuse/motion/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/sitemap',
    '@nuxt/image',
  ],

  nitro: {
    preset: 'github-pages',
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ['/'],
    },
  },

  image: {
    format: ['webp'],
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/global.css',
    '~/assets/css/component.css',
    'highlight.js/styles/stackoverflow-light.css',
  ],

  alias: {
    '@Components': './components',
    '@Assets': './assets',
  },

  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },

  compatibilityDate: '2024-11-19',
})
