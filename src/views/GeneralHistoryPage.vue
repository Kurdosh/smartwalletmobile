<template>
  <h1 class="text-center">История</h1>
  <div class="history mt-3">
    <div
      v-for="transaction in transactions.slice().reverse()"
      :key="transaction.date"
    >
      <v-card
        class="mx-auto py-2 d-flex align-center justify-space-between"
        max-width="450"
      >
        <v-avatar
          v-if="transaction.amount > 0"
          class="ml-4"
          icon="mdi-arrow-top-right"
        ></v-avatar>
        <v-avatar v-else class="ml-4" icon="mdi-arrow-bottom-left"></v-avatar>
        <div>
          <v-card-title
            v-if="transaction.amount < 0"
            class="py-0"
            style="color: #ef5350"
            >{{ transaction.amount }} ₽</v-card-title
          >
          <v-card-title v-else class="py-0"
            >+{{ transaction.amount }} ₽</v-card-title
          >
          <v-card-subtitle>{{ transaction.category }}</v-card-subtitle>
        </div>
        <v-card-subtitle class="ml-auto">{{
          transaction.date.toLocaleString("ru", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })
        }}</v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted } from "vue";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { useRouter } from "vue-router";
const wallets = ref([]);
const transactions = ref([]);
const db = getFirestore();
const user = getAuth().currentUser.uid;
onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, `users/${user}/wallets/`));
  const fbwallets = [];
  querySnapshot.forEach((doc) => {
    fbwallets.push({ id: doc.id, ...doc.data() });
  });
  wallets.value = fbwallets;
  for (let i = 0; i < wallets.value.length; i++) {
    const querySnapshot = await getDocs(
      collection(
        db,
        `users/${user}/wallets/${wallets.value[i].id}/transactions`,
      ),
    );
    const fbTransactions = [];
    querySnapshot.forEach((doc) => {
      fbTransactions.push({ id: doc.id, ...doc.data() });
    });
    fbTransactions.forEach((transaction) => {
      transaction.date = new Date(transaction.date.seconds * 1000);
      transactions.value.push(...fbTransactions);
    });
  }
});
</script>

<style>
.v-img__img {
  width: 40px !important;
  height: 40px !important;
}

.v-icon {
  color: #fff !important;
}
</style>
