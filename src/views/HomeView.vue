<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card flat v-if="!user.userId">
          <v-card-title>
            <div class="text-h2">Welcome!</div>
          </v-card-title>
          <v-card-text>
            <p>Login through burger menu</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useUserStore } from "../stores/user.store";
const user = useUserStore();
</script>
