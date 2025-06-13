<script setup>
import { ref, computed } from "vue";

// Props 정의
const props = defineProps({
  shops: {
    type: Array,
    default: () => [],
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
const emit = defineEmits(["shop-click", "participant-click"]);

// 표시할 아이템 수 관리
const displayedItems = ref(props.maxItems);

// 표시할 shops 계산
const displayedShops = computed(() => {
  return props.shops.slice(0, displayedItems.value);
});
// 클릭 핸들러
const handleShopClick = () => {
  emit("shop-click", props.shop);
};

const handleParticipantClick = (participant) => {
  emit("participant-click", participant);
};

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

const handleImageError = (event) => {
  event.target.src =
    "https://via.placeholder.com/280x200/f0f8ff/4a90e2?text=6월통판";
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
    <div
      v-for="shop in displayedShops"
      :key="shop.id"
      class="cursor-pointer transition-transform hover:scale-105"
      @click="handleShopClick(shop)"
    >
      <div
        class="w-full max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden"
      >
        <!-- 상단 섹션 -->
        <div class="p-6 cursor-pointer" @click="handleShopClick">
          <div class="flex items-center gap-4">
            <!-- 원형 이미지 -->
            <div
              class="w-24 h-24 rounded-full border border-gray-300 bg-gray-50 flex-shrink-0 overflow-hidden"
            >
              <template v-if="shop.image">
                <img
                  :src="shop.image"
                  :alt="shop.title"
                  @error="handleImageError"
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

            <!-- 제목과 배지 -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between gap-3 mb-2">
                <h2 class="text-xl font-bold text-gray-900 truncate">
                  {{ shop.title }}
                </h2>
                <div
                  v-if="shop.badge"
                  :class="getBadgeClasses(shop.badgeColor)"
                  class="flex-shrink-0"
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

        <!-- 구분선 -->
        <div class="border-t border-gray-200"></div>

        <!-- 참여작가 섹션 -->
        <div class="p-6">
          <h3 class="text-lg font-bold text-gray-900 mb-4">참여작가</h3>

          <div class="flex items-center gap-6">
            <div
              v-for="participant in shop.participants"
              :key="participant.id"
              class="flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              @click="handleParticipantClick(participant)"
            >
              <!-- 작가 아바타 -->
              <div
                class="w-16 h-16 rounded-full border border-gray-300 bg-gray-50 overflow-hidden"
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
              <span class="text-sm font-medium text-blue-500">{{
                participant.name
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
