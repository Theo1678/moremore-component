<template>
  <div class="loading-container">
    <svg
      class="loading-spinner"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3951_314363)">
        <path
          class="loading-path path-1"
          opacity="0.3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.0013 0.835938C10.4615 0.835938 10.8346 1.20903 10.8346 1.66927V5.0026C10.8346 5.46284 10.4615 5.83594 10.0013 5.83594C9.54106 5.83594 9.16797 5.46284 9.16797 5.0026V1.66927C9.16797 1.20903 9.54106 0.835938 10.0013 0.835938Z"
          :fill="color"
        />
        <path
          class="loading-path path-2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.0013 14.1641C10.4615 14.1641 10.8346 14.5372 10.8346 14.9974V18.3307C10.8346 18.791 10.4615 19.1641 10.0013 19.1641C9.54106 19.1641 9.16797 18.791 9.16797 18.3307V14.9974C9.16797 14.5372 9.54106 14.1641 10.0013 14.1641Z"
          :fill="color"
        />
        <path
          class="loading-path path-3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.51752 3.51752C3.84295 3.19208 4.37059 3.19208 4.69603 3.51752L7.05436 5.87585C7.3798 6.20129 7.3798 6.72892 7.05436 7.05436C6.72892 7.3798 6.20129 7.3798 5.87585 7.05436L3.51752 4.69603C3.19208 4.37059 3.19208 3.84295 3.51752 3.51752Z"
          :fill="color"
        />
        <path
          class="loading-path path-4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.9472 12.9472C13.2726 12.6218 13.8003 12.6218 14.1257 12.9472L16.484 15.3055C16.8095 15.631 16.8095 16.1586 16.484 16.484C16.1586 16.8095 15.631 16.8095 15.3055 16.484L12.9472 14.1257C12.6218 13.8003 12.6218 13.2726 12.9472 12.9472Z"
          :fill="color"
        />
        <path
          class="loading-path path-5"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.832031 9.9974C0.832031 9.53716 1.20513 9.16406 1.66536 9.16406H4.9987C5.45894 9.16406 5.83203 9.53716 5.83203 9.9974C5.83203 10.4576 5.45894 10.8307 4.9987 10.8307H1.66536C1.20513 10.8307 0.832031 10.4576 0.832031 9.9974Z"
          :fill="color"
        />
        <path
          class="loading-path path-6"
          opacity="0.9"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.168 9.9974C14.168 9.53716 14.5411 9.16406 15.0013 9.16406H18.3346C18.7949 9.16406 19.168 9.53716 19.168 9.9974C19.168 10.4576 18.7949 10.8307 18.3346 10.8307H15.0013C14.5411 10.8307 14.168 10.4576 14.168 9.9974Z"
          :fill="color"
        />
        <path
          class="loading-path path-7"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.05436 12.9472C7.3798 13.2726 7.3798 13.8003 7.05436 14.1257L4.69603 16.484C4.37059 16.8095 3.84295 16.8095 3.51752 16.484C3.19208 16.1586 3.19208 15.631 3.51752 15.3055L5.87585 12.9472C6.20129 12.6218 6.72892 12.6218 7.05436 12.9472Z"
          :fill="color"
        />
        <path
          class="loading-path path-8"
          opacity="0.6"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.484 3.51752C16.8095 3.84295 16.8095 4.37059 16.484 4.69603L14.1257 7.05436C13.8003 7.3798 13.2726 7.3798 12.9472 7.05436C12.6218 6.72892 12.6218 6.20129 12.9472 5.87585L15.3055 3.51752C15.631 3.19208 16.1586 3.19208 16.484 3.51752Z"
          :fill="color"
        />
      </g>
      <defs>
        <clipPath id="clip0_3951_314363">
          <rect
            width="20"
            height="20"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      color?: string
    }>(),
    {
      color: () => '#6540DE'
    }
  )
</script>

<style scoped>
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* 투명도가 순차적으로 변하는 애니메이션 */
  .loading-path {
    opacity: 0.3;
    animation: fadeInOut 0.4s ease-in-out infinite alternate;
  }

  /* 각 요소마다 애니메이션 딜레이 추가 */
  .path-1 {
    opacity: 0.3;
    animation-delay: 0s;
  }
  .path-2 {
    opacity: 0.6;
    animation-delay: 0.3s;
  }
  .path-3 {
    opacity: 0.9;
    animation-delay: 0.6s;
  }
  .path-4 {
    opacity: 1;
    animation-delay: 0.9s;
  }
  .path-5 {
    opacity: 1;
    animation-delay: 1.2s;
  }
  .path-6 {
    opacity: 1;
    animation-delay: 1.5s;
  }
  .path-7 {
    opacity: 1;
    animation-delay: 1.8s;
  }
  .path-8 {
    opacity: 1;
    animation-delay: 2.1s;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
</style>
