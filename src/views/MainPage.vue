<template>
  <div class="main-page d-flex flex-column justify-space-between">
    <div v-for="account in accounts" :key="account.id">
      <v-card to="/account" class="py-3 my-2">
        <v-card-title class="pt-0"> {{ account.balance }} ₽</v-card-title>
        <v-card-subtitle>{{ account.name }}</v-card-subtitle>
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

<script setup>
import { ref } from "vue";
const accounts = ref([
  {
    id: 1,
    name: "Карта тинькофф",
    balance: 24523.05,
  },
  {
    id: 2,
    name: "Карта сбербанк",
    balance: 3573.65,
  },
  {
    id: 3,
    name: "Карта альфа",
    balance: 346.36,
  },
  {
    id: 4,
    name: "Карта втб",
    balance: 2.16,
  },
]);
</script>
