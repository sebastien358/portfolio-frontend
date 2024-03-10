import {defineStore} from "pinia";
import axios from "axios";
import {useMessageStore} from "@/stores/messageStore";

export const useUserStore = defineStore('userStore', {
    state: () => {
        return {}
    },
    actions: {
        async requestPassword(email: string) {
            const messageStore = useMessageStore()
            const formData = new FormData()
            formData.append('email', email)
            try {
                await axios.post(`https://api.dymawonder.fr/request/reset-password`, formData)
            } catch(e) {
                messageStore.addMessage('Identifiant introuvable', 'error')
                console.error(e)
            }
        },
        async resetPassword(password: string, confirm: string, token: string) {
            const messageStore = useMessageStore()

            const formData = new FormData()
            formData.append('password[first]', password)
            formData.append('password[second]', confirm)
            try {
                await axios.post(`https://api.dymawonder.fr/reset-password/${token}`, formData)
                messageStore.addMessage('Le mot de passe a été modifié', 'success')
            } catch(e) {
                messageStore.addMessage('Votre demande a expirée, veuillez renouveller votre demande pour modifier votre mot de passe', 'error')
                console.error(e)
            }
        }
    }
})