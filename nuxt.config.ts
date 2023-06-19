// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt", '@nuxtjs/tailwindcss','@nuxtjs/i18n', "@vuestic/nuxt", '@invictus.codes/nuxt-vuetify' 
  ],

  i18n:{
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English",
        file: "en-US.json",
      },
      {
        code: "gr-GR",
        iso: "gr-GR",
        name:"Germany",
        file: "gr-GR.json",
      },
    ],
    defaultLocale: "en-US",
    
  },
    app: {
        head: {
          title: "EventsCalendarApp",
          meta: [{ name: "description", content: "EventsCalendarApp" }],
          link: [
            {
              rel: "stylesheet",
              href: "https://fonts.googleapis.com/css?family=Material+Icons",
            },
          ],
        },
      },
      css:[
        '@/assets/main.css'
      ]
})
