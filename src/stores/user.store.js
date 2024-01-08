import { defineStore } from "pinia";
import { ref } from "vue";
import { signOut } from "firebase/auth";
import { auth } from "../main";

export const useUserStore = defineStore("user", () => {
  const userId = ref("");
  const displayName = ref("");
  const photoURL = ref("");
  const user = ref({});
  function login(userData) {
    userId.value = userData.uid;
    displayName.value = userData.displayName;
    photoURL.value = userData.photoURL;
    user.value = userData;
  }
  function logout() {
    userId.value = "";
    displayName.value = "";
    photoURL.value = "";
    signOut(auth);
  }
  return { userId, displayName, photoURL, login, logout };
});
