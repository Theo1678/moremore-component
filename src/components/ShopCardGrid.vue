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
    default: () => [
      {
        id: 1,
        title: "서랍배 v.20 스팸프투어 하심 분",
        description:
          "귀여운 그림체에 정말 작업 하시는 분, 다구 스티커, 파티콘이나 대표 가능, 부드러운 색감 쓰시는 분 구해요",
        badge: "모집중",
        badgeColor: "blue",
        period: "모집기간: 2025.06.11~2025.07.01",
        hashtags:
          "#가을 #시원함 #가을맘 #스팸프투어 #리얼 #파티콘 #스토리 #부들",
        image: "https://via.placeholder.com/280x200/f0f8ff/4a90e2?text=6월통판",
        participants: [
          { id: 1, name: "하찌네(방장)", avatar: null },
          { id: 2, name: "잠여자 (5/10)", avatar: null },
        ],
      },
      {
        id: 2,
        title: "서랍배 v.20 스팸프투어 하심 분",
        description:
          "귀여운 그림체에 정말 작업 하시는 분, 다구 스티커, 파티콘이나 대표 가능, 부드러운 색감 쓰시는 분 구해요",
        badge: "모집마감",
        badgeColor: "gray",
        period: "모집기간: 2025.06.11~2025.07.01",
        hashtags:
          "#가을 #시원함 #가을맘 #스팸프투어 #리얼 #파티콘 #스토리 #부들",
        image: "https://via.placeholder.com/280x200/f0f8ff/4a90e2?text=6월통판",
        participants: [
          { id: 1, name: "하찌네(방장)", avatar: null },
          { id: 2, name: "잠여자 (1/10)", avatar: null },
        ],
      },
      {
        id: 3,
        title: "서랍배 v.20 스팸프투어 하심 분",
        description:
          "귀여운 그림체에 정말 작업 하시는 분, 다구 스티커, 파티콘이나 대표 가능, 부드러운 색감 쓰시는 분 구해요",
        badge: "마켓오픈",
        badgeColor: "yellow",
        period: "모집기간: 2025.06.11~2025.07.01",
        hashtags:
          "#가을 #시원함 #가을맘 #스팸프투어 #리얼 #파티콘 #스토리 #부들",
        image: "https://via.placeholder.com/280x200/f0f8ff/4a90e2?text=6월통판",
        participants: [
          { id: 1, name: "하찌네(방장)", avatar: null },
          { id: 2, name: "잠여자 (9/10)", avatar: null },
        ],
      },
      {
        id: 4,
        title: "서랍배 v.20 스팸프투어 하심 분",
        description:
          "귀여운 그림체에 정말 작업 하시는 분, 다구 스티커, 파티콘이나 대표 가능, 부드러운 색감 쓰시는 분 구해요",
        badge: "마켓오픈",
        badgeColor: "yellow",
        period: "모집기간: 2025.06.11~2025.07.01",
        hashtags:
          "#가을 #시원함 #가을맘 #스팸프투어 #리얼 #파티콘 #스토리 #부들",
        image: "https://via.placeholder.com/280x200/f0f8ff/4a90e2?text=6월통판",
        participants: [
          { id: 1, name: "하찌네(방장)", avatar: null },
          { id: 2, name: "잠여자 (3/10)", avatar: null },
        ],
      },
    ],
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
</script>

<template>
  <div class="w-full">
    <!-- Shop 카드 그리드 (4열) -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      <div
        v-for="shop in displayedShops"
        :key="shop.id"
        class="bg-white rounded-lg border border-gray-200 overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
        @click="handleShopClick(shop)"
      >
        <!-- 상단 이미지 -->
        <div class="relative aspect-[4/3] bg-gray-100">
          <template v-if="shop.image">
            <img
              :src="shop.image"
              :alt="shop.title"
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
        <div class="p-3">
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
          <p v-if="shop.period" class="text-xs text-blue-500 mb-3">
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
            class="flex items-center gap-2"
          >
            <div
              v-for="participant in shop.participants"
              :key="participant.id"
              class="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
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
              <span class="text-xs text-gray-700 truncate">
                {{ participant.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Headless UI 모달 -->
    <TransitionRoot appear :show="isModalOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900 mb-4"
                >
                  {{ selectedShop?.title }}
                </DialogTitle>

                <div v-if="selectedShop" class="space-y-4">
                  <!-- 이미지 -->
                  <div
                    v-if="selectedShop.image"
                    class="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <img
                      :src="selectedShop.image"
                      :alt="selectedShop.title"
                      class="w-full h-full object-cover"
                    />
                  </div>

                  <!-- 배지 -->
                  <div v-if="selectedShop.badge">
                    <div
                      :class="getBadgeClasses(selectedShop.badgeColor)"
                      class="inline-flex"
                    >
                      <div
                        :class="getBadgeDotClasses(selectedShop.badgeColor)"
                      ></div>
                      {{ selectedShop.badge }}
                    </div>
                  </div>

                  <!-- 설명 -->
                  <p
                    v-if="selectedShop.description"
                    class="text-sm text-gray-600"
                  >
                    {{ selectedShop.description }}
                  </p>

                  <!-- 기간 -->
                  <p v-if="selectedShop.period" class="text-sm text-blue-500">
                    {{ selectedShop.period }}
                  </p>

                  <!-- 해시태그 -->
                  <p v-if="selectedShop.hashtags" class="text-sm text-blue-500">
                    {{ selectedShop.hashtags }}
                  </p>

                  <!-- 참여작가 목록 -->
                  <div
                    v-if="
                      selectedShop.participants &&
                      selectedShop.participants.length > 0
                    "
                  >
                    <h4 class="font-medium text-gray-900 mb-2">참여작가</h4>
                    <div class="space-y-2">
                      <div
                        v-for="participant in selectedShop.participants"
                        :key="participant.id"
                        class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                        @click="handleParticipantClick(participant)"
                      >
                        <div
                          class="w-8 h-8 rounded-full border border-gray-300 bg-white overflow-hidden"
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
                              <svg
                                class="w-4 h-4 text-gray-400"
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
                        <span class="text-sm font-medium text-gray-700">
                          {{ participant.name }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-6">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    닫기
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
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
