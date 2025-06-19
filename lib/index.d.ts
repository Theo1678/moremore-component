import { default as AdminCreateCards } from './components/Cards/AdminCreateCards.vue';
import { default as UserCreateCards } from './components/Cards/UserCreateCards.vue';
import { default as TabGroup } from './components/Tabs/TabGroup.vue';
import { default as Swiper } from './components/header/Swiper.vue';
import { App } from 'vue';
export type * from './types/index';
export type * from './types/components';
export { AdminCreateCards, UserCreateCards, TabGroup, Swiper };
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
