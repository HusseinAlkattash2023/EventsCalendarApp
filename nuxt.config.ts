// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss','@nuxtjs/i18n',
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
        name: "Eg",
        file: "en-US.json",
      },
      {
        code: "gr-GR",
        iso: "gr-GR",
        name: "Gr",
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
