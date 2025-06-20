import { default as AdminCreateCards } from './components/Cards/AdminCreateCards.vue';
import { default as UserCreateCards } from './components/Cards/UserCreateCards.vue';
import { default as TabGroup } from './components/Tabs/TabGroup.vue';
import { default as Swiper } from './components/header/Swiper.vue';
import { ElementIcon, IcApp, IcChart, IcHelp, IcInfo, IcNotification, IcOption, IcPayback, IcPerson, IcPlane, IcUpdate, IcSetting, IcMedia, IcLink, IcArrowLeft, IcArrowRight, IcDown, IcCopy, IcDelete, IcPlus, IcMoreVertical, IcCancleFill, IcChecked, IcSparkle, IcPreview, IcLoadingPrimary, IcLayer, IcCta } from './components/ElementIcons/index';
import { App } from 'vue';
export type * from './types/index';
export type * from './types/components';
export { AdminCreateCards, UserCreateCards, TabGroup, Swiper };
export { ElementIcon, IcApp, IcChart, IcHelp, IcInfo, IcNotification, IcOption, IcPayback, IcPerson, IcPlane, IcUpdate, IcSetting, IcMedia, IcLink, IcArrowLeft, IcArrowRight, IcDown, IcCopy, IcDelete, IcPlus, IcMoreVertical, IcCancleFill, IcChecked, IcSparkle, IcPreview, IcLoadingPrimary, IcLayer, IcCta, };
export interface MoremoreComponentOptions {
    prefix?: string;
}
declare const MoremoreComponent: {
    install(app: App, options?: MoremoreComponentOptions): void;
};
export default MoremoreComponent;
declare global {
    interface Window {
        Vue?: any;
    }
}
