<template>
  <div class="container">
    <div class="row">
      <h1 class="page-title col-12 text-h2">Cardboard Crashers</h1>
      <p class="page-subtitle col-12 text-subtitle">Niantic</p>
    </div>

    <section class="content row">
      <video autoplay controls muted>
        <source :src="launchWebm" type="video/webm" />
        <source :src="launchMp4" type="video/mp4" />
      </video>
    </section>

    <section class="content row">
      <div class="texts col-12 col-lg-6 text-subtitle">
        <p>
          We teamed up with Niantic to create a competitive multiplayer game that plays across platform from phone to AR
          headset.
        </p>
        <p>
          The goal of the game is for players to use the balloon-powered vehicles to knock each other off the board.
        </p>
        <img :src="getImage('sketch_board_wcagtr')" alt="Bog battle" />
      </div>
      <img :src="getImage('Cardboard_footage_-_site_infn8w')" alt="Bog battle" class="col-12 col-lg-6" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { videoMp4, videoWebm, webp } from '@cloudinary/url-gen/qualifiers/format';
import { autoBest, autoEco } from '@cloudinary/url-gen/qualifiers/quality';

definePageMeta({
  title: 'MousePack | Niantic Cardboard Crashers',
  description:
    // eslint-disable-next-line max-len
    'We teamed up with Niantic to create a competitive multiplayer game that plays across platform from phone to AR headset. The goal of the game is for players to use the balloon-powered vehicles to knock each other off the board.',
  image: 'https://res.cloudinary.com/mousepack/image/upload/c_scale,w_300/q_auto:eco/f_webp/Cardboardthumbnial_bx187p',
});

const { $cld } = useNuxtApp();

const launchVideo = $cld.video('cardboard_launch_b3fist').resize(scale().width(1320)).delivery(quality(autoBest()));
const launchWebm = launchVideo.delivery(format(videoWebm())).toURL();
const launchMp4 = launchVideo.delivery(format(videoMp4())).toURL();

const getImage = (publicID: string): string =>
  $cld.image(publicID).resize(scale().width(900)).delivery(quality(autoEco())).delivery(format(webp())).toURL();
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

.texts {
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > p:nth-child(2) {
    margin-bottom: auto;
  }
}
</style>
