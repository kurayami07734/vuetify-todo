<template>
  <v-app-bar color="primary">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>My Notes</v-toolbar-title>
    <v-spacer />
    <v-btn variant="text" icon="mdi-plus" to="/new-note/" />
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list>
      <v-list-item to="/login/">Login</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
const drawer = ref(false);
</script>
