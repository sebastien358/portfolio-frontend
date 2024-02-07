import { defineStore } from 'pinia'
import axios from "axios";

const BASE_URL = 'https://127.0.0.1:8000'

export const useRegistrationStore = defineStore('registrationStore', {
  state: () => {
    return {
      editRegistration: null
    }
  },
  actions: {
    async initRegistration() {
      this.editRegistration = {
        email: '',
        password: '',
        confirm: ''
      }
    },
    async createRegistration() {
      const formData = new FormData()
      formData.append('email', this.editRegistration.email)
      formData.append('password[first]', this.editRegistration.password)
      formData.append('password[second]', this.editRegistration.confirm)

      try {
        await axios.post(`${BASE_URL}/registration`, formData)
      } catch(e) {
        console.error(e)
      }
    }
  }
})