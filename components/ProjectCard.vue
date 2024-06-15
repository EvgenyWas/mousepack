<template>
  <article class="project-card">
    <NuxtLink :to="to" class="project-card-link">
      <img :src="image" :alt="subtitle" loading="lazy" class="project-card-image" />
      <h3 class="project-card-title">{{ title }}</h3>
      <p class="project-card-subtitle">{{ subtitle }}</p>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
interface Props {
  image: string;
  title: string;
  subtitle: string;
  to: string;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.project-card {
  &-image {
    aspect-ratio: 3 / 2;
    background-color: rgba($success, 0.5);
    border-radius: 25px;
    transition: box-shadow 200ms ease-in-out;
  }

  &:hover {
    transition: all 300ms ease-in-out;
    scale: 1.05;

    .project-card-image {
      box-shadow: rgba($typography, 0.2) 0 8px 24px;
    }
  }

  &-link {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: $typography;
  }

  &-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    text-align: center;
  }

  &-subtitle {
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }
}

@include media-breakpoint-up(sm) {
  .project-card {
    &-image {
      margin-bottom: 8px;
    }

    &-subtitle {
      font-size: 20px;
      line-height: 28px;
    }
  }
}
</style>
