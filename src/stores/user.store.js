import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const userId = ref("");
  const displayName = ref("");
  const photoURL = ref("");
  function login(userData) {
    userId.value = userData.uid;
    displayName.value = userData.displayName;
    photoURL.value = userData.photoURL;
  }
  function logout() {
    userId.value = "";
    displayName.value = "";
    photoURL.value = "";
  }
  return { userId, displayName, photoURL, login, logout };
});
