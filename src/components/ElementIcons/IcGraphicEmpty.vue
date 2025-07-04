<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
  >
    <path
      d="M8.49219 13.8496H1.17383V6.53223H8.49219V13.8496ZM12.4141 9.09277C13.7275 9.09288 14.792 10.1582 14.792 11.4717C14.7919 12.785 13.7274 13.8495 12.4141 13.8496C11.1006 13.8496 10.0352 12.7851 10.0352 11.4717C10.0352 10.1582 11.1006 9.09277 12.4141 9.09277ZM12.6074 8.55859L8.12598 4.07715L14.248 2.4375L12.6074 8.55859Z"
      fill="#CFD3DA"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: string;
  }>(),
  {
    color: () => "#CFD3DA",
  }
);
</script>
