<template>
  <div class="swiper-examples">
    <h1 class="text-3xl font-bold mb-8 text-gray-800">
      Swiper Component Examples
    </h1>

    <!-- 기본 스와이퍼 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-gray-700">기본 스와이퍼</h2>
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
    </section>

    <!-- 멀티플 슬라이드 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-gray-700">
        멀티플 슬라이드 (3개씩)
      </h2>
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
    </section>

    <!-- 자동재생 스와이퍼 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-gray-700">
        자동재생 스와이퍼
      </h2>
      <div class="h-56 bg-gray-100 rounded-lg overflow-hidden">
        <Swiper
          :items="autoplayItems"
          :slides-per-view="2"
          :space-between="24"
          :autoplay="{ delay: 2000 }"
          :show-navigation="true"
          :show-pagination="true"
          :show-scrollbar="true"
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
    </section>

    <!-- 루프 스와이퍼 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-gray-700">
        무한 루프 스와이퍼
      </h2>
      <div class="h-40 bg-gray-100 rounded-lg overflow-hidden">
        <Swiper
          :items="loopItems"
          :slides-per-view="4"
          :space-between="12"
          :loop="true"
          :show-navigation="true"
          :show-pagination="false"
        >
          <template #default="{ item, index }">
            <div
              class="h-full bg-white rounded-lg shadow-sm flex items-center justify-center"
            >
              <div class="text-center">
                <div
                  class="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold"
                  :style="{ backgroundColor: item.color }"
                >
                  {{ item.icon }}
                </div>
                <div class="text-sm font-medium text-gray-700">
                  {{ item.label }}
                </div>
              </div>
            </div>
          </template>
        </Swiper>
      </div>
    </section>

    <!-- 커스텀 버튼 스와이퍼 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-gray-700">
        커스텀 네비게이션 버튼
      </h2>
      <div class="h-52 bg-gray-100 rounded-lg overflow-hidden">
        <Swiper
          :items="customItems"
          :slides-per-view="1"
          :space-between="0"
          :show-navigation="true"
          :show-pagination="true"
        >
          <template #default="{ item, index }">
            <div
              class="h-full flex items-center justify-center text-white relative"
              :style="{ backgroundColor: item.bg }"
            >
              <div class="text-center z-10">
                <h3 class="text-3xl font-bold mb-2">{{ item.title }}</h3>
                <p class="text-lg opacity-90">{{ item.subtitle }}</p>
              </div>
              <!-- 배경 패턴 -->
              <div class="absolute inset-0 opacity-10 bg-dots"></div>
            </div>
          </template>

          <!-- 커스텀 이전 버튼 -->
          <template #prev-button>
            <div
              class="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center"
            >
              ‹
            </div>
          </template>

          <!-- 커스텀 다음 버튼 -->
          <template #next-button>
            <div
              class="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center"
            >
              ›
            </div>
          </template>

          <!-- 커스텀 페이지네이션 -->
          <template #pagination-bullet="{ index, isActive }">
            <div
              class="w-3 h-3 rounded-full transition-all duration-300"
              :class="
                isActive ? 'bg-blue-500 scale-125' : 'bg-white bg-opacity-50'
              "
            ></div>
          </template>
        </Swiper>
      </div>
    </section>

    <!-- 현재 슬라이드 정보 -->
    <div class="mt-8 p-4 bg-gray-50 rounded-lg">
      <h3 class="font-semibold mb-2">현재 슬라이드 정보:</h3>
      <p class="text-sm text-gray-600">
        마지막 변경된 슬라이드: {{ lastSlideIndex }}, 시간: {{ lastSlideTime }}
      </p>
    </div>
  </div>
</template>

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

// 루프 아이템 데이터
const loopItems = ref([
  { icon: "🏠", label: "홈", color: "#3B82F6" },
  { icon: "📊", label: "대시보드", color: "#10B981" },
  { icon: "👤", label: "프로필", color: "#F59E0B" },
  { icon: "⚙️", label: "설정", color: "#EF4444" },
  { icon: "📱", label: "앱", color: "#8B5CF6" },
  { icon: "🔔", label: "알림", color: "#06B6D4" },
  { icon: "💬", label: "메시지", color: "#84CC16" },
  { icon: "📈", label: "분석", color: "#F97316" },
]);

// 커스텀 아이템 데이터
const customItems = ref([
  {
    title: "커스텀 UI",
    subtitle: "나만의 디자인으로 꾸며보세요",
    bg: "#1a202c",
  },
  {
    title: "다양한 스타일",
    subtitle: "무궁무진한 커스터마이징 옵션",
    bg: "#2d3748",
  },
  {
    title: "완전한 제어",
    subtitle: "모든 요소를 원하는 대로 변경 가능",
    bg: "#4a5568",
  },
]);
</script>

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
