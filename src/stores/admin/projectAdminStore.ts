import {defineStore} from "pinia";
import axios from "axios";

export const useProjectAdminStore = defineStore('projectAdminStore', {
    state: () => {
        return {
            projects: [],
            editProject: null
        }
    },
    actions: {
        async getProducts() {
            try {
                const response = await axios.get('https://127.0.0.1:8000/admin/project/list', {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.projects = response.data
            } catch(e) {
                console.error(e)
            }
        },
        async getCurrentProduct(id: number) {
            try {
                const response = await axios.get(`https://127.0.0.1:8000/admin/project/details/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.editProject = response.data
            } catch(e) {
                console.error(e)
            }
        },
        async initProject() {
            this.editProject = {
                name: '',
                url: '',
                objectif: '',
                fonctionnality: '',
                competence: '',
                pictures: []
            }
        },
        async projectCreate(pictures: Object) {
            const formData = new FormData()
            formData.append('name', this.editProject.name)
            formData.append('url', this.editProject.url)
            formData.append('objectif', this.editProject.objectif)
            formData.append('fonctionnality', this.editProject.fonctionnality)
            formData.append('competence', this.editProject.competence)
            for (let i = 0; i < pictures.length; i++) {
                formData.append(`pictures_${i}`, pictures[i])
            }
            try {
                await axios.post('https://127.0.0.1:8000/admin/project/new', formData, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    },
                    'Content-type': 'multipart:form-data'
                })
            } catch(e) {
                console.error(e)
            }
        },
        async projectUpdate(id: number, pictures: Object) {
            const formData = new FormData()
            formData.append('name', this.editProject.name)
            formData.append('url', this.editProject.url)
            formData.append('objectif', this.editProject.objectif)
            formData.append('fonctionnality', this.editProject.fonctionnality)
            formData.append('competence', this.editProject.competence)
            for (let i = 0; i < pictures.length; i++) {
                formData.append(`pictures_${i}`, pictures[i])
            }
            try {
                await axios.post(`https://127.0.0.1:8000/admin/project/update/${id}`, formData, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    },
                    'Content-type': 'multipart:form-data'
                })
            } catch(e) {
                console.error(e)
            }
        }
    }
})