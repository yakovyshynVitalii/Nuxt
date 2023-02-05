<template>
  <div class="page">Home page</div>
</template>

<script setup></script>

<style lang="scss">
.page {
  @include defaultWrapper;

  &__wrapper {
    height: 100px;
    border: 1px solid $Black_900;
    padding: 15px;
  }
}
</style>
