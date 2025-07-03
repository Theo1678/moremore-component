<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: "admin" | "user";
  }>(),
  {
    type: "user",
  }
);
</script>

<template>
  <div
    :class="[
      'animate-pulse bg-white rounded-lg overflow-hidden',
      type === 'admin' ? 'border border-gray-200' : '',
    ]"
  >
    <!-- Admin 타입 스켈레톤 -->
    <template v-if="type === 'admin'">
      <div class="px-3 py-[20px] md:py-[26px]">
        <div class="flex items-center gap-4">
          <!-- 프로필 이미지 스켈레톤 -->
          <div class="w-24 h-24 rounded-full bg-gray-200 flex-shrink-0"></div>

          <!-- 콘텐츠 스켈레톤 -->
          <div class="flex-1">
            <div class="flex items-center justify-between gap-3 mb-2">
              <!-- 제목 스켈레톤 -->
              <div class="h-[22px] bg-gray-200 rounded w-3/4"></div>
              <!-- 상태 배지 스켈레톤 -->
              <div class="h-[22px] bg-gray-200 rounded w-[80px]"></div>
            </div>
            <!-- 설명 스켈레톤 -->
            <div class="space-y-2 mt-4">
              <div class="h-[22px] bg-gray-200 rounded w-full"></div>
              <div class="h-[22px] bg-gray-200 rounded w-4/5"></div>
            </div>
            <!-- 기간 스켈레톤 -->
            <div class="h-[20px] bg-gray-200 rounded w-1/3 mt-4"></div>
          </div>
        </div>
      </div>

      <!-- 구분선 -->
      <div class="border-t border-gray-200"></div>

      <!-- 참여작가 섹션 스켈레톤 -->
      <div class="w-full py-6 px-5">
        <div class="h-[22px] bg-gray-200 rounded w-[80px] mb-4"></div>
        <div class="flex gap-2">
          <div v-for="n in 4" :key="n" class="flex flex-col items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-gray-200"></div>
            <div class="w-16 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </template>

    <!-- User 타입 스켈레톤 -->
    <template v-else>
      <!-- 이미지 스켈레톤 -->
      <div class="aspect-[4/3] bg-gray-200 rounded-lg"></div>

      <!-- 콘텐츠 스켈레톤 -->
      <div class="p-3">
        <!-- 상태 배지 스켈레톤 -->
        <div class="h-6 bg-gray-200 rounded w-[80px] mb-2"></div>

        <!-- 제목 스켈레톤 -->
        <div class="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>

        <!-- 설명 스켈레톤 -->
        <div class="space-y-2 mb-3">
          <div class="h-4 bg-gray-200 rounded w-full"></div>
          <div class="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>

        <!-- 기간 스켈레톤 -->
        <div class="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>

        <!-- 해시태그 스켈레톤 -->
        <div class="h-4 bg-gray-200 rounded w-2/3 mb-3"></div>

        <!-- 참여작가 스켈레톤 -->
        <div class="flex gap-2">
          <div
            v-for="n in 3"
            :key="n"
            class="h-8 bg-gray-200 rounded-full w-24"
          ></div>
        </div>
      </div>
    </template>
  </div>
</template>
