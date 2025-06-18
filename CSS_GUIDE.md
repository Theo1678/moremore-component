# CSS 사용 가이드 🎨

Moremore Component Library의 CSS를 외부 프로젝트에서 사용하는 방법을 안내합니다.

## 📦 기본 정보

- **CSS 파일 크기**: ~90KB (Tailwind CSS 완전 컴파일)
- **외부 의존성**: 없음 (Tailwind CSS 설치 불필요)
- **빌드 파일**: `lib/moremore-component.css`

## 🚀 빠른 시작

### 1. CSS Import (필수)

```javascript
// main.js 또는 진입점에서
import "moremore-component/style.css";
```

이것만 하면 모든 컴포넌트 스타일이 작동합니다!

### 2. 컴포넌트 사용

```vue
<script setup>
import {
  AdminCreateCards,
  UserCreateCards,
  TabGroup,
} from "moremore-component";
import "moremore-component/style.css"; // CSS import

const shops = [
  {
    id: 1,
    title: "카드 제목",
    badge: "마켓오픈",
    badgeColor: "yellow",
    description: "카드 설명",
    period: "모집기간: 2025.01.01~2025.01.31",
    image: "https://example.com/image.jpg",
    participants: [],
  },
];
</script>

<template>
  <div>
    <AdminCreateCards :shops="shops" />
    <UserCreateCards :shops="shops" :itemsPerRow="4" />
    <TabGroup :tabs="tabs" v-model="activeTab" />
  </div>
</template>
```

## 🛠️ 프레임워크별 설정

### Vue 3 + Vite

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

### Nuxt 3

```javascript
// nuxt.config.ts
export default defineNuxtConfig({
  css: ["moremore-component/style.css"],
  // 또는 plugins에서
});

// plugins/moremore-component.client.js
import "moremore-component/style.css";
```

### Vite 프로젝트

```javascript
// vite.config.js에서 별도 설정 불필요
// CSS가 완전 컴파일되어 있어 그냥 import만 하면 됨
```

## 🎯 스타일 특징

### Tailwind CSS 완전 컴파일

이 라이브러리의 CSS는 **Tailwind CSS가 완전히 컴파일된 상태**입니다:

- ✅ **외부 Tailwind 설치 불필요**
- ✅ **클래스 충돌 없음**
- ✅ **모든 필요한 스타일 포함**
- ✅ **Tree-shaking으로 최적화됨**

```css
/* 실제 컴파일된 CSS 예시 */
.grid {
  display: grid;
}
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.rounded-lg {
  border-radius: 0.5rem;
}
.bg-white {
  background-color: rgb(255 255 255);
}
/* ... 수천 개의 컴파일된 클래스들 */
```

### 반응형 그리드 시스템

컴포넌트들이 사용하는 주요 반응형 클래스:

```css
/* UserCreateCards 그리드 */
.grid-cols-1    /* 모바일: 1열 */
.md:grid-cols-2 /* 태블릿: 2열 */
.lg:grid-cols-3 /* 데스크톱: 3열 */
.xl:grid-cols-4 /* 큰 화면: 4열 */
.2xl:grid-cols-5 /* 더 큰 화면: 5열 */
.2xl:grid-cols-6 /* 가장 큰 화면: 6열 */
```

## 🎨 사용 가능한 CSS 변수

라이브러리에서 정의된 CSS 변수들 (미래 사용 대비):

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

/* 다크모드 */
@media (prefers-color-scheme: dark) {
  :root {
    --moremore-surface: #1f2937;
    --moremore-background: #111827;
    --moremore-border: #374151;
  }
}
```

**주의**: 현재 컴포넌트들은 이 변수들을 사용하지 않고 Tailwind 클래스를 직접 사용합니다.

## 🔧 고급 설정

### 1. CSS만 별도로 사용

```javascript
// 컴포넌트 없이 CSS만 가져오기
import "moremore-component/style.css";

// 이제 HTML에서 동일한 클래스 사용 가능
```

```html
<!-- Tailwind 클래스들이 이미 컴파일되어 있어 바로 사용 가능 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div class="bg-white rounded-lg border border-gray-200 p-4">
    <h3 class="text-lg font-bold text-gray-900">제목</h3>
    <p class="text-sm text-gray-600">설명</p>
  </div>
</div>
```

### 2. 기존 Tailwind와 함께 사용

기존 프로젝트에 Tailwind가 있어도 충돌 없이 사용 가능:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts}",
    // moremore-component는 이미 컴파일되어 있어 content에 포함 불필요
  ],
  // 기존 설정 유지
};
```

