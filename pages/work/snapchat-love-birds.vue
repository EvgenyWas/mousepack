<template>
  <div class="container">
    <div class="row">
      <h1 class="page-title col-12 text-h2">Love Birds</h1>
      <p class="page-subtitle col-12 text-subtitle">Snapchat</p>
    </div>

    <section class="content row">
      <div class="promo col-6">
        <video :controls="false" class="promo-video" autoplay loop muted>
          <source :src="promoWebm" type="video/webm" />
          <source :src="promoMp4" type="video/mp4" />
        </video>
        <p class="promo-text text-subtitle">
          We collaborated with Snap to launch their ‘More Snapchat’ campaign. We were tasked with creating an engaging
          Lens that utilized the ‘kiss’ interaction as well touch based pull back on the bow. The Lens currently has
          over 60 million views.
        </p>
      </div>

      <div class="mechanic col-6">
        <p class="mechanic-text text-subtitle">
          We collaborated with Snap to launch their ‘More Snapchat’ campaign. We were tasked with creating an engaging
          Lens that utilized the ‘kiss’ interaction as well touch based pull back on the bow. The Lens currently has
          over 60 million views.
        </p>

        <video :controls="false" class="mechanic-video" autoplay loop muted>
          <source :src="mechanicWebm" type="video/webm" />
          <source :src="mechanicMp4" type="video/mp4" />
        </video>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { format } from '@cloudinary/url-gen/actions/delivery';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { videoMp4, videoWebm } from '@cloudinary/url-gen/qualifiers/format';

definePageMeta({
  title: 'MousePack | Snapchat Love Birds',
  description:
    // eslint-disable-next-line max-len
    'We collaborated with Snap to launch their ‘More Snapchat’ campaign. We were tasked with creating an engaging Lens that utilized the ‘kiss’ interaction as well touch based pull back on the bow. The Lens currently has over 60 million views.',
  image: 'https://res.cloudinary.com/mousepack/image/upload/c_scale,w_300/q_auto:eco/f_webp/LoveBirds_Thumb_klavdb',
});

const { $cld } = useNuxtApp();

const promoVideo = $cld.video('Love_Birds_Promo_lwmwip').resize(scale().width(500));
const promoWebm = promoVideo.delivery(format(videoWebm())).toURL();
const promoMp4 = promoVideo.delivery(format(videoMp4())).toURL();

const mechanicVideo = $cld.video('Love_Birds_Mechanic_h6wfnt').resize(scale().width(500));
const mechanicWebm = mechanicVideo.delivery(format(videoWebm())).toURL();
const mechanicMp4 = mechanicVideo.delivery(format(videoMp4())).toURL();
</script>

<style scoped lang="scss">
.container {
  padding-top: 80px;
}

.page {
  &-subtitle {
    margin-bottom: 20px;
  }
}

.content {
  margin-bottom: 40px;
}

.promo {
  &-video {
    max-width: 500px;
    width: 100%;
    margin-bottom: 32px;
    border-radius: 36px;
  }
}

.mechanic {
  &-video {
    max-width: 500px;
    width: 100%;
    border-radius: 36px;
  }

  &-text {
    margin-bottom: 32px;
  }
}
</style>
