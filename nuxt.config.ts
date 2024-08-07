// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  runtimeConfig: {
    public: {
      cloudinaryCloudName: process.env.NUXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      mailchimpPopupSrc: process.env.NUXT_PUBLIC_MAILCHIMP_POPUP_SRC,
    },
  },
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    rootId: 'mousepack',
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', crossorigin: '', href: 'https://fonts.gstatic.com' },
        {
          rel: 'preload',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
          as: 'style',
          type: 'text/css',
          onload: 'this.onload=null;this.rel="stylesheet"',
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
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: false,
  },
  typescript: {
    typeCheck: true,
  },
  modules: ['@nuxtjs/sitemap', 'nuxt-purgecss'],
  css: ['./assets/styles/index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:map"; 
            @use "sass:list"; 
            @use "sass:string"; 
            @use "sass:math"; 
            @use "sass:meta"; 
            @import "~/assets/styles/mixins"; 
            @import "~/assets/styles/variables";
          `,
        },
      },
    },
  },
  nitro: {
    static: true,
  },
});
