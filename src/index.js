import ShopListbox from "./components/ShopListbox.vue";
import ShopGallery from "./components/ShopGallery.vue";
import ShopDetailCard from "./components/ShopDetailCard.vue";
import ShopCardGrid from "./components/ShopCardGrid.vue";
import TabGroup from "./components/TabGroup.vue";

// 컴포넌트들을 export
export { ShopListbox, ShopGallery, ShopDetailCard, ShopCardGrid, TabGroup };

// Vue 플러그인으로 사용할 수 있도록 install 함수 제공
export default {
  install(app) {
    app.component("ShopListbox", ShopListbox);
    app.component("ShopGallery", ShopGallery);
    app.component("ShopDetailCard", ShopDetailCard);
    app.component("ShopCardGrid", ShopCardGrid);
    app.component("TabGroup", TabGroup);
  },
};
