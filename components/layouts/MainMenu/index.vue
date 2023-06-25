<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        theme="dark"
        :permanent="true"
        image="/layouts/main_menu_bg.jpg"
      >
      <template v-slot:prepend>
        <User/>
        </template>
        <v-divider></v-divider>
        <List/>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>
<script setup>
import User from "./User"
import List from "./List"

</script>