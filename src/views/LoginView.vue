<template>
  <v-container class="fill-height ma-2 pa-2" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card align="center" justify="center" class="ma-2 pa-2">
          <v-card-title class="text-h4"> Login </v-card-title>
          <v-card flat align="center" justify="center" class="ma-2 pa-2">
            <v-btn
              @click="loginWithGoogle"
              color="primary"
              prepend-icon="mdi-google"
              >Continue with google</v-btn
            >
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from "vue-router";
import { auth, googleAuthProvider } from "../main";
import { useUserStore } from "../stores/user.store";
const router = useRouter();
const user = useUserStore();
import { signInWithPopup } from "firebase/auth";
function loginWithGoogle() {
  signInWithPopup(auth, googleAuthProvider)
    .then((res) => {
      user.login(res.user);
      router.push(`/my-account`);
    })
    .catch((e) => console.error(e.toString()));
}
</script>
../stores/user.store
