<template>
  <v-app theme="dark">
    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view> </router-view>
      </v-container>
    </v-main>

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
  <router-view />
</template>
