<template>
  <div id="play-page">
    <h1 class="title">MousePack Play</h1>

    <section class="container">
      <ul class="play-list row">
        <li v-for="item in items" :key="item.alt" class="play-list-item col-12 col-sm-6 col-md-4 col-lg-3">
          <img :src="item.src" :alt="item.alt" :loading="item.loading" width="300" class="play-list-item-img" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { gif } from '@cloudinary/url-gen/qualifiers/format';
import { quality, format } from '@cloudinary/url-gen/actions/delivery';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { autoEco } from '@cloudinary/url-gen/qualifiers/quality';
import type { ImgHTMLAttributes } from 'vue';

definePageMeta({
  title: 'MousePack Play',
  description: 'MousePack Play',
});

interface PlayItem {
  src: string;
  alt: string;
  loading?: ImgHTMLAttributes['loading'];
}

const { $cld } = useNuxtApp();

const getPlayItemSrc = (publicID: string) =>
  $cld.image(publicID).resize(scale().width(300)).delivery(quality(autoEco())).delivery(format(gif()).lossy()).toURL();

const items: Array<PlayItem> = [
  { src: getPlayItemSrc('antman_bf69bc'), alt: 'antman gif' },
  { src: getPlayItemSrc('universal-gopher_sykajj'), alt: 'universal-gopher gif' },
  { src: getPlayItemSrc('gravity-gun_lfnykr'), alt: 'gravity-gun gif' },
  { src: getPlayItemSrc('llama-hat_ctfctw'), alt: 'llama-hat gif' },
  { src: getPlayItemSrc('box-bois_oiouls'), alt: 'box-bois gif' },
  { src: getPlayItemSrc('jar-smash_dc0eap'), alt: 'jar-smash gif', loading: 'lazy' },
];
</script>

<style scope lang="scss">
#play-page {
  min-height: 100vh;
  padding-top: 100px;
}

.title {
  position: absolute;
  left: -100000000px;
}

.play {
  &-list {
    margin-bottom: 40px;

    &-item {
      margin-bottom: 20px;

      &-img {
        height: 100%;
        margin: 0 auto;
        border-radius: 16px;
      }
    }
  }
}
</style>
