// 공통 타입 정의

// 배지 색상 타입
export type StatusCode =
  | "RECRUITING_PENDING"
  | "RECRUITING_ONGOING"
  | "RECRUITING_END"
  | "MARKET_ONGOING"
  | "MARKET_END";

// 참여작가 타입
export interface PartnerUserData {
  id: string | number;
  nickName: string;
  profileImgUrl?: string;
  avatar?: string;
  description?: string;
}

// 스크롤 방향 타입
export type ScrollDirection = "left" | "right";

// 상점 타입
export interface Shop {
  collaborationId: string | number;
  marketName: string;
  thumbImgUrl?: string;
  statusCode?: StatusCode;
  partnerUsersData?: PartnerUserData[];
  description?: string;
  period?: string;
  hashtags?: string;
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
export interface TabChangeEvent {
  tab: Tab;
}

export interface SlideChangeEvent {
  index: number;
  item: SwiperItem;
}
