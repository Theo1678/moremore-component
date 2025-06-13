# Moremore Component Library 배포 가이드 🚀

## 📦 Local Package 배포

### 1. 라이브러리 빌드

```bash
# 프로젝트 루트에서 실행
yarn build:lib
```

이 명령어는 다음 파일들을 `dist/` 폴더에 생성합니다:

- `moremore-component.js` - ES Module 형태
- `moremore-component.umd.cjs` - UMD 형태 (CommonJS 호환)
- `moremore-component.css` - 통합 스타일 파일

### 2. Package 압축 (선택사항)

```bash
# npm pack으로 압축 파일 생성
npm pack

# 생성된 파일: moremore-component-1.0.0.tgz
```

### 3. 다른 프로젝트에서 설치

#### 방법 1: 직접 경로 설치

```bash
# 다른 프로젝트 폴더에서
yarn add file:../moremore-component

# 또는 절대 경로
yarn add file:/path/to/moremore-component
```

#### 방법 2: 압축 파일 설치

```bash
# 압축 파일 복사 후
yarn add file:./moremore-component-1.0.0.tgz
```

## 🛠️ 다른 프로젝트에서 사용법

### Vue 3 프로젝트에서 사용

#### 1. 전체 라이브러리 설치

```javascript
// main.js
import { createApp } from "vue";
import App from "./App.vue";
import MoremoreComponent from "moremore-component";
import "moremore-component/dist/moremore-component.css";

const app = createApp(App);
app.use(MoremoreComponent);
app.mount("#app");
```

#### 2. 개별 컴포넌트 사용

```vue
<script setup>
import {
  AdminCreateCards,
  UserCreateCards,
  TabGroup,
} from "moremore-component";
import "moremore-component/dist/moremore-component.css";

// 데이터 정의
const shops = [
  {
    id: 1,
    title: "테스트 카드",
    badge: "마켓오픈",
    badgeColor: "yellow",
    description: "테스트 설명",
    period: "모집기간: 2025.01.01~2025.01.31",
    image: null,
    participants: [
      { id: 1, name: "테스터1", avatar: null },
      { id: 2, name: "테스터2", avatar: null },
    ],
  },
];

const tabs = [
  { id: "all", label: "전체" },
  { id: "person", label: "인물" },
];

// 이벤트 핸들러
const handleShopClick = (shop) => {
  console.log("Shop clicked:", shop);
};

const handleParticipantClick = (participant) => {
  console.log("Participant clicked:", participant);
};
</script>

<template>
  <div class="p-8">
    <!-- AdminCreateCards 사용 -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4">Admin Cards</h2>
      <AdminCreateCards
        :shops="shops"
        @shop-click="handleShopClick"
        @participant-click="handleParticipantClick"
      />
    </div>

    <!-- UserCreateCards 사용 -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4">User Cards</h2>
      <UserCreateCards
        :shops="shops"
        :itemsPerRow="3"
        @shop-click="handleShopClick"
        @participant-click="handleParticipantClick"
      />
    </div>

    <!-- TabGroup 사용 -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4">Tab Group</h2>
      <TabGroup
        v-model="activeTab"
        :tabs="tabs"
        @tab-change="handleTabChange"
      />
    </div>
  </div>
</template>
```

### Nuxt.js에서 사용

```javascript
// plugins/moremore-component.client.js
import MoremoreComponent from "moremore-component";
import "moremore-component/dist/moremore-component.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(MoremoreComponent);
});
```

## 🔄 업데이트 배포

### 1. 버전 업데이트

```bash
# package.json의 version 수정 후
yarn build:lib
```

### 2. 다른 프로젝트에서 업데이트

```bash
# 캐시 클리어 후 재설치
yarn remove moremore-component
yarn cache clean
yarn add file:../moremore-component
```

## 📋 체크리스트

배포 전 확인 사항:

- [ ] 모든 컴포넌트가 올바르게 export 되었는지 확인
- [ ] `yarn build:lib` 명령어가 오류 없이 실행되는지 확인
- [ ] `dist/` 폴더에 필요한 파일들이 생성되었는지 확인
- [ ] package.json의 main, module, exports 경로가 올바른지 확인
- [ ] 스타일 파일이 올바르게 포함되었는지 확인
- [ ] README.md가 최신 사용법을 반영하는지 확인

## 🐛 문제 해결

### 스타일이 적용되지 않는 경우

```javascript
// CSS 파일을 명시적으로 import
import "moremore-component/dist/moremore-component.css";
```

### Tailwind CSS 충돌 해결

```javascript
// tailwind.config.js에 라이브러리 경로 추가
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts}",
    "./node_modules/moremore-component/**/*.{vue,js,ts}",
  ],
  // ... 기타 설정
};
```

### TypeScript 지원 (향후 지원 예정)

```bash
# TypeScript 정의 파일 생성 (개발 중)
yarn build:types
```

## 📈 NPM 배포 (향후 계획)

```bash
# NPM 레지스트리에 배포 (준비 중)
npm publish

# 설치
yarn add moremore-component
```

## 🔗 관련 링크

- [Vue 3 공식 문서](https://v3.vuejs.org/)
- [Headless UI Vue](https://headlessui.dev/vue/menu)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---

**배포 완료!** 🎉 이제 다른 프로젝트에서 Moremore Component Library를 사용할 수 있습니다.
