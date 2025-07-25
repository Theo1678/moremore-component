<script setup lang="ts">
import { ref, computed, watch } from "vue";
import Swiper from "../header/Swiper.vue";
import type { Shop, PartnerUserData, StatusCode } from "../../types/index";
import CardSkeleton from "./CardSkeleton.vue";

// Props 정의
const props = withDefaults(
  defineProps<{
    shops?: Shop[];
    itemsPerRow?: number;
    maxItems?: number;
    isMobile?: boolean;
    loading?: boolean;
  }>(),
  {
    shops: () => [],
    itemsPerRow: 3,
    maxItems: 6,
    loading: false,
    isMobile: false,
  }
);

// Emits 정의
const emit = defineEmits<{
  "shop-click": [shop: Shop];
  "partnerUser-click": [partnerUser: PartnerUserData];
}>();

// 이미지 에러 상태 관리
const imageErrors = ref(new Set());

// 표시할 아이템 수 관리
const displayedItems = ref(props.maxItems);

watch(
  () => props.maxItems,
  (newVal) => {
    displayedItems.value = newVal;
  }
);

// 표시할 shops 계산
const displayedShops = computed(() => {
  return props.shops.slice(0, displayedItems.value);
});

// 클릭 핸들러
const handleShopClick = (shop) => {
  emit("shop-click", shop);
};

const handlePartnerUserClick = (partnerUser) => {
  emit("partnerUser-click", partnerUser);
};

// 배지 점 색상 클래스 반환
const getBadgeDotClasses = (statusCode: StatusCode) => {
  const baseClasses = "w-2 h-2 rounded-full";
  switch (statusCode) {
    case "RECRUITING_PENDING":
      return `${baseClasses} bg-[#6540DE]`;
    case "RECRUITING_ONGOING":
      return `${baseClasses} bg-[#0E6CF5]`;
    case "RECRUITING_END":
      return `${baseClasses} bg-[#00AC87]`;
    case "MARKET_ONGOING":
      return `${baseClasses} bg-[#FFC14D]`;
    case "MARKET_END":
      return `${baseClasses} bg-[#ABAFB9]`;
    default:
      return `${baseClasses} bg-[#ABAFB9]`;
  }
};

const getBadgeText = (statusCode: StatusCode) => {
  switch (statusCode) {
    case "RECRUITING_PENDING":
      return "모집예정";
    case "RECRUITING_ONGOING":
      return "모집중";
    case "RECRUITING_END":
      return "모집마감";
    case "MARKET_ONGOING":
      return "마켓오픈";
    case "MARKET_END":
      return "마켓종료";
    default:
      return "모집예정";
  }
};
// 이미지 에러 핸들러
const handleImageError = (collaborationId) => {
  imageErrors.value.add(collaborationId);
};

// 이미지 표시 여부 확인
const shouldShowImage = (shop) => {
  return shop.thumbImgUrl && !imageErrors.value.has(shop.collaborationId);
};
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-8 mb-12 items-stretch"
  >
    <template v-if="loading">
      <CardSkeleton v-for="n in 6" :key="n" type="admin" />
    </template>
    <template v-else>
      <div
        v-for="shop in displayedShops"
        :key="shop.collaborationId"
        class="cursor-pointer transition-transform hover:scale-105 h-full"
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
                class="rounded-full border border-gray-300 bg-gray-50 flex-shrink-0 overflow-hidden"
                :class="isMobile ? 'w-20 h-20' : 'w-24 h-24'"
              >
                <template v-if="shouldShowImage(shop)">
                  <img
                    :src="shop.thumbImgUrl"
                    :alt="shop.marketName"
                    @error="handleImageError(shop.collaborationId)"
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
                    <span
                      class="text-xs text-gray-500 text-center leading-tight"
                    >
                      대표이미지<br />등록 필요
                    </span>
                  </div>
                </template>
              </div>

              <!-- content -->
              <div
                class="flex-1 min-w-0 text-left flex flex-col justify-center"
              >
                <!-- 제목과 배지 -->
                <div
                  class="flex flex-nowrap justify-between mb-2"
                  :class="
                    isMobile
                      ? 'flex-col items-start gap-2'
                      : 'flex-row items-center gap-3'
                  "
                >
                  <h2
                    class="font-pretendard text-[17px] font-bold leading-[22px] line-clamp-2 text-[#060608]"
                  >
                    {{ shop.marketName }}
                  </h2>
                  <div
                    v-if="shop.statusCode"
                    class="flex items-center gap-2 px-2 py-1 rounded-md flex-shrink-0"
                  >
                    <div :class="getBadgeDotClasses(shop.statusCode)"></div>
                    <span class="text-xs font-medium text-[#303040]">{{
                      getBadgeText(shop.statusCode)
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

            <!-- 참여작가가 있을 때 -->
            <div
              v-if="shop.partnerUsersData && shop.partnerUsersData.length > 0"
              :class="shop.partnerUsersData.length > 4 ? 'px-8' : ''"
            >
              <!-- 4개 이하일 때: 가운데 정렬된 flex 컨테이너 -->
              <div
                v-if="shop.partnerUsersData.length <= 4"
                class="flex items-center justify-center gap-2"
              >
                <div
                  v-for="partnerUsers in shop.partnerUsersData"
                  :key="partnerUsers.id || partnerUsers.nickName"
                  class="w-16 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                  @click.stop="handlePartnerUserClick(partnerUsers)"
                >
                  <!-- 작가 아바타 -->
                  <div
                    class="w-8 h-8 rounded-full border border-gray-300 bg-gray-50 overflow-hidden"
                  >
                    <template v-if="partnerUsers.profileImgUrl">
                      <img
                        :src="partnerUsers.profileImgUrl"
                        :alt="partnerUsers.nickName"
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
                    >{{ partnerUsers.nickName }}</span
                  >
                </div>
              </div>

              <!-- 4개 초과일 때: Swiper 사용 -->
              <Swiper
                v-else
                :items="shop.partnerUsersData"
                :multiple="true"
                :slidesPerView="4"
                :spaceBetween="8"
                :show-pagination="false"
                :showNavigation="true"
              >
                <template #default="{ item: partnerUsers }">
                  <div
                    class="w-16 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                    @click.stop="handlePartnerUserClick(partnerUsers)"
                  >
                    <!-- 작가 아바타 -->
                    <div
                      class="w-8 h-8 rounded-full border border-gray-300 bg-gray-50 overflow-hidden"
                    >
                      <template v-if="partnerUsers.profileImgUrl">
                        <img
                          :src="partnerUsers.profileImgUrl"
                          :alt="partnerUsers.nickName"
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
                      >{{ partnerUsers.nickName }}</span
                    >
                  </div>
                </template>
              </Swiper>
            </div>

            <!-- 참여작가가 없을 때 -->
            <div v-else class="flex items-center justify-center h-[60px]">
              <span class="text-gray-400 text-sm">참여작가가 없습니다</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
