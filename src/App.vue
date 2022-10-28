<template>
  <v-app theme="dark">
    <div>
      <v-container>
        <v-app-bar app class="py-3" v-if="isLoggedIn">
          <v-container class="d-flex align-center">
            <v-avatar size="50" class="ml-3">
              <span class="white--text text-h5">SM</span>
            </v-avatar>
            <v-btn to="/profile">
              SmartWallet
              <v-icon> mdi-chevron-right </v-icon>
            </v-btn>
            <v-btn class="ml-auto" @click="handleSignOut">Выйти</v-btn>
          </v-container>
        </v-app-bar>
        <v-main>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-main>
      </v-container>

      <v-bottom-navigation>
        <v-btn to="/" width="100px">
          <v-icon>mdi-home</v-icon>
          <span>Главная</span>
        </v-btn>
        <v-btn to="/history" width="100px">
          <v-icon>mdi-history</v-icon>
          <span>История</span>
        </v-btn>

        <v-btn to="/transfer" width="100px">
          <v-icon>mdi-swap-vertical</v-icon>
          <span>Переводы</span>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </v-app>
</template>
<style>
html {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.v-avatar {
  background-color: #2874a6;
}
</style>

<script setup>
/* eslint-disable */
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
const router = useRouter();
const isLoggedIn = ref(false);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/login");
  });
};
</script>

<style>
.v-input__details {
  display: none;
}
.v-field__input {
  padding-left: 15px !important;
}
</style>
