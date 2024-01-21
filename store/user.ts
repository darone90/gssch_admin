import { defineStore } from 'pinia'

export const useUserData = defineStore('user', {
  state: () => ({
    login: "",
  }),
  getters: {
    getLogin: (state):string => state.login
  },
  actions: {
    logout():void {
      this.login = '';
    },
    logIn(login: string):void {
      this.login = login;
    }
  },
})