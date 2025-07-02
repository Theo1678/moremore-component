<script setup>
import { ref, watch } from "vue";

// Props 정의
const props = defineProps({
  tabs: {
    type: Array,
    default: () => [
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
  },
  modelValue: {
    type: [String, Number],
    default: "all",
  },
  variant: {
    type: String,
    default: "default", // 'default' | 'compact'
    validator: (value) => ["default", "compact"].includes(value),
  },
});

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
  const baseClasses =
    "flex items-center justify-center focus:outline-none hover:border-[#F66D96] border-1";
  if (isActive) {
    return `${baseClasses} bg-[#FFE8F0] border-[#F66D96] border-2`;
  } else {
    return `${baseClasses} bg-white border-[#CFD3DA] border-2`;
  }
};

// 탭 텍스트 스타일 클래스 반환
const getTabTextClasses = (tab) => {
  const isActive = activeTab.value === tab.id;
  const baseClasses = "text-sm font-bold text-center whitespace-nowrap";

  if (isActive) {
    return `${baseClasses} text-[#F66D96]`;
  } else {
    return `${baseClasses} text-[#424855]`;
  }
};

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
    <div class="flex items-stretch gap-4 px-5 flex-wrap">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="getTabClasses(tab)"
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
