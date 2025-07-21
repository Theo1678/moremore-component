// 컴포넌트 imports
import OriginalAdminCreateCards from "./components/Cards/AdminCreateCards.vue";
import OriginalUserCreateCards from "./components/Cards/UserCreateCards.vue";
import OriginalTabGroup from "./components/Tabs/TabGroup.vue";
import OriginalSwiper from "./components/header/Swiper.vue";

// ElementIcons imports (CSS가 필요없는 아이콘 컴포넌트들)
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
  IcMinus,
  IcLink,
  IcArrowLeft,
  IcArrowRight,
  IcDown,
  IcEdit,
  IcGraphicEmpty,
  IcFill,
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

import type { App, Component } from "vue";
import { h, defineComponent } from "vue";

// 타입 imports & exports
export type * from "./types/index";

// 스타일 import
import "./style.css";

// Wrapper 함수 - CSS가 필요한 컴포넌트만 .moremore-component로 감싸기
function wrapWithMoremore(components: Record<string, Component>) {
  const wrapped: Record<string, Component> = {};

  Object.entries(components).forEach(([name, component]) => {
    wrapped[name] = defineComponent({
      name: `Wrapped${name}`,
      setup(props, { attrs, slots }) {
        return () =>
          h(
            "div",
            {
              class: "moremore-component",
              style: {
                width: "100%",
                height: "100%",
              },
            },
            [
              h(
                component,
                {
                  ...props,
                  ...attrs,
                },
                slots
              ),
            ]
          );
      },
    });
  });

  return wrapped;
}

// CSS가 필요한 컴포넌트들만 모아서 wrapping
const componentsNeedingCSS = {
  AdminCreateCards: OriginalAdminCreateCards,
  UserCreateCards: OriginalUserCreateCards,
  TabGroup: OriginalTabGroup,
  Swiper: OriginalSwiper,
};

// CSS가 필요한 컴포넌트들만 wrapping
const wrappedComponents = wrapWithMoremore(componentsNeedingCSS);

// 개별 컴포넌트 export - CSS가 필요한 컴포넌트는 wrapped 버전으로, 아이콘은 그대로
export const { AdminCreateCards, UserCreateCards, TabGroup, Swiper } =
  wrappedComponents;

// ElementIcons는 그대로 export
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
  IcMinus,
  IcLink,
  IcArrowLeft,
  IcArrowRight,
  IcDown,
  IcEdit,
  IcFill,
  IcGraphicEmpty,
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
};

// 모든 컴포넌트 목록 (wrapped + 아이콘)
const components = [
  ...Object.values(wrappedComponents),
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
  IcMinus,
  IcLink,
  IcArrowLeft,
  IcArrowRight,
  IcDown,
  IcEdit,
  IcFill,
  IcGraphicEmpty,
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
      const componentName = component.name || "UnnamedComponent";
      app.component(componentName, component);
    });

    // 전역 옵션 설정 (필요시)
    if (options.prefix) {
      components.forEach((component) => {
        const componentName = component.name || "UnnamedComponent";
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
