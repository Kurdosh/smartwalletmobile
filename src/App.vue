<template>
  <v-app theme="dark">
    <v-container>
      <v-app-bar app class="py-3">
        <v-container>
          <v-avatar size="50" class="ml-3">
            <span class="white--text text-h5">{{ userName[0] }}</span>
          </v-avatar>
          <v-btn to="/profile">
            {{ userName }}
            <v-icon> mdi-chevron-right </v-icon>
          </v-btn>
        </v-container>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view> </router-view>
        </v-container>
      </v-main>
    </v-container>

    <v-bottom-navigation v-model="value">
      <v-btn to="/">
        <v-icon>mdi-home</v-icon>
        <span>Главная</span>
      </v-btn>
      <v-btn to="/history">
        <v-icon>mdi-history</v-icon>
        <span>История</span>
      </v-btn>

      <v-btn to="/transfer">
        <v-icon>mdi-swap-vertical</v-icon>
        <span>Переводы</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>
<style>
html {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.v-avatar {
  background-color: #2874a6;
}
</style>

<script>
export default {
  name: "App",
  data() {
    return {
      userName: "Федор",
      balance: 24523.05,
    };
  },
  methods: {},
};
</script>
