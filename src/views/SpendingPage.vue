<template>
  <div class="">
    <h1 class="text-center mt-9">Потратить</h1>
    <v-form>
      <v-container>
        <v-select
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
import { useRouter } from "vue-router";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const router = useRouter();
const db = getFirestore();
const user = getAuth().currentUser.uid;
const usersRef = collection(db, "users");
const id = useRouter().currentRoute.value.params.id;

const addSpending = async () => {
  await addDoc(
    collection(usersRef, user, "wallets", id, "transactions"),
    {
      // eslint-disable-next-line no-undef
      amount: SpendingAmount.value,
      category: "Продукты",
      date: new Date(),
      type: "spending",
    },
    { merge: true },
  )
    .then((data) => {
      console.log(data);
      router.push("/spending");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
