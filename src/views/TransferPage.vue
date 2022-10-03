<template>
  <div class="">
    <h1 class="text-center mt-9">Перевести</h1>
    <v-form>
      <v-container>
        <v-select :items="accounts" variant="outlined" label="Куда"></v-select>
        <v-text-field
          variant="outlined"
          v-model="TransferAmount"
          density="compact"
          label="Введите сумму"
          type="number"
        ></v-text-field>

        <v-btn
          variant="tonal"
          rounded="lg"
          class="block-center my-2"
          height="50px"
          width="100%"
        >
          Перевести
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<style>
.v-input__details {
  display: none;
}
.v-field__input {
  padding-left: 15px !important;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const accounts = ref([]);
const db = getFirestore();
onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "accounts"));
  const fbAccounts = [];
  querySnapshot.forEach((doc) => {
    fbAccounts.push({ name: doc.data().name });
  });
  accounts.value = fbAccounts;
  console.log(accounts);
});
</script>
