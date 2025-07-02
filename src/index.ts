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

import { withMoremoreWrapper } from "./components/withMoremoreWrapper";
import type { App } from "vue";

// 타입 imports & exports
export type * from "./types/index";
export type * from "./types/components";

// 스타일 import
import "./style.css";

// wrapped 컴포넌트 생성
const WrappedAdminCreateCards = withMoremoreWrapper(AdminCreateCards);
const WrappedUserCreateCards = withMoremoreWrapper(UserCreateCards);
const WrappedTabGroup = withMoremoreWrapper(TabGroup);
const WrappedSwiper = withMoremoreWrapper(Swiper);
const WrappedElementIcon = withMoremoreWrapper(ElementIcon);
const WrappedIcApp = withMoremoreWrapper(IcApp);
const WrappedIcChart = withMoremoreWrapper(IcChart);
const WrappedIcHelp = withMoremoreWrapper(IcHelp);
const WrappedIcInfo = withMoremoreWrapper(IcInfo);
const WrappedIcNotification = withMoremoreWrapper(IcNotification);
const WrappedIcOption = withMoremoreWrapper(IcOption);
const WrappedIcPayback = withMoremoreWrapper(IcPayback);
const WrappedIcPerson = withMoremoreWrapper(IcPerson);
const WrappedIcPlane = withMoremoreWrapper(IcPlane);
const WrappedIcUpdate = withMoremoreWrapper(IcUpdate);
const WrappedIcSetting = withMoremoreWrapper(IcSetting);
const WrappedIcMedia = withMoremoreWrapper(IcMedia);
const WrappedIcLink = withMoremoreWrapper(IcLink);
const WrappedIcArrowLeft = withMoremoreWrapper(IcArrowLeft);
const WrappedIcArrowRight = withMoremoreWrapper(IcArrowRight);
const WrappedIcDown = withMoremoreWrapper(IcDown);
const WrappedIcCopy = withMoremoreWrapper(IcCopy);
const WrappedIcDelete = withMoremoreWrapper(IcDelete);
const WrappedIcPlus = withMoremoreWrapper(IcPlus);
const WrappedIcMoreVertical = withMoremoreWrapper(IcMoreVertical);
const WrappedIcCancleFill = withMoremoreWrapper(IcCancleFill);
const WrappedIcChecked = withMoremoreWrapper(IcChecked);
const WrappedIcSparkle = withMoremoreWrapper(IcSparkle);
const WrappedIcPreview = withMoremoreWrapper(IcPreview);
const WrappedIcLoadingPrimary = withMoremoreWrapper(IcLoadingPrimary);
const WrappedIcLayer = withMoremoreWrapper(IcLayer);
const WrappedIcCta = withMoremoreWrapper(IcCta);
const WrappedIcSearch = withMoremoreWrapper(IcSearch);
const WrappedIcClose = withMoremoreWrapper(IcClose);

// 개별 컴포넌트 export
export {
  WrappedAdminCreateCards as AdminCreateCards,
  WrappedUserCreateCards as UserCreateCards,
  WrappedTabGroup as TabGroup,
  WrappedSwiper as Swiper,
  WrappedElementIcon as ElementIcon,
  WrappedIcApp as IcApp,
  WrappedIcChart as IcChart,
  WrappedIcHelp as IcHelp,
  WrappedIcInfo as IcInfo,
  WrappedIcNotification as IcNotification,
  WrappedIcOption as IcOption,
  WrappedIcPayback as IcPayback,
  WrappedIcPerson as IcPerson,
  WrappedIcPlane as IcPlane,
  WrappedIcUpdate as IcUpdate,
  WrappedIcSetting as IcSetting,
  WrappedIcMedia as IcMedia,
  WrappedIcLink as IcLink,
  WrappedIcArrowLeft as IcArrowLeft,
  WrappedIcArrowRight as IcArrowRight,
  WrappedIcDown as IcDown,
  WrappedIcCopy as IcCopy,
  WrappedIcDelete as IcDelete,
  WrappedIcPlus as IcPlus,
  WrappedIcMoreVertical as IcMoreVertical,
  WrappedIcCancleFill as IcCancleFill,
  WrappedIcChecked as IcChecked,
  WrappedIcSparkle as IcSparkle,
  WrappedIcPreview as IcPreview,
  WrappedIcLoadingPrimary as IcLoadingPrimary,
  WrappedIcLayer as IcLayer,
  WrappedIcCta as IcCta,
  WrappedIcSearch as IcSearch,
  WrappedIcClose as IcClose,
};

// 컴포넌트 목록
const components = [
  WrappedAdminCreateCards,
  WrappedUserCreateCards,
  WrappedTabGroup,
  WrappedSwiper,
  WrappedElementIcon,
  WrappedIcApp,
  WrappedIcChart,
  WrappedIcHelp,
  WrappedIcInfo,
  WrappedIcNotification,
  WrappedIcOption,
  WrappedIcPayback,
  WrappedIcPerson,
  WrappedIcPlane,
  WrappedIcUpdate,
  WrappedIcSetting,
  WrappedIcMedia,
  WrappedIcLink,
  WrappedIcArrowLeft,
  WrappedIcArrowRight,
  WrappedIcDown,
  WrappedIcCopy,
  WrappedIcDelete,
  WrappedIcPlus,
  WrappedIcMoreVertical,
  WrappedIcCancleFill,
  WrappedIcChecked,
  WrappedIcSparkle,
  WrappedIcPreview,
  WrappedIcLoadingPrimary,
  WrappedIcLayer,
  WrappedIcSearch,
  WrappedIcClose,
  WrappedIcCta,
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
