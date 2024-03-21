<template>
  <div>
    <section style="height: 100vh; background-color: #808080">
      <!-- Video -->
    </section>

    <section class="brands">
      <div class="container">
        <h2 class="brands-title">Brands we worked with</h2>
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
      <h2 class="projects-title row">Augmented Reality from Concept to Conclusion</h2>
      <p class="projects-desc row">
        A collection of talented creators with a shared passion for innovating with Augmented Reality. Based in NYC, our
        studio delivers distinguished work for leading brands across the globe.
        <NuxtLink class="projects-desc-link" to="/about"><strong>Find out more about us.</strong></NuxtLink>
      </p>
      <div class="projects-items row">
        <ProjectCard
          v-for="project in projects"
          v-bind="project"
          :key="project.subtitle"
          class="projects-item col-12 col-sm-6 col-lg-4"
        />
      </div>
      <div class="row">
        <NuxtLink class="projects-link" to="/work">SEE ALL PROJECTS</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SpriteBrands from '~/components/icons/SpriteBrands.vue';

definePageMeta({
  title: 'MousePack',
  description: 'MousePack',
});

const BRANDS_INTERVAL = 5000;
const BRANDS_VISIBLE_NUMBER = 9;

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
  { image: '', title: 'Niantic', subtitle: 'Cardboard Crashers', to: '/' },
  { image: '', title: 'Niantic', subtitle: 'Cardboard Crashers', to: '/' },
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
.brands {
  padding: 30px 0;
  background-color: $primary;

  &-title {
    margin: 0 0 10px;
    font-size: 36px;
    font-weight: 700;
    line-height: 48px;
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
    }
  }
}

.projects {
  padding-top: 40px;
  padding-bottom: 40px;

  &-title {
    margin: 0 auto 15px;
    font-size: 36px;
    font-weight: 700;
    line-height: 48px;
    color: $typography;
    text-align: center;
  }

  &-desc {
    margin: 0 auto 30px;
    font-size: 16px;
    line-height: 30px;
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
    margin-bottom: 40px;
  }

  &-link {
    $gradient: linear-gradient($warning 0 0) no-repeat;

    width: fit-content;
    padding: 6px 28px;
    margin: 0 auto;
    font-size: 20;
    font-weight: 700;
    line-height: 28px;
    color: $typography;
    background:
      $gradient calc(var(--gradient-width, 0%) - 100%) 0%,
      $gradient calc(200% - var(--gradient-width, 0%)) 0%,
      $gradient calc(var(--gradient-width, 0%) - 100%) 100%,
      $gradient calc(200% - var(--gradient-width, 0%)) 100%;
    background-size: 50.5% calc(var(--gradient-width, 0%) / 2 + 0.5%);
    border: 1px solid $typography;
    border-radius: 34px;
    transition:
      background-size 400ms,
      background-position 0s 400ms;

    &:hover {
      --gradient-width: 100%;

      border-color: $warning;
      transition:
        background-position 400ms,
        background-size 0s;
    }
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
    }

    &-item {
      transition: none;
    }
  }

  .projects {
    padding-top: 60px;
    padding-bottom: 60px;

    &-title {
      width: 80%;
      font-size: 40px;
      line-height: 54px;
    }

    &-desc {
      width: 80%;
      margin-bottom: 75px;
      font-size: 20px;
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
      font-size: 48px;
      line-height: 64px;
    }
  }

  .projects {
    &-title {
      font-size: 48px;
      line-height: 66px;
    }
  }
}
</style>
