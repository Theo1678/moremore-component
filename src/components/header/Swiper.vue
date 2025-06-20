<template>
  <div class="swiper-container" ref="swiperContainer">
    <!-- 이전 버튼 -->
    <IcArrowLeft
      v-if="showNavigation"
      @click="slideToPrev"
      :disabled="currentIndex === 0"
      class="swiper-button-prev"
      :class="{
        'type-multiple': multiple,
        'swiper-button-disabled': currentIndex === 0,
        'swiper-button-hidden': !showPrevButton,
      }"
    />

    <!-- 스와이퍼 래퍼 -->
    <div
      class="swiper-wrapper"
      ref="swiperWrapper"
      @mousedown="handleMouseDown"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :style="swiperStyles"
    >
      <div class="swiper-track" ref="swiperTrack" :style="trackStyles">
        <div
          v-for="(item, index) in items"
          :key="getItemKey(item, index)"
          class="swiper-slide"
          :class="{
            'swiper-slide-active': index === currentIndex,
            'swiper-slide-prev': index === currentIndex - 1,
            'swiper-slide-next': index === currentIndex + 1,
            ...getSlideClasses(index),
          }"
          :style="getSlideStyles(index)"
        >
          <slot :item="item" :index="index" :isActive="index === currentIndex">
            {{ item }}
          </slot>
        </div>
      </div>
    </div>

    <!-- 다음 버튼 -->
    <IcArrowRight
      v-if="showNavigation"
      @click="slideToNext"
      :disabled="currentIndex === maxIndex"
      class="swiper-button-next"
      :class="{
        'type-multiple': multiple,
        'swiper-button-disabled': currentIndex === maxIndex,
        'swiper-button-hidden': !showNextButton,
      }"
    />

    <!-- 페이지네이션 -->
    <div
      v-if="showPagination"
      class="swiper-pagination"
      :class="paginationClasses"
    >
      <button
        v-for="(dot, index) in paginationDots"
        :key="index"
        @click="slideTo(index * slidesPerView)"
        class="swiper-pagination-bullet"
        :class="{
          'swiper-pagination-bullet-active': index === currentPage,
        }"
      >
        <slot
          name="pagination-bullet"
          :index="index"
          :isActive="index === currentPage"
        >
          <span class="swiper-bullet-dot"></span>
        </slot>
      </button>
    </div>

    <!-- 스크롤바 -->
    <div v-if="showScrollbar" class="swiper-scrollbar" ref="scrollbar">
      <div class="swiper-scrollbar-drag" :style="scrollbarStyles"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import IcArrowLeft from "../ElementIcons/IcArrowLeft.vue";
import IcArrowRight from "../ElementIcons/IcArrowRight.vue";
import type { SwiperItem, AutoplayOptions } from "../../types/index";

// Props 정의
const props = withDefaults(
  defineProps<{
    // 데이터
    items?: SwiperItem[];
    multiple?: boolean;
    // 슬라이드 설정
    slidesPerView?: number;
    spaceBetween?: number;
    centeredSlides?: boolean;
    loop?: boolean;

    // 네비게이션
    showNavigation?: boolean;
    showPagination?: boolean;
    showScrollbar?: boolean;

    // 자동재생
    autoplay?: AutoplayOptions | boolean;

    // 터치/드래그
    allowTouchMove?: boolean;
    touchRatio?: number;
    threshold?: number;

    // 애니메이션
    speed?: number;
    easing?: string;

    // 기타
    initialSlide?: number;
    keyName?: string | null;

    // 반응형
    breakpoints?: Record<string, any>;
  }>(),
  {
    // 데이터
    items: () => [],

    // 슬라이드 설정
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    loop: false,

    // 네비게이션
    showNavigation: true,
    showPagination: true,
    showScrollbar: false,

    // 자동재생
    autoplay: false,

    // 터치/드래그
    allowTouchMove: true,
    touchRatio: 1,
    threshold: 10,

    // 애니메이션
    speed: 300,
    easing: "ease-out",

    // 기타
    initialSlide: 0,
    keyName: null,

    // 반응형
    breakpoints: () => ({}),
  }
);

// Emits 정의
const emit = defineEmits<{
  slideChange: [payload: { index: number; item: SwiperItem }];
  reachBeginning: [];
  reachEnd: [];
  touchStart: [event: TouchEvent | MouseEvent];
  touchMove: [event: TouchEvent | MouseEvent];
  touchEnd: [event: TouchEvent | MouseEvent];
  transitionStart: [payload: { index: number }];
  transitionEnd: [payload: { index: number }];
}>();

