<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
  >
    <path
      d="M18.3337 19.25V17.4167C18.3337 16.4442 17.9474 15.5116 17.2597 14.8239C16.5721 14.1363 15.6395 13.75 14.667 13.75H7.33366C6.3612 13.75 5.42857 14.1363 4.74093 14.8239C4.0533 15.5116 3.66699 16.4442 3.66699 17.4167V19.25"
      :stroke="color"
      stroke-width="1.83333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.9997 10.0833C13.0247 10.0833 14.6663 8.44171 14.6663 6.41667C14.6663 4.39162 13.0247 2.75 10.9997 2.75C8.97463 2.75 7.33301 4.39162 7.33301 6.41667C7.33301 8.44171 8.97463 10.0833 10.9997 10.0833Z"
      :stroke="color"
      stroke-width="1.83333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: string;
  }>(),
  {
    color: () => "#303040",
  }
);
</script>
