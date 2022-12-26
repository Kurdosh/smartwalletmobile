<template>
  <div class="">
    <h1 class="text-center mt-9">Потратить</h1>
    <v-form>
      <v-container>
        <v-select
          class="mb-2"
          v-model="category"
          :items="categories"
          label="Категория"
          variant="outlined"
        >
        </v-select>
        <v-text-field
          variant="outlined"
          v-model="SpendingAmount"
          density="compact"
          label="Введите сумму"
          type="number"
        ></v-text-field>

        <v-btn
          @click="addSpending"
          variant="tonal"
          rounded="lg"
          class="block-center my-2"
          height="50px"
          width="100%"
        >
          Потратить
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

<script>
export default {
  data: () => ({
    categories: [
      "Жилье",
      "Услуги",
      "Продукты",
      "Транспорт",
      "Развлечения",
      "Одежда",
      "Здоровье",
      "Подарки",
      "Другое",
    ],
  }),
};
</script>

<script setup>
/* eslint-disable */
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  getFirestore,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
const router = useRouter();
const db = getFirestore();
const user = getAuth().currentUser.uid;
const usersRef = collection(db, "users");
const id = useRouter().currentRoute.value.params.id;
const SpendingAmount = ref("");
const category = ref("");

const addSpending = async () => {
  if (SpendingAmount.value > 0) {
    let balance = 0;
    const balanceRef = doc(db, "users", user, "wallets", id);
    let date = new Date().getTime();
    date = -date;
    date = date.toString();
    let fbbalance = await getDoc(balanceRef);
    balance = fbbalance.data().balance;
    balance = Number(balance) - Number(SpendingAmount.value);

    await setDoc(doc(usersRef, user, "wallets", id, "transactions", date), {
      amount: -SpendingAmount.value,
      type: "spending",
      category: category.value,
      date: new Date(),
    });
    await updateDoc(doc(db, "users", user, "wallets", id), {
      balance: balance,
    }).then((data) => {
      router.push("/account/" + id);
    });
  } else {
    alert("Введите сумму");
  }
};
</script>
