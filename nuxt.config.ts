// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
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
  modules: ['@nuxtjs/sitemap'],
  ssr: true,
});
