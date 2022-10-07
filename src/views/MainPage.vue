<template>
  <div class="main-page d-flex flex-column justify-space-between">
    <div v-for="account in accounts" :key="account.id">
      <v-card to="/" class="py-3 my-2">
        <v-card-title class="pt-0"> {{ account.balance }} ₽</v-card-title>
        <v-card-subtitle>{{ account.name }}</v-card-subtitle>
        <div class="card__link">
          <router-link :to="{ name: 'account', params: { id: account.id } }"
            >Кнопка</router-link
          >
        </div>
      </v-card>
    </div>
    <v-btn
      class="mt-3"
      width="60px"
      height="64px"
      style="margin: 0 auto; border-radius: 50%"
      to="/add-account"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<style scoped>
.card__link a {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const accounts = ref([]);
const db = getFirestore();
const user = getAuth().currentUser.uid;
onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, `users/${user}/wallets`));
  const fbAccounts = [];
  querySnapshot.forEach((doc) => {
    fbAccounts.push({ id: doc.id, ...doc.data() });
    accounts.value = fbAccounts;
  });
});
</script>
