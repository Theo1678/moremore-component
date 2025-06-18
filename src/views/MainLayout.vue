<script setup>
import { ref } from "vue";
import CardsSection from "./cards/CardsSection.vue";
import TabsSection from "./tabs/TabsSection.vue";

// 네비게이션 상태 관리
const selectedCategory = ref("cards");
const selectedSubCategory = ref("admin-cards"); // 하위 카테고리 추가
const expandedCategory = ref(null); // 현재 확장된 카테고리
const sidebarOpen = ref(true); // 사이드바 열림/닫힘 상태

// 네비게이션 메뉴 구조 확장
const navigationItems = [
  {
    id: "cards",
    label: "Cards",
    hasSubItems: true,
    subItems: [
      {
        id: "admin-cards",
        label: "AdminCreateCards",
        description: "관리자가 생성한 카드 컴포넌트",
      },
      {
        id: "user-cards",
        label: "UserCreateCards",
        description: "유저가 생성한 카드 컴포넌트",
      },
    ],
  },
  {
    id: "tabs",
    label: "Tabs",
    description: "탭 네비게이션 컴포넌트",
    hasSubItems: false,
  },
];

// 사이드바 토글 함수
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

// 메인 카테고리 클릭 핸들러
const handleCategoryClick = (item) => {
  if (item.hasSubItems) {
    // 드롭다운이 있는 경우 토글
    if (expandedCategory.value === item.id) {
      expandedCategory.value = null;
    } else {
      expandedCategory.value = item.id;
      selectedCategory.value = item.id;

      // 첫 번째 하위 아이템을 기본으로 선택
      if (item.subItems && item.subItems.length > 0) {
        selectedSubCategory.value = item.subItems[0].id;
      }
    }
  } else {
    // 드롭다운이 없는 경우 바로 선택
    selectedCategory.value = item.id;
    selectedSubCategory.value = null;
    expandedCategory.value = null;
  }
};

// 하위 카테고리 클릭 핸들러
const handleSubCategoryClick = (subItem) => {
  selectedSubCategory.value = subItem.id;
};

// 현재 선택된 하위 카테고리가 무엇인지 확인하는 computed
const isSubCategorySelected = (categoryId, subCategoryId) => {
  return (
    selectedCategory.value === categoryId &&
    selectedSubCategory.value === subCategoryId
  );
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- 좌측 사이드바 네비게이션 (모든 화면 크기에서 고정) -->
    <aside
      :class="[
        'bg-white shadow-lg border-r border-gray-200 flex-shrink-0 transition-all duration-300 ease-in-out min-w-20',
        sidebarOpen ? 'w-64' : 'w-16',
      ]"
    >
      <!-- 헤더 영역 -->
      <div class="border-b border-gray-200">
        <div class="m-6 flex items-center justify-between">
          <!-- 로고/타이틀 영역 -->
          <div
            :class="[
              'transition-opacity duration-300',
              sidebarOpen ? 'opacity-100' : 'opacity-0',
            ]"
          >
            <div v-if="sidebarOpen" class="block">
              <h1 class="text-xl font-bold text-gray-900">
                Vue 3 + Headless UI + Tailwind CSS
              </h1>
            </div>
          </div>

          <!-- 토글 버튼 -->
          <button
            @click="toggleSidebar"
            class="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg
              class="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="sidebarOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- 네비게이션 메뉴 (펼쳐진 상태에서만 표시) -->
      <nav v-if="sidebarOpen" class="p-4 space-y-2 overflow-hidden">
        <div v-for="item in navigationItems" :key="item.id" class="space-y-1">
          <!-- 메인 카테고리 -->
          <div
            @click="handleCategoryClick(item)"
            :class="[
              'flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 group',
              selectedCategory === item.id
                ? 'bg-blue-50 border-2 border-blue-200 text-blue-700'
                : 'bg-gray-50 border-2 border-transparent text-gray-700 hover:bg-gray-100 hover:border-gray-200',
            ]"
          >
            <!-- 아이콘 영역 -->
            <span class="text-sm font-semibold text-gray-600 flex-shrink-0">
              {{ item.label.charAt(0) }}
            </span>

            <!-- 텍스트 영역 -->
            <div class="flex-1 min-w-0 ml-3">
              <div class="font-semibold truncate">{{ item.label }}</div>
              <div class="text-xs text-gray-500 truncate">
                {{ item.description }}
              </div>
            </div>

            <!-- 드롭다운 화살표 -->
            <div v-if="item.hasSubItems" class="ml-2 flex-shrink-0">
              <svg
                :class="[
                  'w-4 h-4 transition-transform duration-200',
                  expandedCategory === item.id ? 'rotate-180' : '',
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <!-- 하위 카테고리 드롭다운 -->
          <div
            v-if="item.hasSubItems && expandedCategory === item.id"
            class="ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200"
          >
            <div
              v-for="subItem in item.subItems"
              :key="subItem.id"
              @click="handleSubCategoryClick(subItem)"
              :class="[
                'flex items-center p-2 rounded-md cursor-pointer transition-all duration-150 group',
                isSubCategorySelected(item.id, subItem.id)
                  ? 'bg-blue-100 border border-blue-300 text-blue-800'
                  : 'bg-gray-100 border border-transparent text-gray-600 hover:bg-gray-200 hover:border-gray-300',
              ]"
            >
              <!-- 하위 아이콘 -->
              <div
                class="flex-shrink-0 w-6 h-6 rounded bg-gray-300 flex items-center justify-center mr-2"
              >
                <span class="text-xs font-medium text-gray-600">
                  {{ subItem.label.charAt(0) }}
                </span>
              </div>

              <!-- 하위 텍스트 -->
              <div class="flex-1 min-w-0">
                <div class="text-sm font-medium truncate">
                  {{ subItem.label }}
                </div>
                <div class="text-xs text-gray-500 truncate">
                  {{ subItem.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </aside>

    <!-- 메인 콘텐츠 영역 -->
    <main class="flex-1 flex flex-col min-w-0 flex items-center">
      <!-- 콘텐츠 영역 -->
      <div class="flex-1 p-8 max-w-[1200px] w-full">
        <!-- Cards 섹션 -->
        <CardsSection
          v-if="selectedCategory === 'cards'"
          :selectedSubCategory="selectedSubCategory"
        />

        <!-- Tabs 섹션 -->
        <TabsSection v-if="selectedCategory === 'tabs'" />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* 애니메이션 클래스 */
@keyframes slide-in-from-top {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: slide-in-from-top 0.2s ease-out;
}

.slide-in-from-top-2 {
  /* Tailwind CSS 스타일과 호환성을 위한 클래스 */
}

/* 사이드바 트랜지션 */
aside {
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
}

aside {
  position: relative;
  height: auto;
}

/* 스크롤바 커스터마이징 */
nav {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e0 transparent;
}

nav::-webkit-scrollbar {
  width: 4px;
}

nav::-webkit-scrollbar-track {
  background: transparent;
}

nav::-webkit-scrollbar-thumb {
  background-color: #cbd5e0;
  border-radius: 2px;
}

nav::-webkit-scrollbar-thumb:hover {
  background-color: #a0aec0;
}
</style>
