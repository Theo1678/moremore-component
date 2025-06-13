# Moremore Component Library 📦

Vue 3 + Headless UI + Tailwind CSS로 구축된 재사용 가능한 컴포넌트 라이브러리입니다.

## 🚀 특징

- **Vue 3 Composition API** 기반
- **Headless UI** 통합으로 접근성 최적화
- **Tailwind CSS** 스타일링
- **TypeScript** 지원 준비
- **반응형 디자인** 지원
- **다크 모드** 지원

## 📦 설치

### Local Package로 설치

```bash
# 라이브러리 빌드
yarn build:lib

# 다른 프로젝트에서 설치
yarn add file:../moremore-component
```

### NPM 패키지로 설치 (준비 중)

```bash
yarn add moremore-component
# or
npm install moremore-component
```

## 🛠️ 사용법

### 1. 전체 라이브러리 설치

```javascript
// main.js
import { createApp } from "vue";
import App from "./App.vue";
import MoremoreComponent from "moremore-component";
import "moremore-component/style.css";

const app = createApp(App);
app.use(MoremoreComponent);
app.mount("#app");
```

### 2. 개별 컴포넌트 import

```vue
<script setup>
import {
  AdminCreateCards,
  UserCreateCards,
  TabGroup,
} from "moremore-component";
import "moremore-component/style.css";

// 컴포넌트 사용
</script>
```

### 3. 프리픽스와 함께 사용

```javascript
// main.js
import MoremoreComponent from "moremore-component";

app.use(MoremoreComponent, {
  prefix: "Mm", // MmAdminCreateCards, MmUserCreateCards 등으로 등록됨
});
```

## 📋 컴포넌트

### AdminCreateCards

관리자용 카드 컴포넌트 - 높이 자동 맞춤 및 스크롤 네비게이션 지원

```vue
<template>
  <AdminCreateCards
    :shops="adminData"
    @shop-click="handleShopClick"
    @participant-click="handleParticipantClick"
  />
</template>

<script setup>
const adminData = [
  {
    id: 1,
    title: "카드 제목",
    badge: "마켓오픈",
    badgeColor: "yellow",
    description: "카드 설명",
    period: "모집기간: 2025.01.01~2025.01.31",
    image: "https://example.com/image.jpg",
    participants: [
      { id: 1, name: "참여자1", avatar: null },
      { id: 2, name: "참여자2", avatar: null },
    ],
  },
];

const handleShopClick = (shop) => {
  console.log("Shop clicked:", shop);
};

const handleParticipantClick = (participant) => {
  console.log("Participant clicked:", participant);
};
</script>
```

#### Props

| Prop    | Type  | Default | Description      |
| ------- | ----- | ------- | ---------------- |
| `shops` | Array | `[]`    | 카드 데이터 배열 |

#### Events

| Event                | Payload            | Description           |
| -------------------- | ------------------ | --------------------- |
| `@shop-click`        | shop object        | 카드 클릭 시 발생     |
| `@participant-click` | participant object | 참여작가 클릭 시 발생 |

### UserCreateCards

사용자용 카드 컴포넌트 - Headless UI 모달 포함 및 동적 그리드 지원

```vue
<template>
  <UserCreateCards
    :shops="userData"
    :itemsPerRow="4"
    @shop-click="handleShopClick"
    @participant-click="handleParticipantClick"
  />
</template>
```

#### Props

| Prop          | Type   | Default | Description                  |
| ------------- | ------ | ------- | ---------------------------- |
| `shops`       | Array  | `[]`    | 카드 데이터 배열             |
| `itemsPerRow` | Number | `4`     | 한 행에 표시할 카드 수 (1-6) |

#### Events

| Event                | Payload            | Description           |
| -------------------- | ------------------ | --------------------- |
| `@shop-click`        | shop object        | 카드 클릭 시 발생     |
| `@participant-click` | participant object | 참여작가 클릭 시 발생 |

### TabGroup

반응형 탭 네비게이션 - 자동 줄바꿈 및 v-model 지원

```vue
<template>
  <TabGroup
    v-model="activeTab"
    :tabs="tabsData"
    @tab-change="handleTabChange"
  />
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("all");
const tabsData = [
  { id: "all", label: "전체" },
  { id: "person", label: "인물" },
  { id: "animal", label: "동물" },
];

const handleTabChange = (tab) => {
  console.log("Tab changed:", tab);
};
</script>
```

#### Props

| Prop         | Type   | Default | Description                          |
| ------------ | ------ | ------- | ------------------------------------ |
| `tabs`       | Array  | `[]`    | 탭 데이터 배열                       |
| `modelValue` | String | `''`    | v-model로 바인딩할 현재 선택된 탭 ID |

#### Events

| Event                | Payload    | Description              |
| -------------------- | ---------- | ------------------------ |
| `@tab-change`        | tab object | 탭 변경 시 발생          |
| `@update:modelValue` | tab id     | v-model 업데이트 시 발생 |

## 🎨 스타일링

### CSS 변수 커스터마이징

```css
:root {
  --moremore-primary: #3b82f6;
  --moremore-primary-dark: #1d4ed8;
  --moremore-secondary: #6b7280;
  --moremore-success: #10b981;
  --moremore-warning: #f59e0b;
  --moremore-error: #ef4444;
  --moremore-surface: #ffffff;
  --moremore-background: #f9fafb;
  --moremore-border: #e5e7eb;
}
```

### Tailwind CSS 통합

이 라이브러리는 Tailwind CSS를 사용합니다. 프로젝트에서 Tailwind CSS가 설정되어 있다면 더 나은 통합을 위해 다음 설정을 추가하세요:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts}",
    "./node_modules/moremore-component/**/*.{vue,js,ts}",
  ],
  // ... 기타 설정
};
```

## 🔧 개발

### 개발 환경 실행

```bash
yarn install
yarn dev
```

### 라이브러리 빌드

```bash
yarn build:lib
```

### 프리뷰

```bash
yarn preview
```

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── Cards/
│   │   ├── AdminCreateCards.vue
│   │   └── UserCreateCards.vue
│   └── Tabs/
│       └── TabGroup.vue
├── views/
│   ├── MainLayout.vue
│   ├── cards/
│   │   ├── CardsSection.vue
│   │   └── cardsData.js
│   └── tabs/
│       ├── TabsSection.vue
│       └── tabsData.js
├── index.js         # 라이브러리 진입점
└── style.css        # 통합 스타일
```

## 📄 라이선스

MIT License

## 🤝 기여

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 지원

문제가 있거나 기능 요청이 있으시면 이슈를 생성해 주세요.

---

**Moremore Component Library** - Vue 3 생태계를 위한 현대적이고 접근 가능한 컴포넌트 라이브러리 ✨
