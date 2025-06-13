<script setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";

// Props 정의
const props = defineProps({
  shops: {
    type: Array,
    default: () => [
      {
        id: 1,
        title: "여름이었당께",
        badge: "마켓종료",
        badgeColor: "gray", // gray, yellow 등
        period: "마켓기간: 2025.06.11~2025.07.01",
        image: null, // 이미지가 없는 경우
      },
      {
        id: 2,
        title: "가을 컬렉션 특별전",
        badge: "마켓오픈",
        badgeColor: "yellow",
        period: "마켓기간: 2025.07.01~2025.07.31",
        image: "https://via.placeholder.com/98x98/f9f9f9/666?text=Shop2",
      },
    ],
  },
  modelValue: {
    type: Object,
    default: null,
  },
  label: {
    type: String,
    default: "Shop 선택",
  },
  placeholder: {
    type: String,
    default: "Shop을 선택해주세요",
  },
});

// Emits 정의
const emit = defineEmits(["update:modelValue"]);

// 선택된 값 관리
const selectedShop = ref(props.modelValue || props.shops[0]);

// v-model 업데이트
const updateValue = (value) => {
  selectedShop.value = value;
  emit("update:modelValue", value);
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
</script>

<template>
  <div class="w-full">
    <Listbox :model-value="selectedShop" @update:model-value="updateValue">
      <div class="relative">
        <ListboxLabel
          v-if="label"
          class="block mb-2 text-sm font-medium text-gray-700"
        >
          {{ label }}
        </ListboxLabel>

        <!-- Selected Shop Display -->
        <ListboxButton class="w-full">
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
                <template v-if="selectedShop?.image">
                  <img
                    :src="selectedShop.image"
                    :alt="selectedShop.title"
                    class="w-full h-full object-cover"
                  />
                </template>
                <template v-else>
                  <!-- 이미지 아이콘 (간단한 SVG 또는 텍스트로 대체) -->
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
              <div v-if="selectedShop" class="flex items-stretch gap-6">
                <div class="flex-1 flex flex-col gap-2.5">
                  <div class="flex items-center justify-between gap-4">
                    <h3 class="text-lg font-bold text-gray-900 leading-tight">
                      {{ selectedShop.title }}
                    </h3>
                    <div
                      v-if="selectedShop.badge"
                      :class="getBadgeClasses(selectedShop.badgeColor)"
                    >
                      <div
                        :class="getBadgeDotClasses(selectedShop.badgeColor)"
                      ></div>
                      <span class="text-xs font-medium text-gray-800">{{
                        selectedShop.badge
                      }}</span>
                    </div>
                  </div>
                  <p v-if="selectedShop.period" class="text-sm text-blue-500">
                    {{ selectedShop.period }}
                  </p>
                </div>
              </div>
              <div v-else class="text-gray-500 text-center py-4">
                {{ placeholder }}
              </div>
            </div>
          </div>
        </ListboxButton>

        <!-- Dropdown Options -->
        <ListboxOptions
          class="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto"
        >
          <ListboxOption
            v-for="shop in shops"
            :key="shop.id"
            :value="shop"
            v-slot="{ active, selected }"
          >
            <div
              :class="[
                active ? 'bg-blue-50' : 'bg-white',
                selected ? 'ring-2 ring-blue-500' : '',
                'cursor-pointer select-none',
              ]"
            >
              <div
                class="flex flex-col border-b border-gray-200 last:border-b-0"
              >
                <!-- Top Section -->
                <div class="flex items-center justify-center p-5">
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
                <div class="p-5 bg-white">
                  <div class="flex items-stretch gap-6">
                    <div class="flex-1 flex flex-col gap-2.5">
                      <div class="flex items-center justify-between gap-4">
                        <h3
                          class="text-lg font-bold text-gray-900 leading-tight"
                        >
                          {{ shop.title }}
                        </h3>
                        <div
                          v-if="shop.badge"
                          :class="getBadgeClasses(shop.badgeColor)"
                        >
                          <div
                            :class="getBadgeDotClasses(shop.badgeColor)"
                          ></div>
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
          </ListboxOption>
        </ListboxOptions>
      </div>
    </Listbox>
  </div>
</template>
