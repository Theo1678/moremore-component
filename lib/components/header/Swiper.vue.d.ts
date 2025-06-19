declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    slideTo: (index: any, speed?: number) => void;
    slideToNext: () => void;
    slideToPrev: () => void;
    currentIndex: import('vue').ComputedRef<number>;
    isTransitioning: import('vue').ComputedRef<boolean>;
    $emit: (event: "slideChange" | "reachBeginning" | "reachEnd" | "touchStart" | "touchMove" | "touchEnd" | "transitionStart" | "transitionEnd", ...args: any[]) => void;
    items: unknown[];
    slidesPerView: string | number;
    spaceBetween: number;
    centeredSlides: boolean;
    loop: boolean;
    showNavigation: boolean;
    showPagination: boolean;
    showScrollbar: boolean;
    autoplay: boolean | Record<string, any>;
    allowTouchMove: boolean;
    touchRatio: number;
    threshold: number;
    speed: number;
    easing: string;
    initialSlide: number;
    breakpoints: Record<string, any>;
    keyName?: string;
    $props: {
        readonly items?: unknown[];
        readonly slidesPerView?: string | number;
        readonly spaceBetween?: number;
        readonly centeredSlides?: boolean;
        readonly loop?: boolean;
        readonly showNavigation?: boolean;
        readonly showPagination?: boolean;
        readonly showScrollbar?: boolean;
        readonly autoplay?: boolean | Record<string, any>;
        readonly allowTouchMove?: boolean;
        readonly touchRatio?: number;
        readonly threshold?: number;
        readonly speed?: number;
        readonly easing?: string;
        readonly initialSlide?: number;
        readonly breakpoints?: Record<string, any>;
        readonly keyName?: string;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    swiperContainer: HTMLDivElement;
    swiperWrapper: HTMLDivElement;
    swiperTrack: HTMLDivElement;
    scrollbar: HTMLDivElement;
}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            item: unknown;
            index: number;
            isActive: boolean;
        }): any;
        'pagination-bullet'?(_: {
            index: number;
            isActive: boolean;
        }): any;
    };
    refs: {
        swiperContainer: HTMLDivElement;
        swiperWrapper: HTMLDivElement;
        swiperTrack: HTMLDivElement;
        scrollbar: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
