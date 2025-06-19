// 공통 타입 정의

// 배지 색상 타입
export type BadgeColor = "blue" | "green" | "yellow" | "gray";

// 참여작가 타입
export interface Participant {
  id: string | number;
  name: string;
  image?: string;
  avatar?: string;
  role?: string;
}

// 스크롤 방향 타입
export type ScrollDirection = "left" | "right";

// 상점 타입
export interface Shop {
  id: string | number;
  title: string;
  image?: string;
  badge?: string;
  badgeColor?: BadgeColor;
  participants?: Participant[];
  description?: string;
  period?: string;
  hashtags?: string;
  [key: string]: any; // 추가 속성 허용
}

// AdminCreateCards Props 타입
export interface AdminCreateCardsProps {
  shops: Shop[];
  itemsPerRow: number;
  maxItems: number;
}

// UserCreateCards Props 타입
export interface UserCreateCardsProps {
  shops: Shop[];
  columns: number;
  showModal: boolean;
}

// TabGroup 관련 타입
export interface Tab {
  value: string;
  label: string;
  count?: number;
}

export interface TabGroupProps {
  modelValue: string;
  tabs: Tab[];
}

// Swiper 관련 타입
export interface SwiperItem {
  id: string | number;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  color?: string;
  [key: string]: any; // 추가 속성 허용
}

export interface AutoplayOptions {
  delay: number;
  disableOnInteraction?: boolean;
}

export interface SwiperProps {
  items: SwiperItem[];
  slidesPerView: number;
  spaceBetween: number;
  autoplay: AutoplayOptions | boolean;
  loop: boolean;
  showNavigation: boolean;
  showPagination: boolean;
  showScrollbar: boolean;
}

// 이벤트 타입들
export interface ShopClickEvent {
  shop: Shop;
}

export interface ParticipantClickEvent {
  participant: Participant;
}

export interface TabChangeEvent {
  tab: Tab;
}

export interface SlideChangeEvent {
  index: number;
  item: SwiperItem;
}
