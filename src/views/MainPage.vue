<template>
  <div class="main-page">
    <v-card to="/account" class="py-3">
      <v-card-title class="pt-0">{{ balance }} ₽</v-card-title>
      <v-card-subtitle>Карта тинькофф</v-card-subtitle>
    </v-card>
    <v-card to="/account" class="py-3 my-3">
      <v-card-title class="pt-0">26764.46 ₽</v-card-title>
      <v-card-subtitle>Карта альфа</v-card-subtitle>
    </v-card>
    <v-card to="/account" class="py-3">
      <v-card-title class="pt-0">1462.00 ₽</v-card-title>
      <v-card-subtitle>Наличные</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      balance: 24523.05,
    };
  },
  methods: {},
};
</script>
