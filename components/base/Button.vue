<template>
  <button :disabled="isloading" :class="[
    'btn',
    { 'btn-sm': size === 'sm' },
    { 'btn-lg': size === 'lg' },
    { 'w-100': wFull },
    outline ? `btn-outline-${color}` : `btn-${color}`
  ]">
    <span v-if="!isloading">
      {{ inputName }}
    </span>
    <div class="spinner-border" v-if="isloading" role="status">
      <span class="visually-hidden"></span>
    </div>
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  inputName: {
    type: String,
    default: "submit",
  },
  size: {
    default: "normal",
    type: String,
  },
  wFull: {
    default: false,
    type: Boolean,
  },
  outline: {
    default: false,
    type: Boolean
  },
  color: {
    default: "primary",
    type: String
  },
  isloading: {
    default: false,
    type: Boolean
  }
});
</script>

<style scoped></style>