import { defineStore } from "pinia";
import { reactive } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = reactive({});
  function login(userData) {
    user.value = userData;
  }
  function logout() {
    user.value = {};
  }
  return { user, login, logout };
});
