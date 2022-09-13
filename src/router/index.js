import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MainPage.vue"),
  },
  {
    path: "/history",
    name: "history",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HistoryPage.vue"),
  },
  {
    path: "/transfer",
    name: "transfer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TransferPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
