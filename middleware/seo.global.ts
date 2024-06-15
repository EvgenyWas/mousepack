export default defineNuxtRouteMiddleware((to) => {
  const site = useSiteConfig();
  const { title, description, image } = to.meta;
  const pageUrl = site.url + to.path;
  const serverSeoMeta = {
    ogTitle: title,
    ogDescription: description,
    ogUrl: pageUrl,
    twitterTitle: title,
    twitterDescription: description,
  };

  if (image) {
    Object.assign(serverSeoMeta, { ogImageUrl: image, twitterImage: image });
  }

  useSeoMeta({ title, description });
  useServerHead({ link: [{ rel: 'canonical', href: pageUrl }] });
  useServerSeoMeta(serverSeoMeta);
});
