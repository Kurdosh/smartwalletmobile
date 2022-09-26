<template>
  <main>
    <v-form class="d-flex flex-column">
      <h1>Регистрация</h1>
      <v-text-field
        v-model="email"
        label="Email"
        name="email"
        prepend-icon="mdi-email"
        type="email"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Пароль"
        name="password"
        prepend-icon="mdi-lock"
        type="password"
      ></v-text-field>
      <v-btn @click="register" class="my-4"> Зарегистрироваться </v-btn>
      <v-btn @click="signInWithGoogle"> Войти с помощью google </v-btn>
      <v-btn variant="text" to="/login">Уже есть аккаунт</v-btn>
    </v-form>
  </main>
</template>

<script setup>
/* eslint-disable */
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();
const auth = getAuth();
const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      router.push("/");
      return getRedirectResult(auth);
    })
    .then((result) => {
      router.push("/");
    })
    .catch((error) => {
      //   alert(error.message);
    });
};
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider)
    .then((result) => {
      router.push("/");
    })
    .catch((error) => {
      alert(error.message);
    });
};
</script>
