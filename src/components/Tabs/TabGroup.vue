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
      { id: "baby", label: "아기" },
      { id: "kitsch", label: "키치" },
      { id: "emotional", label: "감성" },
      { id: "etc", label: "기타" },
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

// 탭 그룹핑 로직 개선
const tabGroups = computed(() => {
  const totalTabs = props.tabs.length;

  // 10개 이하면 1줄로, 10개 넘으면 2줄로
  if (totalTabs <= 10) {
    // 1줄로 배치 (한 슬라이드에 최대 5개)
    const itemsPerSlide = 5;
    const groups = [];

    for (let i = 0; i < props.tabs.length; i += itemsPerSlide) {
      groups.push(props.tabs.slice(i, i + itemsPerSlide));
    }

    return groups;
  } else {
    // 2줄로 배치 (한 슬라이드에 6개씩 - 2줄 x 3개)
    const itemsPerSlide = 6;
    const groups = [];

    for (let i = 0; i < props.tabs.length; i += itemsPerSlide) {
      groups.push(props.tabs.slice(i, i + itemsPerSlide));
    }

    return groups;
  }
});

// 2줄 레이아웃 여부 확인
const isTwoRowLayout = computed(() => props.tabs.length > 10);

// Swiper 사용 여부 확인
const shouldUseSwiper = computed(
  () => props.isMobile && props.tabs.length > (isTwoRowLayout.value ? 6 : 5)
);

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
    <!-- 모바일: Swiper 사용 -->
    <div v-if="isMobile && shouldUseSwiper" class="relative">
      <div class="px-5">
        <Swiper
          :items="tabGroups"
          :slidesPerView="1"
          :spaceBetween="8"
          :showNavigation="false"
          :showPagination="false"
          :allowTouchMove="true"
        >
          <template #default="{ item: tabGroup }">
            <div
              :class="[
                'grid gap-2 auto-rows-fr',
                isTwoRowLayout ? 'grid-cols-3' : 'grid-cols-5',
              ]"
            >
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

      <!-- 우측 그라데이션 효과 (더 많은 탭이 있음을 표시) -->
      <div class="absolute top-0 right-0 w-8 h-full pointer-events-none">
        <div
          class="w-full h-full bg-gradient-to-l from-white via-white/60 to-transparent"
        ></div>
      </div>
    </div>

    <!-- 모바일: Swiper 불필요한 경우 (탭이 적을 때) -->
    <div v-else-if="isMobile" class="px-5">
      <div
        :class="[
          'grid gap-2 auto-rows-fr',
          isTwoRowLayout ? 'grid-cols-3' : 'grid-cols-5',
        ]"
      >
        <button
          v-for="tab in tabs"
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
          asd
          {{ tab.label }}
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* 기존 스크롤바 숨기기 스타일은 더 이상 필요하지 않으므로 제거 */
</style>
