<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.66675 7.99992C2.66675 7.63173 2.96522 7.33325 3.33341 7.33325H12.6667C13.0349 7.33325 13.3334 7.63173 13.3334 7.99992C13.3334 8.36811 13.0349 8.66659 12.6667 8.66659H3.33341C2.96522 8.66659 2.66675 8.36811 2.66675 7.99992Z"
      :fill="color"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: string;
  }>(),
  {
    color: () => "#5C6476",
  }
);
</script>
