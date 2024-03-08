export default defineNuxtRouteMiddleware((to) => {
  const site = useSiteConfig();
  const { title, description } = to.meta;
  const pageUrl = site.url + to.path;

  useSeoMeta({ title, description });
  useServerHead({ link: [{ rel: 'canonical', href: pageUrl }] });
  useServerSeoMeta({
    ogTitle: title,
    ogDescription: description,
    ogUrl: pageUrl,
    twitterTitle: title,
    twitterDescription: description,
  });
});
