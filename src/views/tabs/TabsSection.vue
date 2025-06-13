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
      <h2 class="text-xl font-bold mb-4">TabGroup 컴포넌트</h2>
      <p class="text-gray-600 mb-6">
        반응형 탭 네비게이션 - 자동 줄바꿈, v-model 지원
      </p>

      <TabGroup
        v-model="activeTab"
        :tabs="tabsData"
        @tab-change="handleTabChange"
      />

      <div class="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 class="font-bold mb-2">선택된 탭:</h3>
        <pre class="text-sm text-gray-700">{{ activeTab }}</pre>
      </div>
    </div>

    <!-- 사용법 안내 -->
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-xl font-bold mb-4">사용법</h2>
      <div class="prose prose-sm max-w-none">
        <h3 class="text-lg font-semibold mb-2">설치</h3>
        <div class="bg-gray-100 p-3 rounded text-sm mb-4 font-mono">
          yarn build:lib<br />
          yarn add file:../moremore-component
        </div>

        <h3 class="text-lg font-semibold mb-2">사용</h3>
        <div class="bg-gray-100 p-3 rounded text-sm font-mono">
          import { AdminCreateCards, UserCreateCards, TabGroup } from
          'moremore-component'<br />
          import 'moremore-component/style.css'
        </div>

        <h3 class="text-lg font-semibold mb-2 mt-6">컴포넌트 특징</h3>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>AdminCreateCards</strong>: 높이 자동 맞춤, 참여작가 스크롤
            기능
          </li>
          <li>
            <strong>UserCreateCards</strong>: Headless UI 모달, 동적 그리드
            (1-6열)
          </li>
          <li>
            <strong>TabGroup</strong>: 반응형 디자인, 자동 줄바꿈, v-model 지원
          </li>
        </ul>

        <h3 class="text-lg font-semibold mb-2 mt-6">기술 스택</h3>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>Vue 3 Composition API</li>
          <li>Headless UI (모달, 접근성)</li>
          <li>Tailwind CSS (스타일링)</li>
          <li>반응형 디자인</li>
        </ul>
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
