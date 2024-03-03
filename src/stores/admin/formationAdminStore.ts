import {defineStore} from "pinia";
import axios from "axios";

export const useFormationAdminStore = defineStore('formationAdminStore', {
    state: () => {
        return {
            formations: [],
            editFormation: null
        }
    },

    actions: {
        async getFormations() {
            try {
                 const response = await axios.get('https://127.0.0.1:8000/admin/formation/list', {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.formations = response.data
            } catch(e) {
                console.log(e)
            }
        },
        async getCurrentFormation(id: number){
            try {
                const response = await axios.get(`https://127.0.0.1:8000/admin/formation/details/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.editFormation = response.data
            } catch(e) {
                console.error(e)
            }
        },
        async initFormation() {
            this.editFormation = {
                year: '',
                diploma: '',
                job: '',
                techno: '',
                pictures: []
            }
        },
        async createFormation(pictures) {
            const formData = new FormData()
            formData.append('year', this.editFormation.year)
            formData.append('diploma', this.editFormation.diploma)
            formData.append('job', this.editFormation.job)
            formData.append('techno', this.editFormation.techno)
            for (let i = 0; i < pictures.length; i++) {
                formData.append(`pictures_${i}`, pictures[i])
            }
            try {
                await axios.post('https://127.0.0.1:8000/admin/formation/new', formData, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    },
                    'Content-type': 'multipart/form-data'
                })
            } catch(e) {
                console.error(e)
            }

            await this.getFormations()
        },
        async updateFormation(id: number, pictures: Object) {
            const formData = new FormData()
            formData.append('year', this.editFormation.year)
            formData.append('diploma', this.editFormation.diploma)
            formData.append('job', this.editFormation.job)
            formData.append('techno', this.editFormation.techno)
            for (let i = 0; i < pictures.length; i++) {
                formData.append(`pictures_${i}`, pictures[i])
            }
            try {
                await axios.post(`https://127.0.0.1:8000/admin/formation/update/${id}`, formData, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    },
                    'Content-type': 'multipart/form-data'
                })
            } catch(e) {
                console.error(e)
            }

            await this.getFormations()
        },
        async deleteFormation(id: number) {
            try {
                await axios.delete(`https://127.0.0.1:8000/admin/formation/delete/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
            } catch(e) {
                console.error(e)
            }

            await this.getFormations()
        },
    }
})