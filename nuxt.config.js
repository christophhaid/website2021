export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // server: {
  //   port: 3000, // default: 3000
  //   host: '0.0.0.0' // default: localhost
  // },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Design Thinking | Christoph Haid - Product Strategist & UX/UI Designer.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Christoph is an Senior Product UX/UI Designer living in Innsbruck, Austria. UX Designer & Webdeveloper based in Innsbruck Austria. Design the best possible solutions to improve the lives of people.' },
      { name: 'google' , value: 'notranslate'},

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
    '~/plugins/animate.js',
    '~/plugins/cursorfx.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
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
