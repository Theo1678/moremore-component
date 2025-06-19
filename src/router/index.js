import { createRouter, createWebHistory } from "vue-router";
import CardsSection from "../views/cards/CardsSection.vue";
import TabsSection from "../views/tabs/TabsSection.vue";

const routes = [
  {
    path: "/",
    redirect: "/cards/admin-cards",
  },
  {
    path: "/cards",
    redirect: "/cards/admin-cards",
  },
  {
    path: "/cards/admin-cards",
    name: "AdminCards",
    component: CardsSection,
    props: { selectedSubCategory: "admin-cards" },
  },
  {
    path: "/cards/user-cards",
    name: "UserCards",
    component: CardsSection,
    props: { selectedSubCategory: "user-cards" },
  },
  {
    path: "/tabs",
    name: "Tabs",
    component: TabsSection,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