// Refs
const swiperContainer = ref(null);
const swiperWrapper = ref(null);
const swiperTrack = ref(null);
const scrollbar = ref(null);

// 상태 관리
const currentIndex = ref(props.initialSlide);
const isTransitioning = ref(false);
const isDragging = ref(false);
const startPos = ref({ x: 0, y: 0 });
const currentPos = ref({ x: 0, y: 0 });
const dragOffset = ref(0);
const autoplayTimer = ref(null);

// Computed 속성들
const maxIndex = computed(() => {
  if (props.loop) return props.items.length - 1;
  return Math.max(0, props.items.length - props.slidesPerView);
});

const currentPage = computed(() => {
  return Math.floor(currentIndex.value / props.slidesPerView);
});

const paginationDots = computed(() => {
  const pages = Math.ceil(props.items.length / props.slidesPerView);
  return Array.from({ length: pages }, (_, i) => i);
});

const showPrevButton = computed(() => {
  console.log("showPrevButton", props.loop, currentIndex.value, maxIndex.value);
  return props.loop || currentIndex.value > 0;
});

const showNextButton = computed(() => {
  console.log("showNextButton", props.loop, currentIndex.value, maxIndex.value);
  return props.loop || currentIndex.value < maxIndex.value;
});

const slideWidth = computed(() => {
  if (!swiperWrapper.value) return 0;
  const containerWidth = swiperWrapper.value.clientWidth;
  return (
    (containerWidth - (props.slidesPerView - 1) * props.spaceBetween) /
    props.slidesPerView
  );
});

const swiperStyles = computed(() => ({
  overflow: "hidden" as const,
  position: "relative" as const,
}));

const trackStyles = computed(() => {
  const translateX =
    -(currentIndex.value * (slideWidth.value + props.spaceBetween)) +
    dragOffset.value;

  return {
    display: "flex",
    transition:
      isTransitioning.value && !isDragging.value
        ? `transform ${props.speed}ms ${props.easing}`
        : "none",
    transform: `translateX(${translateX}px)`,
    gap: `${props.spaceBetween}px`,
  };
});

const scrollbarStyles = computed(() => {
  if (!props.items.length) return { width: "0%", left: "0%" };

  const progress = currentIndex.value / maxIndex.value;
  const width = (props.slidesPerView / props.items.length) * 100;
  const left = progress * (100 - width);

  return {
    width: `${width}%`,
    left: `${left}%`,
    transition: isTransitioning.value
      ? `all ${props.speed}ms ${props.easing}`
      : "none",
  };
});

const paginationClasses = computed(() => {
  return {
    "swiper-pagination-horizontal": true,
    "swiper-pagination-bullets": true,
  };
});

// 메서드들
const getItemKey = (item, index) => {
  return props.keyName && item[props.keyName] ? item[props.keyName] : index;
};

const getSlideClasses = (index) => {
  return {};
};

const getSlideStyles = (index) => {
  return {
    width: `${slideWidth.value}px`,
    flexShrink: 0,
  };
};

const slideTo = (index, speed = props.speed) => {
  if (isTransitioning.value && !isDragging.value) return;

  const targetIndex = Math.max(0, Math.min(index, maxIndex.value));

  if (targetIndex === currentIndex.value) return;

  isTransitioning.value = true;
  emit("transitionStart", { index: targetIndex });

  currentIndex.value = targetIndex;

  setTimeout(() => {
    isTransitioning.value = false;
    emit("transitionEnd", { index: targetIndex });
    emit("slideChange", { index: targetIndex, item: props.items[targetIndex] });

    if (targetIndex === 0) emit("reachBeginning");
    if (targetIndex === maxIndex.value) emit("reachEnd");
  }, speed);
};

const slideToNext = () => {
  if (props.loop && currentIndex.value === maxIndex.value) {
    slideTo(0);
  } else {
    slideTo(currentIndex.value + 1);
  }
};

const slideToPrev = () => {
  if (props.loop && currentIndex.value === 0) {
    slideTo(maxIndex.value);
  } else {
    slideTo(currentIndex.value - 1);
  }
};

// 터치/마우스 이벤트 핸들러
const handleMouseDown = (e) => {
  if (!props.allowTouchMove) return;

  isDragging.value = true;
  startPos.value = { x: e.clientX, y: e.clientY };
  currentPos.value = { x: e.clientX, y: e.clientY };

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);

  emit("touchStart", e);
};

const handleMouseMove = (e) => {
  if (!isDragging.value) return;

  currentPos.value = { x: e.clientX, y: e.clientY };
  const deltaX = (currentPos.value.x - startPos.value.x) * props.touchRatio;

  dragOffset.value = deltaX;
  emit("touchMove", e);
};

