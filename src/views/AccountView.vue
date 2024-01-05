<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title v-if="user">
            Welcome, {{ user.displayName }}</v-card-title
          >
          <p v-if="user">{{ user.uid }}</p>
          <v-card-actions>
            <v-btn @click="logout">logout</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/userStore";
const user = useUserStore();
const router = useRouter();
function logout() {
  user.logout();
  router.push("/login");
}
</script>
