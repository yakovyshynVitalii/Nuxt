<template>
  <div>
    {{ activeDevice }}
  </div>
</template>

<script setup>
import { computed } from "vue";

definePageMeta({
  layout: "hub",
});

// щоб використовувати достатньо вивести необхідну змінну з useDevice()
// детальніше https://www.npmjs.com/package/@nuxtjs/device

const { isMobileOrTablet } = useDevice();

const activeDevice = computed(() =>
  isMobileOrTablet ? "моб версія" : "деск версія"
);
</script>
