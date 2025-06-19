// Vue 컴포넌트 타입 확장

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Vue 전역 타입 확장
declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    // 전역 속성이 있다면 여기에 추가
  }
}

// HTML 요소 타입 확장
declare global {
  interface HTMLElementEventMap {
    // 커스텀 이벤트가 있다면 여기에 추가
  }
}

export {};
