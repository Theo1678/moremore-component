<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
  >
    <g clip-path="url(#clip0_1979_140961)">
      <path
        d="M8.24967 20.1654C8.75594 20.1654 9.16634 19.755 9.16634 19.2487C9.16634 18.7424 8.75594 18.332 8.24967 18.332C7.74341 18.332 7.33301 18.7424 7.33301 19.2487C7.33301 19.755 7.74341 20.1654 8.24967 20.1654Z"
        :stroke="color"
        stroke-width="1.83333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3337 20.1654C18.8399 20.1654 19.2503 19.755 19.2503 19.2487C19.2503 18.7424 18.8399 18.332 18.3337 18.332C17.8274 18.332 17.417 18.7424 17.417 19.2487C17.417 19.755 17.8274 20.1654 18.3337 20.1654Z"
        :stroke="color"
        stroke-width="1.83333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.916992 0.917969H4.58366L7.04033 13.1921C7.12415 13.6142 7.35374 13.9933 7.68891 14.2631C8.02408 14.5329 8.44347 14.6762 8.87366 14.668H17.7837C18.2139 14.6762 18.6332 14.5329 18.9684 14.2631C19.3036 13.9933 19.5332 13.6142 19.617 13.1921L21.0837 5.5013H5.50033"
        :stroke="color"
        stroke-width="1.83333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1979_140961">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
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
