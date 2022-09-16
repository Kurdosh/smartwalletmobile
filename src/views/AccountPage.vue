<template>
  <div
    class="d-flex flex-column justify-space-between align-center"
    style="height: calc(100vh - 200px)"
  >
    <h1 class="text-center mt-9">24523.05 ₽</h1>
    <div class="d-flex flex-column align-center">
      <v-btn
        to="/spending"
        variant="tonal"
        rounded="lg"
        class="block-center my-2"
        height="50px"
        width="300px"
      >
        Добавить трату
      </v-btn>
      <v-btn
        to="/income"
        variant="tonal"
        rounded="lg"
        class="block-center my-2"
        height="50px"
        width="300px"
      >
        Пополнить
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
        Отчет
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

        <v-btn color="green darken-1" text @click="dialog = false"> Да </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
