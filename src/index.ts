// 컴포넌트 imports
import AdminCreateCards from "./components/Cards/AdminCreateCards.vue";
import UserCreateCards from "./components/Cards/UserCreateCards.vue";
import TabGroup from "./components/Tabs/TabGroup.vue";
import Swiper from "./components/header/Swiper.vue";

// ElementIcons imports
import {
  ElementIcon,
  IcApp,
  IcChart,
  IcHelp,
  IcInfo,
  IcNotification,
  IcOption,
  IcPayback,
  IcPerson,
  IcPlane,
  IcUpdate,
  IcSetting,
  IcMedia,
  IcLink,
  IcArrowLeft,
  IcArrowRight,
  IcDown,
  IcCopy,
  IcDelete,
  IcPlus,
  IcMoreVertical,
  IcCancleFill,
  IcChecked,
  IcSparkle,
  IcPreview,
  IcLoadingPrimary,
  IcLayer,
  IcCta,
  IcSearch,
  IcClose,
} from "./components/ElementIcons/index";

import type { App } from "vue";

// 타입 imports & exports
export type * from "./types/index";
export type * from "./types/components";

// 스타일 import
import "./style.css";

// 개별 컴포넌트 export
export { AdminCreateCards, UserCreateCards, TabGroup, Swiper };

// ElementIcons export
export {
  ElementIcon,
  IcApp,
  IcChart,
  IcHelp,
  IcInfo,
  IcNotification,
  IcOption,
  IcPayback,
  IcPerson,
  IcPlane,
  IcUpdate,
  IcSetting,
  IcMedia,
  IcLink,
  IcArrowLeft,
  IcArrowRight,
  IcDown,
  IcCopy,
  IcDelete,
  IcPlus,
  IcMoreVertical,
  IcCancleFill,
  IcChecked,
  IcSparkle,
  IcPreview,
  IcLoadingPrimary,
  IcLayer,
  IcSearch,
  IcClose,
  IcCta,
};

// 컴포넌트 목록
const components = [
  AdminCreateCards,
  UserCreateCards,
  TabGroup,
  Swiper,
  ElementIcon,
  IcApp,
  IcChart,
  IcHelp,
  IcInfo,
  IcNotification,
  IcOption,
  IcPayback,
  IcPerson,
  IcPlane,
  IcUpdate,
  IcSetting,
  IcMedia,
  IcLink,
  IcArrowLeft,
  IcArrowRight,
  IcDown,
  IcCopy,
  IcDelete,
  IcPlus,
  IcMoreVertical,
  IcCancleFill,
  IcChecked,
  IcSparkle,
  IcPreview,
  IcLoadingPrimary,
  IcLayer,
  IcSearch,
  IcClose,
  IcCta,
];

// 플러그인 옵션 타입
export interface MoremoreComponentOptions {
  prefix?: string;
}

// Vue 플러그인 설정
const MoremoreComponent = {
  install(app: App, options: MoremoreComponentOptions = {}) {
    // 전역 컴포넌트 등록
    components.forEach((component) => {
      const componentName =
        component.__name || component.name || "UnnamedComponent";
      app.component(componentName, component);
    });

    // 전역 옵션 설정 (필요시)
    if (options.prefix) {
      components.forEach((component) => {
        const componentName =
          component.__name || component.name || "UnnamedComponent";
        app.component(`${options.prefix}${componentName}`, component);
      });
    }
  },
};

// 기본 export (Vue 플러그인)
export default MoremoreComponent;

// 브라우저에서 직접 사용할 때
declare global {
  interface Window {
    Vue?: any;
  }
}

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(MoremoreComponent);
}
