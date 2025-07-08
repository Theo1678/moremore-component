<script setup lang="ts">
import { ref, watch, computed } from "vue";
import Swiper from "../header/Swiper.vue";

// 타입 정의
interface Tab {
  id: string;
  label: string;
}

// Props 정의
const props = withDefaults(
  defineProps<{
    tabs?: Tab[];
    modelValue?: string | number;
    variant?: "default" | "compact";
    isMobile?: boolean;
  }>(),
  {
    tabs: () => [
      { id: "all", label: "전체" },
      { id: "person", label: "인물" },
      { id: "animal", label: "동물" },
      { id: "object", label: "사물" },
      { id: "plant", label: "식물" },
      { id: "food", label: "음식" },
      { id: "background", label: "배경 모조지" },
      { id: "cute", label: "귀여운" },
      { id: "kitsch", label: "키치" },
      { id: "emotional", label: "감성" },
    ],
    modelValue: "all",
    variant: "default",
    isMobile: false,
  }
);

// Emits 정의
const emit = defineEmits(["update:modelValue", "tab-change"]);

// 활성 탭 관리
const activeTab = ref(props.modelValue);

// 탭 클릭 핸들러
const handleTabClick = (tab) => {
  activeTab.value = tab.id;
  emit("update:modelValue", tab.id);
  emit("tab-change", tab);
};

// 탭 스타일 클래스 반환
const getTabClasses = (tab) => {
  const isActive = activeTab.value === tab.id;
  const radiusClass = props.isMobile ? "rounded-lg" : "rounded-xl";
  const baseClasses = `flex items-center justify-center focus:outline-none hover:border-[#F66D96] border-1 ${radiusClass}`;
  if (isActive) {
    return `${baseClasses} bg-[#FFE8F0] border-[#F66D96] border-2`;
  } else {
    return `${baseClasses} bg-white border-[#CFD3DA] border-2`;
  }
};

// 탭 텍스트 스타일 클래스 반환
const getTabTextClasses = (tab) => {
  const isActive = activeTab.value === tab.id;
  const sizeClass = props.isMobile ? "text-xs" : "text-sm";
  const baseClasses = `${sizeClass} font-bold text-center whitespace-nowrap`;

  if (isActive) {
    return `${baseClasses} text-[#F66D96]`;
  } else {
    return `${baseClasses} text-[#424855]`;
  }
};

// 탭 그룹핑 (각 슬라이드에 6개씩, 2줄로 배치)
const tabGroups = computed(() => {
  const itemsPerSlide = 6; // 한 슬라이드에 6개 (2줄 x 3개)
  const groups = [];

  for (let i = 0; i < props.tabs.length; i += itemsPerSlide) {
    groups.push(props.tabs.slice(i, i + itemsPerSlide));
  }

  return groups;
});

// modelValue 변경 감지
watch(
  () => props.modelValue,
  (newValue) => {
    activeTab.value = newValue;
  }
);
</script>

<template>
  <div class="w-full">
    <!-- 모바일: Swiper로 2줄 그리드 -->
    <div v-if="isMobile" class="px-5">
      <Swiper
        :items="tabGroups"
        :slidesPerView="1"
        :spaceBetween="0"
        :showNavigation="false"
        :showPagination="false"
        :allowTouchMove="true"
      >
        <template #default="{ item: tabGroup }">
          <div class="grid grid-cols-3 gap-2 auto-rows-fr">
            <button
              v-for="tab in tabGroup"
              :key="tab.id"
              :class="[getTabClasses(tab), 'px-3 py-2']"
              @click="handleTabClick(tab)"
              type="button"
            >
              <span :class="getTabTextClasses(tab)">
                {{ tab.label }}
              </span>
            </button>
          </div>
        </template>
      </Swiper>
    </div>

    <!-- 데스크탑: 기존 flex 방식 -->
    <div v-else class="flex items-stretch px-5 flex-wrap gap-4">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="[getTabClasses(tab), 'px-4 py-3']"
        @click="handleTabClick(tab)"
        type="button"
      >
        <span :class="getTabTextClasses(tab)">
          {{ tab.label }}
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* 기존 스크롤바 숨기기 스타일은 더 이상 필요하지 않으므로 제거 */
</style>
