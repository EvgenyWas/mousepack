<template>
  <div id="about-page">
    <section class="feed container">
      <h2 class="feed-title text-h2 row">MousePack Feed</h2>
      <div
        class="juicer-feed"
        data-feed-id="mousepack-co"
        data-per="16"
        data-truncate="400"
        data-overlay="true"
        aria-label="MousePack feed carousel"
      />
    </section>

    <section class="why container">
      <h2 class="why-title text-h2 row">Why MousePack?</h2>
      <p class="why-subtitle text-subtitle">
        A collection of talented creators with a shared passion for innovating with Augmented Reality. Based in NYC, our
        studio delivers distinguished work for leading brands across the globe. Find out more about us.
      </p>
    </section>

    <section class="capabilities container">
      <h2 class="capabilities-title text-h2 row">Capabilities</h2>
    </section>

    <section class="devices container">
      <h2 class="devices-title text-h2 row">Devices we built for</h2>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'MousePack about',
  description: 'MousePack about',
});

useHead({
  script: [{ src: 'https://www.juicer.io/embed.js', type: 'text/javascript', async: true }],
  link: [{ href: 'https://www.juicer.io/embed.css', media: 'all', rel: 'stylesheet', type: 'text/css' }],
});
</script>

<style scoped lang="scss">
#about-page {
  padding-top: 80px;
}

.feed,
.why,
.capabilities,
.devices {
  margin-bottom: 30px;

  &-title {
    justify-content: center;
    margin-bottom: 20px;
    color: $typography;
    text-align: center;
  }

  &-subtitle {
    text-align: center;
  }
}

@include media-breakpoint-up(sm) {
  #about-page {
    padding-top: 100px;
  }

  .feed,
  .why,
  .capabilities,
  .devices {
    margin-bottom: 40px;

    &-title {
      margin-bottom: 30px;
    }
  }
}

@include media-breakpoint-up(lg) {
  #about-page {
    padding-top: 130px;
  }

  .feed,
  .why,
  .capabilities,
  .devices {
    margin-bottom: 50px;

    &-title {
      margin-bottom: 40px;
    }
  }
}
</style>
