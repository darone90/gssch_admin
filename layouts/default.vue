<template>
  <div v-if="!loading">
    <LayoutsMainMenu class="Main"/>
    <div class="view">
      <div class="view_background" />
      <div class="view_content">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserData } from '~/store/user';

  const { $api }:any = useNuxtApp();
  const userStore = useUserData();

  const loading = ref<boolean>(true);

  onMounted(async () => {
    try {
      loading.value = true;
      const loginData = await $api.user.authMe();
      if(!loginData?.login) return navigateTo('/login');
      userStore.logIn(loginData.login);
      loading.value = false;
    } catch (err) {
      const { message } = err as Error
      const error = {
        statusCode: 500,
        message,
        statusMessage: "AuthLayout"
    }
      throw showError(error);
    }
  })
</script>

<style scoped lang="scss">
.view {
  margin-left: 16rem;
  width: calc(100% - 10rem);
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  
  &_background {
    background-image: url("/login/background.jpg");
    position: fixed;
    z-index: -2;
    top: 0;
    width: 100%;
    height: 100vh;
  }
}
</style>
 