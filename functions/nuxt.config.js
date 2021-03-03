module.exports ={
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'infora.media',
    htmlAttrs: {
      lang: 'ka'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name:'description', content:'საინფორმაციო  პორტალი - ექსკლუზივი, პოლიტიკა, ეკონომიკა, ხელოვნება, მედიცინა, კრიმინალი, სპორტი, ახალმი ამბები დღეს,'},
      {name:'keywords',  content:'ექსკლუზივი, ინფორა.ჯი პოლიტიკა, ეკონომიკა, შოუ-ბიზნესი, მედიცინა, კრიმინალი, ხელოვნება და კულტურა, სპორტი, ინფორა საქართველო'},
      { hid: 'description', name: 'description', content: 'ექსკლუზიური ამბები, ახალი ამბები, ნიუსი, ' }
    ],
    link: [
      /* { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } */
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/styles/main.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase.js',
    '~/plugins/checkAuth.js',
    {src: '~/plugins/TiptapVuetify', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-lazy-load',
  ],

  loading: {
    continuous: true,
    color: '#008000',
    height: '3px'
  },

  googleAnalytics: {
    id: 'UA-190911193-1'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  }
}
