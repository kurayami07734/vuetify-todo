<template>
  <v-container class="fill-height ma-2 pa-2" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card align="center" justify="center" class="ma-2 pa-2" flat>
          <v-card-title class="text-h4"> Login </v-card-title>
          <v-card-text flat align="center" justify="center" class="ma-2 pa-2">
            <v-btn
              @click="loginWithGoogle"
              color="primary"
              prepend-icon="mdi-google"
              >Continue with google</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from "vue-router";
import { auth, googleAuthProvider } from "../main";
import { useUserStore } from "../stores/user.store";
import { signInWithPopup } from "firebase/auth";

const router = useRouter();
const user = useUserStore();

function loginWithGoogle() {
  signInWithPopup(auth, googleAuthProvider)
    .then((res) => {
      user.login(res.user);
      router.push(`/all-todos/`);
    })
    .catch((e) => console.error(e.toString()));
}
</script>
