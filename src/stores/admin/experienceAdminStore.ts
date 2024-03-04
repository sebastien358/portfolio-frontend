import {defineStore} from "pinia";
import axios from "axios";

export const useExperienceAdminStore = defineStore('experienceAdminStore', {
    state: () => {
        return {
            experiences: [],
            editExperience: null
        }
    },
    actions: {
        async initExperience() {
            this.editExperience = {
                year: '',
                job: '',
                subject: '',
                content: '',
                images: []
            }
        },
        async getExperiences() {
            try {
                const response = await axios.get(`https://127.0.0.1:8000/admin/experience/list`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.experiences = response.data
            } catch(e) {
                console.log(e)
            }
        },
        async getCurrentExperience(id: number) {
            try {
                const response = await axios.get(`https://127.0.0.1:8000/admin/experience/details/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.editExperience = response.data
            } catch(e) {
                console.log(e)
            }
        },
        async experienceCreate(pictures: Object) {
            const formData = new FormData()
            formData.append('year', this.editExperience.year)
            formData.append('job', this.editExperience.job)
            formData.append('subject', this.editExperience.subject)
            formData.append('content', this.editExperience.content)
            for (let i = 0; i < pictures.length; i++) {
                formData.append(`pictures_${i}`, pictures[i])
            }

            try {
                await axios.post(`https://127.0.0.1:8000/admin/experience/new`, formData,{
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
            } catch(e) {
                console.error(e)
            }

            await this.getExperiences()
        },
        async updateExperience(id: number, pictures: Object) {
            const formData = new FormData()
            formData.append('year', this.editExperience.year)
            formData.append('job', this.editExperience.job)
            formData.append('subject', this.editExperience.subject)
            formData.append('content', this.editExperience.content)
            for (let i = 0; i < pictures.length; i++) {
                formData.append(`pictures_${i}`, pictures[i])
            }

            try {
                const response = await axios.post(`https://127.0.0.1:8000/admin/experience/update/${id}`, formData,{
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.editExperience.pictures = response.data.pictures
            } catch(e) {
                console.error(e)
            }

            await this.getExperiences()
        },
        async deleteExperience(id: number) {
            try {
                await axios.delete(`https://api.dymawonder.fr/admin/experience/delete/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
            } catch(e) {
                console.error(e)
            }

            await this.getExperiences()
        },
        async deletePictureExperience(id: number) {
            try {
                await axios.delete(`https://api.dymawonder.fr/admin/experience/delete/picture/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.editExperience.pictures = this.editExperience.pictures.filter(picture => picture.id !== id)
            } catch(e) {
                console.error(e)
            }

            await this.getExperiences()
        }
    }
})