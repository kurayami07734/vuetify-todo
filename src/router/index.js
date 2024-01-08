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
    path: "/new-todo/",
    name: "new-todo",
    component: () => import("../views/NewTodoView.vue"),
    meta: {
      title: "New Todo",
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
    path: "/all-todos/",
    name: "all-todos",
    component: () => import("../views/AllTodosView.vue"),
    meta: {
      title: "All Todos",
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
