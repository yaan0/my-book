import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@pages/HomePage.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/favorites",
      component: () => import("@pages/FavoritesPage.vue"),
    },
  ],
});
