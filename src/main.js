import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBapqVBMWk004pLEcU_jG3K21SkmRnCwNA",
  authDomain: "smartwalletmobile.firebaseapp.com",
  projectId: "smartwalletmobile",
  storageBucket: "smartwalletmobile.appspot.com",
  messagingSenderId: "131122107188",
  appId: "1:131122107188:web:bbe71f0b854019597dcb61",
  measurementId: "G-D17YT3K7H3",
};

const fireabaseApp = initializeApp(firebaseConfig);
loadFonts();
createApp(App).use(router).use(store).use(vuetify).mount("#app");

export const db = fireabaseApp.firestore();
