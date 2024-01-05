import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/new-note/",
    name: "new-note",
    component: () => import("../views/NewNoteView.vue"),
    meta: {
      title: "New notes",
    },
  },
  {
    path: "/login/",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    meta: {
      title: "Login",
    },
  },
  {
    path: "/my-account/",
    name: "my-account",
    component: () => import("../views/AccountView.vue"),
    meta: {
      title: "My account",
    },
  },
  {
    path: "/all-notes/",
    name: "all-notes",
    component: () => import("../views/AllNotesView.vue"),
    meta: {
      title: "All Notes",
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ?? from.meta?.title ?? "Todos";
  next();
});
