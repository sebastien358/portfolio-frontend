import {defineStore} from "pinia";
import axios from "axios";

export const useUserStore = defineStore('userStore', {
    state: () => {
        return {}
    },
    actions: {
        async requestPassword(email: string) {
            const formData = new FormData()
            formData.append('email', email)
            try {
                await axios.post(`https://api.dymawonder.fr/request/reset-password`, formData)
            } catch(e) {
                console.error(e)
            }
        },
        async resetPassword(password: string, confirm: string, token: string) {
            const formData = new FormData()
            formData.append('password[first]', password)
            formData.append('password[second]', confirm)
            try {
                await axios.post(`https://api.dymawonder.fr/reset-password/${token}`, formData)
            } catch(e) {
                console.error(e)
            }
        }
    }
})