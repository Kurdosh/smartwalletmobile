<template>
  <div
    class="d-flex flex-column justify-space-between align-center"
    style="height: calc(100vh - 200px)"
  >
    <h1 class="text-center mt-9">{{ balance }} ₽</h1>
    <div class="d-flex flex-column align-center">
      <v-btn
        variant="tonal"
        rounded="lg"
        class="block-center my-2"
        height="50px"
        width="300px"
      >
        Добавить трату
        <router-link :to="{ name: 'spending', params: { id: id } }"
          >Добавить трату
        </router-link>
      </v-btn>
      <v-btn
        variant="tonal"
        rounded="lg"
        class="block-center my-2"
        height="50px"
        width="300px"
        >Пополнить
        <router-link :to="{ name: 'income', params: { id: id } }"
          >Пополнить
        </router-link>
      </v-btn>
      <v-btn
        to="/transfer"
        variant="tonal"
        rounded="lg"
        class="block-center my-2"
        height="50px"
        width="300px"
      >
        Перевести
      </v-btn>
      <v-btn
        to="/history"
        variant="tonal"
        rounded="lg"
        class="block-center my-2"
        height="50px"
        width="300px"
      >
        История
        <router-link :to="{ name: 'history', params: { id: id } }"
          >История
        </router-link>
      </v-btn>
    </div>
    <v-btn
      @click.stop="dialog = true"
      variant="text"
      rounded="lg"
      class="block-center mb-56px font-weight-light"
      width="300px"
    >
      Удалить счет
    </v-btn>
  </div>

  <v-dialog v-model="dialog" max-width="290">
    <v-card>
      <v-card-text> Вы уверены? </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="dialog = false"> Нет </v-btn>

        <v-btn
          color="green darken-1"
          text
          @click="(dialog = false), deleteAccount()"
        >
          Да
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.v-btn__content a {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<script setup>
/* eslint-disable */
import { doc, getDoc, deleteDoc, getFirestore } from "firebase/firestore";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { getAuth } from "firebase/auth";
const router = useRouter();
const id = useRouter().currentRoute.value.params.id;
const db = getFirestore();
const user = getAuth().currentUser.uid;
const balance = ref([]);
onMounted(async () => {
  const balanceRef = doc(db, "users", user, "wallets", id);
  let fbbalance = await getDoc(balanceRef);
  balance.value = fbbalance.data().balance;
});

const deleteAccount = async () => {
  const accountRef = doc(db, "users", user, "wallets", id);
  await deleteDoc(accountRef).then(() => {
    router.push("/");
  });
};
</script>
