import {defineStore} from "pinia";
import axios from "axios";

export const useUserAdminStore = defineStore('userAdminStore', {
    state: () => {
        return {
            user: [],
            editUser: null
        }
    },
    actions: {
        async getMe() {
            try {
                const response = await axios.get(`https://api.dymawonder.fr/admin/user/me`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.user = response.data
            } catch(e) {
                console.error(e)
            }
        },
        isLogged() {
            return sessionStorage.getItem('token') !== null
        },
        logout() {
            return sessionStorage.removeItem('token')
        },
        async initUser(){
            this.editUser = {
                email: '',
                newPassword: '',
            }
        },
        async getCurrentUser(id: number) {
            try {
                const response = await axios.get(`https://api.dymawonder.fr/admin/user/details/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.editUser = response.data
            } catch(e) {
                console.error(e)
            }
        },
        async userUpdate(id: number) {
            const formData = new FormData()
            formData.append('email', this.editUser.email)
            formData.append('newPassword', this.editUser.newPassword)
            try {
                await axios.post(`https://api.dymawonder.fr/admin/user/edit/${id}`, formData, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
            } catch(e) {
                console.error(e)
            }
        }
    }
})