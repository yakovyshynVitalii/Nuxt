<template>
  <div class="page">
    <div class="nav">
      <h3 class="font-inter">Navigation</h3>

      <!-- Для коректного використання локалізації в nuxt-link потрібно використовувати -->
      <!-- localePath('маршрут') -->
      <!-- деталі на https://i18n.nuxtjs.org/basic-usage/#nuxt-link-->
    </div>

    <!-- Переключатель мов -->
    <!-- деталі на   https://v8.i18n.nuxtjs.org/guide/lang-switcher/ -->

    <div class="locales">
      <div class="locales__text"></div>
      <div class="locales__select">
        <AppButton
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          :title="locale.name"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from "~/components/ui/buttons/AppButton.vue";

definePageMeta({
  layout: "hub",
});

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