const handleMouseUp = (e) => {
  if (!isDragging.value) return;

  const deltaX = currentPos.value.x - startPos.value.x;
  const shouldSlide = Math.abs(deltaX) > props.threshold;

  if (shouldSlide) {
    if (deltaX > 0) {
      slideToPrev();
    } else {
      slideToNext();
    }
  }

  isDragging.value = false;
  dragOffset.value = 0;

  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);

  emit("touchEnd", e);
};

const handleTouchStart = (e) => {
  if (!props.allowTouchMove) return;

  isDragging.value = true;
  const touch = e.touches[0];
  startPos.value = { x: touch.clientX, y: touch.clientY };
  currentPos.value = { x: touch.clientX, y: touch.clientY };

  emit("touchStart", e);
};

const handleTouchMove = (e) => {
  if (!isDragging.value) return;

  const touch = e.touches[0];
  currentPos.value = { x: touch.clientX, y: touch.clientY };
  const deltaX = (currentPos.value.x - startPos.value.x) * props.touchRatio;

  dragOffset.value = deltaX;
  emit("touchMove", e);
};

const handleTouchEnd = (e) => {
  if (!isDragging.value) return;

  const deltaX = currentPos.value.x - startPos.value.x;
  const shouldSlide = Math.abs(deltaX) > props.threshold;

  if (shouldSlide) {
    if (deltaX > 0) {
      slideToPrev();
    } else {
      slideToNext();
    }
  }

  isDragging.value = false;
  dragOffset.value = 0;

  emit("touchEnd", e);
};

// 자동재생
const startAutoplay = () => {
  if (!props.autoplay) return;

  const delay =
    typeof props.autoplay === "object" ? props.autoplay.delay || 3000 : 3000;

  autoplayTimer.value = setInterval(() => {
    slideToNext();
  }, delay);
};

const stopAutoplay = () => {
  if (autoplayTimer.value) {
    clearInterval(autoplayTimer.value);
    autoplayTimer.value = null;
  }
};

// 라이프사이클
onMounted(() => {
  if (props.autoplay) {
    startAutoplay();
  }
});

onUnmounted(() => {
  stopAutoplay();
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);
});

// Watchers
watch(
  () => props.autoplay,
  (newVal) => {
    if (newVal) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
  }
);

// Public API
defineExpose({
  slideTo,
  slideToNext,
  slideToPrev,
  currentIndex: computed(() => currentIndex.value),
  isTransitioning: computed(() => isTransitioning.value),
});
</script>

<style scoped>
.swiper-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.swiper-track {
  position: relative;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
}

/* Navigation Buttons */
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 3cap;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  color: #333;
}

.swiper-button-prev {
  left: 10px;
}

.swiper-button-next {
  right: 10px;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: scale(1.1);
}
.type-multiple.swiper-button-prev {
  left: -40px;
  transform: translateY(-50%);
  transition: none;
  box-shadow: none;
  background: none;
}
.type-multiple.swiper-button-next {
  right: -40px;
  transform: translateY(-50%);
  transition: none;
  box-shadow: none;
  background: none;
}

.swiper-button-disabled {
  opacity: 0.35;
  cursor: not-allowed;
  pointer-events: none;
}

.swiper-button-hidden {
  opacity: 0;
  pointer-events: none;
}

/* Pagination */
.swiper-pagination {
  position: absolute;
  z-index: 10;
}

.swiper-pagination-horizontal {
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.swiper-pagination-bullets {
  display: flex;
  gap: 8px;
}

.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.swiper-bullet-dot {
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.swiper-pagination-bullet-active .swiper-bullet-dot {
  background: white;
  transform: scale(1.3);
}

.swiper-pagination-bullet:hover .swiper-bullet-dot {
  background: rgba(255, 255, 255, 0.8);
  transform: scale(1.2);
}

/* Scrollbar */
.swiper-scrollbar {
  position: absolute;
  bottom: 4px;
  left: 1%;
  width: 98%;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  z-index: 10;
}

.swiper-scrollbar-drag {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2px;
  cursor: pointer;
}

/* Touch-friendly styles */
@media (hover: none) {
  .swiper-button-prev,
  .swiper-button-next {
    opacity: 0.8;
  }

  .swiper-button-prev:active,
  .swiper-button-next:active {
    transform: scale(0.95);
  }
}

/* Animation utilities */
.swiper-slide {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.swiper-slide:not(.swiper-slide-active) {
  opacity: 0.8;
}

.swiper-fade .swiper-slide {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.swiper-fade .swiper-slide-active {
  opacity: 1;
}
</style>
