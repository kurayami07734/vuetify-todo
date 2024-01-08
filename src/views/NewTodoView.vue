<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title> New Todo</v-card-title>
          <v-form>
            <v-text-field label="Title" v-model="title"></v-text-field>
            <v-textarea
              label="Text"
              placeholder="Starting writing here.."
              v-model="text"
            ></v-textarea>
            <v-select
              v-model="tags"
              chips
              label="Tags"
              multiple
              :items="availableTags"
            ></v-select>
          </v-form>
          <v-card-actions>
            <v-btn @click="saveNote">Save</v-btn>
          </v-card-actions>
        </v-card>
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
import { onMounted } from "vue";
const availableTags = ["Important", "Groceries", "Work"];
const user = useUserStore();
const router = useRouter();
const title = ref("");
const text = ref("");
const tags = ref([]);
onMounted(() => {
  if (!user.userId) router.push("/login");
});
async function saveNote() {
  try {
    await addDoc(todosCollection, {
      owner: user.userId,
      title: title.value,
      text: text.value,
      tags: tags.value,
      createdAt: Date.now(),
    });
    router.push("/all-todos");
  } catch (e) {
    alert(e.toString());
  }
}
</script>
