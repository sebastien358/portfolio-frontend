import {defineStore} from "pinia";
import axios from "axios";

const BASE_ADMIN_URL= 'https://127.0.0.1:8000/admin/experience'

export const useExperienceAdminStore = defineStore('experienceAdminStore', {
    state: () => {
        return {
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
                await axios.post(`${BASE_ADMIN_URL}/new`, formData,{
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