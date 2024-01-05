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
import AppBar from "./components/AppBar.vue";
//
</script>
