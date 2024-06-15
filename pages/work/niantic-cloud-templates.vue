<template>
  <div class="container">
    <div class="row">
      <h1 class="page-title col-12 text-h2">Cloud Templates</h1>
      <p class="page-subtitle col-12 text-subtitle">Niantic</p>
    </div>

    <section class="content row">
      <img :src="getImage('Bunny_Blitz_jdzort')" alt="Bunny blitz" width="900" class="col-12 col-sm-8" />
      <p class="col-12 col-sm-4 text-subtitle">
        To help spark new users ....MousePack created 3 unique game experiences that can be used to make an infinite
        number of experiences.
      </p>
    </section>

    <section class="content row">
      <p class="col-12 col-sm-4 text-subtitle">
        Our three game edits include “Botanical Bunny,” “Bog Blasters,” and “Shooter.” Each game features it’s own
        unique setting, components and game play.
      </p>
      <img :src="getImage('Bog_Battle_fkkuxb')" alt="Bog battle" width="900" class="col-12 col-sm-8" />
    </section>

    <section class="content row">
      <img :src="getImage('Botanical_Blaster_r16aol')" alt="Botanical blaster" width="900" class="col-12 col-sm-8" />
      <p class="col-12 col-sm-4 text-subtitle">
        Developers will have fun adjusting the components to create their own versions of these games. Try it on Cloud
        today!
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { webp } from '@cloudinary/url-gen/qualifiers/format';
import { autoEco } from '@cloudinary/url-gen/qualifiers/quality';

definePageMeta({
  title: 'MousePack | Niantic Cloud Templates',
  description:
    // eslint-disable-next-line max-len
    'To help spark new users ....MousePack created 3 unique game experiences that can be used to make an infinite number of experiences. Our three game edits include “Botanical Bunny,” “Bog Blasters,” and “Shooter.” Each game features it’s own unique setting, components and game play. Developers will have fun adjusting the components to create their own versions of these games. Try it on Cloud today!',
  image: 'https://res.cloudinary.com/mousepack/image/upload/c_scale,w_300/q_auto:eco/f_webp/Cloud_Thumbnial_hilpve',
});

const { $cld } = useNuxtApp();

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
</style>
