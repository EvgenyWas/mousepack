<template>
  <div id="home-page">
    <h1 class="title">MousePack</h1>

    <section class="reel container">
      <video class="reel-video" autoplay loop muted playsinline>
        <source :src="reelWebm" type="video/webm" />
        <source :src="reelMp4" type="video/mp4" />
      </video>
    </section>

    <section class="brands">
      <div class="container">
        <h2 class="brands-title text-h2">Brands we’ve teamed up with</h2>
        <TransitionGroup :duration="600" tag="div" name="fade" class="brands-items row">
          <div
            v-for="(brand, index) in brands"
            v-show="hasInCurrentBrandRange(index)"
            :key="brand.name"
            :class="{ current: hasInCurrentBrandRange(index) }"
            class="brands-item col-4 col-lg-2"
          >
            <SpriteBrands :name="brand.name" class="brands-item-icon" />
          </div>
        </TransitionGroup>
      </div>
    </section>

    <section class="projects container">
      <h2 class="projects-title text-h2 row">Rapidly delivering highly creative augmented reality experiences</h2>
      <p class="projects-desc text-subtitle row">
        Meet MousePack. A team of creators with a shared passion for innovating with Augmented Reality.
        <NuxtLink class="projects-desc-link" to="/about"><strong>Find out more about us.</strong></NuxtLink>
      </p>
      <div class="projects-items row">
        <ProjectCard
          v-for="project in projects"
          v-bind="project"
          :key="project.subtitle"
          class="projects-item col-12 col-sm-6"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { videoMp4, videoWebm, webp } from '@cloudinary/url-gen/qualifiers/format';
import { autoBest } from '@cloudinary/url-gen/qualifiers/quality';
import SpriteBrands from '~/components/icons/SpriteBrands.vue';

definePageMeta({
  title: 'MousePack',
  description: 'MousePack',
});

const BRANDS_INTERVAL = 5000;
const BRANDS_VISIBLE_NUMBER = 9;

const { $cld } = useNuxtApp();

const brandReel = $cld.video('brand-reel_rdvy5x');
const reelWebm = brandReel.delivery(format(videoWebm())).toURL();
const reelMp4 = brandReel.delivery(format(videoMp4())).toURL();

const getProjectImage = (publicID: string): string =>
  $cld.image(publicID).resize(scale().width(700)).delivery(quality(autoBest())).delivery(format(webp())).toURL();

const brands = [
  { name: 'snapchat' },
  { name: 'qualcomm' },
  { name: 'fifa' },
  { name: 'google' },
  { name: 'niantic' },
  { name: 'disney' },
  { name: 'amazon' },
  { name: 'meta' },
  { name: 'zenni-optical' },
  { name: 'pepsi' },
  { name: 'hbo' },
  { name: 'sony' },
  { name: 'pez' },
  { name: 'espn' },
  { name: 'asmodee' },
  { name: 'marvel' },
  { name: 'sxsw' },
  { name: 'madison-square-park' },
];

const projects = [
  {
    image: getProjectImage('Cloud_Thumbnial_hilpve'),
    title: 'Niantic',
    subtitle: 'Cloud Templates',
    to: '/work/niantic-cloud-templates',
  },
  {
    image: getProjectImage('Cardboardthumbnial_bx187p'),
    title: 'Niantic',
    subtitle: 'Cardboard Crashers',
    to: '/work/niantic-cardboard-crashers',
  },
  {
    image: getProjectImage('ACL_Thumbnail_femzdg'),
    title: 'Live Nation',
    subtitle: 'Austin City Limits',
    to: '/work/live-nation-acl',
  },
  {
    image: getProjectImage('LoveBirds_Thumb_klavdb'),
    title: 'Snapchat',
    subtitle: 'Love Birds',
    to: '/work/snapchat-love-birds',
  },
];

const { lgAndUp } = useDisplay();

const currentBrandRange = ref<number>(1);

const resetCurrentBrandRange = () => (currentBrandRange.value = 1);

const hasInCurrentBrandRange = (index: number): boolean => {
  if (process.server || lgAndUp.value) {
    return true;
  } else {
    const affiliation = index / BRANDS_VISIBLE_NUMBER;

    return currentBrandRange.value - 1 <= affiliation && affiliation < currentBrandRange.value;
  }
};

let brandsIntervalID: ReturnType<typeof setInterval>;
const ranges = brands.length / BRANDS_VISIBLE_NUMBER;

watch(
  () => lgAndUp.value,
  () => {
    clearInterval(brandsIntervalID);
    if (process.client && !lgAndUp.value) {
      brandsIntervalID = setInterval(() => {
        if (currentBrandRange.value === ranges) {
          resetCurrentBrandRange();
        } else {
          currentBrandRange.value += 1;
        }
      }, BRANDS_INTERVAL);
    } else {
      resetCurrentBrandRange();
    }
  },
  { immediate: true },
);

onUnmounted(() => clearInterval(brandsIntervalID));
</script>

<style scoped lang="scss">
.title {
  position: absolute;
  left: -100000000px;
}

.reel {
  width: auto;
  height: 100%;
  max-height: calc(100vh - 60px);
  aspect-ratio: 16 / 9;
  padding: 0;
  margin-bottom: -5px;
  background-color: rgba($typography, 0.1);

  &-video {
    width: 100%;
    height: 100%;
  }
}

.brands {
  padding: 30px 0;
  background-color: $primary;

  &-title {
    margin: 0 0 10px;
    color: $white;
    text-align: center;
  }

  &-items {
    max-height: 450px;
  }

  &-item {
    text-align: center;

    &.current {
      order: 1;
      transition-delay: 500ms;
    }

    &-icon {
      width: 100%;
      max-width: 150px;
    }
  }
}

.projects {
  padding-top: 40px;
  padding-bottom: 40px;

  &-title {
    margin: 0 auto 15px;
    color: $typography;
    text-align: center;
  }

  &-desc {
    justify-content: center;
    margin: 0 auto 30px;
    color: $typography;
    text-align: center;

    &-link {
      color: $typography;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &-items {
    margin-bottom: 10px;
  }

  &-item {
    margin-bottom: 32px;
  }
}

@include media-breakpoint-up(sm) {
  .brands {
    padding: 50px 0;

    &-title {
      margin: 0 0 30px;
    }
  }

  .projects {
    &-title {
      margin-bottom: 24px;
    }

    &-desc {
      margin-bottom: 55px;
    }
  }
}

@include media-breakpoint-up(lg) {
  .brands {
    &-items {
      max-height: none;
      margin-bottom: 25px;
    }

    &-item {
      transition: none;

      &-icon {
        max-height: 140px;
        padding: 20px;
      }
    }
  }

  .projects {
    padding-top: 60px;
    padding-bottom: 60px;

    &-title {
      width: 80%;
    }

    &-desc {
      width: 80%;
      margin-bottom: 75px;
    }

    &-items {
      margin-bottom: 55px;
    }
  }
}

@include media-breakpoint-up(xxl) {
  .brands {
    &-title {
      margin: 0 0 50px;
    }
  }
}
</style>
