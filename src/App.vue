<script setup>
import { ref } from "vue";
import AdminCreateCards from "./components/AdminCreateCards.vue";
import UserCreateCards from "./components/UserCreateCards.vue";
import TabGroup from "./components/TabGroup.vue";

// 상세 카드용 데이터
const detailShop = [
  {
    id: 1,
    title: "여름이었다 콜라보방은 두줄까지만보이게해.",
    badge: "마켓종료",
    badgeColor: "gray",
    description:
      "일본 고등학생의 여름방학 같은 분위기로 콜라보 썸머팩을 준비할 예정입니다 그렇습니다.",
    period: "모집기간: 2025.06.11~2025.07.01",
    image: null,
    participants: [
      {
        id: 1,
        name: "나초",
        avatar: null,
      },
      {
        id: 2,
        name: "치즈",
        avatar: null,
      },
      {
        id: 3,
        name: "글로리아 테스트",
        avatar: null,
      },
      {
        id: 4,
        name: "루비 테스트 테스트",
        avatar: null,
      },
    ],
  },
  {
    id: 2,
    title: "가을 컬렉션 특별전",
    badge: "마켓오픈",
    badgeColor: "yellow",
    description:
      "일본 고등학생의 여름방학 같은 분위기로 콜라보 썸머팩을 준비할 예정입니다 그렇습니다.",
    period: "모집기간:2025.07.01~2025.07.31",
    image: null,
    participants: [
      {
        id: 1,
        name: "나초",
        avatar: null,
      },
      {
        id: 2,
        name: "치즈",
        avatar: null,
      },
    ],
  },
  {
    id: 3,
    title: "겨울 한정 컬렉션",
    badge: "마켓준비중",
    badgeColor: "gray",
    description: "썸머팩을 준비할 예정입니다",
    period: "모집기간: 2025.12.01~2025.12.31",
    image: null,
    participants: [
      {
        id: 1,
        name: "나초",
        avatar: null,
      },
      {
        id: 2,
        name: "치즈",
        avatar: null,
      },
    ],
  },
  {
    id: 4,
    title: "봄 신상 컬렉션",
    badge: "마켓오픈",
    badgeColor: "yellow",
    description: "예정입니다",
    period: "모집기간: 2025.03.01~2025.03.31",
    image: "https://via.placeholder.com/280x200/f0f8ff/4a90e2?text=6월통판",
    participants: [
      {
        id: 1,
        name: "나초",
        avatar: null,
      },
      {
        id: 2,
        name: "치즈",
        avatar: null,
      },
    ],
  },
  {
    id: 5,
    title: "여름 시즌 특가",
    badge: "마켓종료",
    badgeColor: "gray",
    description:
      "일본 고등학생의 여름방학 같은 분위기로 콜라보 썸머팩을 준비할 예정입니다",
    period: "모집기간: 2025.06.01~2025.06.30",
    image: "https://via.placeholder.com/280x200/f0f8ff/4a90e2?text=6월통판",
    participants: [
      {
        id: 1,
        name: "나초",
        avatar: null,
      },
      {
        id: 2,
        name: "치즈",
        avatar: null,
      },
    ],
  },
];

// 탭 데이터
const tabs = [
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
];

