<script setup>
import { ref, computed } from "vue";

// Props 정의
const props = defineProps({
  title: {
    type: String,
    default: "모아모아 합동 콜라보 마켓",
  },
  shops: {
    type: Array,
    default: () => [
      {
        id: 1,
        title: "여름이었당께",
        badge: "마켓종료",
        badgeColor: "gray",
        period: "마켓기간: 2025.06.11~2025.07.01",
        image: null,
      },
      {
        id: 2,
        title: "가을 컬렉션 특별전",
        badge: "마켓오픈",
        badgeColor: "yellow",
        period: "마켓기간: 2025.07.01~2025.07.31",
        image: "https://via.placeholder.com/98x98/f9f9f9/666?text=Shop2",
      },
      {
        id: 3,
        title: "겨울 한정 컬렉션",
        badge: "마켓준비중",
        badgeColor: "gray",
        period: "마켓기간: 2025.12.01~2025.12.31",
        image: "https://via.placeholder.com/98x98/e0e0e0/999?text=Shop3",
      },
      {
        id: 4,
        title: "봄 신상 컬렉션",
        badge: "마켓오픈",
        badgeColor: "yellow",
        period: "마켓기간: 2025.03.01~2025.03.31",
        image: "https://via.placeholder.com/98x98/f0f0f0/777?text=Shop4",
      },
      {
        id: 5,
        title: "여름 시즌 특가",
        badge: "마켓종료",
        badgeColor: "gray",
        period: "마켓기간: 2025.06.01~2025.06.30",
        image: null,
      },
      {
        id: 6,
        title: "추석 한정 이벤트",
        badge: "마켓오픈",
        badgeColor: "yellow",
        period: "마켓기간: 2025.09.01~2025.09.30",
        image: "https://via.placeholder.com/98x98/f5f5f5/888?text=Shop6",
      },
    ],
  },
  showMoreButton: {
    type: Boolean,
    default: true,
  },
  moreButtonText: {
    type: String,
    default: "더보기",
  },
  itemsPerRow: {
    type: Number,
    default: 3,
  },
  maxItems: {
    type: Number,
    default: 6,
  },
});

// Emits 정의
const emit = defineEmits(["shop-click", "more-click"]);

// 표시할 아이템 수 관리
const displayedItems = ref(props.maxItems);

// Shop 클릭 핸들러
const handleShopClick = (shop) => {
  emit("shop-click", shop);
};

// 더보기 클릭 핸들러
const handleMoreClick = () => {
  emit("more-click");
};

// 표시할 shops 계산
const displayedShops = computed(() => {
  return props.shops.slice(0, displayedItems.value);
});

// 배지 색상 클래스 반환
const getBadgeClasses = (badgeColor) => {
  const baseClasses = "flex items-center gap-2 px-2 py-1 rounded-md";

  switch (badgeColor) {
    case "yellow":
      return `${baseClasses} bg-yellow-100`;
    case "gray":
    default:
      return `${baseClasses} bg-gray-100`;
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
</script>

<template>
  <div class="w-full max-w-6xl mx-auto">
    <!-- 제목 -->
    <div class="text-center py-15 px-0 mb-6">
      <h2 class="text-2xl font-bold text-gray-900">{{ title }}</h2>
    </div>

    <!-- Shop 그리드 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <div
        v-for="shop in displayedShops"
        :key="shop.id"
        class="cursor-pointer transition-transform hover:scale-105"
        @click="handleShopClick(shop)"
      >
        <!-- Shop 카드 (ShopListbox의 카드 부분만 사용) -->
        <div
          class="flex flex-col border border-gray-300 hover:border-gray-400 transition-colors"
        >
          <!-- Top Section -->
          <div
            class="flex items-center justify-center p-5 border-b-0 rounded-t-3xl bg-white border-gray-300 border-t border-l border-r"
          >
            <div
              class="w-24 h-24 border border-gray-300 bg-gray-50 flex flex-col items-center justify-center gap-1.5 text-center"
            >
              <template v-if="shop.image">
                <img
                  :src="shop.image"
                  :alt="shop.title"
                  class="w-full h-full object-cover"
                />
              </template>
              <template v-else>
                <!-- 이미지 아이콘 -->
                <div
                  class="w-9 h-9 bg-gray-300 rounded flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-gray-500"
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
                <span class="text-xs text-gray-500 leading-tight">
                  대표이미지<br />등록 필요
                </span>
              </template>
            </div>
          </div>

          <!-- Bottom Section -->
          <div
            class="p-5 bg-white rounded-b-3xl border-gray-300 border-b border-l border-r"
          >
            <div class="flex items-stretch gap-6">
              <div class="flex-1 flex flex-col gap-2.5">
                <div class="flex items-center justify-between gap-4">
                  <h3 class="text-lg font-bold text-gray-900 leading-tight">
                    {{ shop.title }}
                  </h3>
                  <div
                    v-if="shop.badge"
                    :class="getBadgeClasses(shop.badgeColor)"
                  >
                    <div :class="getBadgeDotClasses(shop.badgeColor)"></div>
                    <span class="text-xs font-medium text-gray-800">{{
                      shop.badge
                    }}</span>
                  </div>
                </div>
                <p v-if="shop.period" class="text-sm text-blue-500">
                  {{ shop.period }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 더보기 버튼 -->
    <div v-if="showMoreButton" class="flex justify-center">
      <button
        @click="handleMoreClick"
        class="flex items-center gap-3 px-28 py-3.5 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
      >
        <!-- 플러스 아이콘 -->
        <div class="w-5 h-5 text-gray-500">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <span class="text-sm font-bold text-gray-700">{{
          moreButtonText
        }}</span>
      </button>
    </div>
  </div>
</template>
