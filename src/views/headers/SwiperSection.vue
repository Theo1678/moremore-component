<script setup>
import { ref } from "vue";
import Swiper from "../../components/header/Swiper.vue";

// 슬라이드 변경 추적
const lastSlideIndex = ref(0);
const lastSlideTime = ref(new Date().toLocaleTimeString());

const onSlideChange = (index) => {
  lastSlideIndex.value = index;
  lastSlideTime.value = new Date().toLocaleTimeString();
};

// 기본 스와이퍼 데이터
const basicItems = ref([
  {
    title: "첫 번째 슬라이드",
    subtitle: "기본 스와이퍼 예제",
    color: "#3B82F6",
  },
  {
    title: "두 번째 슬라이드",
    subtitle: "터치/드래그 지원",
    color: "#10B981",
  },
  {
    title: "세 번째 슬라이드",
    subtitle: "반응형 디자인",
    color: "#F59E0B",
  },
  {
    title: "네 번째 슬라이드",
    subtitle: "커스터마이징 가능",
    color: "#EF4444",
  },
]);

// 카드 아이템 데이터
const cardItems = ref([
  {
    id: 1,
    title: "Vue 3 컴포넌트",
    description: "최신 Vue 3 Composition API를 사용한 현대적인 컴포넌트",
    color: "#4ADE80",
  },
  {
    id: 2,
    title: "TypeScript 지원",
    description: "완전한 타입 안전성과 개발자 경험 제공",
    color: "#3B82F6",
  },
  {
    id: 3,
    title: "반응형 디자인",
    description: "모든 디바이스에서 완벽하게 작동하는 반응형 레이아웃",
    color: "#F59E0B",
  },
  {
    id: 4,
    title: "터치 지원",
    description: "모바일 디바이스에서 자연스러운 터치 제스처 지원",
    color: "#EF4444",
  },
  {
    id: 5,
    title: "커스터마이징",
    description: "슬롯을 통한 완전한 UI 커스터마이징 가능",
    color: "#8B5CF6",
  },
  {
    id: 6,
    title: "접근성",
    description: "스크린 리더와 키보드 네비게이션 완전 지원",
    color: "#06B6D4",
  },
]);

// 자동재생 아이템 데이터
const autoplayItems = ref([
  {
    title: "자동 재생",
    description: "설정된 시간마다 자동으로 다음 슬라이드로 이동합니다",
    tag: "자동화",
    color1: "#667eea",
    color2: "#764ba2",
  },
  {
    title: "일시 정지",
    description: "마우스 호버시 자동 재생이 일시 정지됩니다",
    tag: "상호작용",
    color1: "#f093fb",
    color2: "#f5576c",
  },
  {
    title: "루프 재생",
    description: "마지막 슬라이드 후 첫 번째 슬라이드로 돌아갑니다",
    tag: "무한반복",
    color1: "#4facfe",
    color2: "#00f2fe",
  },
  {
    title: "진행 표시",
    description: "스크롤바로 현재 진행 상황을 확인할 수 있습니다",
    tag: "진행률",
    color1: "#43e97b",
    color2: "#38f9d7",
  },
]);
</script>

