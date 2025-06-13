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
import { ShopListbox, ShopGallery } from "moremore-component";
import "moremore-component/style.css";

// Vue 앱에서 사용
app.use(MoremoreComponent);

// 또는 개별 컴포넌트 등록
app.component("ShopListbox", ShopListbox);
app.component("ShopGallery", ShopGallery);
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

## Shop 데이터 구조

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
