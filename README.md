# Moremore Component

Vue 3 + Headless UI + Tailwind CSS로 구현된 컴포넌트 라이브러리입니다.

## 설치

```bash
# 로컬 패키지로 설치
yarn build:lib
yarn add file:../moremore-component

# 또는 npm
npm run build:lib
npm install file:../moremore-component
```

## 사용법

```javascript
import {
  ShopListbox,
  ShopGallery,
  ShopDetailCard,
  ShopCardGrid,
  TabGroup,
} from "moremore-component";
import "moremore-component/style.css";

// Vue 앱에서 사용
app.use(MoremoreComponent);

// 또는 개별 컴포넌트 등록
app.component("ShopListbox", ShopListbox);
app.component("ShopGallery", ShopGallery);
app.component("ShopDetailCard", ShopDetailCard);
app.component("ShopCardGrid", ShopCardGrid);
app.component("TabGroup", TabGroup);
```

## 컴포넌트

### ShopListbox

Shop을 선택할 수 있는 드롭다운 리스트박스 컴포넌트입니다.

#### Props

- `shops` (Array): Shop 목록 데이터
- `modelValue` (Object): 선택된 Shop (v-model 지원)
- `label` (String): 라벨 텍스트 (기본값: "Shop 선택")
- `placeholder` (String): 플레이스홀더 텍스트 (기본값: "Shop을 선택해주세요")

#### Events

- `update:modelValue`: 선택된 값이 변경될 때 발생

#### 사용 예시

```vue
<template>
  <ShopListbox
    v-model="selectedShop"
    :shops="shops"
    label="Shop 선택하기"
    placeholder="원하는 Shop을 선택해주세요"
  />
</template>

<script setup>
import { ref } from "vue";
import { ShopListbox } from "moremore-component";

const selectedShop = ref(null);
const shops = [
  {
    id: 1,
    title: "여름이었당께",
    badge: "마켓종료",
    badgeColor: "gray",
    period: "마켓기간: 2025.06.11~2025.07.01",
    image: null,
  },
  // ... 더 많은 shop 데이터
];
</script>
```

### ShopGallery

Shop들을 그리드 형태로 표시하는 갤러리 컴포넌트입니다.

#### Props

- `title` (String): 갤러리 제목 (기본값: "모아모아 합동 콜라보 마켓")
- `shops` (Array): Shop 목록 데이터
- `showMoreButton` (Boolean): 더보기 버튼 표시 여부 (기본값: true)
- `moreButtonText` (String): 더보기 버튼 텍스트 (기본값: "더보기")
- `itemsPerRow` (Number): 한 줄에 표시할 아이템 수 (기본값: 3)
- `maxItems` (Number): 최대 표시 아이템 수 (기본값: 6)

#### Events

- `shop-click`: Shop 카드 클릭 시 발생 (클릭된 shop 객체 전달)
- `more-click`: 더보기 버튼 클릭 시 발생

#### 사용 예시

```vue
<template>
  <ShopGallery
    :shops="shops"
    title="모아모아 합동 콜라보 마켓"
    :show-more-button="true"
    more-button-text="더보기"
    @shop-click="handleShopClick"
    @more-click="handleMoreClick"
  />
</template>

<script setup>
import { ShopGallery } from "moremore-component";

const shops = [
  // ... shop 데이터
];

const handleShopClick = (shop) => {
  console.log("Shop clicked:", shop);
};

const handleMoreClick = () => {
  console.log("More button clicked");
};
</script>
```

### ShopDetailCard

Shop의 상세 정보를 카드 형태로 표시하는 컴포넌트입니다.

#### Props

- `shop` (Object): Shop 상세 데이터 (participants 포함)

#### Events

- `shop-click`: Shop 카드 클릭 시 발생 (shop 객체 전달)
- `participant-click`: 참여작가 클릭 시 발생 (participant 객체 전달)

#### 사용 예시

```vue
<template>
  <ShopDetailCard
    :shop="detailShop"
    @shop-click="handleShopClick"
    @participant-click="handleParticipantClick"
  />
</template>

<script setup>
import { ShopDetailCard } from "moremore-component";

const detailShop = {
  id: 1,
  title: "아 너무 열심히 걸음",
  badge: "마켓종료",
  badgeColor: "gray",
  period: "마켓기간: 2025.06.11~2025.07.01",
  image: null,
  participants: [
    { id: 1, name: "나초", avatar: null },
    { id: 2, name: "치즈", avatar: null },
  ],
};

const handleShopClick = (shop) => {
  console.log("Shop clicked:", shop);
};

const handleParticipantClick = (participant) => {
  console.log("Participant clicked:", participant);
};
</script>
```

### ShopCardGrid

Shop들을 카드 그리드 형태로 표시하는 컴포넌트입니다. Headless UI 모달을 사용하여 상세 정보를 표시합니다.

