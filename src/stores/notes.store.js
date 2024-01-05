import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotesStore = defineStore("notes", () => {
  const notes = ref([]);
  function addNote(note) {
    notes.value.push(note);
  }
  function deleteNote(id) {
    notes.value = notes.value.filter((note) => note.id !== id);
  }
  function updateNote(id, note) {
    selectedNote = notes.value.find((note) => note.id === id);
    selectedNote = note;
    notes.value.push(selectedNote);
  }

  return { notes, addNote, deleteNote, updateNote };
});
