export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'christophhaid',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700'}
    ]
  },

  // loading: '~/components/LoadingBar.vue',
  loading: { color: '#3b8070' },

  // colorMode: {
  //   classSuffix: ''
  // },

  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.scss',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  },

  googleFonts: {
    families: {
      'Playfair+Display': true,
      'Poiret+One': true,
      'Secular+One': true,
    },
    preload: true,
    prefetch: true,
    display: 'swap',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
 css: ['@/assets/styles/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/animate.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
