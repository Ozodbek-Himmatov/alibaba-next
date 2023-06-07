// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Brand Store",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
        {
          rel: "icon",
          href: "/img/icon.png",
        },
      ],
      meta: [
        { name: "description", content: "Nuxt JS WebSite UI by Ozodbek for Najot Ta'lim Exam" },
        { name: "author", content: "Ozodbek" },
      ],
    },
  },
});
