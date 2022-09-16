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
          v-model="TransferAmount"
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
