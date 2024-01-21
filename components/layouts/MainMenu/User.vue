<template>
  <div class="User">
    <h2>{{ $t('navigation.welcome') }}</h2>
    <v-list-item
      lines="two"
      :title="login"
      :subtitle="$t('navigation.loggedIn')"
    ></v-list-item>
    <v-btn 
      class="User_logout" 
      size="small" 
      elevation="4" 
      color="indigo-darken-3"
      @click="logout"
    >
      {{ $t('navigation.logout') }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { useUserData } from '~/store/user';

const { $api }:any = useNuxtApp();
const userStore = useUserData()
const { login } = userStore

const logout = async () => {
  await $api.user.logout();
  navigateTo('/login')
}
</script>

<style lang="scss" scoped>
  .User {
    padding: 1rem;
    &_logout {
      margin: 1rem;
      float: right;
    }
  }
</style>
