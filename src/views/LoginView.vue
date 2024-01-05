<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title> Login </v-card-title>
          <v-btn @click="loginWithGoogle">Continue with google</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from "vue-router";
import { auth, googleAuthProvider } from "../main";
import { useUserStore } from "../stores/userStore";
const router = useRouter();
const user = useUserStore();
import { signInWithPopup } from "firebase/auth";
function loginWithGoogle() {
  signInWithPopup(auth, googleAuthProvider)
    .then((res) => {
      user.login(res.user);
      router.push(`/user/${res.user.uid}`);
    })
    .catch((e) => console.error(e.toString()));
}
</script>
