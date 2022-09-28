import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/MainPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/history",
    name: "history",
    component: () => import("../views/HistoryPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/transfer",
    name: "transfer",
    component: () => import("../views/TransferPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfilePage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/AccountPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/income",
    name: "income",
    component: () => import("../views/IncomePage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/spending",
    name: "spending",
    component: () => import("../views/SpendingPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-account",
    name: "add-account",
    component: () => import("../views/AddAccount.vue"),
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
  history: createWebHistory(process.env.BASE_URL),
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
