<template>
  <v-list>
    <v-list-item v-if="notes" v-for="note in notes">
      <v-card>
        <v-card-title>
          {{ note.title }}
        </v-card-title>
        {{ note.text }}
      </v-card>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user.store";
import { notesCollection } from "../main";
import { getDocs } from "firebase/firestore";
const user = useUserStore();
let notes = [];

onMounted(async () => {
  const querySnapshot = await getDocs(notesCollection);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (user.userId == data.owner) notes.push(data);
  });
  console.log(notes);
});
</script>