#### Props

- `shops` (Array): Shop 목록 데이터
- `itemsPerRow` (Number): 한 줄에 표시할 아이템 수 (기본값: 3)
- `maxItems` (Number): 최대 표시 아이템 수 (기본값: 6)

#### Events

- `shop-click`: Shop 카드 클릭 시 발생 (shop 객체 전달, 모달도 자동으로 열림)
- `participant-click`: 참여작가 클릭 시 발생 (participant 객체 전달)

#### 사용 예시

```vue
<template>
  <ShopCardGrid
    :shops="cardGridShops"
    @shop-click="handleShopClick"
    @participant-click="handleParticipantClick"
  />
</template>

<script setup>
import { ShopCardGrid } from "moremore-component";

const cardGridShops = [
  {
    id: 1,
    title: "여름이었당께",
    subtitle: "부제목 (선택사항)",
    badge: "마켓오픈",
    badgeColor: "yellow",
    period: "마켓기간: 2025.06.11~2025.07.01",
    image: "https://example.com/image.jpg",
    participants: [
      { id: 1, name: "하찌네(방장)", avatar: null },
      { id: 2, name: "대나무너는너무나대", avatar: null },
    ],
  },
  // ... 더 많은 shop 데이터
];

const handleShopClick = (shop) => {
  console.log("Shop clicked:", shop);
};

const handleParticipantClick = (participant) => {
  console.log("Participant clicked:", participant);
};
</script>
```

### TabGroup

탭 형태의 네비게이션 컴포넌트입니다.

#### Props

- `tabs` (Array): 탭 목록 데이터 (기본값: 전체, 인물, 동물 등)
- `modelValue` (String|Number): 선택된 탭 ID (v-model 지원)
- `variant` (String): 탭 스타일 변형 (기본값: "default")

#### Events

- `update:modelValue`: 선택된 탭이 변경될 때 발생
- `tab-change`: 탭 클릭 시 발생 (클릭된 tab 객체 전달)

#### 사용 예시

```vue
<template>
  <TabGroup v-model="activeTab" :tabs="tabs" @tab-change="handleTabChange" />
</template>

<script setup>
import { ref } from "vue";
import { TabGroup } from "moremore-component";

const activeTab = ref("all");
const tabs = [
  { id: "all", label: "전체" },
  { id: "person", label: "인물" },
  { id: "animal", label: "동물" },
  { id: "object", label: "사물" },
  // ... 더 많은 탭 데이터
];

const handleTabChange = (tab) => {
  console.log("Tab changed:", tab);
};
</script>
```

## 데이터 구조

### Shop 데이터 구조

```javascript
{
  id: 1,                              // 고유 ID
  title: "여름이었당께",               // Shop 제목
  badge: "마켓종료",                   // 배지 텍스트
  badgeColor: "gray",                 // 배지 색상 ("gray" | "yellow")
  period: "마켓기간: 2025.06.11~2025.07.01", // 기간 정보
  image: "https://example.com/image.jpg" // 이미지 URL (null이면 기본 아이콘 표시)
}
```

### ShopDetailCard 데이터 구조

```javascript
{
  id: 1,
  title: "아 너무 열심히 걸음",
  badge: "마켓종료",
  badgeColor: "gray",
  period: "마켓기간: 2025.06.11~2025.07.01",
  image: null,
  participants: [                     // 참여작가 배열
    {
      id: 1,
      name: "나초",                   // 작가 이름
      avatar: null                    // 작가 아바타 URL (null이면 기본 아이콘)
    }
  ]
}
```

### ShopCardGrid 데이터 구조

```javascript
{
  id: 1,
  title: "여름이었당께",
  subtitle: "부제목 (선택사항)",        // 2줄까지 표시, 말줄임표 처리
  badge: "마켓오픈",
  badgeColor: "yellow",
  period: "마켓기간: 2025.06.11~2025.07.01",
  image: "https://example.com/image.jpg", // 4:3 비율 이미지
  participants: [                     // 참여작가 배열 (최대 4개까지 표시, 나머지는 +N)
    {
      id: 1,
      name: "하찌네(방장)",
      avatar: null
    }
  ]
}
```

### Tab 데이터 구조

```javascript
{
  id: "all",        // 고유 ID (String 또는 Number)
  label: "전체"     // 탭에 표시될 텍스트
}
```

## 개발

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev

# 라이브러리 빌드
yarn build:lib

# 프로덕션 빌드
yarn build
```

## 기술 스택

- Vue 3
- Headless UI
- Tailwind CSS
- Vite

## 개발

```bash
# 개발 서버 실행
yarn dev

# 라이브러리 빌드
yarn build:lib

# 일반 빌드
yarn build
```

## 의존성

- Vue 3.0+
- @headlessui/vue 1.7+
- Tailwind CSS (스타일링)

## 라이선스

MIT
