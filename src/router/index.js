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
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginPage.vue"),
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
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProfilePage.vue"),
  },
  {
    path: "/account",
    name: "account",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AccountPage.vue"),
  },
  {
    path: "/income",
    name: "income",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/IncomePage.vue"),
  },
  {
    path: "/spending",
    name: "spending",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SpendingPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
