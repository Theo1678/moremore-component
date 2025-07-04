<script setup>
import { ref } from "vue";
import * as Icons from "../../components/ElementIcons/index";

// 아이콘 목록 데이터
const iconList = [
  {
    name: "ElementIcon",
    component: Icons.ElementIcon,
    description: "기본 아이콘 컨테이너",
  },
  { name: "IcApp", component: Icons.IcApp, description: "앱 아이콘" },
  { name: "IcChart", component: Icons.IcChart, description: "차트 아이콘" },
  { name: "IcHelp", component: Icons.IcHelp, description: "도움말 아이콘" },
  { name: "IcInfo", component: Icons.IcInfo, description: "정보 아이콘" },
  {
    name: "IcNotification",
    component: Icons.IcNotification,
    description: "알림 아이콘",
  },
  { name: "IcOption", component: Icons.IcOption, description: "옵션 아이콘" },
  {
    name: "IcPayback",
    component: Icons.IcPayback,
    description: "페이백 아이콘",
  },
  { name: "IcPerson", component: Icons.IcPerson, description: "사용자 아이콘" },
  { name: "IcPlane", component: Icons.IcPlane, description: "비행기 아이콘" },
  {
    name: "IcUpdate",
    component: Icons.IcUpdate,
    description: "업데이트 아이콘",
  },
  { name: "IcSetting", component: Icons.IcSetting, description: "설정 아이콘" },
  { name: "IcMedia", component: Icons.IcMedia, description: "미디어 아이콘" },
  { name: "IcLink", component: Icons.IcLink, description: "링크 아이콘" },
  {
    name: "IcArrowLeft",
    component: Icons.IcArrowLeft,
    description: "왼쪽 화살표",
  },
  {
    name: "IcArrowRight",
    component: Icons.IcArrowRight,
    description: "오른쪽 화살표",
  },
  { name: "IcDown", component: Icons.IcDown, description: "아래 화살표" },
  { name: "IcCopy", component: Icons.IcCopy, description: "복사 아이콘" },
  { name: "IcDelete", component: Icons.IcDelete, description: "삭제 아이콘" },
  { name: "IcPlus", component: Icons.IcPlus, description: "추가 아이콘" },
  { name: "IcSearch", component: Icons.IcSearch, description: "검색 아이콘" },
  { name: "IcClose", component: Icons.IcClose, description: "닫기 아이콘" },
  {
    name: "IcMoreVertical",
    component: Icons.IcMoreVertical,
    description: "세로 더보기",
  },
  {
    name: "IcCancleFill",
    component: Icons.IcCancleFill,
    description: "취소 채움 아이콘",
  },
  { name: "IcChecked", component: Icons.IcChecked, description: "체크 아이콘" },
  {
    name: "IcSparkle",
    component: Icons.IcSparkle,
    description: "반짝이 아이콘",
  },
  {
    name: "IcStock",
    component: Icons.IcStock,
    description: "저장 아이콘",
  },
  {
    name: "IcPreview",
    component: Icons.IcPreview,
    description: "미리보기 아이콘",
  },
  {
    name: "IcLoadingPrimary",
    component: Icons.IcLoadingPrimary,
    description: "로딩 아이콘",
  },
  { name: "IcLayer", component: Icons.IcLayer, description: "레이어 아이콘" },
  { name: "IcCta", component: Icons.IcCta, description: "CTA 아이콘" },
  {
    name: "IcCoreUser",
    component: Icons.IcCoreUser,
    description: "유저 아이콘",
  },
  {
    name: "IcCoreCart",
    component: Icons.IcCoreCart,
    description: "카트 아이콘",
  },
];

// 선택된 아이콘
const selectedIcon = ref(null);

// 아이콘 클릭 핸들러
const handleIconClick = (icon) => {
  selectedIcon.value = icon;
  console.log("Icon clicked:", icon.name);
};

// 코드 복사 핸들러
const copyCode = (iconName) => {
  const code = `<ElementIcon elementIcon="${iconName}" color="#3B82F6" />`;
  navigator.clipboard.writeText(code);
  alert(`${code} 코드가 복사되었습니다!`);
};
</script>

