/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Components
import App from "./App.vue";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
};

// Router
import { router } from "./router/index";

// Composables
import { createPinia } from "pinia";
import { createApp } from "vue";

const pinia = createPinia();

export let firebaseApp = null;
if (!firebaseApp) {
  firebaseApp = initializeApp(firebaseConfig);
}

export const db = getFirestore();
export const notesCollection = collection(db, "notes");
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
const app = createApp(App);

app.use(pinia);
app.use(router);
registerPlugins(app);

app.mount("#app");
