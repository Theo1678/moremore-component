<script setup lang="ts">
import { ref, computed } from "vue";
import Swiper from "../header/Swiper.vue";
import type {
  Shop,
  Participant,
  BadgeColor,
  ScrollDirection,
} from "../../types/index";

// Props 정의
const props = withDefaults(
  defineProps<{
    shops?: Shop[];
    itemsPerRow?: number;
    maxItems?: number;
  }>(),
  {
    shops: () => [],
    itemsPerRow: 3,
    maxItems: 6,
  }
);

// Emits 정의
const emit = defineEmits<{
  "shop-click": [shop: Shop];
  "participant-click": [participant: Participant];
}>();

// 이미지 에러 상태 관리
const imageErrors = ref(new Set());

// 표시할 아이템 수 관리
const displayedItems = ref(props.maxItems);

// 표시할 shops 계산
const displayedShops = computed(() => {
  return props.shops.slice(0, displayedItems.value);
});

// 클릭 핸들러
const handleShopClick = (shop) => {
  emit("shop-click", shop);
};

const handleParticipantClick = (participant) => {
  emit("participant-click", participant);
};

// 배지 색상 클래스 반환
const getBadgeClasses = (badgeColor) => {
  const baseClasses = "flex items-center gap-2 px-2 py-1 rounded-md";

  switch (badgeColor) {
    case "blue":
      return `${baseClasses}`;
    case "green":
      return `${baseClasses}`;
    case "yellow":
      return `${baseClasses}`;
    case "gray":
    default:
      return `${baseClasses}`;
  }
};

// 배지 점 색상 클래스 반환
const getBadgeDotClasses = (badgeColor) => {
  const baseClasses = "w-2 h-2 rounded-full";

  switch (badgeColor) {
    case "yellow":
      return `${baseClasses} bg-yellow-400`;
    case "gray":
    default:
      return `${baseClasses} bg-gray-400`;
  }
};

// 이미지 에러 핸들러
const handleImageError = (shopId) => {
  imageErrors.value.add(shopId);
};

// 이미지 표시 여부 확인
const shouldShowImage = (shop) => {
  return shop.image && !imageErrors.value.has(shop.id);
};
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-8 mb-12 items-start"
  >
    <div
      v-for="shop in displayedShops"
      :key="shop.id"
      class="cursor-pointer transition-transform hover:scale-105 h-full max-w-[380px]"
    >
      <div
        class="w-full max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden h-full flex flex-col"
      >
        <!-- 상단 섹션 -->
        <div
          class="px-3 py-[20px] md:py-[26px] cursor-pointer flex-grow"
          @click="handleShopClick(shop)"
        >
          <div class="flex items-center gap-4 h-full">
            <!-- 대표 이미지 -->
            <div
              class="w-24 h-24 rounded-full border border-gray-300 bg-gray-50 flex-shrink-0 overflow-hidden"
            >
              <template v-if="shouldShowImage(shop)">
                <img
                  :src="shop.image"
                  :alt="shop.title"
                  @error="handleImageError(shop.id)"
                  class="w-full h-full object-cover"
                />
              </template>
              <template v-else>
                <div
                  class="w-full h-full flex flex-col items-center justify-center gap-1"
                >
                  <!-- 이미지 아이콘 -->
                  <div
                    class="w-8 h-8 bg-gray-300 rounded flex items-center justify-center"
                  >
                    <svg
                      class="w-4 h-4 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span class="text-xs text-gray-500 text-center leading-tight">
                    대표이미지<br />등록 필요
                  </span>
                </div>
              </template>
            </div>

            <!-- content -->
            <div class="flex-1 min-w-0 text-left flex flex-col justify-center">
              <!-- 제목과 배지 -->
              <div
                class="flex flex-nowrap items-center justify-between gap-3 mb-2"
              >
                <h2
                  class="font-pretendard text-[17px] font-bold leading-[22px] line-clamp-2 text-[#060608]"
                >
                  {{ shop.title }}
                </h2>
                <div
                  v-if="shop.badge"
                  :class="getBadgeClasses(shop.badgeColor)"
                  class="flex-shrink-0"
                >
                  <div :class="getBadgeDotClasses(shop.badgeColor)"></div>
                  <span class="text-xs font-medium text-[#303040]">{{
                    shop.badge
                  }}</span>
                </div>
              </div>

              <!-- 마켓 설명 -->
              <p
                v-if="shop.description"
                class="font-pretendard text-[15px] font-normal leading-[22px] my-2 line-clamp-2 text-[#778196]"
              >
                {{ shop.description }}
              </p>

              <!-- 모집기간 -->
              <p
                v-if="shop.period"
                class="break-words whitespace-normal font-pretendard text-[13px] font-normal leading-[20px] text-[#3182F4]"
              >
                {{ shop.period }}
              </p>
            </div>
          </div>
        </div>

        <!-- 구분선 -->
        <div class="border-t border-gray-200"></div>

        <!-- 참여작가 섹션 -->
        <div class="w-full py-6 px-5 mt-auto">
          <h3
            class="text-left font-pretendard text-[15px] font-bold leading-[22px] mb-2 text-[#303040]"
          >
            참여작가
          </h3>

          <!-- Swiper를 사용한 참여작가 목록 -->
          <div
            v-if="shop.participants && shop.participants.length > 0"
            :class="shop.participants.length > 4 ? 'px-8' : ''"
          >
            <Swiper
              :items="shop.participants"
              :multiple="true"
              :slidesPerView="4"
              :spaceBetween="8"
              :show-pagination="false"
              :showNavigation="shop.participants.length > 4"
            >
              <template #default="{ item: participant }">
                <div
                  class="w-16 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                  @click.stop="handleParticipantClick(participant)"
                >
                  <!-- 작가 아바타 -->
                  <div
                    class="w-8 h-8 rounded-full border border-gray-300 bg-gray-50 overflow-hidden"
                  >
                    <template v-if="participant.avatar">
                      <img
                        :src="participant.avatar"
                        :alt="participant.name"
                        class="w-full h-full object-cover"
                      />
                    </template>
                    <template v-else>
                      <div
                        class="w-full h-full flex items-center justify-center"
                      >
                        <!-- 기본 아바타 아이콘 -->
                        <svg
                          class="w-8 h-8 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </template>
                  </div>

                  <!-- 작가 이름 -->
                  <span
                    class="font-pretendard text-[13px] font-normal leading-[20px] line-clamp-1 text-center text-[#303040]"
                    >{{ participant.name }}</span
                  >
                </div>
              </template>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
