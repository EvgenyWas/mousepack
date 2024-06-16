<template>
  <div class="container">
    <div class="row">
      <h1 class="page-title col-12 text-h2">Austin City Limits</h1>
      <p class="page-subtitle col-12 text-subtitle">Live Nation</p>
    </div>

    <section class="content row">
      <div class="announcment col-6">
        <video class="announcment-video" autoplay loop muted playsinline>
          <source :src="announcmentWebm" type="video/webm" />
          <source :src="announcmentMp4" type="video/mp4" />
        </video>
        <p class="announcment-text text-subtitle">
          We partnered with Live Nation to create an interactive map that helps you find your friends, favorite artists,
          and water.
        </p>
      </div>

      <div class="animation col-6">
        <p class="animation-text text-subtitle">
          The guitar animation is references ACL’s live music roots. Select UI on the bottom to toggle between stages,
          restrooms, food and water stations.
        </p>

        <video class="animation-video" autoplay loop muted playsinline>
          <source :src="animationWebm" type="video/webm" />
          <source :src="animationMp4" type="video/mp4" />
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
  title: 'MousePack | Live Nation Austin City Limits',
  description:
    // eslint-disable-next-line max-len
    'We partnered with Live Nation to create an interactive map that helps you find your friends, favorite artists, and water. The guitar animation is references ACL’s live music roots. Select UI on the bottom to toggle between stages, restrooms, food and water stations.',
  image: 'https://res.cloudinary.com/mousepack/image/upload/c_scale,w_300/q_auto:eco/f_webp/ACL_Thumbnail_femzdg',
});

const { $cld } = useNuxtApp();

const announcmentVideo = $cld.video('ACL_announcment_gt8op2').resize(scale().width(500));
const announcmentWebm = announcmentVideo.delivery(format(videoWebm())).toURL();
const announcmentMp4 = announcmentVideo.delivery(format(videoMp4())).toURL();

const animationVideo = $cld.video('acl_open_animation_nzmahf').resize(scale().width(500));
const animationWebm = animationVideo.delivery(format(videoWebm())).toURL();
const animationMp4 = animationVideo.delivery(format(videoMp4())).toURL();
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

.announcment {
  &-video {
    width: 100%;
    max-width: 500px;
    margin-bottom: 32px;
    border-radius: 36px;
  }
}

.animation {
  &-video {
    width: 100%;
    max-width: 500px;
    border-radius: 36px;
  }

  &-text {
    margin-bottom: 32px;
  }
}
</style>
