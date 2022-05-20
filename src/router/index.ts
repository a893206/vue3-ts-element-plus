import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginRegister.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
