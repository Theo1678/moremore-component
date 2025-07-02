import type { Component } from "vue";
import type {
  Shop,
  PartnerUserData,
  Tab,
  SwiperItem,
  AutoplayOptions,
} from "./index";

// AdminCreateCards 컴포넌트 타입
export interface AdminCreateCardsEmits {
  "shop-click": (shop: Shop) => void;
  "partnerUser-click": (partnerUserData: PartnerUserData) => void;
}

// UserCreateCards 컴포넌트 타입
export interface UserCreateCardsEmits {
  "shop-click": (shop: Shop) => void;
  "close-modal": () => void;
  "update:showModal": (value: boolean) => void;
}

// TabGroup 컴포넌트 타입
export interface TabGroupEmits {
  "update:modelValue": (value: string) => void;
  "tab-change": (tab: Tab) => void;
}

// Swiper 컴포넌트 타입
export interface SwiperEmits {
  "slide-change": (payload: { index: number; item: SwiperItem }) => void;
  "swiper-init": (swiper: any) => void;
  "transition-start": (payload: { index: number }) => void;
  "transition-end": (payload: { index: number }) => void;
}

// 컴포넌트 Props 인터페이스들
export interface AdminCreateCardsPropsWithDefaults {
  shops?: Shop[];
  itemsPerRow?: number;
  maxItems?: number;
}

export interface UserCreateCardsPropsWithDefaults {
  shops?: Shop[];
  columns?: number;
  showModal?: boolean;
}

export interface TabGroupPropsWithDefaults {
  modelValue?: string;
  tabs?: Tab[];
}

export interface SwiperPropsWithDefaults {
  items?: SwiperItem[];
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: AutoplayOptions | boolean;
  loop?: boolean;
  showNavigation?: boolean;
  showPagination?: boolean;
  showScrollbar?: boolean;
}

export interface ImageErrorState {
  erroredImages: Set<string | number>;
}

// 슬롯 스코프 타입들
export interface SwiperSlotScope {
  item: SwiperItem;
  index: number;
  isActive: boolean;
}

export interface PaginationBulletSlotScope {
  index: number;
  isActive: boolean;
}
