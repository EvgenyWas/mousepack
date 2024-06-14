<template>
  <div class="container">
    <h1 class="row text-h2">Cardboard Crashers</h1>
    <p class="row text-subtitle">Niantic</p>

    <section class="row">
      <!-- Video -->
    </section>

    <section class="row">
      <p class="text-subtitle">
        We teamed up with Niantic to create a competitive multiplayer game that plays across platform from phone to AR
        headset.
      </p>
    </section>

    <section class="row">
      <p class="text-subtitle">
        The goal of the game is for players to use the balloon-powered vehicles to knock each other off the board.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'MousePack | Niantic Cardboard Crashers',
  description:
    // eslint-disable-next-line max-len
    'We teamed up with Niantic to create a competitive multiplayer game that plays across platform from phone to AR headset. The goal of the game is for players to use the balloon-powered vehicles to knock each other off the board.',
});
</script>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  padding-top: 80px;
}
</style>
