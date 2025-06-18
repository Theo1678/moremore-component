# Moremore Component Library 배포 가이드 🚀

Vue 3 + Tailwind CSS 기반의 Moremore Component Library 배포 및 사용 가이드입니다.

## 📦 프로젝트 정보

- **패키지명**: `moremore-component`
- **버전**: `1.0.0`
- **빌드 도구**: Vite
- **프레임워크**: Vue 3
- **스타일**: Tailwind CSS (완전 컴파일)
- **빌드 위치**: `lib/` 디렉토리

## 🔨 빌드 과정

### 1. 개발 환경 설정

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev
```

### 2. 빌드 유형별 설명

#### A. 라이브러리 빌드 (외부 배포용)

```bash
# 라이브러리 전용 빌드 - 외부 프로젝트에서 사용할 패키지
yarn build:lib
```

빌드 완료 후 `lib/` 디렉토리에 다음 파일들이 생성됩니다:

```
lib/
├── moremore-component.js      # ES Module (18KB)
├── moremore-component.umd.cjs # UMD/CommonJS (15KB)
└── moremore-component.css     # 통합 CSS (90KB)
```

**용도**: 다른 프로젝트에서 `yarn add file:../moremore-component`로 설치할 때 사용

#### B. 데모 사이트 빌드 (Firebase Hosting용)

```bash
# 데모 사이트 빌드 - Firebase Hosting 배포용
yarn build
```

빌드 완료 후 `dist/` 디렉토리에 다음 파일들이 생성됩니다:

```
dist/
├── index.html                 # 메인 HTML
├── assets/
│   ├── index-[hash].js       # 번들된 JavaScript
│   └── index-[hash].css      # 번들된 CSS
└── vite.svg                  # 정적 파일들
```

**용도**: Firebase Hosting으로 데모 사이트 배포 시 사용

#### C. 전체 빌드 (라이브러리 + 데모)

```bash
# 라이브러리와 데모 사이트 모두 빌드
yarn build:all
```

이 명령어는 `yarn build && yarn build:lib`와 동일하며, 두 빌드를 순차적으로 실행합니다.

### 3. 빌드 결과 확인

```bash
# 빌드된 파일들 확인
ls -la lib/