<template>
  <div class="swiper-section max-w-6xl mx-auto px-6 py-8">
    <!-- 실제 동작 예제 -->
    <div class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-700 mb-6 text-center">
        실제 동작 예제
      </h2>

      <!-- 기본 스와이퍼 -->
      <div class="mb-8">
        <h3 class="text-lg font-medium text-gray-700 mb-4">기본 스와이퍼</h3>
        <div class="h-64 bg-gray-100 rounded-lg overflow-hidden">
          <Swiper
            :items="basicItems"
            :slides-per-view="1"
            :space-between="20"
            :show-navigation="true"
            :show-pagination="true"
            @slide-change="onSlideChange"
          >
            <template #default="{ item, index, isActive }">
              <div
                class="h-full flex items-center justify-center text-white text-2xl font-bold"
                :style="{ backgroundColor: item.color }"
              >
                <div class="text-center">
                  <div>{{ item.title }}</div>
                  <div class="text-sm opacity-80 mt-2">{{ item.subtitle }}</div>
                </div>
              </div>
            </template>
          </Swiper>
        </div>
      </div>

      <!-- 멀티플 슬라이드 -->
      <div class="mb-8">
        <h3 class="text-lg font-medium text-gray-700 mb-4">
          멀티플 슬라이드 (3개씩)
        </h3>
        <div class="h-48 bg-gray-100 rounded-lg overflow-hidden">
          <Swiper
            :items="cardItems"
            :slides-per-view="3"
            :space-between="16"
            :show-navigation="true"
            :show-pagination="true"
          >
            <template #default="{ item, index }">
              <div
                class="h-full bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
              >
                <div>
                  <h3 class="font-semibold text-gray-800 mb-2">
                    {{ item.title }}
                  </h3>
                  <p class="text-gray-600 text-sm">{{ item.description }}</p>
                </div>
                <div class="flex items-center justify-between mt-4">
                  <span class="text-xs text-gray-500">#{{ item.id }}</span>
                  <div
                    class="w-4 h-4 rounded-full"
                    :style="{ backgroundColor: item.color }"
                  ></div>
                </div>
              </div>
            </template>
          </Swiper>
        </div>
      </div>

      <!-- 자동재생 스와이퍼 -->
      <div class="mb-8">
        <h3 class="text-lg font-medium text-gray-700 mb-4">
          자동재생 스와이퍼
        </h3>
        <div class="h-56 bg-gray-100 rounded-lg overflow-hidden">
          <Swiper
            :items="autoplayItems"
            :slides-per-view="2"
            :space-between="24"
            :autoplay="{ delay: 2000 }"
            :show-navigation="true"
            :show-pagination="true"
          >
            <template #default="{ item, index }">
              <div
                class="h-full rounded-lg p-6 text-white flex flex-col justify-center"
                :style="{
                  background: `linear-gradient(135deg, ${item.color1}, ${item.color2})`,
                }"
              >
                <div class="text-center">
                  <div class="text-xl font-bold mb-2">{{ item.title }}</div>
                  <div class="text-sm opacity-90">{{ item.description }}</div>
                  <div class="mt-4">
                    <span
                      class="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs"
                    >
                      {{ item.tag }}
                    </span>
                  </div>
                </div>
              </div>
            </template>
          </Swiper>
        </div>
      </div>
    </div>

    <!-- 컴포넌트 정보 헤더 -->
    <div class="text-center mb-12 bg-white rounded-lg shadow-lg p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Swiper 정보</h1>

      <h2 class="text-2xl font-semibold text-gray-700 mb-6">특징</h2>
      <div class="max-w-3xl mx-auto text-left">
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-start">
            <span
              class="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"
            ></span>
            Vue 3 Composition API 기반 (최신 Vue 문법으로 구현)
          </li>
          <li class="flex items-start">
            <span
              class="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"
            ></span>
            터치/드래그 지원 및 반응형 디자인
          </li>
          <li class="flex items-start">
            <span
              class="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"
            ></span>
            자동재생, 무한루프, 커스텀 네비게이션 지원
          </li>
          <li class="flex items-start">
            <span
              class="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"
            ></span>
            슬롯을 통한 완전한 UI 커스터마이징
          </li>
        </ul>
      </div>
    </div>

    <!-- 사용 예시 -->
    <div class="text-center mb-12 bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold text-gray-700 mb-6">사용 예시</h2>
      <div class="bg-gray-100 rounded-lg p-6 text-left">
        <pre class="text-sm text-gray-800 overflow-x-auto">
          Swiper
            :items="items"
            :slides-per-view="3"
            :space-between="20"
            :autoplay="{ delay: 3000 }"
            :show-navigation="true"
            :show-pagination="true"
            @slide-change="handleSlideChange"
          
            template #default="{ item, index, isActive }"
              div class="slide-content"
                <span> &#123;&#123; item.title &#125;&#125;</span>
              /div
            /template
          /Swiper
          </pre>
      </div>
    </div>

    <!-- Props 테이블 -->
    <div class="text-center mb-12 bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold text-gray-700 mb-6">Props</h2>
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
                items
              </td>
              <td class="border border-gray-300 px-4 py-3">Array</td>
              <td class="border border-gray-300 px-4 py-3">[]</td>
              <td class="border border-gray-300 px-4 py-3">
                스와이퍼에 표시할 아이템 배열
              </td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-3 font-mono text-sm">
                slidesPerView
              </td>
              <td class="border border-gray-300 px-4 py-3">Number</td>
              <td class="border border-gray-300 px-4 py-3">1</td>
              <td class="border border-gray-300 px-4 py-3">
                화면에 표시할 슬라이드 개수
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-3 font-mono text-sm">
                spaceBetween
              </td>
              <td class="border border-gray-300 px-4 py-3">Number</td>
              <td class="border border-gray-300 px-4 py-3">0</td>
              <td class="border border-gray-300 px-4 py-3">
                슬라이드 간 간격(px)
              </td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-3 font-mono text-sm">
                autoplay
              </td>
              <td class="border border-gray-300 px-4 py-3">Object | Boolean</td>
              <td class="border border-gray-300 px-4 py-3">false</td>
              <td class="border border-gray-300 px-4 py-3">
                자동재생 설정 ({ delay: 3000 })
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-3 font-mono text-sm">
                loop
              </td>
              <td class="border border-gray-300 px-4 py-3">Boolean</td>
              <td class="border border-gray-300 px-4 py-3">false</td>
              <td class="border border-gray-300 px-4 py-3">무한 루프 활성화</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-3 font-mono text-sm">
                showNavigation
              </td>
              <td class="border border-gray-300 px-4 py-3">Boolean</td>
              <td class="border border-gray-300 px-4 py-3">false</td>
              <td class="border border-gray-300 px-4 py-3">
                네비게이션 버튼 표시
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-3 font-mono text-sm">
                showPagination
              </td>
              <td class="border border-gray-300 px-4 py-3">Boolean</td>
              <td class="border border-gray-300 px-4 py-3">false</td>
              <td class="border border-gray-300 px-4 py-3">
                페이지네이션 표시
              </td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-3 font-mono text-sm">
                showScrollbar
              </td>
              <td class="border border-gray-300 px-4 py-3">Boolean</td>
              <td class="border border-gray-300 px-4 py-3">false</td>
              <td class="border border-gray-300 px-4 py-3">스크롤바 표시</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Events 테이블 -->
    <div class="text-center mb-12 bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold text-gray-700 mb-6">Events</h2>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse border border-gray-300">
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
                @slide-change
              </td>
              <td class="border border-gray-300 px-4 py-3">{ index, item }</td>
              <td class="border border-gray-300 px-4 py-3">
                슬라이드 변경 시 발생
              </td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-3 font-mono text-sm">
                @swiper-init
              </td>
              <td class="border border-gray-300 px-4 py-3">swiper instance</td>
              <td class="border border-gray-300 px-4 py-3">
                스와이퍼 초기화 완료 시 발생
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-3 font-mono text-sm">
                @transition-start
              </td>
              <td class="border border-gray-300 px-4 py-3">{ index }</td>
              <td class="border border-gray-300 px-4 py-3">
                슬라이드 전환 시작 시 발생
              </td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-3 font-mono text-sm">
                @transition-end
              </td>
              <td class="border border-gray-300 px-4 py-3">{ index }</td>
              <td class="border border-gray-300 px-4 py-3">
                슬라이드 전환 완료 시 발생
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper-examples {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

section {
  margin-bottom: 3rem;
}

h2 {
  padding-left: 1rem;
}

.bg-dots {
  background-image: radial-gradient(circle, white 2px, transparent 2px);
  background-size: 20px 20px;
}
</style>
