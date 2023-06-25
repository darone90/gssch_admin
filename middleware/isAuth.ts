import { AuthDTO } from '~/api/DTO';
export default defineNuxtRouteMiddleware(async () => {
  try {
    const api:any = useNuxtApp().$api;   
    const auth:AuthDTO = await api.user.authMe();

    if (auth.login) {
      return navigateTo('/');
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
