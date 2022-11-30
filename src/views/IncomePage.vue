<template>
  <div class="">
    <h1 class="text-center mt-9">Пополнить</h1>
    <v-form>
      <v-container>
        <v-text-field
          variant="outlined"
          v-model="IncomeAmount"
          density="compact"
          label="Введите сумму"
          type="number"
        ></v-text-field>

        <v-btn
          @click="addIncome"
          variant="tonal"
          rounded="lg"
          class="block-center my-2"
          height="50px"
          width="100%"
        >
          Пополнить
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
/* eslint-disable */
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  doc,
  collection,
  setDoc,
  updateDoc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
const router = useRouter();
const db = getFirestore();
const IncomeAmount = ref("");
const user = getAuth().currentUser.uid;
const usersRef = collection(db, "users");
const id = useRouter().currentRoute.value.params.id;

const addIncome = async () => {
  if (IncomeAmount.value > 0) {
    let balance = 0;
    const balanceRef = doc(db, "users", user, "wallets", id);
    let fbbalance = await getDoc(balanceRef);
    let date = new Date().getTime();
    date = -date;
    date = date.toString();
    balance = fbbalance.data().balance;
    balance = Number(balance) + Number(IncomeAmount.value);

    await setDoc(doc(usersRef, user, "wallets", id, "transactions", date), {
      amount: IncomeAmount.value,
      type: "income",
      category: "Пополнение",
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
