import { AuthDTO } from '~/api/DTO';

export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    const api:any = useNuxtApp().$api;   
    const auth:AuthDTO = await api.user.authMe();
    if (!auth.login) {
      return navigateTo('/login');
    }
  } catch (err) {
    const { message } = err as Error
    const error = {
      statusCode: 500,
      message,
      statusMessage: "AuthMiddleware"
    }
    throw showError(error);
  }
});