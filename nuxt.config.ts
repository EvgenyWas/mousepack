// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', crossorigin: '', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
        },
      ],
    },
  },
  site: {
    url: 'https://mousepack.com',
    name: 'MousePack',
    defaultLocale: 'en',
  },
  sitemap: {
    xsl: false,
    runtimeCacheStorage: false,
    autoLastmod: true,
    cacheMaxAgeSeconds: 60 * 60 * 24,
  },
  routeRules: { '/**': { static: true } },
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: false,
  },
  typescript: {
    typeCheck: true,
  },
  modules: ['@nuxtjs/sitemap', 'nuxt-purgecss'],
  css: ['./assets/styles/index.scss'],
});
