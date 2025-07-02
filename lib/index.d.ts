import { ElementIcon, IcApp, IcChart, IcHelp, IcInfo, IcNotification, IcOption, IcPayback, IcPerson, IcPlane, IcUpdate, IcSetting, IcMedia, IcLink, IcArrowLeft, IcArrowRight, IcDown, IcCopy, IcDelete, IcPlus, IcMoreVertical, IcCancleFill, IcChecked, IcSparkle, IcPreview, IcLoadingPrimary, IcLayer, IcCta, IcSearch, IcClose } from './components/ElementIcons/index';
import { App, Component } from 'vue';
export type * from './types/index';
export declare const AdminCreateCards: Component, UserCreateCards: Component, TabGroup: Component, Swiper: Component;
export { ElementIcon, IcApp, IcChart, IcHelp, IcInfo, IcNotification, IcOption, IcPayback, IcPerson, IcPlane, IcUpdate, IcSetting, IcMedia, IcLink, IcArrowLeft, IcArrowRight, IcDown, IcCopy, IcDelete, IcPlus, IcMoreVertical, IcCancleFill, IcChecked, IcSparkle, IcPreview, IcLoadingPrimary, IcLayer, IcCta, IcSearch, IcClose, };
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
