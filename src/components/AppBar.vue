<template>
  <v-app-bar color="primary">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title @click="$router.push('/')">My Notes</v-toolbar-title>
    <v-spacer />
    <v-btn variant="text" icon="mdi-plus" to="/new-note/" />
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list>
      <v-list-item v-if="!user.userId" to="/login/">Login</v-list-item>
      <v-list-item v-else to="/my-account/">My account</v-list-item>
      <v-list-item to="/new-note/">New note</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user.store";
const user = useUserStore();
const drawer = ref(false);
</script>
../stores/user.store
