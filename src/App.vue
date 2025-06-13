<script setup>
import { ref } from "vue";
import ShopListbox from "./components/ShopListbox.vue";
import ShopGallery from "./components/ShopGallery.vue";

// Shop List 데이터
const shops = [
  {
    id: 1,
    title: "여름이었당께",
    badge: "마켓종료",
    badgeColor: "gray",
    period: "마켓기간: 2025.06.11~2025.07.01",
    image: null, // 이미지가 없는 경우
  },
  {
    id: 2,
    title: "가을 컬렉션 특별전",
    badge: "마켓오픈",
    badgeColor: "yellow",
    period: "마켓기간: 2025.07.01~2025.07.31",
    image: "https://via.placeholder.com/98x98/f9f9f9/666?text=Shop2",
  },
  {
    id: 3,
    title: "겨울 한정 컬렉션",
    badge: "마켓준비중",
    badgeColor: "gray",
    period: "마켓기간: 2025.12.01~2025.12.31",
    image: "https://via.placeholder.com/98x98/e0e0e0/999?text=Shop3",
  },
];

// 갤러리용 더 많은 데이터
const galleryShops = [
  ...shops,
  {
    id: 4,
    title: "봄 신상 컬렉션",
    badge: "마켓오픈",
    badgeColor: "yellow",
    period: "마켓기간: 2025.03.01~2025.03.31",
    image: "https://via.placeholder.com/98x98/f0f0f0/777?text=Shop4",
  },
  {
    id: 5,
    title: "여름 시즌 특가",
    badge: "마켓종료",
    badgeColor: "gray",
    period: "마켓기간: 2025.06.01~2025.06.30",
    image: null,
  },
  {
    id: 6,
    title: "추석 한정 이벤트",
    badge: "마켓오픈",
    badgeColor: "yellow",
    period: "마켓기간: 2025.09.01~2025.09.30",
    image: "https://via.placeholder.com/98x98/f5f5f5/888?text=Shop6",
  },
];

const selectedShop = ref(shops[0]);

// 이벤트 핸들러
const handleShopClick = (shop) => {
  console.log("Shop clicked:", shop);
  alert(`${shop.title} 클릭됨!`);
};

const handleMoreClick = () => {
  console.log("More button clicked");
  alert("더보기 버튼 클릭됨!");
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
        <h1 class="text-3xl font-bold text-gray-900 mt-4">
          Moremore Component
        </h1>
        <p class="text-gray-600 mt-2">Vue 3 + Headless UI + Tailwind CSS</p>
      </div>

      <!-- ShopGallery 컴포넌트 테스트 -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 class="text-xl font-bold mb-4">ShopGallery 컴포넌트</h2>

        <ShopGallery
          :shops="galleryShops"
          title="모아모아 합동 콜라보 마켓"
          :show-more-button="true"
          more-button-text="더보기"
          @shop-click="handleShopClick"
          @more-click="handleMoreClick"
        />
      </div>

      <!-- ShopListbox 컴포넌트 테스트 -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 class="text-xl font-bold mb-4">ShopListbox 컴포넌트</h2>

        <div class="max-w-md">
          <ShopListbox
            v-model="selectedShop"
            :shops="shops"
            label="Shop 선택하기"
            placeholder="원하는 Shop을 선택해주세요"
          />
        </div>

        <div class="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 class="font-bold mb-2">선택된 Shop:</h3>
          <pre class="text-sm text-gray-700 whitespace-pre-wrap">{{
            JSON.stringify(selectedShop, null, 2)
          }}</pre>
        </div>
      </div>

      <!-- 사용법 안내 -->
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-bold mb-4">사용법</h2>
        <div class="prose prose-sm max-w-none">
          <h3>설치</h3>
          <pre class="bg-gray-100 p-3 rounded text-sm"><code>yarn build:lib
yarn add file:../moremore-component</code></pre>

          <h3>사용</h3>
          <pre
            class="bg-gray-100 p-3 rounded text-sm"
          ><code>import { ShopListbox, ShopGallery } from 'moremore-component'
import 'moremore-component/style.css'</code></pre>
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
