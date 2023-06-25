<template>
  <div class="Login">
    <v-form fast-fail @submit.prevent="login">
      <h3 class="Login_title">{{ $t('login.logging') }}</h3>
      <v-text-field v-model="username" :label="$t('login.userName')"></v-text-field>
      <v-text-field v-model="password" :label="$t('login.password')"></v-text-field>
      <v-btn type="submit" color="primary" block class="mt-2">{{ $t('login.login') }}</v-btn>
      <div v-if="message" class="Login_info">
        <p>{{ $t('login.' + message) }}</p>
      </div>
    </v-form>
  </div>
</template>
<script setup lang="ts">
import { AuthDTO } from '~/api/DTO';

definePageMeta({
  layout: 'login',
  middleware: ['is-auth']
});
const { $api }:any = useNuxtApp();

const username = ref<string>('');
const password = ref<string>('');
const message = ref<string>('');

const login = async () => {
  const response:AuthDTO = await $api.user.login(username.value, password.value);
  if(response.login) {
    navigateTo('/')
  } else {
    message.value = response.info;
  }
}

</script>
<style lang="scss" scoped>
.Login {
  width: 400px;
  height: 400px;
  margin: auto;
  &_title {
    margin-bottom: 10px;
    text-align: center;
  }
  &_info {
    width: 100%;
    text-align: center;
    padding-top: 1rem;
    
  }
}
</style>