<template>
  <div class="space-y-8">
    <!-- ElementIcons 데모 -->
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-xl font-bold mb-4 text-black">ElementIcons 컴포넌트</h2>
      <p class="text-gray-600 mb-6">
        프로젝트에서 사용하는 모든 아이콘 컴포넌트 모음 - 총
        {{ iconList.length }}개 아이콘 제공
      </p>

      <!-- 아이콘 그리드 -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-8"
      >
        <div
          v-for="icon in iconList"
          :key="icon.name"
          @click="handleIconClick(icon)"
          class="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all duration-200 group"
        >
          <div
            class="w-8 h-8 flex items-center justify-center mb-2 text-gray-600 group-hover:text-blue-600"
          >
            <component :is="icon.component" />
          </div>
          <span
            class="text-xs text-center font-medium text-gray-700 group-hover:text-blue-700"
          >
            {{ icon.name }}
          </span>
        </div>
      </div>

      <!-- 선택된 아이콘 상세 정보 -->
      <div v-if="selectedIcon" class="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 class="font-bold mb-2">선택된 아이콘: {{ selectedIcon.name }}</h3>
        <p class="text-gray-600 mb-3">{{ selectedIcon.description }}</p>
        <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 flex items-center justify-center border border-gray-300 rounded bg-white"
          >
            <component :is="selectedIcon.component" />
          </div>
          <button
            @click="copyCode(selectedIcon.name)"
            class="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
          >
            코드 복사
          </button>
        </div>
      </div>
    </div>

    <!-- ElementIcons 정보 -->
    <div class="text-center mb-8 bg-white rounded-lg shadow-lg p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">ElementIcons 정보</h1>

      <h2 class="text-2xl font-semibold text-gray-700 mb-6">특징</h2>
      <div class="max-w-3xl mx-auto text-left">
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-start">
            <span
              class="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"
            ></span>
            SVG 기반의 가벼운 벡터 아이콘
          </li>
          <li class="flex items-start">
            <span
              class="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"
            ></span>
            CSS를 통한 색상 및 크기 조절 가능
          </li>
          <li class="flex items-start">
            <span
              class="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"
            ></span>
            Vue 3 컴포넌트로 타입 안전성 보장
          </li>
          <li class="flex items-start">
            <span
              class="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"
            ></span>
            일관된 디자인 시스템 적용
          </li>
        </ul>
      </div>
    </div>

    <!-- 사용 예시 -->
    <div class="text-center mb-8 bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold text-gray-700 mb-6">사용 예시</h2>
      <div class="bg-gray-100 rounded-lg p-6 text-left">
        <h3 class="font-bold text-gray-800 mb-3">ElementIcon 컴포넌트 사용:</h3>
        <pre class="text-sm text-gray-800 overflow-x-auto mb-4">
import { ElementIcon } from 'moremore-component';

&lt;template&gt;
  &lt;ElementIcon elementIcon="IcApp" color="#3B82F6" /&gt;
  &lt;ElementIcon elementIcon="IcChart" color="#10B981" /&gt;
  &lt;ElementIcon elementIcon="IcHelp" color="#6B7280" /&gt;
  &lt;ElementIcon elementIcon="IcCta" color="#99A2B0" /&gt;
&lt;/template&gt;</pre
        >
      </div>
    </div>

    <!-- Props 테이블 -->
    <div class="text-center mb-8 bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold text-gray-700 mb-6">Props</h2>

      <!-- ElementIcon Props -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-700 mb-4">
          ElementIcon 컴포넌트
        </h3>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-50">
                <th
                  class="border border-gray-300 px-4 py-3 text-left font-medium text-gray-700"
                >
                  Prop
                </th>
                <th
                  class="border border-gray-300 px-4 py-3 text-left font-medium text-gray-700"
                >
                  Type
                </th>
                <th
                  class="border border-gray-300 px-4 py-3 text-left font-medium text-gray-700"
                >
                  Default
                </th>
                <th
                  class="border border-gray-300 px-4 py-3 text-left font-medium text-gray-700"
                >
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-3 font-mono text-sm">
                  elementIcon
                </td>
                <td class="border border-gray-300 px-4 py-3">string</td>
                <td class="border border-gray-300 px-4 py-3">""</td>
                <td class="border border-gray-300 px-4 py-3">
                  사용할 아이콘 이름 (예: "IcApp", "IcChart")
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-4 py-3 font-mono text-sm">
                  color
                </td>
                <td class="border border-gray-300 px-4 py-3">string</td>
                <td class="border border-gray-300 px-4 py-3">undefined</td>
                <td class="border border-gray-300 px-4 py-3">
                  아이콘 색상 (hex, rgb 등)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ElementIcons 섹션 전용 스타일 */
.prose h3 {
  @apply text-gray-900;
}

.prose ul {
  @apply text-gray-600;
}
</style>
