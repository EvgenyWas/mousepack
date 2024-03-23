<template>
  <div id="work-page" class="container">
    <h2 class="projects-title text-h2 row">Selected Projects</h2>
    <div class="projects-items row">
      <ProjectCard
        v-for="project in projects"
        v-bind="project"
        :key="project.subtitle"
        class="projects-item col-12 col-sm-6 col-lg-4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'MousePack work',
  description: 'MousePack work',
});

const projects = [
  { image: '', title: 'Niantic', subtitle: 'Cardboard Crashers', to: '/' },
  { image: '', title: 'Niantic', subtitle: 'Cardboard Crashers', to: '/' },
  { image: '', title: 'Niantic', subtitle: 'Cardboard Crashers', to: '/' },
  { image: '', title: 'Niantic', subtitle: 'Cardboard Crashers', to: '/' },
  { image: '', title: 'Niantic', subtitle: 'Cardboard Crashers', to: '/' },
  { image: '', title: 'Niantic', subtitle: 'Cardboard Crashers', to: '/' },
  { image: '', title: 'Niantic', subtitle: 'Cardboard Crashers', to: '/' },
  { image: '', title: 'Niantic', subtitle: 'Cardboard Crashers', to: '/' },
];
</script>

<style scoped lang="scss">
#work-page {
  padding-top: 80px;
}

.projects {
  &-title {
    justify-content: center;
    margin-bottom: 20px;
    color: $typography;
    text-align: center;
  }

  &-item {
    margin-bottom: 32px;
  }
}

@include media-breakpoint-up(sm) {
  #work-page {
    padding-top: 100px;
  }

  .projects {
    &-title {
      margin-bottom: 24px;
    }
  }
}

@include media-breakpoint-up(lg) {
  #work-page {
    padding-top: 130px;
  }

  .projects {
    padding-top: 60px;
    padding-bottom: 60px;

    &-title {
      margin-bottom: 32px;
    }
  }
}
</style>
