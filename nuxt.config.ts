// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
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
      }
})
