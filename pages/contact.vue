<template>
  <div id="contact-page">
    <section class="contacts container">
      <h1 class="contacts-title row text-h2">Let’s Chat</h1>

      <ul class="contacts-list row">
        <li class="contacts-item col">
          <p class="contacts-item-title text-subtitle">Job Openings & Opportunities</p>
          <NuxtLink to="mailto:allie@mousepack.com" target="_blank" class="contacts-item-link text-subtitle" external>
            allie@mousepack.com
          </NuxtLink>
        </li>
        <li class="contacts-item col">
          <p class="contacts-item-title text-subtitle">Clients & New Business</p>
          <NuxtLink to="mailto:alex@mousepack.com" target="_blank" class="contacts-item-link text-subtitle" external>
            alex@mousepack.com
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'MousePack Contact',
  description: 'Let’s Chat',
});
</script>

<style scoped lang="scss">
#contact-page {
  min-height: 100vh;
  padding-top: 80px;
}

.contacts {
  &-title {
    justify-content: center;
    margin-bottom: 20px;
  }

  &-list {
    text-align: center;
  }

  &-item {
    margin-bottom: 15px;

    &-link {
      color: $typography;
    }
  }
}

@include media-breakpoint-up(sm) {
  #contact-page {
    padding-top: 100px;
  }
}

@include media-breakpoint-up(lg) {
  #contact-page {
    padding-top: 130px;
  }
}
</style>
