<template>
  <article class="project-card">
    <NuxtLink :to="to" class="project-card-link">
      <img :src="image" :alt="subtitle" class="project-card-image" />
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
  &-link {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: $typography;
  }

  &-image {
    aspect-ratio: 3 / 2;
    background-color: grey;
    border-radius: 25px;
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

    &-title {
      font-size: 30px;
      line-height: 40px;
    }

    &-subtitle {
      font-size: 20px;
      line-height: 28px;
    }
  }
}
</style>
