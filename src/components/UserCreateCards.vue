<script setup>
import { ref, computed } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

// Props 정의
const props = defineProps({
  shops: {
    type: Array,
    default: () => [],
  },
  itemsPerRow: {
    type: Number,
    default: 4,
  },
  maxItems: {
    type: Number,
    default: 8,
  },
});

// Emits 정의
const emit = defineEmits(["shop-click", "participant-click"]);

// 모달 상태 관리
const isModalOpen = ref(false);
const selectedShop = ref(null);
const imageErrors = ref(new Set());

// 표시할 아이템 수 관리
const displayedItems = ref(props.maxItems);

// 표시할 shops 계산
const displayedShops = computed(() => {
  return props.shops.slice(0, displayedItems.value);
});

// 클릭 핸들러
const handleShopClick = (shop) => {
  selectedShop.value = shop;
  isModalOpen.value = true;
  emit("shop-click", shop);
};

const handleParticipantClick = (participant) => {
  emit("participant-click", participant);
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedShop.value = null;
};

// 배지 색상 클래스 반환
const getBadgeClasses = (badgeColor) => {
  const baseClasses =
    "inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium";

  switch (badgeColor) {
    case "blue":
      return `${baseClasses} bg-blue-100 text-blue-800`;
    case "yellow":
      return `${baseClasses} bg-yellow-100 text-yellow-800`;
    case "gray":
    default:
      return `${baseClasses} bg-gray-100 text-gray-800`;
  }
};

// 배지 점 색상 클래스 반환
const getBadgeDotClasses = (badgeColor) => {
  const baseClasses = "w-1.5 h-1.5 rounded-full";

  switch (badgeColor) {
    case "blue":
      return `${baseClasses} bg-blue-400`;
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

// 그리드 컬럼 클래스 계산
const gridColsClass = computed(() => {
  const cols = props.itemsPerRow;
  let baseClass = "grid grid-cols-1";

  // 반응형 클래스 생성
  if (cols >= 2) baseClass += " md:grid-cols-2";
  if (cols >= 3) baseClass += " lg:grid-cols-3";
  if (cols >= 4) baseClass += " xl:grid-cols-4";
  if (cols >= 5) baseClass += " 2xl:grid-cols-5";
  if (cols >= 6) baseClass += " 2xl:grid-cols-6";

  return `${baseClass} gap-8`;
});
</script>

<template>
  <div class="w-full">
    <!-- Shop 카드 그리드 (동적 열 수) -->
    <div :class="gridColsClass">
      <div
        v-for="shop in displayedShops"
        :key="shop.id"
        class="bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
        @click="handleShopClick(shop)"
      >
        <!-- 상단 이미지 -->
        <div class="relative aspect-[4/3] rounded-lg border border-gray-200">
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
              class="w-full h-full flex flex-col items-center justify-center gap-2"
            >
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
              <span class="text-xs text-gray-500 text-center">
                대표이미지<br />등록 필요
              </span>
            </div>
          </template>
        </div>

        <!-- 하단 정보 -->
        <div class="p-3 text-left">
          <!-- 배지 -->
          <div v-if="shop.badge" class="mb-2">
            <div :class="getBadgeClasses(shop.badgeColor)">
              <div :class="getBadgeDotClasses(shop.badgeColor)"></div>
              {{ shop.badge }}
            </div>
          </div>

          <!-- 제목 -->
          <h3 class="text-sm font-bold text-gray-900 mb-2 line-clamp-1">
            {{ shop.title }}
          </h3>

          <!-- 설명 -->
          <p
            v-if="shop.description"
            class="text-xs text-gray-600 mb-3 line-clamp-3"
          >
            {{ shop.description }}
          </p>

          <!-- 기간 -->
          <p v-if="shop.period" class="text-xs mb-3">
            {{ shop.period }}
          </p>

          <!-- 해시태그 -->
          <p
            v-if="shop.hashtags"
            class="text-xs text-blue-500 mb-3 line-clamp-2"
          >
            {{ shop.hashtags }}
          </p>

          <!-- 참여작가 -->
          <div
            v-if="shop.participants && shop.participants.length > 0"
            class="flex items-center justify-center gap-2"
          >
            <div
              v-for="participant in shop.participants"
              :key="participant.id"
              class="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity border border-gray-200 rounded-full p-1.5"
              @click.stop="handleParticipantClick(participant)"
            >
              <!-- 작가 아바타 -->
              <div
                class="w-5 h-5 rounded-full border border-gray-300 bg-white overflow-hidden flex-shrink-0"
              >
                <template v-if="participant.avatar">
                  <img
                    :src="participant.avatar"
                    :alt="participant.name"
                    class="w-full h-full object-cover"
                  />
                </template>
                <template v-else>
                  <div class="w-full h-full flex items-center justify-center">
                    <svg
                      class="w-2.5 h-2.5 text-gray-400"
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
              <span class="text-xs text-black-700 truncate">
                {{ participant.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