# 파일 크기 확인
du -h lib/*
```

## 🚀 배포 방법

### 1. 라이브러리 패키지 배포

개발 중이거나 npm 배포 전 테스트할 때 사용:

```bash
# 1. 라이브러리 빌드
yarn build:lib

# 2. 다른 프로젝트에서 설치
cd ../your-project
yarn add file:../moremore-component

# 또는 절대 경로로
yarn add file:/absolute/path/to/moremore-component
```

### 2. Firebase Hosting 배포 (데모 사이트)

컴포넌트 라이브러리의 데모 사이트를 Firebase Hosting에 배포:

```bash
# 1. 데모 사이트 빌드
yarn build

# 2. Firebase 배포
firebase deploy

# 또는 특정 프로젝트에 배포
firebase use your-project-id
firebase deploy --only hosting
```

**Firebase Hosting 설정**:

- **public 디렉토리**: `dist/` (firebase.json에서 설정)
- **배포 URL**: https://your-project-id.web.app
- **용도**: 라이브러리 데모, 문서화, 사용 예제 제공

## 🛠️ 다른 프로젝트에서 사용

### Vue 3 + Vite 프로젝트

#### 전체 라이브러리 사용

```javascript
// main.js
import { createApp } from "vue";
import App from "./App.vue";

// 라이브러리 import
import MoremoreComponent from "moremore-component";
import "moremore-component/style.css";

const app = createApp(App);

// 플러그인으로 등록 (모든 컴포넌트 전역 사용 가능)
app.use(MoremoreComponent);

app.mount("#app");
```

#### 개별 컴포넌트 사용

```vue
<script setup>
import {
  AdminCreateCards,
  UserCreateCards,
  TabGroup,
} from "moremore-component";
import "moremore-component/style.css";

// 샘플 데이터
const shops = [
  {
    id: 1,
    title: "샘플 카드",
    badge: "마켓오픈",
    badgeColor: "yellow",
    description: "카드 설명입니다.",
    period: "모집기간: 2025.01.01~2025.01.31",
    image: "https://example.com/image.jpg",
    participants: [{ id: 1, name: "참여자1", avatar: null }],
  },
];

const tabs = [
  { id: "all", label: "전체" },
  { id: "person", label: "인물" },
  { id: "animal", label: "동물" },
];

const activeTab = ref("all");

// 이벤트 핸들러
const handleShopClick = (shop) => {
  console.log("Shop clicked:", shop);
};

const handleParticipantClick = (participant) => {
  console.log("Participant clicked:", participant);
};

const handleTabChange = (tab) => {
  console.log("Tab changed:", tab);
};
</script>

<template>
  <div class="p-6">
    <!-- Admin Cards -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Admin Create Cards</h2>
      <AdminCreateCards
        :shops="shops"
        :itemsPerRow="3"
        :maxItems="6"
        @shop-click="handleShopClick"
        @participant-click="handleParticipantClick"
      />
    </section>

    <!-- User Cards -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">User Create Cards</h2>
      <UserCreateCards
        :shops="shops"
        :itemsPerRow="4"
        :maxItems="8"
        @shop-click="handleShopClick"
        @participant-click="handleParticipantClick"
      />
    </section>

    <!-- Tab Group -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Tab Group</h2>
      <TabGroup
        v-model="activeTab"
        :tabs="tabs"
        @tab-change="handleTabChange"
      />
      <p class="mt-4 text-gray-600">선택된 탭: {{ activeTab }}</p>
    </section>
  </div>
</template>
```

### Nuxt 3 프로젝트

```javascript
// nuxt.config.ts
export default defineNuxtConfig({
  css: ["moremore-component/style.css"],
  // 또는 plugins 사용
});

// plugins/moremore-component.client.js
import MoremoreComponent from "moremore-component";
import "moremore-component/style.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(MoremoreComponent);
});
```

### 기타 Vue 프로젝트

Vue CLI, Quasar, 또는 다른 Vue 기반 프레임워크에서도 동일하게 사용 가능:

```javascript
// CSS import는 반드시 필요
import "moremore-component/style.css";
import { AdminCreateCards } from "moremore-component";
```

## 🔄 업데이트 및 버전 관리

### 1. 라이브러리 업데이트

```bash
# 1. 코드 수정 후 빌드
yarn build:lib

# 2. 버전 업데이트
npm version patch  # 버그 수정
npm version minor  # 새 기능 추가
npm version major  # 큰 변경사항
```

### 2. 사용하는 프로젝트에서 업데이트

```bash
# 로컬 패키지인 경우
yarn remove moremore-component
yarn cache clean
yarn add file:../moremore-component

# NPM 패키지인 경우 (향후)
yarn upgrade moremore-component
```

## 📋 배포 전 체크리스트

### 코드 품질

- [ ] 모든 컴포넌트가 올바르게 동작하는지 확인
- [ ] `yarn dev`로 개발 서버 실행하여 테스트
- [ ] 컴포넌트 props와 events가 문서화되어 있는지 확인
- [ ] TypeScript 타입 정의가 올바른지 확인 (향후)

### 빌드 확인

#### 라이브러리 빌드 확인

- [ ] `yarn build:lib` 명령어가 오류 없이 실행
- [ ] `lib/` 디렉토리에 3개 파일이 생성되었는지 확인:
  - [ ] `moremore-component.js` (ES Module)
  - [ ] `moremore-component.umd.cjs` (UMD)
  - [ ] `moremore-component.css` (CSS)
- [ ] 생성된 파일들의 크기가 적절한지 확인

#### 데모 사이트 빌드 확인

- [ ] `yarn build` 명령어가 오류 없이 실행
- [ ] `dist/` 디렉토리에 필요한 파일들이 생성되었는지 확인:
  - [ ] `index.html`
  - [ ] `assets/` 폴더 내 JS/CSS 파일들
- [ ] 로컬에서 `yarn preview`로 정상 작동 확인

### package.json 설정

- [ ] `main`, `module`, `exports` 경로가 올바른지 확인
- [ ] `files` 배열에 `lib` 디렉토리가 포함되어 있는지 확인
- [ ] `peerDependencies`가 올바르게 설정되어 있는지 확인
- [ ] 버전 번호가 올바른지 확인

### 문서화

- [ ] README.md가 최신 사용법을 반영하는지 확인
- [ ] CSS_GUIDE.md가 정확한 정보를 담고 있는지 확인
- [ ] DEPLOYMENT.md가 최신 배포 과정을 반영하는지 확인

## 🐛 문제 해결

### 빌드 오류

#### 라이브러리 빌드 오류

```bash
# 캐시 클리어
rm -rf node_modules/.vite
rm -rf lib
yarn install
yarn build:lib
```

#### 데모 사이트 빌드 오류

```bash
# 캐시 클리어
rm -rf node_modules/.vite
rm -rf dist
yarn install
yarn build
```

#### 전체 캐시 클리어

```bash
# 모든 캐시 및 빌드 파일 삭제
rm -rf node_modules/.vite
rm -rf lib
rm -rf dist
rm -rf node_modules
yarn install
yarn build:all
```

### 스타일 미적용 문제

```javascript
// CSS import 순서 확인
import "moremore-component/style.css"; // 첫 번째
import { AdminCreateCards } from "moremore-component"; // 두 번째
```

### 컴포넌트 인식 오류

```javascript
// named export 확인
import { AdminCreateCards } from "moremore-component"; // ✅

// default export 확인
import MoremoreComponent from "moremore-component"; // ✅
```

### Tailwind CSS 충돌

```javascript
// tailwind.config.js에서 설정
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts}",
    // moremore-component는 이미 컴파일되어 있어 불필요
  ],
  // 기존 설정 유지
};
```

## 🔗 패키지 정보

### 의존성

```json
{
  "peerDependencies": {
    "vue": "^3.0.0",
    "@headlessui/vue": "^1.7.0"
  }
}
```

### 지원하는 환경

- **Node.js**: 16.0.0+
- **Vue**: 3.0.0+
- **브라우저**: 모던 브라우저 (ES2020+)
- **빌드 도구**: Vite, Webpack, Rollup 등

## 📊 성능 정보

- **JS 번들 크기**:
  - ES Module: ~18KB
  - UMD: ~15KB
- **CSS 크기**: ~90KB (gzip: ~15KB)
- **Tree-shaking**: 지원
- **Tailwind CSS**: 완전 컴파일 (외부 의존성 없음)

## 🎯 향후 계획

### 단기 계획

- [ ] NPM 배포
- [ ] TypeScript 타입 정의 파일 추가
- [ ] 컴포넌트별 CSS 분리 옵션
- [ ] Storybook 문서화

### 장기 계획

- [ ] 더 많은 컴포넌트 추가
- [ ] 테마 시스템 구축
- [ ] 국제화(i18n) 지원
- [ ] 접근성(a11y) 개선

---

**배포 완료!** 🎉

이제 Moremore Component Library를 다른 프로젝트에서 안전하게 사용할 수 있습니다.
