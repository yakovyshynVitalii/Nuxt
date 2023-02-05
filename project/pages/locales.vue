<template>
  <div class="page">
    <div class="nav">
      <h3>Navigation</h3>

      <!-- Для коректного використання локалізації в nuxt-link потрібно використовувати -->
      <!-- localePath('маршрут') -->
      <!-- деталі на https://i18n.nuxtjs.org/basic-usage/#nuxt-link-->

      <NuxtLink :to="localePath('/')">Home</NuxtLink>
      <NuxtLink :to="localePath('/locales')">Locales</NuxtLink>
    </div>

    <!-- Переключатель мов -->
    <!-- деталі на   https://v8.i18n.nuxtjs.org/guide/lang-switcher/ -->

    <div class="locales">
      <div class="locales__text"></div>
      <div class="locales__select">
        <NuxtLink
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// Логіка переключателя мов

import { useI18n } from "#imports";
import { computed } from "vue";

const { locale, locales } = useI18n();

const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<style lang="scss">
.page {
  @include defaultWrapper;

  &__wrapper {
    height: 100px;
    border: 1px solid $Black_900;
    padding: 15px;
  }
}

.nav {
  display: flex;
  align-items: center;

  padding: 15px;

  & h3 {
    margin-right: 15px;
  }

  & a {
    margin: 0 10px;

    font-size: 18px;
    color: Black;
  }
}
</style>
