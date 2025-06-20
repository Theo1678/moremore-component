<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="10"
      cy="15.8333"
      rx="1.25"
      ry="1.25"
      transform="rotate(-180 10 15.8333)"
      :fill="color"
    />
    <circle
      cx="10"
      cy="10"
      r="1.25"
      transform="rotate(-180 10 10)"
      :fill="color"
    />
    <ellipse
      cx="10"
      cy="4.16667"
      rx="1.25"
      ry="1.25"
      transform="rotate(-180 10 4.16667)"
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
  },
);
</script>
