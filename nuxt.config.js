export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'leran-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  server: {
    port: process.env.NODE_ENV === 'production' ? null : 5000,
  },

  // env config
  env: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://my-json-server.typicode.com/jy0813/nuxt-shopping-api'
        : 'http://localhost:8000/',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/reset.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
