<template>
  <div class="">
    <h1 class="text-center mt-9">Потратить</h1>
    <v-form>
      <v-container>
        <v-select
          v-model="selected"
          :items="items"
          variant="outlined"
          label="Категория"
        ></v-select>
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
  data() {
    return {
      selected: "",
      TransferAmount: null,
      items: [
        "Продукты",
        "Одежда",
        "Кафе",
        "Транспорт",
        "Развлечения",
        "Другое",
      ],
    };
  },
};
</script>

<script setup>
/* eslint-disable */
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  collection,
  doc,
  getDoc,
  addDoc,
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
const selected = ref("");

const addSpending = async () => {
  if (SpendingAmount.value > 0) {
    let balance = 0;
    const balanceRef = doc(db, "users", user, "wallets", id);
    let fbbalance = await getDoc(balanceRef);
    balance = fbbalance.data().balance;
    balance = Number(balance) - Number(SpendingAmount.value);

    await addDoc(collection(usersRef, user, "wallets", id, "transactions"), {
      amount: SpendingAmount.value,
      type: "spending",
      category: selected.value,
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
