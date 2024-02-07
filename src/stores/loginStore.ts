import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

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
    }
  }
})