### 3. CSS 우선순위 조정

충돌이 발생하는 경우:

```css
/* 사용자 CSS 파일에서 */
@import "moremore-component/style.css";

/* 커스텀 스타일로 오버라이드 */
.my-custom-card {
  @apply bg-blue-500 text-white; /* Tailwind 유틸리티 사용 */
}

/* 또는 직접 CSS */
.my-custom-card {
  background-color: #3b82f6 !important;
  color: white !important;
}
```

## 🚫 문제 해결

### 스타일이 적용되지 않는 경우

1. **CSS import 순서 확인**

```javascript
// ❌ 잘못된 순서
import MoremoreComponent from "moremore-component";
import "moremore-component/style.css"; // 늦게 import

// ✅ 올바른 순서
import "moremore-component/style.css"; // 먼저 import
import MoremoreComponent from "moremore-component";
```

2. **빌드 도구 캐시 클리어**

```bash
# Vite
rm -rf node_modules/.vite
yarn dev

# Webpack
rm -rf node_modules/.cache
yarn dev

# 일반적인 node_modules 재설치
rm -rf node_modules yarn.lock
yarn install
```

3. **import 경로 확인**

```javascript
// 모두 동일한 파일을 가리킴 (package.json exports 설정)
import "moremore-component/style.css"; // ✅ 권장
import "moremore-component/lib/moremore-component.css"; // ✅ 직접 경로
```

### 다른 CSS 프레임워크와 충돌

```css
/* CSS 레이어 사용 (모던 브라우저) */
@layer vendor {
  @import "moremore-component/style.css";
}

@layer custom {
  /* 사용자 스타일 */
  .my-styles {
    /* 높은 우선순위 */
  }
}
```

### CSS 크기 최적화

현재 90KB의 CSS는 이미 최적화되어 있지만, 더 줄이고 싶다면:

```javascript
// 향후 지원 예정: 컴포넌트별 CSS import
import "moremore-component/components/cards.css"; // AdminCreateCards, UserCreateCards
import "moremore-component/components/tabs.css"; // TabGroup
import "moremore-component/components/icons.css"; // ElementIcons
```

## 📋 실제 사용되는 주요 클래스들

### AdminCreateCards

```css
.grid .grid-cols-1 .md:grid-cols-2 .lg:grid-cols-3
.gap-8 .bg-white .rounded-2xl .border .border-gray-200
.p-3 .flex .items-center .gap-4
.w-24 .h-24 .rounded-full .overflow-hidden
.font-bold .text-gray-900 .line-clamp-2
.cursor-pointer .hover:scale-105 .transition-transform
```

### UserCreateCards

```css
.grid .grid-cols-1 .md:grid-cols-2 .lg:grid-cols-3 .xl:grid-cols-4
.aspect-[4/3] .rounded-lg .object-cover
.bg-white .border .border-gray-200 .overflow-hidden
.hover:shadow-md .hover:scale-[1.02] .transition-all
.text-sm .font-bold .line-clamp-1 .text-gray-900
```

### TabGroup

```css
.flex .items-stretch .gap-4 .px-5 .flex-wrap
.px-3 .py-3 .rounded-xl .border .transition-all
.bg-pink-100 .border-pink-400 .border-2  /* active */
.bg-white .border-gray-300 .hover:border-gray-400  /* inactive */
.text-sm .font-bold .whitespace-nowrap
```

## 📁 파일 구조

```
moremore-component/
├── lib/
│   ├── moremore-component.css    # 메인 CSS 파일 (90KB)
│   ├── moremore-component.js     # ES Module
│   └── moremore-component.umd.cjs # UMD Module
├── package.json                  # exports 설정
└── src/
    ├── style.css                # 소스 CSS (Tailwind + 변수)
    └── components/              # Vue 컴포넌트들
```

## 🎯 베스트 프랙티스

1. **CSS를 먼저 import**: 컴포넌트보다 CSS를 먼저 불러오세요
2. **캐시 활용**: 90KB CSS가 한 번 로드되면 브라우저 캐시됨
3. **gzip 압축**: 웹서버에서 gzip 활성화 시 ~15KB로 압축
4. **CDN 사용**: 가능하면 CDN을 통해 제공

---

**90KB로 모든 스타일이 포함된 완전한 솔루션** ✨

별도 Tailwind 설치 없이 바로 사용하세요!
