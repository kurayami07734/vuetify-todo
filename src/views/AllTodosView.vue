<template>
  <v-list>
    <v-list-item v-if="!isLoading && todos.length > 0" v-for="todo in todos">
      <v-card>
        <v-card-title>
          {{ todo.title }}
        </v-card-title>
        <v-card-text>
          <div v-if="todo.text.length > 50">
            {{ todo.text.slice(0, 50) }} ...
          </div>
          <div v-else>{{ todo.text }}</div>
        </v-card-text>
      </v-card>
    </v-list-item>
    <v-list-item v-else-if="todos.length == 0">Notes are missing</v-list-item>
  </v-list>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user.store";
import { todosCollection } from "../main";
import { getDocs } from "firebase/firestore";
const user = useUserStore();
const isLoading = ref(false);
let todos = [];

onMounted(async () => {
  isLoading.value = true;
  const querySnapshot = await getDocs(todosCollection);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (user.userId == data.owner) todos.push(data);
  });
  isLoading.value = false;
  todos.sort((a, b) => a.time - b.time);
});
</script>
