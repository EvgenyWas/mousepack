import { Cloudinary } from '@cloudinary/url-gen';

export default defineNuxtPlugin((nuxtApp) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: nuxtApp.$config.public.cloudinaryCloudName,
    },
    url: {
      secure: true,
      analytics: false,
    },
  });

  return { provide: { cld } };
});
