<template>
  <div class="">
    <h1 class="text-center mt-9">Добавить счет</h1>
    <v-form>
      <v-container>
        <v-text-field
          variant="outlined"
          v-model="AccountName"
          density="compact"
          label="Введите название"
          type="text"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          v-model="Balance"
          density="compact"
          label="Введите сумму"
          type="number"
        ></v-text-field>

        <v-btn
          to="/"
          variant="tonal"
          rounded="lg"
          class="block-center my-2"
          height="50px"
          width="100%"
        >
          Добавить
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<style>
.v-input__details {
  display: none !important;
}
</style>

<script>
export default {
  data() {
    return {
      AccountName: null,
      Balance: null,
    };
  },
};
</script>
