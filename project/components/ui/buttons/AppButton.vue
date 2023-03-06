<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="['button', `button_size_${size}`, `button_color_${color}`]"
    :disabled="isDisabled"
    >{{ title }}
  </NuxtLink>
  <button
    v-else
    :class="['button', `button_size_${size}`, `button_color_${color}`]"
    :disabled="isDisabled"
  >
    {{ title }}
  </button>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: false,
  },

  size: {
    type: String,
    required: false,
    default: "medium",
    validator(value) {
      return ["large", "medium"].includes(value);
    },
  },

  color: {
    type: String,
    required: false,
    default: "green",
    validator(value) {
      return ["green", "green-50", "white-50"].includes(value);
    },
  },

  title: {
    type: String,
    required: true,
  },

  isDisabled: {
    type: Boolean,
    required: false,
  },
});
</script>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: $Font-intro;
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  border-radius: 100px;
  border: 0;
  cursor: pointer;
  transition: 0.2s;

  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 16px;
  }

  &[disabled] {
    background: $Black--200;
    color: $Black_W;
    cursor: default;
  }
  &_size {
    &_medium {
      height: 40px;
      padding: 0 16px;

      @media (min-width: 1024px) {
        height: 48px;
        padding: 0 20px;
      }
    }
    &_large {
      height: 48px;
      padding: 0 24px;

      @media (min-width: 1024px) {
        height: 56px;
        padding: 0 30px;
      }
    }
  }
  &_color {
    &_green {
      color: $Black_W;
      background: $Green_400;
      @media (any-hover: hover) {
        &:not([disabled]):hover {
          background: $Green_500;
        }
      }
    }

    &_green-50 {
      color: $Green_500;
      background: $Green_50;

      @media (any-hover: hover) {
        &:not([disabled]):hover {
          color: $Black_900;
          background: $Black_W;
        }
      }
    }

    &_white-50 {
      background: $Green_300;
      color: $Black_W;

      @media (any-hover: hover) {
        &:hover {
          color: $Black_W;
          background: $Green-300;
        }
      }

      @media (min-width: 1024px) {
        color: $Green_400;
        background: rgba($Black_W, 0.5);
      }
    }
  }
}
</style>
