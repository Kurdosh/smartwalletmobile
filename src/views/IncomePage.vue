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
          to="/account"
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

<script>
export default {
  data() {
    return {
      IncomeAmount: null,
    };
  },
};
</script>
