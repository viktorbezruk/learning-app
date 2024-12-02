import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/:pathMatch(.*)*", component: NotFoundPage, name: "not-found" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
