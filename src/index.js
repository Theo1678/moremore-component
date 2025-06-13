// 컴포넌트 imports
import AdminCreateCards from "./components/Cards/AdminCreateCards.vue";
import UserCreateCards from "./components/Cards/UserCreateCards.vue";
import TabGroup from "./components/Tabs/TabGroup.vue";

// 스타일 import
import "./style.css";

// 개별 컴포넌트 export
export { AdminCreateCards, UserCreateCards, TabGroup };

// 컴포넌트 목록
const components = [AdminCreateCards, UserCreateCards, TabGroup];

// Vue 플러그인 설정
const MoremoreComponent = {
  install(app, options = {}) {
    // 전역 컴포넌트 등록
    components.forEach((component) => {
      const componentName =
        component.name || component.__name || "UnnamedComponent";
      app.component(componentName, component);
    });

    // 전역 옵션 설정 (필요시)
    if (options.prefix) {
      components.forEach((component) => {
        const componentName =
          component.name || component.__name || "UnnamedComponent";
        app.component(`${options.prefix}${componentName}`, component);
      });
    }
  },
};

// 기본 export (Vue 플러그인)
export default MoremoreComponent;

// 브라우저에서 직접 사용할 때
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(MoremoreComponent);
}
