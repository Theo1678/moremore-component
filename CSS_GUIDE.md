# CSS 사용 가이드 🎨

Moremore Component Library의 CSS를 외부 프로젝트에서 사용하는 방법을 안내합니다.

## 📦 CSS Import 방법

### 1. **기본 방법 (권장)**

```javascript
// main.js에서 전역으로 import
import "moremore-component/style.css";

// 또는 직접 경로 (모두 동일한 파일을 가리킴)
import "moremore-component/dist/moremore-component.css";
```

### 2. **컴포넌트별 import**

```vue
<script setup>
import { AdminCreateCards } from "moremore-component";
import "moremore-component/style.css";
</script>

<template>
  <AdminCreateCards :shops="shops" />
</template>
```

### 3. **Vite/Webpack에서 alias 사용**

```javascript
// vite.config.js
export default defineConfig({
  resolve: {
    alias: {
      "@moremore/css": "moremore-component/style.css",
    },
  },
});

// 사용
import "@moremore/css";
```

## 🛠️ 다양한 프레임워크에서 사용

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
// plugins/moremore-component.client.js
import "moremore-component/style.css";

export default defineNuxtPlugin(() => {
  // 플러그인 로직
});
```

```vue
<!-- nuxt.config.ts -->
export default defineNuxtConfig({ css: [ 'moremore-component/style.css' ] })
```

### Next.js (Vue 미지원이지만 참고용)

```javascript
// _app.js
import "moremore-component/style.css";
```

### Webpack 설정

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
```

## 🎯 선택적 CSS Import

### 컴포넌트별 개별 스타일 (미래 지원 예정)

```javascript
// 특정 컴포넌트 스타일만 import (향후 지원)
import "moremore-component/dist/admin-cards.css";
import "moremore-component/dist/user-cards.css";
import "moremore-component/dist/tab-group.css";
```

### CSS Variables만 사용

```css
/* 변수만 가져와서 커스텀 스타일링 */
@import "moremore-component/style.css" layer(base);

.my-custom-card {
  background: var(--moremore-surface);
  border: 1px solid var(--moremore-border);
  color: var(--moremore-primary);
}
```

## 🔧 CSS 커스터마이징

### 1. CSS Variables 오버라이드

```css
/* 사용자 CSS 파일에서 */
:root {
  --moremore-primary: #8b5cf6; /* 보라색으로 변경 */
  --moremore-surface: #1f2937; /* 다크 배경 */
  --moremore-border: #374151; /* 다크 테두리 */
}
```

### 2. Tailwind CSS 통합

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts}",
    "./node_modules/moremore-component/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "moremore-primary": "var(--moremore-primary)",
        "moremore-surface": "var(--moremore-surface)",
      },
    },
  },
};
```

### 3. SCSS/SASS 변수 매핑

```scss
// variables.scss
$moremore-primary: #3b82f6;
$moremore-surface: #ffffff;

:root {
  --moremore-primary: #{$moremore-primary};
  --moremore-surface: #{$moremore-surface};
}

// main.scss
@import "./variables.scss";
@import "moremore-component/style.css";
```

## 🌙 다크 모드 지원

```css
/* 자동 다크 모드 */
@media (prefers-color-scheme: dark) {
  :root {
    --moremore-surface: #1f2937;
    --moremore-background: #111827;
    --moremore-border: #374151;
  }
}

/* 수동 다크 모드 클래스 */
.dark {
  --moremore-surface: #1f2937;
  --moremore-background: #111827;
  --moremore-border: #374151;
}
```

## 🚫 CSS 문제 해결

### 스타일이 적용되지 않는 경우

1. **Import 순서 확인**

```javascript
// ❌ 잘못된 순서
import MoremoreComponent from "moremore-component";
import "moremore-component/style.css"; // 늦게 import

// ✅ 올바른 순서
import "moremore-component/style.css"; // 먼저 import
import MoremoreComponent from "moremore-component";
```

2. **CSS 캐시 클리어**

```bash
# Vite
rm -rf node_modules/.vite
yarn dev

# Webpack
rm -rf node_modules/.cache
yarn dev
```

3. **번들러 설정 확인**

```javascript
// vite.config.js - CSS 처리 확인
export default defineConfig({
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
});
```

### Tailwind CSS 충돌 해결

```javascript
// tailwind.config.js
module.exports = {
  important: true, // 충돌 시 우선순위 높임
  content: [
    "./src/**/*.{vue,js,ts}",
    "./node_modules/moremore-component/**/*.{vue,js,ts}",
  ],
  corePlugins: {
    preflight: false, // 기본 스타일 리셋 비활성화
  },
};
```

### CSS-in-JS와 함께 사용

```javascript
// styled-components (React용이지만 참고)
import styled from "styled-components";
import "moremore-component/style.css";

const StyledContainer = styled.div`
  .moremore-component {
    /* 커스텀 스타일 */
  }
`;
```

## 📝 CSS 클래스 참조

라이브러리에서 제공하는 주요 CSS 클래스들:

```css
/* 컴포넌트 래퍼 */
.moremore-component {
}

/* AdminCreateCards */
.admin-create-cards {
}
.admin-create-cards .cards-grid {
}
.admin-create-cards .scroll-container {
}

/* UserCreateCards */
.user-create-cards {
}
.user-create-cards .grid-cols-1 {
}
.user-create-cards .grid-cols-2 {
}
/* ... grid-cols-6까지 */

/* TabGroup */
.tab-group {
}
.tab-group .tab-button {
}
.tab-group .tab-button.active {
}

/* 유틸리티 클래스 */
.scrollbar-hide {
}
.fade-in {
}
.slide-in {
}
```

## 🎨 테마 예제

### 미니멀 테마

```css
:root {
  --moremore-primary: #000000;
  --moremore-surface: #ffffff;
  --moremore-border: #e5e5e5;
  --moremore-background: #fafafa;
}
```

### 컬러풀 테마

```css
:root {
  --moremore-primary: #ff6b6b;
  --moremore-secondary: #4ecdc4;
  --moremore-success: #45b7d1;
  --moremore-warning: #f9ca24;
  --moremore-error: #f0932b;
}
```

---

이제 외부 프로젝트에서 CSS를 쉽게 가져다 쓸 수 있습니다! 🎉
