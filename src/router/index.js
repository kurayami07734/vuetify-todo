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
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const titleFromParams = to.params?.pageTitle;

  if (titleFromParams) {
    document.title = `${titleFromParams} - ${document.title}`;
  } else {
    document.title = to.meta?.title ?? from.meta?.title ?? "Todos";
  }
  next();
});
