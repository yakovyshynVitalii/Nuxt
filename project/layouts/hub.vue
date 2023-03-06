<template>
  <div class="hub-app">
    <GridContainer>
      <div class="hub-app__nav">
        <ul class="hub-app__nav-list">
          <li><NuxtLink :to="localePath('/hub')">Home</NuxtLink></li>
          <li><NuxtLink :to="localePath('/hub/device')">Device</NuxtLink></li>
          <li><NuxtLink :to="localePath('/hub/swiper')">Swiper</NuxtLink></li>
        </ul>
      </div>
      <div class="hub-app__page">
        <slot />
      </div>
    </GridContainer>
  </div>
</template>

<script setup>
import GridContainer from "~/components/ui/app/GridContainer";
</script>

<style lang="scss" scoped>
.hub-app {
  &__nav {
    grid-column-start: 1;
    grid-column-end: 3;

    min-height: 100vh;

    border-right: 1px solid #303030;
    padding: 20px;
  }

  &__nav-list {
    list-style: none;
    & li {
      &:not(:first-child) {
        margin: 20px 0;
      }

      & a {
        color: #303030;
      }
    }
  }

  &__page {
    grid-column-start: 5;
    grid-column-end: 19;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
