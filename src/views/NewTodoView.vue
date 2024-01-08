<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card v-if="user.userId">
          <v-card-title> New note</v-card-title>
          <v-form>
            <v-text-field label="Title" v-model="title"></v-text-field>
            <v-textarea
              label="Text"
              placeholder="Starting writing here.."
              v-model="text"
            ></v-textarea>
          </v-form>
          <v-card-actions>
            <v-btn @click="saveNote">Save</v-btn>
          </v-card-actions>
        </v-card>
        <v-card-text v-else align="center" justify="center" class="ma-2 pa-2">
          <v-card-title> Login to make notes</v-card-title>
          <v-card flat align="center" justify="center" class="ma-2 pa-2">
            <v-btn to="/login" color="primary">login</v-btn>
          </v-card>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { todosCollection } from "../main";
import { addDoc } from "firebase/firestore";
import { useUserStore } from "@/stores/user.store";
import { useRouter } from "vue-router";
import { ref } from "vue";
const user = useUserStore();
const router = useRouter();
const title = ref("");
const text = ref("");
async function saveNote() {
  try {
    await addDoc(todosCollection, {
      owner: user.userId,
      title: title.value,
      text: text.value,
      createdAt: new Date().now(),
    });
    router.push("/");
  } catch (e) {
    alert(e.toString());
  }
}
</script>
