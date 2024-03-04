import { defineStore } from 'pinia'
import axios from "axios";
import {useUserAdminStore} from "@/stores/admin/userAdminStore";

export const useLoginStore = defineStore('loginStore', {
  state: () => {
    return {
      editLogin: null
    }
  },
  actions: {
    async initLogin() {
      this.editLogin = {
        username: '',
        password: ''
      }
    },
    async login() {
      const userAdminStore = useUserAdminStore()
      try {
        const response = await axios.post(`https://api.dymawonder.fr/api/login_check`, {
          username: this.editLogin.username,
          password: this.editLogin.password
        })
        sessionStorage.setItem('token', response.data.token)
        await userAdminStore.getMe()
      } catch(e) {
        console.error(e)
      }
    }
  }
})