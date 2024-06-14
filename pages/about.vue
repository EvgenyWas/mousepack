<template>
  <div id="about-page">
    <h1 class="title">MousePack About</h1>

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
        Our creative studio specializes in bringing the unimaginable to life using Augmented Reality.
      </p>
      <p class="why-subtitle text-subtitle">
        Since 2021, our team has pushed the boundaries of Augmented Reality by expanding our experiences across multiple
        platforms.
      </p>
      <p class="why-subtitle text-subtitle">
        Collaborating with MousePack will give you the power to be able to bring your vision to life. With our studio,
        you can bring in your ideas and we will flesh them out, from concept to conclusion.
      </p>
      <p class="why-subtitle text-subtitle">
        Reach out to Alex Bradt (owner and director of company) or Allie Bradt (producer) and we’d be happy to discuss
        bringing your dream to reality.
      </p>
    </section>

    <section class="capabilities container">
      <h2 class="capabilities-title text-h2 row">Capabilities</h2>
      <ul class="capabilities-list">
        <li class="capabilities-item text-subtitle">Concepting and Development</li>
        <li class="capabilities-item text-subtitle">2D and 3D Design</li>
        <li class="capabilities-item text-subtitle">Storyboarding</li>
        <li class="capabilities-item text-subtitle">2D and 3D Animation</li>
        <li class="capabilities-item text-subtitle">UX and UI</li>
        <li class="capabilities-item text-subtitle">Interactive Games</li>
        <li class="capabilities-item text-subtitle">Augmented Reality Experiences</li>
        <li class="capabilities-item text-subtitle">Hack-a-thons and Talks</li>
      </ul>
    </section>

    <section class="devices container">
      <h2 class="devices-title text-h2 row">Devices we built for</h2>
      <ul class="devices-list">
        <li class="devices-item text-subtitle">Phone</li>
        <li class="devices-item text-subtitle">Oculus Quest</li>
        <li class="devices-item text-subtitle">Apple Vision Pro</li>
        <li class="devices-item text-subtitle">Lenova Glasses</li>
        <li class="devices-item text-subtitle">Snap Spectacles</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'MousePack about',
  description: 'MousePack about',
});

useHead({
  script: [{ src: 'https://www.juicer.io/embed.js', type: 'text/javascript' }],
  link: [{ href: 'https://www.juicer.io/embed.css', media: 'all', rel: 'stylesheet', type: 'text/css' }],
});

// onMounted(() => {
//   console.log('==========MOUNTED========');
//   if (process.client) {
//     console.log('==========process.client========');
//     useHead({
//       script: [{ src: 'https://www.juicer.io/embed.js', type: 'text/javascript' }],
//       link: [{ href: 'https://www.juicer.io/embed.css', media: 'all', rel: 'stylesheet', type: 'text/css' }],
//     });
//   }
// });
</script>

<style scoped lang="scss">
#about-page {
  padding-top: 80px;
}

.title {
  position: absolute;
  left: -100000000px;
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

.why {
  &-subtitle {
    margin-bottom: 20px;
  }
}

.capabilities {
  &-list {
    text-align: center;
  }

  &-item {
    margin-bottom: 10px;
  }
}

.devices {
  &-list {
    text-align: center;
  }

  &-item {
    margin-bottom: 10px;
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
