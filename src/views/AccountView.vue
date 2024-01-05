<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card justify="center" align="center">
          <v-card-title v-if="user" class="text-h4 ma-2 pa-2">
            Welcome, {{ user.displayName }}
          </v-card-title>
          <v-avatar v-if="user" size="150">
            <v-img :src="user.photoURL" referrerpolicy="origin"> </v-img>
          </v-avatar>
          <v-card flat align="center" justify="center" class="ma-2 pa-2">
            <v-btn @click="logout" color="error">logout</v-btn>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user.store";
const user = useUserStore();
const router = useRouter();
function logout() {
  user.logout();
  router.push("/login");
}
</script>
../stores/user.store
