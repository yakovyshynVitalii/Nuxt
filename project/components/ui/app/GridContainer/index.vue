<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(19, 1fr);
  max-width: 1900px;
  width: 100%;
  margin: 0 auto;
  row-gap: 24px;
  @media screen and (min-width: 1000px) {
    row-gap: 48px;
  }
}
</style>
