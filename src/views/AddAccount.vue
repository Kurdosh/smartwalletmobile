<template>
  <div class="">
    <h1 class="text-center mt-9">Добавить счет</h1>
    <v-form>
      <v-container>
        <v-text-field
          variant="outlined"
          v-model="AccountName"
          density="compact"
          label="Введите название"
          type="text"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          v-model="Balance"
          density="compact"
          label="Введите сумму"
          type="number"
        ></v-text-field>

        <v-btn
          @click="addAccount"
          variant="tonal"
          rounded="lg"
          class="block-center my-2"
          height="50px"
          width="100%"
        >
          Добавить
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<style>
.v-input__details {
  display: none !important;
}
</style>

<script setup>
/* eslint-disable */
import { ref } from "vue";
import { useRouter } from "vue-router";
import { collection, doc, setDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const router = useRouter();
const db = getFirestore();
const AccountName = ref("");
const Balance = ref("");
const user = getAuth().currentUser.uid;
const usersRef = collection(db, "users");
let date = new Date().getTime();
date = date.toString();

const addAccount = async () => {
  await setDoc(
    doc(usersRef, user, "wallets", date),
    {
      name: AccountName.value,
      balance: Balance.value,
    },
    { merge: true },
  )
    .then((data) => {
      router.push("/");
    })
    .catch((error) => {
      alert(error.message);
    });
};
</script>