// 카드 그리드용 데이터
const cardGridShops = [
  {
    id: 1,
    title: "서랍배 v.20 스팸프투어 하심 분",
    description:
      "귀여운 그림체에 정말 작업 하시는 분, 다구 스티커, 파티콘이나 대표 가능, 부드러운 색감 쓰시는 분 구해요",
    badge: "모집중",
    badgeColor: "blue",
    period: "모집기간: 2025.06.11~2025.07.01",
    hashtags: "#가을 #시원함 #가을맘 #스팸프투어 #리얼 #파티콘 #스토리 #부들",
    image: "https://via.placeholder.com/280x200/f0f8ff/4a90e2?text=6월통판",
    participants: [
      { id: 1, name: "하찌네(방장)", avatar: null },
      { id: 2, name: "잠여자 (5/10)", avatar: null },
    ],
  },
  {
    id: 2,
    title: "서랍배 v.20 스팸프투어 하심 분",
    description:
      "귀여운 그림체에 정말 작업 하시는 분, 다구 스티커, 파티콘이나 대표 가능, 부드러운 색감 쓰시는 분 구해요",
    badge: "모집마감",
    badgeColor: "gray",
    period: "모집기간: 2025.06.11~2025.07.01",
    hashtags: "#가을 #시원함 #가을맘 #스팸프투어 #리얼 #파티콘 #스토리 #부들",
    image: "https://via.placeholder.com/280x200/f0f8ff/4a90e2?text=6월통판",
    participants: [
      { id: 1, name: "하찌네(방장)", avatar: null },
      { id: 2, name: "잠여자 (1/10)", avatar: null },
    ],
  },
  {
    id: 3,
    title: "서랍배 v.20 스팸프투어 하심 분",
    description:
      "귀여운 그림체에 정말 작업 하시는 분, 다구 스티커, 파티콘이나 대표 가능, 부드러운 색감 쓰시는 분 구해요",
    badge: "마켓오픈",
    badgeColor: "yellow",
    period: "모집기간: 2025.06.11~2025.07.01",
    hashtags: "#가을 #시원함 #가을맘 #스팸프투어 #리얼 #파티콘 #스토리 #부들",
    image: "https://via.placeholder.com/280x200/f0f8ff/4a90e2?text=6월통판",
    participants: [
      { id: 1, name: "하찌네(방장)", avatar: null },
      { id: 2, name: "잠여자 (9/10)", avatar: null },
    ],
  },
  {
    id: 4,
    title: "서랍배 v.20 스팸프투어 하심 분",
    description:
      "귀여운 그림체에 정말 작업 하시는 분, 다구 스티커, 파티콘이나 대표 가능, 부드러운 색감 쓰시는 분 구해요",
    badge: "마켓오픈",
    badgeColor: "yellow",
    period: "모집기간: 2025.06.11~2025.07.01",
    hashtags: "#가을 #시원함 #가을맘 #스팸프투어 #리얼 #파티콘 #스토리 #부들",
    image: "https://via.placeholder.com/280x200/f0f8ff/4a90e2?text=6월통판",
    participants: [
      { id: 1, name: "하찌네(방장)", avatar: null },
      { id: 2, name: "잠여자 (3/10)", avatar: null },
    ],
  },
  {
    id: 5,
    title: "여름 시즌 특가",
    description:
      "시원한 여름을 위한 특별한 콜라보레이션입니다. 다양한 작가들과 함께해요!",
    badge: "모집중",
    badgeColor: "blue",
    period: "모집기간: 2025.06.01~2025.06.30",
    hashtags: "#여름 #시원함 #콜라보 #특가 #이벤트",
    image: null,
    participants: [
      { id: 1, name: "여름작가", avatar: null },
      { id: 2, name: "시원한작가", avatar: null },
    ],
  },
  {
    id: 6,
    title: "추석 한정 이벤트",
    description:
      "추석을 맞이하여 특별한 한정 이벤트를 진행합니다. 많은 참여 부탁드려요!",
    badge: "마켓오픈",
    badgeColor: "yellow",
    period: "모집기간: 2025.09.01~2025.09.30",
    hashtags: "#추석 #한정 #이벤트 #특별",
    image: null,
    participants: [
      { id: 1, name: "추석작가", avatar: null },
      { id: 2, name: "이벤트작가", avatar: null },
    ],
  },
  {
    id: 7,
    title: "겨울 컬렉션 준비",
    description:
      "따뜻한 겨울을 위한 컬렉션을 준비하고 있습니다. 함께 만들어가요!",
    badge: "모집마감",
    badgeColor: "gray",
    period: "모집기간: 2025.11.01~2025.11.30",
    hashtags: "#겨울 #따뜻함 #컬렉션 #준비",
    image: null,
    participants: [
      { id: 1, name: "겨울작가", avatar: null },
      { id: 2, name: "따뜻한작가", avatar: null },
    ],
  },
  {
    id: 8,
    title: "봄맞이 신상품",
    description: "새로운 봄을 맞이하여 신상품을 준비했습니다. 기대해주세요!",
    badge: "모집중",
    badgeColor: "blue",
    period: "모집기간: 2025.03.01~2025.03.31",
    hashtags: "#봄 #신상품 #새로움 #기대",
    image: null,
    participants: [
      { id: 1, name: "봄작가", avatar: null },
      { id: 2, name: "신상작가", avatar: null },
    ],
  },
];

const activeTab = ref("all");

// 이벤트 핸들러
const handleShopClick = (shop) => {
  console.log("Shop clicked:", shop);
  alert(`${shop.title} 클릭됨!`);
};

const handleTabChange = (tab) => {
  console.log("Tab changed:", tab);
  alert(`${tab.label} 탭 선택됨!`);
};

const handleParticipantClick = (participant) => {
  console.log("Participant clicked:", participant);
  alert(`${participant.name} 작가 클릭됨!`);
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mt-4">
          Moremore Component
        </h1>
        <p class="text-gray-600 mt-2">Vue 3 + Headless UI + Tailwind CSS</p>
      </div>

      <!-- AdminCreateCards 컴포넌트 테스트 -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 class="text-xl font-bold mb-4">AdminCreateCards 컴포넌트</h2>

        <AdminCreateCards
          :shops="detailShop"
          @shop-click="handleShopClick"
          @participant-click="handleParticipantClick"
        />
      </div>
      <!-- TabGroup 컴포넌트 테스트 -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 class="text-xl font-bold mb-4">TabGroup 컴포넌트</h2>

        <TabGroup
          v-model="activeTab"
          :tabs="tabs"
          @tab-change="handleTabChange"
        />

        <div class="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 class="font-bold mb-2">선택된 탭:</h3>
          <pre class="text-sm text-gray-700">{{ activeTab }}</pre>
        </div>
      </div>

      <!-- UserCreateCards 컴포넌트 테스트 -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 class="text-xl font-bold mb-4">
          UserCreateCards 컴포넌트 (Headless UI 모달 포함)
        </h2>

        <UserCreateCards
          :shops="cardGridShops"
          @shop-click="handleShopClick"
          @participant-click="handleParticipantClick"
        />
      </div>

      <!-- 사용법 안내 -->
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-bold mb-4">사용법</h2>
        <div class="prose prose-sm max-w-none">
          <h3>설치</h3>
          <p class="bg-gray-100 p-3 rounded text-sm">
            <code>yarn build:lib yarn add file:../moremore-component</code>
          </p>

          <h3>사용</h3>
          <p class="bg-gray-100 p-3 rounded text-sm">
            <code
              >import { ShopListbox, ShopGallery, AdminCreateCards,
              UserCreateCards, TabGroup } from 'moremore-component' import
              'moremore-component/style.css'</code
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 3em;
  padding: 1em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
