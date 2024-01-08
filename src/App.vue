<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
import { auth } from "./main";
import AppBar from "./components/AppBar.vue";
import { onMounted } from "vue";
import { useUserStore } from "./stores/user.store";
import { onAuthStateChanged } from "firebase/auth";

const userStore = useUserStore();
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) userStore.login(user);
  });
});
//
</script>
