# Moremore Component

Vue 3 + Headless UI + Tailwind CSS로 구현된 컴포넌트 라이브러리입니다.

## 컴포넌트

### ShopListbox

피그마 디자인을 기반으로 컴포넌트입니다.

## 설치 및 사용법

### 1. Local Package로 설치

```bash
# 라이브러리 빌드
yarn build:lib

# 다른 프로젝트에서 local package로 설치
yarn add file:../moremore-component
# 또는
npm install ../moremore-component
```

### 2. 사용법

#### 전체 플러그인으로 등록

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

#### 개별 컴포넌트 import

## Props

### ShopListbox

| Prop          | Type   | Default               | Description                           |
| ------------- | ------ | --------------------- | ------------------------------------- |
| `modelValue`  | Object | null                  | v-model로 바인딩되는 선택된 shop 객체 |
| `shops`       | Array  | []                    | 선택 가능한 shop 목록                 |
| `label`       | String | 'Shop 선택'           | 라벨 텍스트                           |
| `placeholder` | String | 'Shop을 선택해주세요' | 선택되지 않았을 때 표시되는 텍스트    |

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
