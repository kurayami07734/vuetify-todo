/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";

// Router
import { router } from "./router/index";
import { useUserStore } from "./stores/user.store";

// Composables
import { createPinia } from "pinia";
import { createApp } from "vue";

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

export let firebaseApp = null;

if (!firebaseApp) {
  firebaseApp = initializeApp(firebaseConfig);
}

export const db = getFirestore();
export const todosCollection = collection(db, "todos");
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

setPersistence(auth, browserSessionPersistence);

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);

registerPlugins(app);

app.mount("#app");
