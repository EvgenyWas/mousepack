<template>
  <svg class="mousepack-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
    <use :href="href" />
  </svg>
</template>

<script setup lang="ts">
import sprite from '~/assets/icons/sprite-brands.svg';

const props = defineProps<{ name: string }>();

const href = computed<string>(() => sprite + '#' + props.name);
</script>
