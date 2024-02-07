import {defineStore} from "pinia";
import axios from "axios";

const BASE_URL= 'https://127.0.0.1:8000'

export const useUserStore = defineStore('userStore', {
    state: () => {
        return {}
    },
    actions: {
        async requestPassword(email) {
            const formData = new FormData()
            formData.append('email', email)
            try {
                await axios.post(`${BASE_URL}/request/reset-password`, formData)
            } catch(e) {
                console.error(e)
            }
        }
    }
})