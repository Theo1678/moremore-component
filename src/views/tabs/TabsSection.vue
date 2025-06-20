<script setup>
import { ref } from "vue";
import TabGroup from "../../components/Tabs/TabGroup.vue";
import { tabsData } from "./tabsData.js";

const activeTab = ref("all");

// 이벤트 핸들러
const handleTabChange = (tab) => {
  console.log("Tab changed:", tab);
  alert(`${tab.label} 탭 선택됨!`);
};
</script>

<template>
  <div class="space-y-8">
    <!-- TabGroup 컴포넌트 -->
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-xl font-bold mb-4 text-black">TabGroup 컴포넌트</h2>
      <p class="text-gray-600 mb-6">
        반응형 탭 네비게이션 - 자동 줄바꿈, v-model 지원
      </p>

      <TabGroup
        v-model="activeTab"
        :tabs="tabsData"
        @tab-change="handleTabChange"
      />

      <div class="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 class="font-bold mb-2 text-black">선택된 탭:</h3>
        <pre class="text-sm text-gray-700">{{ activeTab }}</pre>
      </div>
    </div>

    <!-- TabGroup 정보 -->
    <div class="text-center mb-8 bg-white rounded-lg shadow-lg p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">TabGroup 정보</h1>

      <h2 class="text-2xl font-semibold text-gray-700 mb-6">특징</h2>
      <div class="max-w-3xl mx-auto text-left">
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-start">
            <span
              class="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"
            ></span>
            반응형 디자인으로 화면 크기에 맞춰 자동 줄바꿈
          </li>
          <li class="flex items-start">
            <span
              class="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"
            ></span>
            v-model을 통한 양방향 데이터 바인딩 지원
          </li>
          <li class="flex items-start">
            <span
              class="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"
            ></span>
            커스터마이징 가능한 스타일과 배경색 설정
          </li>
          <li class="flex items-start">
            <span
              class="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"
            ></span>
            다양한 탭 상태 및 이벤트 처리 지원
          </li>
        </ul>
      </div>
    </div>

    <!-- 사용 예시 -->
    <div class="text-center mb-8 bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold text-gray-700 mb-6">사용 예시</h2>
      <div class="bg-gray-100 rounded-lg p-6 text-left">
        <pre class="text-sm text-gray-800 overflow-x-auto">
&lt;TabGroup
  v-model="activeTab"
  :tabs="tabsData"
  @tab-change="handleTabChange"
/&gt;</pre
        >
      </div>
    </div>

    <!-- Props 테이블 -->
    <div class="text-center mb-8 bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold text-gray-700 mb-6">Props</h2>
      <div class="overflow-x-auto text-gray-800">
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
                modelValue
              </td>
              <td class="border border-gray-300 px-4 py-3">String</td>
              <td class="border border-gray-300 px-4 py-3">""</td>
              <td class="border border-gray-300 px-4 py-3">
                현재 활성화된 탭의 값 (v-model)
              </td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-3 font-mono text-sm">
                tabs
              </td>
              <td class="border border-gray-300 px-4 py-3">Array</td>
              <td class="border border-gray-300 px-4 py-3">[]</td>
              <td class="border border-gray-300 px-4 py-3">
                탭 데이터 배열 ({ value, label, count })
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Events 테이블 -->
    <div class="text-center mb-8 bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold text-gray-700 mb-6">Events</h2>
      <div class="overflow-x-auto">
        <table
          class="w-full border-collapse border border-gray-300 text-gray-800"
        >
          <thead>
            <tr class="bg-gray-50">
              <th
                class="border border-gray-300 px-4 py-3 text-left font-medium text-gray-700"
              >
                Event
              </th>
              <th
                class="border border-gray-300 px-4 py-3 text-left font-medium text-gray-700"
              >
                Payload
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
                @update:modelValue
              </td>
              <td class="border border-gray-300 px-4 py-3">String</td>
              <td class="border border-gray-300 px-4 py-3">
                탭 변경 시 새로운 값 전달
              </td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-3 font-mono text-sm">
                @tab-change
              </td>
              <td class="border border-gray-300 px-4 py-3">tab object</td>
              <td class="border border-gray-300 px-4 py-3">
                탭 클릭 시 해당 탭 객체 전달
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tabs 섹션 전용 스타일 */
.prose h3 {
  @apply text-gray-900;
}

.prose ul {
  @apply text-gray-600;
}
</style>
