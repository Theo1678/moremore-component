<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="ic-plus">
      <path
        id="Union"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.9166 3.33333C10.9166 2.8731 10.5435 2.5 10.0833 2.5C9.62302 2.5 9.24992 2.8731 9.24992 3.33333V9.08334H3.33333C2.8731 9.08334 2.5 9.45644 2.5 9.91667C2.5 10.3769 2.8731 10.75 3.33333 10.75H9.24992V16.6667C9.24992 17.1269 9.62302 17.5 10.0833 17.5C10.5435 17.5 10.9166 17.1269 10.9166 16.6667V10.75H16.6667C17.1269 10.75 17.5 10.3769 17.5 9.91667C17.5 9.45644 17.1269 9.08334 16.6667 9.08334H10.9166V3.33333Z"
        :fill="color"
      />
    </g>
  </svg>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      color?: string
    }>(),
    {
      color: () => '#5C6476'
    }
  )
</script>
