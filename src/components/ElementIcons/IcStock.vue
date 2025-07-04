<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
  >
    <path
      d="M15.25 2.60547C16.525 2.60547 17.5 3.58047 17.5 4.85547V15.3555C17.5 16.6305 16.525 17.6055 15.25 17.6055H4.75C3.475 17.6055 2.5 16.6305 2.5 15.3555V4.85547C2.5 3.58047 3.475 2.60547 4.75 2.60547H15.25ZM7.08301 4.27246V10.5225L10 8.85547L12.917 10.5225V4.27246H7.08301Z"
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
    color: () => "#060608",
  }
);
</script>
