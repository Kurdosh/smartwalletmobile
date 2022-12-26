/* eslint-disable */
import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/MainPage.vue"),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/general-history",
    name: "general-history",
    component: () => import("../views/GeneralHistoryPage.vue"),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/history/:id",
    name: "history",
    component: () => import("../views/HistoryPage.vue"),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfilePage.vue"),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/account/:id",
    name: "account",
    component: () => import("../views/AccountPage.vue"),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/income/:id",
    name: "income",
    component: () => import("../views/IncomePage.vue"),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/spending/:id",
    name: "spending",
    component: () => import("../views/SpendingPage.vue"),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-account",
    name: "add-account",
    component: () => import("../views/AddAccount.vue"),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterPage.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/SignInPage.vue"),
    meta: {
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = await getCurrentUser();
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else if (
    (to.path === "/login" || to.path === "/register") &&
    isAuthenticated
  ) {
    next("/");
  } else {
    next();
  }
});

export default router;
