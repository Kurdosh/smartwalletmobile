<template>
  <div class="history">
    <v-card class="mx-auto" max-width="450">
      <v-list :items="items" item-props lines="two">
        <template v-slot:subtitle="{ subtitle }">
          <div v-html="subtitle"></div>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { type: "subheader", title: "Сегодня" },
      {
        prependAvatar: "https://s3-symbol-logo.tradingview.com/lenta--600.png",
        title: "2462.74 ₽",
        subtitle: "Продукты",
      },
      {
        prependAvatar:
          "https://invest-brands.cdn-tinkoff.ru/RU000A0JKQU8x640.png",
        title: "167.26 ₽",
        subtitle: "Продукты",
      },
      {
        prependAvatar:
          "https://free-png.ru/wp-content/uploads/2022/06/free-png.ru-441-340x340.png",
        title: "637.74 ₽",
        subtitle: "Кафе",
      },
      {
        prependAvatar:
          "https://play-lh.googleusercontent.com/UMXKGiMzghuyeS1Ds5W_ketAaiMzSHNf4u3c5w_xBldo7jtKKrzIHWiMYeG9pAKRL7Y",
        title: "553.01 ₽",
        subtitle: "Продукты",
      },
      {
        prependAvatar:
          "https://cdn.forbes.ru/forbes-static/new/2021/11/Company-619d3288c340a-619d3288e8cde.png",
        title: "2499.90 ₽",
        subtitle: "Транспорт",
      },
      {
        prependAvatar: "https://s3-symbol-logo.tradingview.com/lenta--600.png",
        title: "2462.00 ₽",
        subtitle: "Продукты",
      },
      { type: "subheader", title: "Вчера" },
      {
        prependAvatar: "https://s3-symbol-logo.tradingview.com/lenta--600.png",
        title: "2462.74 ₽",
        subtitle: "Продукты",
      },
      {
        prependAvatar:
          "https://invest-brands.cdn-tinkoff.ru/RU000A0JKQU8x640.png",
        title: "167.26 ₽",
        subtitle: "Продукты",
      },
      {
        prependAvatar:
          "https://free-png.ru/wp-content/uploads/2022/06/free-png.ru-441-340x340.png",
        title: "637.74 ₽",
        subtitle: "Кафе",
      },
      {
        prependAvatar:
          "https://play-lh.googleusercontent.com/UMXKGiMzghuyeS1Ds5W_ketAaiMzSHNf4u3c5w_xBldo7jtKKrzIHWiMYeG9pAKRL7Y",
        title: "553.01 ₽",
        subtitle: "Продукты",
      },
      {
        prependAvatar:
          "https://cdn.forbes.ru/forbes-static/new/2021/11/Company-619d3288c340a-619d3288e8cde.png",
        title: "2499.90 ₽",
        subtitle: "Транспорт",
      },
      {
        prependAvatar: "https://s3-symbol-logo.tradingview.com/lenta--600.png",
        title: "2462.00 ₽",
        subtitle: "Продукты",
      },
    ],
  }),
};
</script>

<style>
.v-img__img {
  width: 40px !important;
  height: 40px !important;
}
</style>
