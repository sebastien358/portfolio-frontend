import {defineStore} from "pinia";
import axios from "axios";

export const useTechnoAdminStore = defineStore('technoAdminStore', {
    state: () => {
        return {
            technos: [],
            editTechno: null
        }
    },
    actions: {
        async getTechno() {
            try {
                const response = await axios.get(`https://api.dymawonder.fr/admin/techno/list`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.technos = response.data
            } catch(e) {
                console.error(e)
            }
        },
        async getCurrentTechno(id: number) {
            try {
                const response = await axios.get(`https://api.dymawonder.fr/admin/techno/details/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.editTechno = response.data
            } catch(e) {
                console.error(e)
            }
        },
        async initTechno() {
            this.editTechno = {
                pictures: []
            }
        },
        async technoCreate(pictures: Object) {
            const formData = new FormData()
            for (let i = 0; i < pictures.length; i++) {
                formData.append(`pictures_${i}`, pictures[i])
            }

            try {
                await axios.post(`https://api.dymawonder.fr/admin/techno/new`, formData, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
            } catch (e) {
                console.error(e)
            }
        },
        async deleteTechno() {
            try {
                await axios.delete(`https://api.dymawonder.fr/admin/techno/delete/${this.editTechno.id}`, {
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